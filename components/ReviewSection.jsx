import { StarCount } from "./StarCount.jsx";

const getReviews = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/review", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch the Reviews");
    }
    return response.json();
  } catch (error) {
    console.log("Error loading reviews ", error);
  }
};

const UserReviews = [
  // {
  //   username: "Rajesh",
  //   date: "22-11-23",
  //   comment: "This product is awesome! My pet Labrador really loved it.",
  //   rating: 4.5,
  // },
  // {
  //   username: "Priyanshu",
  //   date: "22-11-23",
  //   comment: "This product is awesome! My pet Labrador really loved it.",
  //   rating: 4.5,
  // },
  // {
  //   username: "Ram ram",
  //   date: "22-11-23",
  //   comment: "This product is awesome! My pet Labrador really loved it.",
  //   rating: 4.5,
  // },
  // {
  //   username: "",
  //   date: "22-11-23",
  //   comment: "This product is awesome! My pet Labrador really loved it.",
  //   rating: 4.5,
  // },
];

const ReviewSection = async () => {
  const { reviews } = await getReviews();
  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
        {reviews.map((r) => (
          <div
            className="bg-gray-50 p-3 md:w-[48%]  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            key={r._id}
          >
            <h2 className="font-semibold text-xl">{r.userName}</h2>
            <p>{r.createdAt.split("T")[0]}</p>
            <StarCount num={r.starCount} />
            <p>{r.descriptions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
