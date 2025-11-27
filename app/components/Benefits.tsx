import { benefits } from "../data/assets";

import CardItem from "./Card";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="bg-temp-color-8 flex flex-col gap-4 py-10 px-5 myt-10 text-light-text pt-24"
    >
      <div className="text-white">
        <h1 className="text-2xl font-bold mb-2 text-color-2">Why Choose Trexpenser?</h1>
        <p className="text-color-3">
          Designed to make your financial journey smoother and more efficient.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2">
        {benefits.map((data) => (
          <CardItem
            data={data}
            key={data.id}
            makeFlex={false}
          />
        ))}
      </div>
    </section>
  );
};
export default Benefits;
