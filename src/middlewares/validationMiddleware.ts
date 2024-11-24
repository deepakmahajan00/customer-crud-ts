import { Request, Response, NextFunction } from "express";
import { CustomerSources } from '../enums/customerEnum';

class ValidateCustomer {
    validate (req: Request, res: Response, next: NextFunction): void {
        let { name, email, age, source } = req.body;

        if (!name || typeof name != 'string') {
            res.status(400).json({ error: 'Invalid name' });
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email != 'string' || !email.includes('@') || !emailRegex.test(email)) {
            res.status(400).json({ error: 'Invalid email' });
            return;
        }

        if (!age || typeof age != 'number' || age < 1) {
            res.status(400).json({ error: 'invalid age' });
            return;
        }

        if (!source || !Object.values(CustomerSources).includes(source)) {
            res.status(400).json({ error: 'Invalid source' });
            return;
        }

        next();
    }
}

export default new ValidateCustomer();