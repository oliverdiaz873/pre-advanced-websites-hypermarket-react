import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../hooks/useCart';
import { Product } from '../../../shared/types/product';
import './AddToCartButton.css';

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const { t } = useTranslation('common');
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
                aria-label={`${t('cart.add_button')} ${product.nombre} ${t('common:product.add_to_cart')}`}
            >
                {t('cart.add_button')}
            </button>
        );
    }

    return (
        <div className="cart-counter-container">
            <button 
                onClick={handleDecrement} 
                className="counter-btn minus"
                aria-label={t('cart.decrease_qty')}
            >
                -
            </button>
            <span className="counter-value">{quantity}</span>
            <button 
                onClick={handleIncrement} 
                className="counter-btn plus"
                aria-label={t('cart.increase_qty')}
            >
                +
            </button>
        </div>
    );
};

export default AddToCartButton;
