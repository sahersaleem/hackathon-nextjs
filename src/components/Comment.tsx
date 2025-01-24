"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";

type CommentType = {
  username: string;
  comment: string;
};
const Comment = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [username, setUsername] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

   
      const updatedComment = [
        ...comments,
        {
          username: username,
          comment: newComment,
        },
      ];
      setComments(updatedComment)
      localStorage.setItem("comment", JSON.stringify(updatedComment));
      
   

    setUsername("");
    setNewComment("");
  };

  useEffect(() => {
    const savedComment =JSON.parse(localStorage.getItem("comment")! || "[]") || [];
    if(savedComment){
        setComments(savedComment)
    }

  }, []);

 

  return (
    <div className=" lg:w-1/2 xs:w-full xs:flex justify-center items-center lg:block xs:px-10 lg:px-0 flex-col">
      <div>
        {comments.map((com, index) => (
          <div key={index} className="border-b border-black/50 mb-5">
            <p className="font-bold">{com.username}</p>
            <p>{com.comment}</p>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-relway font-bold text-center">
        Give your feedback here!
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
        <input
          type="string"
          name="name"
          value={username || ""}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <Textarea
          cols={20}
          rows={3}
          name="commentSection"
          placeholder="Enter Your comment ....."
          value={newComment || ""}
          onChange={(e) => setNewComment(e.target.value)}
          className="px-4 py-5 outline-none border-black border-[2px]"
        ></Textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Comment;
