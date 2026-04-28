 // Reviews.tsx
import Image from "next/image";
import { loader } from "../api/fetchReviewImages";
import { userReviews } from "../data/assets";
import { StarRating } from "./StarRating";

const Reviews = async () => {
  const userImages = await loader();

  return (
    <section
      id="reviews"
      className="py-16 pt-24 px-5 bg-ui-background"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest 
            text-ui-cta">
            User Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ui-text">
            What Our Users Say About Trexpenser
          </h2>
          <p className="text-ui-subtext max-w-xl md:mx-0 mx-auto leading-relaxed">
            Real experiences from people who have taken charge of their finances.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {userReviews.map((data, index) => (
            <div
              key={data.id}
              className="flex flex-col justify-between gap-4 p-5 
                rounded-xl bg-ui-section border border-brand-200 
                shadow-sm shadow-brand-100 hover:shadow-md 
                hover:shadow-brand-200 transition-shadow duration-300"
            >
              {/* Review text */}
              <p className="text-ui-text text-sm leading-relaxed">
                &ldquo;{data.review}&rdquo;
              </p>

              {/* User info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden 
                  border-2 border-brand-200 flex-shrink-0">
                  <Image
                    src={userImages[index]}
                    alt={data.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-bold text-ui-text text-sm">{data.name}</p>
                  <StarRating rate={data.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;