/* eslint-disable no-unused-vars */
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

async function uploadSingleHandler(req, res) {
  const { file } = req;
  const size = file.size / 1024 / 1024;

  if (size > 5) {
    return res.status(500).json({
      message: 'File size is too big!',
    });
  }

  try {
    const result = await cloudinary.uploader.upload(file.path);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  } finally {
    fs.unlinkSync(file.path);
  }
}

async function uploadArrayHandler(req, res) {
  const { files } = req;
  const results = [];

  try {
    for (const file of files) {
      const { path } = file;
      const newPath = await cloudinary.uploader.upload(path)
      results.push(newPath);
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
  // console.log('results', results)
}

module.exports = {
  uploadSingleHandler,
  uploadArrayHandler,
};
