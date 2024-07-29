import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Cart extends Model {}

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Cart',
    tableName: 'Cart',
    timestamps: false
});

export default Cart;
