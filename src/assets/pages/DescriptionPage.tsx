import ImageGalary from "../../components/image-galary";
import { PiHandWavingFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { GiCrossedChains } from "react-icons/gi";
import { GiPearlNecklace } from "react-icons/gi";
const DescriptionPage = () => {
  return (
    <div className="">
      <div className=" p-2 gap-2 flex flex-col md:flex-row">
        <ImageGalary />

        <div className=" m-5">
          <h1>Rare Find</h1>
          <p className="text-xs">local taxes included (where applicable)</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet
            deleniti velit atque vero autem, quod labore molestias tempore nobis
            commodi! Magnam vel debitis tenetur maxime temporibus fuga
            necessitatibus ut!
          </p>

          <p>DramBeadDovi </p>

          <button className="btn  w-full rounded-full mt-2 bg-[#021526]">
            Add to cart
          </button>

          <details className="collapse collapse-arrow collapse-open">
            <summary className="collapse-title text-xs font-medium">
              Item details
            </summary>
            <div className="collapse-content">
              <div className="flex items-center gap-3">
                <PiHandWavingFill />
                <p>Made by DreamBeadsDovi</p>
              </div>

              <div className="flex items-center gap-3">
                <BsStars />
                <p>Material Glass</p>
              </div>
              <div className="flex items-center gap-3">
                <GiCrossedChains />
                <p>Chain Style: Bead</p>
              </div>

              <div className="flex items-center gap-3">
                <GiPearlNecklace />
                <p>Necklace length: 42Centimets</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
