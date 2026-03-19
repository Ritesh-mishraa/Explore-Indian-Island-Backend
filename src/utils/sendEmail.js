const nodemailer = require('nodemailer');
const https = require('https');
const querystring = require('querystring');

/**
 * Get a fresh Gmail access token using the stored refresh token.
 */
const getAccessToken = () => {
  return new Promise((resolve, reject) => {
    const postData = querystring.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      refresh_token: process.env.OAUTH_REFRESH_TOKEN,
      grant_type: 'refresh_token'
    });

    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.access_token) {
            resolve(parsed.access_token);
          } else {
            console.error('[OAuth] Token fetch failed:', JSON.stringify(parsed));
            reject(new Error(parsed.error_description || parsed.error || 'Failed to get access token'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
};

const sendEmail = async (options) => {
  const accessToken = await getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken
    }
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html
  };

  const info = await transporter.sendMail(message);
  console.log('✅ Message sent to:', options.email);
  console.log('✅ Message ID:', info.messageId);
  console.log('✅ Response:', info.response);
};

module.exports = sendEmail;
