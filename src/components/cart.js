import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

const Cart = () => {
  const globalState = useContext(CartContext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;
  return (
    <div className="flex flex-col w-full h-100% justify-center m-auto p-10">
      {state.map((product, index) => {
        return (
          <div key={index} className='flex flex-row w-full justify-center m-auto p-5 items-center'>
            <img className='h-36 bg-no-repeat px-20' src={product.image} alt={product.title} />
            <h3 className="text-xl font-bold">{product.title}</h3>
            <h4 className="text-xl font-bold">&#8377;{product.quantity * Math.ceil(product.price) * 79.97.toFixed(1)}</h4>
            <div className="flex flex-row justify-between w-2/5">
              <button
                onClick={() => dispatch({ type: 'INCREASE', payload: product })}>
                +
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => dispatch({ type: 'DECREASE', payload: product })}>
                -
              </button>
            </div>
            <h2>X</h2>
          </div>
        )
      })}
      <Link className="text-2xl text-center underline cursor-pointer font-semibold text-indigo-900" to='/'>Continue Shopping</Link>
    </div>
  )
}
export default Cart;