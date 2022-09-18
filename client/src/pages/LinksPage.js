import React, { useEffect, useState } from "react"
import { PostItem } from "../components/PostItem"
import { useDispatch, useSelector } from "react-redux"
import { getAllPostsMotivation } from "../redux/features/posts/postSlice"

export const LinksPage = () => {
    const dispatch = useDispatch()
    const {postsMotivation, popularPostsMotivation} = useSelector((state) => state.post)
    const [stateButOpen, updateStateButOpen] = useState(false)

    const schoolButOpen = (bool) => {
        updateStateButOpen(bool)
    }

    useEffect(() => {
        dispatch(getAllPostsMotivation())
    }, [dispatch])

    if (!postsMotivation) {
        return (
            <div>
                Постов не существует
            </div>
        )
    }


    return (
        <div>
            <div className="max-w-7 h-[750px] mx-auto bg-[url('https://images.unsplash.com/photo-1635187452645-420a43369504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">

                {stateButOpen ? (
                    <div onMouseLeave={() => {schoolButOpen(false)}} className="bg-[#CCCCCC] float-right py-16 box-border w-[500px] h-[750px] px-10 transition duration-1000 ease-linear">
                            <p className="flex justify-center items-center text-[30px]">Инженерная школа №30</p>
                            <br/>
                            <h3 className="flex justify-center items-center">Описание школы Описание школы Описание школы Описание школы Описание школы</h3>
                    </div>
                ) : (
                    <div onMouseEnter={() => {schoolButOpen(true)}} className="transition-shadow duration-1000">
                        <button className="py-2 px-4 bg-white float-right my-20 mx-44">closed</button>
                    </div>
                )}

            </div>
            <div className="max-w-[900px] mx-auto py-10">
            <div className="flex justify-between gap-8">
                <div className="flex flex-col gap-10 basis-4/6">
                    {
                        postsMotivation?.map((videoUrl, idx) => (
                            <PostItem key={idx} post={videoUrl} />
                        ))
                    }
                </div>
                <div className="basis-2/6">
                    <div className="text-base uppercase text-black font-source-serif-pro">
                        Популярное
                    </div>
                    {
                        popularPostsMotivation?.map((post, idx) => 'popular')
                    }
                </div>
            </div>
            </div>
        </div>
    )
}