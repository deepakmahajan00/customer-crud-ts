import express from "express";
import { CustomerController } from '../controllers/customerController';
const customerController = new CustomerController();

import ValidateCustomer from '../middlewares/validationMiddleware';

const router = express.Router();

router.get('/', customerController.getAllCustomer);
router.get('/:id', customerController.getCustomerById);
router.delete('/:id', customerController.deleteCustomer);
router.post('/', ValidateCustomer.validate, customerController.createCustomer);
router.put('/:id', ValidateCustomer.validate, customerController.updateCustomer);

export default router;