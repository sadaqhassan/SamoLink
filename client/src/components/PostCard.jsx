import React from 'react'

const PostCard = ({data}) => {
  return (
    <div className=''>

        {/* Post Card */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={data.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h2 className="font-semibold">{data.name}</h2>
                  <p className="text-sm text-gray-500">
                    2h ago
                  </p>
                </div>
              </div>

              <p className="mb-4">
                {data.discription}
              </p>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt=""
                className="rounded-xl w-full h-[400px] object-cover"
              />

              <div className="flex justify-between mt-5 border-t pt-4 text-gray-600">
                <button>👍 Like</button>
                <button>💬 Comment</button>
                <button>↗ Share</button>
              </div>
            </div>
      


    </div>
  )
}

export default PostCard