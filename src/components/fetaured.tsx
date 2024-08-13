import { FaRegHeart, FaStar } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="flex gap-4">
      <div className=" ">
        <div className="relative w-44 h-44">
          <img
            src="https://i.etsystatic.com/14980522/r/il/8746e6/5806724446/il_794xN.5806724446_jqg8.jpg"
            alt="Your Image"
            className="w-44 h-44 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2">
            <button className="btn btn-outline rounded-full hover:bg-gray-400">
              <FaRegHeart className="" color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-col w-2/4">
        <div className="flex items-center">
          <p>efratul</p>
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p className="hidden md:block">
          Football Field Pencil case, Soccer Field Zipper Pouch, Kid's Pencil
          Case, Back To Schhool, Sport Lover Gift, Student Gift idea, Gift for
          Kids
        </p>

        <div className="flex flex-col">
          <p>UsD 19.00</p>
          <div className="badge badge-outline bg-green-300 text-xs">
            FREE Shipping
          </div>
        </div>

        <button className="btn btn-outline rounded-full block mt-2">
          Shop this item
        </button>
      </div>
    </div>
  );
};

export default Featured;
