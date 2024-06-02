import React from "react";
import Pic from "../assets/pic.png";
const About = () => {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                ABUBAKAR'S STORE
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed dark:text-white">
                Welcome to ABUBAKAR store, your one-stop shop for Clothes
                Jewelery Shoes Bags Phones and much more !We're passionate about
                providing trial , check waranty and helping you find the perfect
                products for your needs. Whether you're searching for Clothes ,
                Jewelery or looking to discover unique products, browse our
                curated selection and experience the difference ABUBAKAR store
                makes.
              </p>
              <div className="flex justify-center"></div>
            </div>
            <div className="lg:max-w-lg lg:w-full justify-center flex md:w-1/2 w-5/6">
              <img
                className="object-cover object-center  rounded lg:w-4/6 "
                alt="hero"
                src={Pic}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
