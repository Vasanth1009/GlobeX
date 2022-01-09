import WordCount from '../models/wordCount.js';

export const getWordCounts = async (req, res) => {
  try {
    const wordCounts = await WordCount.find();
    if (!wordCounts) {
      res.status(204).json({ success: true, wordCounts: null });
    } else {
      res.status(200).json({ success: true, wordCounts });
    }
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const createWordCount = async (req, res) => {
  try {
    const wordCount = await WordCount.create(req.body);
    res.status(201).json({ success: true, wordCount });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const updateWordCount = async (req, res) => {
  try {
    let wordCount = req.body;
    wordCount = await WordCount.findByIdAndUpdate(req.params.id, wordCount, {
      new: true,
    });

    if (!wordCount) {
      res.status(204).json({
        success: false,
        message: 'WordCount Not Found',
      });
    } else {
      res.status(200).json({ success: true, wordCount });
    }
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const deleteWordCount = async (req, res) => {
  try {
    let wordCount = req.body;
    wordCount = await WordCount.findByIdAndRemove(req.params.id);

    res.status(200).json({
      success: true,
      message: 'WordCount deleted sucessfully',
    });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
