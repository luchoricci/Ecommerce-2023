import { useContext } from "react"
import "./styles.css"
import { CartContext } from "../../context/cart-Context";
        
        

function Cart ()  {

  const{cart, onAddToCart, onDecreaseItem, onRemoveItem,sumTotalCart} = useContext(CartContext);
        return(
        <div className="cartContainer">
          <h2>Cart</h2>
          <div className="cartContent">
            {
              cart.length === 0 && <h3>CArt is empty</h3> 
            }{
              cart?.length> 0 && cart.map((product) =>(
                <div key={product.id} className="cartItem" >
                  <p className="cartItemTitle" >{product.title}</p>
                  <p className="cartItemQuantity" >quantity: {product.quantity}</p>
                  <p className="cartItemPrice" >price: ${product.price}</p>
                  <p className="cartItemStock" >Stock: {product.stock}</p>
                  <div className="cartActions">
                    <button onClick={() => onAddToCart(product.id)} className="cartButtonAdd">+
                    </button>
                    <button onClick={() => onDecreaseItem(product.id)} className="cartButtonDecrease">-
                    </button>
                    <button onClick={() => onRemoveItem(product.id)}  className="cartButtonRemove">Remove
                    </button>
            

                  </div>
                </div>
              ))
            }
            {
              cart?.length >0 && <p className="cartTotal"> Total: $ {sumTotalCart} </p>
            }

          </div>

        </div> 


        )}
 
export default Cart



