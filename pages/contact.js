import React from "react";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" px-4 text-xl text-justify">
      <div className="min-h-screen">
        <address>
          <p className="text-2xl font-bold mb-4">নাম: মহিদ</p>
          <p className="text-lg mb-4">পেশা: ওয়েব ডেভেলপার</p>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            মোবাইল: <a href="tel:01704710587">01704710587</a>
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            ইমেইল:{" "}
            <a href="mailto:mohid10587@gmail.com">mohid10587@gmail.com</a>
          </p>
          <p className="flex items-center">
            <FaFacebook className="mr-2" /> ফেসবুক:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100017393586477"
              className="text-blue-500"
              target="__blank__"
            >
              https://www.facebook.com
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default Home;
