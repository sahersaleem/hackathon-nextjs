import { json } from "node:stream/consumers";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { useUser } from "@clerk/nextjs";
import Comment from "./Comment";

const CommentAndReviews = () => {
  const [rating, setRating] = useState<number>(
    JSON.parse(localStorage.getItem("star")!) || 0
  );



  


  useEffect(() => {
    localStorage.setItem("star", JSON.stringify(rating));
  }, [rating]);

  const handleStars = (star: number) => {
    setRating(star);
  };

  

  return (
    <div className="mt-10">
      <h1 className="xs:text-2xl xs:text-center lg:text-5xl lg:text-left mt-4">Comment And reviews</h1>
      <div className="flex gap-x-2 flex-col">
        <h1 className="font-bold !text-5xl mt-4 xs:text-center lg:text-left">Rating</h1>
        <div className="flex flex-row gap-x-3 xs:items-center xs:justify-center lg:items-start lg:justify-normal">
          {Array.from([1, 2, 3, 4, 5]).map((star: number) => (
            <FaStar
              onClick={() => {
                handleStars(star);
              }}
              key={star}
              style={{ color: star <= rating ? "red" : "blue" }}
              className="text-2xl mt-2"
            />
          ))}
        </div>

        <h1 className="font-bold xs:text-3xl lg:!text-5xl mt-8 xs:text-center lg:text-left">Add comment here!</h1>

     <Comment/>
      </div>
    </div>
  );
};

export default CommentAndReviews;
