import React, { useState } from "react";
import { Image, Smile } from 'lucide-react'

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

const handleSubmit = () => {
    const postData = {
    caption,
    image,
};

    console.log(postData);

    setCaption("");
    setImage(null);
  };

  return (
    <div className="min-h-screen w-[500px] flex justify-center p-10">
      <div className="w-full  bg-white rounded-2xl shadow-md p-5">
        {/* Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-14 h-14 rounded-full"
          />

          <div>
            <h2 className="font-semibold text-lg">
              Create Post
            </h2>
            <p className="text-gray-500 text-sm">
              Share something with friends
            </p>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full mt-5 bg-gray-100 rounded-xl p-4 outline-none resize-none h-40"
        />

        {/* Preview Image */}
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt=""
              className="rounded-xl w-full h-[350px] object-cover"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between mt-5 border rounded-xl p-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <Image size={20} />
            <span>Photo</span>

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </label>


          <button className="flex items-center gap-2">
            <Smile size={20} />
            Feeling
          </button>
        </div>

        {/* Post Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;