import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            An e-commerce website is an online plateform that facilities are
            buying and selling of products over the internet. It serves as a
            virtual marketplace where businesses and individuals can showcase
            their products, interact with custumers and conduct
          </p>
          <p>
            Our clothing e-commerce website brings the latest fashion trends to
            customers looking for style, comfort, and quality.{" "}
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            Our mission at Forever is to empower the customer with chocies,
            convenience It serves as a virtual marketplace where businesses and
            individuals can showcase their products, interact with custumers and
            conduct{" "}
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8       sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets or
            stringent qualiti products and standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            With our user-friendlt interface and hassle-free ordering process
            ensure it meets or stringent qualiti products and standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our team dedicated professionals is here to assest you 24/7 day or
            night. stringent qualiti products and standards.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
