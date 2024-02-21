"use client";
import { TextField, TextareaAutosize } from "@mui/material";
import StarRating from "./StarRating";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Formdetails() {
  const [starRating, setstarRating] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [starCount, setstarCount] = useState("");
  const [userName, setUserName] = useState("");
  const [descriptions, setdescriptions] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(starCount, userName, descriptions);
    try {
      const res = await fetch("http://localhost:3000/api/review", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ userName, starCount, descriptions }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to get the count of star
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let starclicks = [...starRating];
    for (let i = 0; i < 5; i++) {
      if (i <= index) starclicks[i] = true;
      else starclicks[i] = false;
    }
    setstarCount(index + 1);
    setstarRating(starclicks);
  };

  return (
    <>
      <form className="py-3 flex flex-col" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <TextField
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="name"
              variant="outlined"
              required
              label="Write your name"
              className="w-96"
              marge="dense"
            />
          </label>
        </div>
        <div className="py-2">
          <h3 className="text-lg md:text-xl font-serif">OverAll Rating:</h3>
          <StarRating
            starRating={starRating}
            handleStarClick={handleStarClick}
            setstarCount={setstarCount}
          />
        </div>
        {starRating[0] == true ? (
          <div>
            <h3 className="text-lg md:text-xl font-serif">Write the review:</h3>
            <TextareaAutosize
              value={descriptions}
              onChange={(e) => setdescriptions(e.target.value)}
              required
              minRows={7}
              f
              className="mx-auto w-full border-[2px] border-black p-2 rounded-lg text-sm"
              placeholder="Write did you like or dislike for the product?"
            />
          </div>
        ) : (
          ""
        )}
        <button
          type="submit"
          className=" py-1 border cursor:pointer text-lg text-orange-700  border-orange-700 my-2 "
        >
          Sumbit
        </button>
      </form>
    </>
  );
}

export default Formdetails;
