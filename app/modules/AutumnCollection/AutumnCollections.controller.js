// File: AutumnCollections.controller.js

import AutumnCollection from "./AutumnCollections.model.js";

export async function getAllAutumnCollections(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalAutumnCollections] = await Promise.all([
      AutumnCollection.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      AutumnCollection.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalAutumnCollections,
        totalPages: Math.ceil(totalAutumnCollections / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getAutumnCollectionsByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalAutumnCollections] = await Promise.all([
      AutumnCollection.find({ branch }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      AutumnCollection.countDocuments({ branch }) 
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalAutumnCollections,
        totalPages: Math.ceil(totalAutumnCollections / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get autumn collection by ID
export async function getAutumnCollectionById(req, res) {
  const id = req.params.id;
  try {
    const result = await AutumnCollection.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "AutumnCollection not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new autumn collection
export async function createAutumnCollection(req, res) {
  try {
    const autumnCollectionData = req.body;
    const result = await AutumnCollection.create(autumnCollectionData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update an autumn collection by ID
export async function updateAutumnCollection(req, res) {
  const id = req.params.id;
  const autumnCollectionData = req.body;
  try {
    const result = await AutumnCollection.findByIdAndUpdate(id, autumnCollectionData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "AutumnCollection not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove an autumn collection by ID
export async function removeAutumnCollection(req, res) {
  const id = req.params.id;
  try {
    const result = await AutumnCollection.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "AutumnCollection deleted successfully" });
    } else {
      res.status(404).json({ message: "AutumnCollection not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}