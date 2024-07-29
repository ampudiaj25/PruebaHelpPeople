import express from 'express';
import sequelize from './config/database';
import cartRoutes from './routes/cartRoutes';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
