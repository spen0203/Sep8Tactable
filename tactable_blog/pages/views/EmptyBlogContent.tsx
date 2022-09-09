// Created by Curtis Spence Sep 8, 2022

import React from "react";
import styled from "styled-components";

/* Component Styling -------------------------------------------------------- */
const BlogContentEmptyContainer = styled.div`
    display: flex;
    flexDirection: column;
    textAlign: center;
    marginTop: 2rem;
`

/* Component ---------------------------------------------------------------- */
/**
 * EmptyBlogContent is displayed when no blog posts have been returned.
 */
export function EmptyBlogContent() {
    return (
        <BlogContentEmptyContainer>
            <h3>No Blog Posts to present.</h3>
            <h5>This could mean the app is loading or has no current posts.</h5>
        </BlogContentEmptyContainer>
    )
}
