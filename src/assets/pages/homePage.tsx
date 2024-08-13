import { fake_data } from "../../fake-date";
import MCard from "../../components/card";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Featured from "../../components/fetaured";

const HomePage = () => {
  return (
    <div className="p-6">
      <Featured />
      <div className="flex justify-between">
        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn h-5 m-1 rounded-full"
            >
              <HiAdjustmentsHorizontal />
              All Filtters
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <select className="select w-60 max-w-xs">
            <option disabled selected>
              Sort by:
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
      </div>
      <div className=" flex justify-between">
        <p>Etsy's Picks</p>
        <button className="btn btn-outline rounded-full">See More</button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {fake_data.map((data) => (
          <MCard
            price={data.price}
            image={data.urlPicsumPhotos}
            product={data.productName}
            desc={data.productDescription}
            name={data.productName}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
