import Customer from "./Customers.model.js";

export async function getAllCustomers(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalCustomers] = await Promise.all([
      Customer.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      Customer.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalCustomers,
        totalPages: Math.ceil(totalCustomers / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getCustomersByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [result, totalCustomers] = await Promise.all([
      Customer.find({ branch }).skip(skip).limit(limit).sort({ createdAt: -1 }),
      Customer.countDocuments({ branch }) 
    ]);

    res.status(200).json({
      success: true,
      data: result,
      pagination: {
        totalItems: totalCustomers,
        totalPages: Math.ceil(totalCustomers / limit),
        currentPage: page,
        itemsPerPage: limit
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get customer by ID
export async function getCustomerById(req, res) {
  const id = req.params.id;
  try {
    const result = await Customer.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new customer
export async function createCustomer(req, res) {
  try {
    const customerData = req.body;
    const result = await Customer.create(customerData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a customer by ID
export async function updateCustomer(req, res) {
  const id = req.params.id;
  const customerData = req.body;
  try {
    const result = await Customer.findByIdAndUpdate(id, customerData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a customer by ID
export async function removeCustomer(req, res) {
  const id = req.params.id;
  try {
    const result = await Customer.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}