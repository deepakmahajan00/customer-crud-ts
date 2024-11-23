import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/api/customers', customerRoutes);

const PORT = 3003
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));