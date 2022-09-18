import React from "react"
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'
import Moment from 'react-moment'
import Iframe from 'react-iframe'
import ReactPlayer from 'react-player'

export const PostItem = ({post}) => {
    console.log(post)
    if (!post) {
        return (
            <div>
                Постов не существует
            </div>
        )
    }
    return (
        <div
            className="flex flex-col basis-1/5 flex-grow"
        >
            <div className="flex justify-between items-center pt-2">
                <div>Username</div>
                <div className="text-base opacity-50">
                    <Moment date={post.createdAt} format='D MMM YYYY' />
                </div>
            </div>
            <div className="pt-4">
                <button onClick={() => console.log('You clicked')}>fdgvgdg
                </button>
                <ReactPlayer url={post.videoUrl}  width="600" height="350" />
                <div onClick={() => console.log('You clicked')} className="w-[600] h-[350]">
                <Iframe width="600" height="350" onClick={() => console.log('You clicked')} src={post.videoUrl} frameBorder="0" allowFullScreen>
                </Iframe>
                </div>
            </div>
            <div className="flex gap-4 items-center mt-2">
                <button className="flex items-center justify-center gap-2 text-base opacity-50">
                    <AiFillEye/> <span>{post.views}</span>
                </button>
            </div>
        </div>
    )
} 