// Created by Curtis Spence Sep 8, 2022

import React from "react";
import { CommentBlock } from "../components/CommentBlock";
import { BlogPost } from "../model/BlogPost";
import styled from "styled-components";
import { PairValues, renderKeyValPair } from "../components/KeyValuePair";

/* Component Styling -------------------------------------------------------- */
const BlogPostViewContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

const BlogPostViewCard = styled.div`
    height: 100%;
    max-height: 50rem;
    min-height: 20rem;
    margin: 1rem auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    border: none;
    overflow-y: scroll;
    padding-bottom: 10rem;

    &:hover,
    :focus,
    :active {
      background-color: white;
      border: none;
    }
`

const ActionButtons = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 0.2rem solid black;
    padding-bottom: 0.5rem;

    .LastButton {
        float: left;
        margin: auto 0;
        color: blue;

        h5 {
          margin: auto;
        }
      }

      .CloseButton {
        margin: auto;

        h1 {
          color: red;
          margin: auto;
        }
      }

      .NextButton {
        float: right;
        margin: auto 0;
        color: blue;

        h5 {
          margin: auto;
        }
      }

`

const Title = styled.div`
    width: 100%;
    color: black;
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;

    .h1 {
      color: black;
      margin: auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }`

const Description = styled.div`
    color: black;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    border-bottom: 0.2rem solid black;
`

const PostDetailsRow = styled.div`
display: flex;
flex-direction: column;
color: black;
border-bottom: 0.2rem dashed black;
padding-bottom: 0.5rem;

 .PairValue {
    display: flex;
    flex-direction: column;
    margin: auto;

    .Label {
    }

    .Value {
    }

`

/* Component ---------------------------------------------------------------- */
interface Props {
    blogPost: BlogPost
    hasNextPost: boolean
    hasPrevPost: boolean
    prevPostAction: () => void
    nextPostAction: () => void
    closePostAction: () => void
}

export function BlogPostView(props: Props) {

    const NextButton = styled.div`
        color: ${props.hasNextPost ? 'blue' : 'gray'}
        cursor: ${props.hasNextPost ? 'pointer' : 'not-allowed'}
        margin: auto 0;
    `

    const postDetailPairs: PairValues[] = [
        {
            label: "Author:",
            value: props.blogPost.authors.map(author => author.name).join(', \n')
        },
        {
            label: "Created:",
            value: props.blogPost.createdDate?.toDateString()
        }
    ]

    if (props.blogPost.updatedDate != null &&
        props.blogPost.updatedDate.getTime() != props.blogPost.createdDate.getTime()) {
        postDetailPairs.push(
            {
                label: "Edited:",
                value: props.blogPost.updatedDate?.toDateString()
            }
        )
    }

    return (
        <BlogPostViewContainer className="BlogPotView container">
            <BlogPostViewCard className="card">
                <ActionButtons>
                    <div
                        className="LastButton"
                        style={props.hasPrevPost ? {} : { color: 'gray', cursor: 'not-allowed' }}
                        onClick={() => props.hasPrevPost ? props.prevPostAction() : undefined}
                    >
                        <h5>Prev Post</h5>
                    </div>
                    <div
                        className="CloseButton"
                        onClick={() => props.closePostAction()}
                    >
                        <h1>X</h1>
                    </div>
                    <div
                        className="NextButton"
                        style={props.hasNextPost ? {} : { color: 'gray', cursor: 'not-allowed' }}
                        onClick={() => props.hasNextPost ? props.nextPostAction() : undefined}
                    >
                        <h5>Next Post</h5>
                    </div>
                </ActionButtons>
                <Title>
                    <h1>{props.blogPost.title}</h1>
                </Title>
                <PostDetailsRow>
                    {renderKeyValPair(postDetailPairs)}
                </PostDetailsRow>
                <Description>
                    <p>{props.blogPost.description}</p>
                </Description>
                <CommentBlock commentDetailsList={props.blogPost.comments} />
            </BlogPostViewCard>
        </BlogPostViewContainer>
    )
}
