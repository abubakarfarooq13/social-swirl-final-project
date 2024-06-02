import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { removeCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const FullDetails = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeCart(item));
    toast.info("Removed successfully");
  };

  return (
    <div>
      {data ? (
        <>
          <div className="flex  flex-col gap-4 p-2">
            {data.map((item, index) => (
              <>
                <section className="text-gray-600 body-font ">
                  <div className="container mx-auto justify-center flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="w-2/4 flex justify-center">
                      <img
                        className="object-cover object-center w-64  rounded"
                        alt="hero"
                        src={item.cart.image}
                      />
                    </div>
                    <div className="lg:flex-grow md:w-1/2   flex  flex-col  items-center gap-4 ">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white text-gray-900">
                        {item.cart.title}
                      </h1>
                      <p className="mb-8 leading-relaxed dark:text-white">
                        {item.cart.description}
                      </p>
                      <div className="flex justify-around w-full">
                        <div>
                          <span className="text-2xl dark:text-white">
                            RS{" "}
                            <span className="text-2xl text-blue-500">
                              {item.cart.price}
                            </span>
                          </span>
                        </div>
                        <div>
                          <span className="bg-yellow-300 text-white text-lg font-semibold flex px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                            {item.cart.rating.rate}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center w-full">
                        <button
                          onClick={() => handleRemove(item.cart)}
                          className="inline-flex w-full justify-center text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 mt-2 rounded text-3xl"
                        >
                          <MdDelete />
                        </button>
                        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      <MdOutlineShoppingCartCheckout />
                    </button> */}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ))}
            <button className="ml-4  justify-center inline-flex text-green-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-4xl">
              <MdOutlineShoppingCartCheckout />
            </button>
          </div>
        </>
      ) : (
        <div>
          <h1>No Cart</h1>
        </div>
      )}
    </div>
  );
};

export default FullDetails;
