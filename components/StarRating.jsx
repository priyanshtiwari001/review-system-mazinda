import { BiSolidStar } from "react-icons/bi";

const StarRating = ({ starRating, handleStarClick }) => {
  return (
    <div className="flex items-center justify-center text-6xl p-2  ">
      <BiSolidStar
        onClick={(e) => handleStarClick(e, 0)}
        className={starRating[0] ? "text-yellow-400" : null}
      />
      <BiSolidStar
        onClick={(e) => handleStarClick(e, 1)}
        className={starRating[1] ? "text-yellow-400" : null}
      />
      <BiSolidStar
        onClick={(e) => handleStarClick(e, 2)}
        className={starRating[2] ? "text-yellow-400" : null}
      />
      <BiSolidStar
        onClick={(e) => handleStarClick(e, 3)}
        className={starRating[3] ? "text-yellow-400" : null}
      />
      <BiSolidStar
        onClick={(e) => handleStarClick(e, 4)}
        className={starRating[4] ? "text-yellow-400" : null}
      />
    </div>
  );
};
export default StarRating;
