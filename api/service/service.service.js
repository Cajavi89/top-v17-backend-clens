const Service = require('./service.model');

/**
 * Get all services
 * @returns all services
 */
async function getAllServices() {
  try {
    const services = await Service.find();
    return services;
  } catch (error) {
    throw error;
  }
}

/**
 * Get service by id
 * @param {string} id Indentifier of the service to be filtered
 * @returns service
 */
async function getServiceById(id) {
  try {
    const service = await Service.findById(id);
    return service;
  } catch (error) {
    throw error;
  }
}

/**
 * Create a new service
 * @param {Object} service Service to create
 * @returns Service created
 */
async function createService(service) {
  try {
    const newService = new Service(service);
    const savedService = await newService.save();
    return savedService;
  } catch (error) {
    throw error;
  }
}

/**
 * Update a service
 * @param {string} id Indentifier of the service to be updated
 * @param {*} service Body of the service to be updated
 * @returns service updated
 */
async function updateService(id, service) {
  try {
    const updatedService = await Service.findByIdAndUpdate(id, service);
    return updatedService;
  } catch (error) {
    throw error;
  }
}

/**
 * Delete a service
 * @param {String} id Identifier of the service to be deleted
 * @returns Service deleted
 */
async function deleteService(id) {
  try {
    const deletedService = await Service.findByIdAndDelete(id);
    return deletedService;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService,
};
