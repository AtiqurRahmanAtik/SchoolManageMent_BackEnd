import GoldCategory from "./GoldCategory.model.js";

export async function getAllGoldCategories(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalCategories] = await Promise.all([
      GoldCategory.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      GoldCategory.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalCategories,
        totalPages: Math.ceil(totalCategories / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getGoldCategoriesByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalCategories] = await Promise.all([
      GoldCategory.find({ branch }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      GoldCategory.countDocuments({ branch }) 
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalCategories,
        totalPages: Math.ceil(totalCategories / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get gold category by ID
export async function getGoldCategoryById(req, res) {
  const id = req.params.id;
  try {
    const result = await GoldCategory.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Gold category not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new gold category
export async function createGoldCategory(req, res) {
  try {
    const goldCategoryData = req.body;
    const result = await GoldCategory.create(goldCategoryData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a gold category by ID
export async function updateGoldCategory(req, res) {
  const id = req.params.id;
  const goldCategoryData = req.body;
  try {
    const result = await GoldCategory.findByIdAndUpdate(id, goldCategoryData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Gold category not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a gold category by ID
export async function removeGoldCategory(req, res) {
  const id = req.params.id;
  try {
    const result = await GoldCategory.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Gold category deleted successfully" });
    } else {
      res.status(404).json({ message: "Gold category not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}