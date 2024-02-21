import StarSection from "./StarSection";
import Link from "next/link";
import ReviewSection from "./ReviewSection";

const ProductReviews = () => {
  const reviews = {
    total: 16,
    five: 8,
    four: 2,
    three: 2,
    two: 3,
    one: 1,
    userReviews: [
      {
        username: "Rajesh",
        date: "22-11-23",
        comment: "This product is awesome! My pet Labrador really loved it.",
        rating: 4.5,
      },
      {
        username: "Priya",
        date: "23-12-05",
        comment:
          "Great quality! Perfect for my dog who can't get enough of it.",
        rating: 3.8,
      },
      {
        username: "Arun",
        date: "22-12-15",
        comment: "Impressed with the durability. Ideal for my energetic dog.",
        rating: 4.2,
      },
      {
        username: "Neha",
        date: "23-12-28",
        comment: "Excellent product! My Labrador enjoys it thoroughly.",
        rating: 4.7,
      },
    ],
  };
  function avgCalc(reviews) {
    let totalStars = reviews.total * 5;
    let currTotal =
      reviews.five * 5 +
      reviews.four * 4 +
      reviews.three * 3 +
      reviews.two * 2 +
      reviews.one;
    return (currTotal / totalStars) * 5;
    // return((160)/16)
  }

  function starCounter(n) {
    let abc = n * 10;
    let list1 = [];
    for (let i = 1; i < 6; i++) {
      if (i * 10 <= abc) {
        //   console.log('x');
        list1.push(1);
      } else {
        if (i * 10 - abc <= 5 && i * 10 - abc !== 0) {
          //   console.log("Half")
          list1.push(2);
        } else {
          //   console.log('0')
          list1.push(0);
        }
      }
    }
    //   console.log(list1);
    return list1;
  }
  let avgRating = avgCalc(reviews);
  let Stars = starCounter(avgRating);
  // let Star1 = starCounter(1);
  return (
    <div className=" w-full m-auto p-8 ">
      <h2 className="text-3xl font-semibold my-2"> Customers Reviews</h2>
      <div className="p-1 flex flex-col md:flex-row gap-1 justify-between ">
        <StarSection reviews={reviews} avgRating={avgRating} Stars={Stars} />
        <div className=" flex flex-row items-center justify-center ">
          <div className=" flex   flex-col lg:flex-row my-2   md:h-16  lg:gap-10 md:mr-20">
            <Link href="/reviews">
              <button
                type="button"
                className="w-96 md:w-80   py-2.5 border cursor:pointer text-lg text-orange-700  border-orange-700 my-2 hover:bg-orange-700 hover:text-white rounded-lg"
              >
                Write a Review
              </button>
            </Link>
            <button className="w-96 md:w-72 py-1 border cursor:pointer text-lg text-orange-700 lg:ml-4 border-orange-700 my-2 hover:bg-orange-700 hover:text-white rounded-lg">
              Ask a Question
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-300 my-5">
        <ReviewSection reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductReviews;
