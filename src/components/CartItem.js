import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import { removeCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const CartItem = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeCart(item));
    toast.info("Removed successfully");
  };
  return (
    <div className="flex  flex-col gap-4 p-2">
      {data.map((item, index) => (
        <>
          <div key={index} className="cursor-pointer flex gap-2">
            <Link to={"/list-details"}>
              <div className="min-w-16 max-w-16">
                <img className="" src={item.cart.image} alt="product" />
              </div>
            </Link>
            <div>
              <h3 className="text-xs">{item.cart.title}</h3>
              <span>
                RS <span className="text-blue-500">{item.cart.price}</span>
              </span>
              <div className="flex justify-around mt-2 items-center text-xl">
                <button
                  onClick={() => handleRemove(item.cart)}
                  className="border  p-1 rounded-md text-red-500"
                >
                  <MdDelete />
                </button>
                <button className="border  p-1 rounded-md text-green-500">
                  <MdOutlineShoppingCartCheckout />
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CartItem;
