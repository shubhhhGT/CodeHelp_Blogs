import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Posts = () => {

    const {loading, posts} = useContext(AppContext);

    return (
        <div className='w-10/12 max-w-[670px] py-8 flex flex-col items-center gap-y-7 my-16'>
            {/* In this component I have to either show loading screeen or the posts 
            If loading is true then show the Spinner component elase show the posts*/}
            {
                loading ? (<Spinner/>) :
                (//first we check the length of post, if it is zero we show the below text else we show post
                    posts.length === 0 ? 
                    (
                        <div className='my-auto'>
                            <p>No Post Found</p>
                        </div>
                    ) :
                    (posts.map( (post) => (
                        
                        <div key={post.id} className='w-[300px] sm:w-full text-textColor transition-all ease-in-out duration-700'>
                            {/* Mapping all posts so that only one post has to be styled and others will be styled accordingly  */}
                            <p className='font-bold text-[15px] sm:text-lg'>
                                {post.title}
                            </p>

                            <p className='sm:text-sm text-xs'>
                                By <span className='italic mt-1'>
                                {post.author}
                                </span> on <span className='underline font-semibold'>{post.category}</span>
                            </p>

                            <p className='text-sm mt-1'>
                                Posted on
                                <span>{post.date}</span>
                            </p>

                            <p className='text-md text-justify mt-2'>{post.content}</p>

                            <div className='flex gap-x-3 mt-2'>
                                {
                                    post.tags.map( (tag, index) => {
                                        return(
                                            <span key={index} className='text-blue-700 underline font-bold text-[9px] sm:text-xs'>
                                                {`#${tag}`}
                                            </span>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )))
                )
            }
        </div>
    )
}

export default Posts