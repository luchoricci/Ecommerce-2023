import { useContext } from "react";
import "./styles.css";
import { CartContext } from "../../context/cart-Context";

function Cart() {
  const { cart, onAddToCart, onDecreaseItem, onRemoveItem, total, getTotalItemQuantity } =
    useContext(CartContext);
  return (
    <div className="cartContent">
      <h2>Cart</h2>
      <div className="cartContainer">
        {cart.length === 0 && <h3>CArt is empty</h3>}
        {cart?.length > 0 &&
          cart.map((product) => (
            <div key={product.id} className="cartItem">
          
                <img className="imageCartItem" src={product.images} />
              
              <div className="cartItemContentContainer">
                <div className="cartItemContent">
                  <p className="cartItemTitle">{product.title}</p>
                  <p className="cartItemQuantity">
                    quantity: {product.quantity}
                  </p>
                  <p className="cartItemPrice">price: ${product.price}</p>
                  <p className="cartItemStock">Stock: {product.stock}</p>
                </div>
                <div className="cartActions">
                  <button
                    onClick={() => onAddToCart(product.id)}
                    className="cartButtonAdd"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onDecreaseItem(product.id)}
                    className="cartButtonDecrease"
                  >
                    -
                  </button>
                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="cartButtonRemove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        {cart?.length > 0 && (
         <div className="cartDetailActions">
       
          <p className="cartTotal"> Total: $ {total} </p>
          <p className="cartItemQuantity">Total Items: {getTotalItemQuantity()}</p>
          <button className="cartButtonCheckout">Checkout</button>
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
