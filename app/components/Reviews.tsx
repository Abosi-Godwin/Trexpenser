import { loader } from "../api/fetchReviewImages";
import { userReviews } from "../data/assets";
import { StarRating } from "./StarRating";

const Reviews = async () => {
  const userImages = await loader();

  return (
    <section
      id="reviews"
      className="bg-light-sectionBackground flex flex-col gap-4 py-10 px-5
            pt-24"
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">What Our Users Say About Trexpenser</h1>
        <p>Real experiences from people who have taken charge of their finances.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-3">
        {userReviews.map((data, index) => (
          <div
            key={data.id}
            className="bg-light-cardBackground p-3 rounded-md shadow-md
                    shadow-color-2"
          >
            <div className="flex flex-col gap-2 py-3">
              <p className="text-coloxr-1"> {data.review}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white">
                <img
                  src={userImages[index]}
                  alt={data.name}
                  className="w-full h-full rounded-full
                                    border-2 border-light-dividers p-1"
                />
              </div>
              <div>
                <p className="text-light-text font-bold">
                  <strong>{data.name}</strong>
                </p>

                <StarRating rate={data.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Reviews;
