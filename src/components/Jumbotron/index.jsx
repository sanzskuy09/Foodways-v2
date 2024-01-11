import React from "react";
import HeroImage from "../../assets/images/Hero.png";

const Jumbotron = () => {
  return (
    <section className="py-14 bg-primary">
      <div className="flex w-3/4 mx-auto">
        {/* Title */}
        <div className="flex-auto w-3/5 self-center">
          <div>
            <h1 className="font-bold text-6xl mb-4 text-secondary">
              Are You Hungry ?
            </h1>
            <h1 className="font-bold text-6xl text-secondary">
              Express Home Delivery
            </h1>
          </div>
          <hr className="my-8 border-secondary border-2 w-2/5" />
          <p className="w-2/4 text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            expedita, alias aliquam esse ipsa natus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus, illo laudantium
          </p>
        </div>

        {/* Image Banner */}
        <div className="flex-auto w-2/5">
          <img src={HeroImage} alt="Hero Image" className="" />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
