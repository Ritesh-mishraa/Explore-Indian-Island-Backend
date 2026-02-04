const Island = require('../models/Island');

// @desc    Get all islands (with optional search/filters)
// @route   GET /api/islands
exports.getAllIslands = async (req, res) => {
  try {
    const { group, vibe, search } = req.query;
    let query = {};

    // Filter by Island Group (Andaman, Lakshadweep, etc.)
    if (group) query['location.group'] = group;

    // Filter by Vibe (e.g., Scuba, Historical)
    if (vibe) query.vibeTags = { $in: [vibe] };

    // Text Search for name or description
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { 'description.summary': { $regex: search, $options: 'i' } }
      ];
    }

    const islands = await Island.find(query);
    res.status(200).json({
      success: true,
      count: islands.length,
      data: islands
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Get a single island by ID
// @route   GET /api/islands/:id
exports.getIslandById = async (req, res) => {
  try {
    const island = await Island.findById(req.params.id);
    if (!island) return res.status(404).json({ success: false, message: 'Island not found' });
    res.status(200).json({ success: true, data: island });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};