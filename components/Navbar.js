import Link from "next/link";
import { FaBars, FaHome, FaPhone, FaTimes, FaUser } from "react-icons/fa";
import { GiArcheryTarget, GiGearHammer } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineStop, AiOutlinePhone } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="pb-24">
      <div className="bg-gray-700 fixed z-10  inset-x-0  items-center  px-6 pt-4 pb-4 shadow-lg text-white top-0">
        <div className="flex justify-between items-center ">
          <div className="md:text-2xl ">
            <Link href="/">
              <p className="cursor-pointer font-bold text-xl">
                আল্লাহর বিধানেই শান্তি{" "}
              </p>
            </Link>
          </div>

          <ul className="sm:flex justify-between hidden">
            <li style={{ listStyle: "none" }}>
              <Link href="/">
                <a className="hover:underline  inline-flex items-center px-4 py-2 transition w-full ">
                  আমাদের লক্ষ্য{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#workingProcess">
                <p className="hover:underline  inline-flex items-center px-4 py-2 transition w-full ">
                  আমাদের কর্মপদ্ধতি
                </p>
              </Link>
            </li>
            <li className="group relative px-4  ">
              <Link href="/#subjectOfDawatAndTaleem">
                <p className="hover:underline  inline-flex items-center px-4 py-2 transition w-full ">
                  দাওয়াত ও তালিমের বিষয়সমূহ
                </p>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link href="/correction">
                <a className="hover:underline  inline-flex items-center px-4 py-2 transition w-full ">
                  প্রচলিত কিছু ভুল সংশোধন
                </a>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link href="/contact">
                <a className="hover:underline  inline-flex items-center px-4 py-2 transition w-full">
                  যোগাযোগ
                </a>
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden p-3 text-xl rounded-full transition hover:bg-white hover:text-gray-800"
            onClick={handleSidebar}
          >
            <FaBars></FaBars>
          </button>
        </div>
      </div>

      <div>
        <div
          className={
            sidebar
              ? "cursor-pointer fixed z-10 inset-0 opacity-70 visible"
              : "hidden opacity-0"
          }
          onClick={handleSidebar}
        ></div>

        <div
          className={
            sidebar
              ? "bg-white duration-300 fixed z-10 inset-y-0 py-4 left-0 transition-left w-[270px] ease-out"
              : "bg-white duration-500 fixed z-10 inset-y-0 py-4 -left-full transition-left w-[270px] ease-in"
          }
        >
          <div className="mb-4">
            <div className="flex justify-center items-center">
              <div className=" rounded-full">
                <Image src="/allah.png" width={30} height={30} alt="image" />
              </div>
            </div>
            <p className="text-center font-bold"> আল্লাহর বিধানেই শান্তি</p>
          </div>

          <ul>
            <li style={{ listStyle: "none" }} onClick={handleSidebar}>
              <Link href="/">
                <a className=" font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  <GiArcheryTarget className="mr-3"></GiArcheryTarget>
                  আমাদের লক্ষ্য
                </a>
              </Link>
            </li>
            <li style={{ listStyle: "none" }} onClick={handleSidebar}>
              <Link href="/#workingProcess">
                <a className=" font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  <GiGearHammer className="mr-3"></GiGearHammer>
                  আমাদের কর্মপদ্ধতি
                </a>
              </Link>
            </li>

            <li style={{ listStyle: "none" }} onClick={handleSidebar}>
              <Link href="/#subjectOfDawatAndTaleem">
                <a className=" font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  <FiBookOpen className="mr-3"></FiBookOpen>
                  দাওয়াত ও তালিমের বিষয়সমূহ
                </a>
              </Link>
            </li>

            <li style={{ listStyle: "none" }} onClick={handleSidebar}>
              <Link href="/correction">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  <AiOutlineStop className="mr-3"></AiOutlineStop>
                  প্রচলিত কিছু ভুল সংশোধন
                </a>
              </Link>
            </li>
            <li style={{ listStyle: "none" }} onClick={handleSidebar}>
              <Link href="/contact">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  <AiOutlinePhone className="mr-3"></AiOutlinePhone>
                  যোগাযোগ
                </a>
              </Link>
            </li>

            <li style={{ listStyle: "none" }} onClick={handleSidebar}>
              <Link href="/posts">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  <MdPostAdd className="mr-3"></MdPostAdd>
                  পোস্ট সমূহ
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
