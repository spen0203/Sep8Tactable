// Created by Curtis Spence Sep 8, 2022

import React from "react";
import { PostComment } from "../model/PostComment";
import styled from "styled-components";

/* Component Styling -------------------------------------------------------- */
const StyledCommentContainer = styled.div`
    color: black;
    padding: 0.5rem 0;
`

const StyledCommentTitle = styled.h5``

const StyledCommentListContainer = styled.div`
    width: 100%;
`
const StyledCommentListTitle = styled.h4`
    color: black;
`

/* Component ---------------------------------------------------------------- */
interface Props {
    commentDetailsList: PostComment[]
}

/**
 * Display a post comment as a block.
 */
export function CommentBlock(props: Props) {
    const listLength = props.commentDetailsList.length ?? 0
    const commentList = props.commentDetailsList.map(commentDetails => (
        <StyledCommentContainer
            style={listLength > 1 ? { borderBottom: '.2rem dashed black' } : {}}
            key={commentDetails.commentID}
        >
            <StyledCommentTitle>{commentDetails.title}</StyledCommentTitle>
            {commentDetails.description}
            Last Updated: {commentDetails.updatedDate.toLocaleDateString()}
        </StyledCommentContainer>
    ))

    return (
        <StyledCommentListContainer>
            <StyledCommentListTitle>Comments:</StyledCommentListTitle>
            <div>
                {commentList}
            </div>
        </StyledCommentListContainer>
    )
}
