// Created by Curtis Spence Sep 8, 2022

import React, { useState } from "react";
import { BlogPost } from "../model/BlogPost";
import { BlogPostPreview } from "../components/BlogPostPreview";
import styled from "styled-components";

/* Component Styling -------------------------------------------------------- */
const ListBlogContentContainer = styled.div``

const ListContainer = styled.div`
    height: 100vh;
    min-height: min-content;
    overflow-y: scroll;
    padding-bottom: 10rem;
`
const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    flexDirection: row;
    margin: auto;
    padding: 1rem 0rem;
`

const Button = styled.div``

/* Component ---------------------------------------------------------------- */
interface Props {
    blogPostList: BlogPost[]
    updateSelectedPostAction: (postID: string | null) => void
}

/**
 * BlogBodyContentController provided the user with the proper content view.
 * This is done by checking if a list of blog posts exists and if the user has selected one.
 */
export function ListBlogContent(props: Props) {
    const [currentPage, setCurrentPage] = useState(0)
    const [maxPostsPerPage, setMaxPostsPerPage] = useState(5)
    const [maxPages, setMaxPages] = useState(Math.ceil((props.blogPostList.length / maxPostsPerPage)))

    /**
     * Allows the user to change the current page by the provided amount.
     * Constrained by the minimum (0) and maximum page value inclusive.
     *
     * @param flipCount - number representing number of pages to change + || -.
     */
    function updateCurrentPage(flipCount: number) {
        let newPage = currentPage + flipCount
        if (newPage < 0) {
            newPage = 0

        } else if (newPage > maxPages) {
            newPage = maxPages

        }

        setCurrentPage(newPage)
    }

    const isLastPage = currentPage === (maxPages - 1)
    const isFirstPage = currentPage === 0
    const startIndex = currentPage * maxPostsPerPage
    const endIndex = (currentPage * maxPostsPerPage) + maxPostsPerPage
    // Sort by new -> old createdDate.
    const sortedList = props.blogPostList.sort(
        (a, b) => a.createdDate.getTime() > b.createdDate.getTime() ? -1 : 0
    )

    const postPreviewList = sortedList.slice(
        startIndex,
        endIndex > props.blogPostList.length ? props.blogPostList.length : endIndex

    ).map((postDetails: BlogPost) => (
        <BlogPostPreview
            key={postDetails.postID}
            postDetails={postDetails}
            selectAction={(id: string | null) => props.updateSelectedPostAction(id)}
        />
    ))

    return (
        <ListBlogContentContainer>
            <ButtonContainer>
                <Button
                    style={isFirstPage ?
                        { marginRight: 'auto', marginLeft: '0', color: 'gray', cursor: 'not-allowed' }
                        : { marginRight: 'auto', marginLeft: '0', color: '#0070f3', cursor: 'pointer' }}
                    onClick={isFirstPage ? undefined : () => updateCurrentPage(-1)}
                >
                    Last Page
                </Button>
                <Button
                    style={
                        isLastPage ?
                            { marginRight: '0', marginLeft: 'auto', color: 'gray', cursor: 'not-allowed' }
                            : { marginRight: '0', marginLeft: 'auto', color: '#0070f3', cursor: 'pointer' }
                    }
                    onClick={isLastPage ? undefined : () => updateCurrentPage(1)}
                >
                    Next Page
                </Button>
            </ButtonContainer>
            <ListContainer>
                {postPreviewList}
            </ListContainer>
        </ListBlogContentContainer>
    )
}
