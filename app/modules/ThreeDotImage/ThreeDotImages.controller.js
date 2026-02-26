import ThreeDotImage from "./ThreeDotImages.model.js";

export async function getAllThreeDotImages(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalThreeDotImages] = await Promise.all([
      ThreeDotImage.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      ThreeDotImage.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalThreeDotImages,
        totalPages: Math.ceil(totalThreeDotImages / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getThreeDotImagesByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalThreeDotImages] = await Promise.all([
      ThreeDotImage.find({ branch }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      ThreeDotImage.countDocuments({ branch }) 
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalThreeDotImages,
        totalPages: Math.ceil(totalThreeDotImages / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get 3 dot image by ID
export async function getThreeDotImageById(req, res) {
  const id = req.params.id;
  try {
    const result = await ThreeDotImage.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "ThreeDotImage not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new 3 dot image
export async function createThreeDotImage(req, res) {
  try {
    const threeDotImageData = req.body;
    const result = await ThreeDotImage.create(threeDotImageData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a 3 dot image by ID
export async function updateThreeDotImage(req, res) {
  const id = req.params.id;
  const threeDotImageData = req.body;
  try {
    const result = await ThreeDotImage.findByIdAndUpdate(id, threeDotImageData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "ThreeDotImage not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a 3 dot image by ID
export async function removeThreeDotImage(req, res) {
  const id = req.params.id;
  try {
    const result = await ThreeDotImage.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "ThreeDotImage deleted successfully" });
    } else {
      res.status(404).json({ message: "ThreeDotImage not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}