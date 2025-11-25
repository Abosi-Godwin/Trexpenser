
//import { motion } from "framer-motion"

import { features } from "../data/assets";

import CardItem from "./Card";

//import { slideUpVariant } from "../services/animationVariants";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-light-sectionBackground flex flex-col gap-4 py-10 pt-24 px-5 text-light-text"
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">What Makes Trexpenser Unique?</h1>
        <p>
          Explore how Trexpenser helps you achieve financial freedom with these powerful features.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2">
        {features.map((data) => (
          <CardItem
            data={data}
            key={data.id}
            makeFlex={true}
          />
        ))}
      </div>
    </section>
  );
};
export default Features;
