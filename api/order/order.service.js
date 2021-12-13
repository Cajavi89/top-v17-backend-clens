const Order = require('./order.model');

/**
 * Get all orders
 * @returns all orders
 */
async function getAllOrders() {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    throw error;
  }
}

/**
 * Get order by id
 * @param {string} id Indentifier of the order to be filtered
 * @returns order
 */
async function getOrderById(id) {
  try {
    const order = await Order.findById(id);
    return order;
  } catch (error) {
    throw error;
  }
}

/**
 * Create a new order
 * @param {Object} order Order to create
 * @returns Order created
 */
async function createOrder(order) {
  try {
    const newOrder = new Order(order);
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw error;
  }
}

/**
 * Update a order
 * @param {string} id Indentifier of the order to be updated
 * @param {*} order Body of the order to be updated
 * @returns order updated
 */
async function updateOrder(id, order) {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, order);
    return updatedOrder;
  } catch (error) {
    throw error;
  }
}

/**
 * Delete a order
 * @param {String} id Identifier of the order to be deleted
 * @returns Order deleted
 */
async function deleteOrder(id) {
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    return deletedOrder;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
};
