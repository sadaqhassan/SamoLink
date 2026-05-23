import React from 'react'

import moment from 'moment'

const PostCard = ({data}) => {
  return (
    <div className=''>

        {/* Post Card */}
            <div className="bg-white rounded-xl shadow p-5 my-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={data?.userProfile}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h2 className="font-semibold">{data.owner}</h2>
                  <p className="text-sm text-gray-500">
                    {
                      moment(data?.createdAt).fromNow()
                    }
                  </p>
                </div>
              </div>

              <p className="mb-4">
                {data.content}
              </p>

              <img
                src={data.image}
                alt=""
                className="rounded-xl w-[400px] h-[400px] object-cover"
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