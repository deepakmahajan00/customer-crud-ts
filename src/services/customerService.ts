import pool from '../config/db';
import { Customer } from '../models/customerModel';

export class CustomerService {
    async getAllCustomer(): Promise<Customer[]> {
        let [rows] = await pool.query('SELECT * FROM customers');
        return rows as Customer[];
    }

    async getCustomerById(id: number): Promise<Customer | null> {
        let [rows] = await pool.query("SELECT * FROM customers WHERE id = ?", [id]);
        return (rows as Customer[])[0] || null;
    }

    async deleteCustomer(id: number): Promise<boolean> {
        let [result] = await pool.query('DELETE FROM customers WHERE id = ?', [id]);
        return (result as any).affectedRows > 0;
    }

    async createCustomer(customer: Customer): Promise<number> {
        let [result] = await pool.query('INSERT INTO customers SET ?', customer);
        return (result as any).insertId;
    }

    async updateCustomer(id: number, customer: Customer): Promise<boolean> {
        let [result] = await pool.query('UPDATE customers SET ? WHERE id = ?', [customer, id]);
        return (result as any).affectedRows > 0;
    }
}