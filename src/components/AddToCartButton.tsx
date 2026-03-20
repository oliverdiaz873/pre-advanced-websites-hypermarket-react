import React from 'react';
import { useCart } from '../hooks/useCart';
import { Product } from '../data/productos';
import './AddToCartButton.css';

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const { cart, addToCart, updateQuantity } = useCart();
    
    // Buscar si el producto ya está en el carrito para obtener la cantidad
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.cantidad : 0;

    const handleInitialAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            img: product.imagen,
            url: product.url,
        });
    };

    const handleIncrement = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        updateQuantity(product.id, 1);
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        updateQuantity(product.id, -1);
    };

    if (quantity === 0) {
        return (
            <button
                onClick={handleInitialAdd}
                className="btn-agregar"
                aria-label={`Agregar ${product.nombre} al carrito`}
            >
                Agregar
            </button>
        );
    }

    return (
        <div className="cart-counter-container">
            <button 
                onClick={handleDecrement} 
                className="counter-btn minus"
                aria-label="Disminuir cantidad"
            >
                -
            </button>
            <span className="counter-value">{quantity}</span>
            <button 
                onClick={handleIncrement} 
                className="counter-btn plus"
                aria-label="Aumentar cantidad"
            >
                +
            </button>
        </div>
    );
};

export default AddToCartButton;
