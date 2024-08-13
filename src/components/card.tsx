import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MCard = ({
  price,
  image,
  desc,
  name,
}: {
  price: string;
  image: string;
  desc: string;
  name: string;
  product: string;
}) => {
  const navigate = useNavigate();
  function handleNavigatePage() {
    navigate("/description");
  }
  return (
    <div>
      <div
        className="text-sm hover:cursor-pointer"
        onClick={handleNavigatePage}
      >
        <img src={image} alt="Your Image" className=" w-60  object-cover " />

        <p>{desc.slice(0, 30)}...</p>
        <p>{name}</p>
        <div className="flex items-center">
          <p>dfkd</p>
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MCard;
