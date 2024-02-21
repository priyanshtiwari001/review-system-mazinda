import { StarBar } from "./StarBar";
import { StarCount } from "./StarCount";

export const StarSection = ({ avgRating, Stars, reviews, starCounter }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-4 md:gap-14">
      <div>
        <StarCount num={avgRating} />

        <p className="text-gray-500">Based on {reviews.total} reviews</p>
      </div>
      <div>
        <div className="flex flex-row">
          <StarCount num={5} />
          <StarBar total={reviews.total} starCount={reviews.five} />
          <span className="text-md ml-2">
            {(reviews.five / reviews.total) * 100}%{" "}
            <span className="ml-3">({reviews.five})</span>{" "}
          </span>
        </div>
        <div className="flex flex-row">
          <StarCount num={4} />
          <StarBar total={reviews.total} starCount={reviews.four} />
          <span className="text-md ml-2">
            {(reviews.four / reviews.total) * 100}%{" "}
            <span className="ml-3">({reviews.four})</span>
          </span>
        </div>
        <div className="flex flex-row">
          <StarCount num={3} />
          <StarBar total={reviews.total} starCount={reviews.three} />
          <span className="text-md ml-2">
            {(reviews.three / reviews.total) * 100}%{" "}
            <span className="ml-3">({reviews.three})</span>
          </span>
        </div>
        <div className="flex flex-row">
          <StarCount num={2} />
          <StarBar total={reviews.total} starCount={reviews.two} />
          <span className="text-md ml-2">
            {(reviews.two / reviews.total) * 100}%{" "}
            <span className="ml-3">({reviews.two})</span>
          </span>
        </div>
        <div className="flex flex-row">
          <StarCount num={1} />
          <StarBar total={reviews.total} starCount={reviews.one} />
          <span className="text-md ml-2">
            {(reviews.one / reviews.total) * 100}%{" "}
            <span className="ml-3">({reviews.one})</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StarSection;
