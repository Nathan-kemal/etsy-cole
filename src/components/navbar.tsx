import { LogoSvg, MenuSvg, SearchSvg } from "./svg/svg";

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="m-2  border-b border-gray-200 shadow-lg ">
      <div className="navbar bg-base-100 flex  md:w-full">
        <div className="w-20 md:w-16 lg:w-20 ">
          <LogoSvg />
        </div>
        <div className="flex-1 flex md:w-auto  items-center md:flex-row md:justify-between ">
          <div className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer p-2 rounded-full  md:w-auto">
            <MenuSvg />

            <p className="hidden md:block">Category</p>
          </div>

          <label className="overflow-hidden input text-xs p-0 input-bordered flex items-center gap-2 rounded-full  md:w-full">
            <input
              type="text"
              className="grow ml-4 "
              placeholder="Search For Anything"
            />
            <span className=" rounded-full mr-1 flex items-center  justify-center h-10 w-10 bg-orange-500 hover:rounded-l-none hover:cursor-pointer ">
              <SearchSvg />
            </span>
          </label>
        </div>
        <div className="flex-none  flex items-center gap-2 md:gap-4">
          <button className="btn hidden md:block rounded-full h-2 btn-ghost ">
            sign in
          </button>

          <div className="tooltip  tooltip-bottom" data-tip="hello">
            <label className="md:btn md:btn-circle  bg-white hover:bg-blue-100">
              <FaRegHeart size={20} />
            </label>
          </div>

          <div className="tooltip  tooltip-bottom" data-tip="hello">
            <label className="md:btn md:btn-circle bg-white hover:bg-blue-100">
              <IoMdGift size={20} />
            </label>
          </div>

          <div className="tooltip  tooltip-bottom" data-tip="hello">
            <label className="md:btn md:btn-circle  bg-white hover:bg-blue-100 ">
              <FiShoppingCart size={20} />
            </label>
          </div>
        </div>
      </div>

      {/*  */}

      <div className=" justify-center hidden sm:flex">
        <div className="flex gap-2   hover:bg-gray-200 p-2  items-center rounded-full w-36 justify-center">
          <IoMdGift size={20} />
          <h1 className=" text-xs font-bold ">Gift Mode</h1>
        </div>

        <Mbutton title="Back-to-School Savings" />
        <Mbutton title="Home Favorites" />
        <Mbutton title="Fashion Finds" />
        <Mbutton title="Fashion Registry" />
      </div>
    </div>
  );
};

const Mbutton = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2  hover:bg-gray-200 p-4 rounded-full  justify-center items-center h-4 hover:cursor-pointer">
      <h1 className=" font-bold text-xs ">{title}</h1>
    </div>
  );
};

export default Navbar;
