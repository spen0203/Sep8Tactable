// Created by Curtis Spence Sep 8, 2022

import { strict as assert } from "assert";
import React, { useState } from "react";
import { BlogPostView } from "../views/BlogPostView";
import { BlogPost } from "../model/BlogPost";
import { EmptyBlogContent } from "../views/EmptyBlogContent";
import { ListBlogContent } from "../views/ListBlogContent";

/* Component ---------------------------------------------------------------- */
interface Props {
    blogPostList: BlogPost[]
}

/**
 * BlogBodyContentController provided the user with the proper content view.
 * This is done by checking if a list of blog posts exists and if the user has selected one.
 */
export function BlogBodyContentController(props: Props) {
    const [selectedPostID, setSelectedPostID] = useState<string | null>(null)
    const selectedPost = props.blogPostList.find(val => val.postID === selectedPostID)

    /**
     * Updates the users currently selected post, or removes an existing selected post.
     * @param postID - post to set as the newly selected value.
     */
    function updateSelectedPostAction(postID: string | null) {
        setSelectedPostID(postID)
    }

    /**
     * Updates the user to the previous post if one exists,
     * else remains on the current element.
     */
    function updateToPrevPost() {
        const selectedPostIndex = props.blogPostList.findIndex(val => val.postID === selectedPostID)
        const newPostIndex = selectedPostIndex - 1
        setSelectedPostID(props.blogPostList[newPostIndex > 0 ? newPostIndex : 0].postID)
    }

    /**
     * Updates the user to the next post if one exists,
     * else remains on the current element.
     */
    function updateToNextPost() {
        const selectedPostIndex = props.blogPostList.findIndex(val => val.postID === selectedPostID)
        const newPostIndex = selectedPostIndex + 1
        const lastListIndex = props.blogPostList.length - 1
        setSelectedPostID(props.blogPostList[newPostIndex <= lastListIndex ? newPostIndex : lastListIndex].postID)
    }

    /**
     * Closes the currently selected post.
     */
    function closePostAction() {
        setSelectedPostID(null)
    }

    // No posts to present
    if (props.blogPostList.length === 0) {
        return <EmptyBlogContent />

        // No post currently selected
    } else if (selectedPostID !== null && selectedPost != null) {
        const selectedPostIndex = props.blogPostList.findIndex(val => val.postID === selectedPostID)
        return <BlogPostView
            blogPost={selectedPost}
            hasPrevPost={selectedPostIndex > 0}
            hasNextPost={(props.blogPostList.length - 1) > selectedPostIndex}
            prevPostAction={() => updateToPrevPost()}
            nextPostAction={() => updateToNextPost()}
            closePostAction={() => closePostAction()}
        />

        // List of Blog posts.
    } else if (selectedPostID == null || selectedPost == null) {
        return <ListBlogContent
            blogPostList={props.blogPostList}
            updateSelectedPostAction={(id: string | null) => updateSelectedPostAction(id)}
        />

        // A Post has been selected
    } else {
        assert.ok(false, "Invalid content state")

    }
}
