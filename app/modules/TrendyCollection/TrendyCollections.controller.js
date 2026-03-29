// File: TrendyCollections.controller.js

import TrendyCollection from "./TrendyCollections.model.js";

export async function getAllTrendyCollections(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalTrendyCollections] = await Promise.all([
      TrendyCollection.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      TrendyCollection.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalTrendyCollections,
        totalPages: Math.ceil(totalTrendyCollections / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getTrendyCollectionsByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalTrendyCollections] = await Promise.all([
      TrendyCollection.find({ branch }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      TrendyCollection.countDocuments({ branch }) 
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalTrendyCollections,
        totalPages: Math.ceil(totalTrendyCollections / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get trendy collection by ID
export async function getTrendyCollectionById(req, res) {
  const id = req.params.id;
  try {
    const result = await TrendyCollection.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "TrendyCollection not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new trendy collection
export async function createTrendyCollection(req, res) {
  try {
    const trendyCollectionData = req.body;
    const result = await TrendyCollection.create(trendyCollectionData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a trendy collection by ID
export async function updateTrendyCollection(req, res) {
  const id = req.params.id;
  const trendyCollectionData = req.body;
  try {
    const result = await TrendyCollection.findByIdAndUpdate(id, trendyCollectionData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "TrendyCollection not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}


// Remove a trendy collection by ID
export async function removeTrendyCollection(req, res) {
  const id = req.params.id;
  
  try {
    const result = await TrendyCollection.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "TrendyCollection deleted successfully" });
    } else {
      res.status(404).json({ message: "TrendyCollection not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}