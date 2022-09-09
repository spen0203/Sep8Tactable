// Created by Curtis Spence Sep 8, 2022

import React from "react";
import { BlogPost } from "../model/BlogPost";
import styled from "styled-components";
import { renderKeyValPair } from "./KeyValuePair";

/* Component Styling -------------------------------------------------------- */
const BlogPostPreviewContainer = styled.div`
    margin: auto;
    width: 50%;
    margin-bottom: 1rem;
`

const BlogPostCard = styled.div`
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 0.25rem solid #ffffff;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    background-color: white;

    &:hover,
    :focus,
    :active {
        let tempBlogPost = jsonStr.map(val => BlogPost.deserializer(val))
        color: #0070f3;
        border-color: #0070f3;
        background-color: #e0deded9;
        cursor: pointer;
    }

    .card-body {
        padding: 0.25rem;
    }
`

const TopTitleRow = styled.div`
    width: 100%;

    h3 {
        color: black;
        text-decoration: underline;
        margin-bottom: 0.25rem;
    }
`

const MiddleDescriptionRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    p {
        color: #535252;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const BottomDetailRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h5 {
        color: black;
        font-size: small;
    }
`

/* Component ---------------------------------------------------------------- */
interface Props {
    postDetails: BlogPost
    selectAction: (id: string | null) => void
}

export function BlogPostPreview(props: Props) {
    return (
        <BlogPostPreviewContainer
            onClick={() => props.selectAction(props.postDetails.postID)}
            key={props.postDetails.postID}
        >
            <BlogPostCard>
                <div className="card-body">
                    <TopTitleRow>
                        <h3>{props.postDetails.title}</h3>
                    </TopTitleRow>
                    <MiddleDescriptionRow>
                        <p>{props.postDetails.description}</p>
                    </MiddleDescriptionRow>
                    <BottomDetailRow>
                        {renderKeyValPair(
                            [
                                {
                                    label: props.postDetails.authors.length > 1 ? 'Authors:' : 'Author:',
                                    value: props.postDetails.authors.map(author => author.name).join(', ')
                                },
                                {
                                    label: 'Last Edited:',
                                    value: props.postDetails.updatedDate?.toLocaleDateString()
                                        ?? props.postDetails.createdDate.toLocaleDateString()
                                },
                            ]
                        )}
                    </BottomDetailRow>
                </div>
            </BlogPostCard>
        </BlogPostPreviewContainer>
    )
}
