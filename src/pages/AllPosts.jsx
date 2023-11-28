import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then(posts => {
            console.log(posts)
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    return posts.length === 0 ? (<div>No posts yet</div>) : (
        <div className='w-full py-8'>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPosts
