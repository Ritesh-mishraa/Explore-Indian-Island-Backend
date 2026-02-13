const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role
  });

  sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate emil & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc      Get current logged in user
// @route     GET /api/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Find User (Forgot Password) & Send OTP
// @route     POST /api/auth/forgotpassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorResponse('There is no user with that email', 404));
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Hash OTP and save to database
  user.otp = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  user.otpExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  user.otpLastSent = Date.now();

  await user.save({ validateBeforeSave: false });

  // Create reset url (not used here but good for context)
  const message = `Your OTP for password reset is: ${otp}\n\nThis OTP is valid for 10 minutes.`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset OTP',
      message
    });

    res.status(200).json({ success: true, data: 'Email sent' });
  } catch (err) {
    console.error(err);
    user.otp = undefined;
    user.otpExpire = undefined;
    user.otpLastSent = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// @desc      Verify OTP
// @route     POST /api/auth/verifyotp
// @access    Public
exports.verifyOTP = asyncHandler(async (req, res, next) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return next(new ErrorResponse('Please provide email and OTP', 400));
  }

  // Get user by email
  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorResponse('Invalid email or OTP', 400));
  }

  // Check if OTP exists and is not expired
  if (!user.otp || !user.otpExpire || user.otpExpire < Date.now()) {
    return next(new ErrorResponse('Invalid or expired OTP', 400));
  }

  // Hash provided OTP and compare
  const hashedOTP = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  if (hashedOTP !== user.otp) {
    return next(new ErrorResponse('Invalid OTP', 400));
  }

  res.status(200).json({
    success: true,
    data: 'OTP Verified'
  });
});

// @desc      Reset Password
// @route     PUT /api/auth/resetpassword
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { email, otp, password } = req.body;

  if (!email || !otp || !password) {
    return next(new ErrorResponse('Please provide all fields', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid request', 400));
  }

  // Check if OTP is valid (redundant check if verifyOTP was called, but good for security)
  if (!user.otp || !user.otpExpire || user.otpExpire < Date.now()) {
    return next(new ErrorResponse('Invalid or expired OTP', 400));
  }

  const hashedOTP = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  if (hashedOTP !== user.otp) {
    return next(new ErrorResponse('Invalid OTP', 400));
  }

  // Set new password
  user.password = password;
  user.otp = undefined;
  user.otpExpire = undefined;
  user.otpLastSent = undefined;

  await user.save();

  sendTokenResponse(user, 200, res);
});

// @desc      Resend OTP
// @route     POST /api/auth/resendotp
// @access    Public
exports.resendOTP = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  
  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorResponse('There is no user with that email', 404));
  }

  // Check cooldown (1 minute)
  if (user.otpLastSent) {
    const timeSinceLastSent = Date.now() - user.otpLastSent;
    if (timeSinceLastSent < 60 * 1000) {
      return next(new ErrorResponse('Please wait 1 minute before resending OTP', 400));
    }
  }

  // Generate new OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Hash OTP and save to database
  user.otp = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  user.otpExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  user.otpLastSent = Date.now();

  await user.save({ validateBeforeSave: false });

  const message = `Your new OTP for password reset is: ${otp}\n\nThis OTP is valid for 10 minutes.`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset OTP Resend',
      message
    });

    res.status(200).json({ success: true, data: 'OTP resent' });
  } catch (err) {
    console.error(err);
    user.otp = undefined;
    user.otpExpire = undefined;
    user.otpLastSent = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};
