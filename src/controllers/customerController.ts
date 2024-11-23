import { Request, Response } from "express";
import { CustomerService } from "../services/customerService";

const service = new CustomerService();

export class CustomerController {
    async getAllCustomer(req: Request, res: Response): Promise<void> {
        const customers = await service.getAllCustomer();
        res.json(customers);
    }

    async getCustomerById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const customer = await service.getCustomerById(id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: "Customer not found" });
        }
    }

    async deleteCustomer(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const result = await service.deleteCustomer(id);
        if (result) {
            res.json({ message: "Customer deleted successfully" });
        } else {
            res.json({ error: "Customer not found" });
        }
    }

    async createCustomer(req: Request, res: Response): Promise<void> {
        const id = await service.createCustomer(req.body);
        res.status(201).json({ id });
    }

    async updateCustomer(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const updated = await service.updateCustomer(id, req.body);
        if (updated) {
            res.json({ message: 'Customer updated successfully' });
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    }
}