// Created by Curtis Spence Sep 8, 2022

import styled from "styled-components";


/* Component Styling -------------------------------------------------------- */
const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 2rem;

    h3 {
        margin: auto;
    }

    h5 {
        margin: auto
    }
`

const Spinner = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border-radius: 100%;
    border: 0.5rem solid blue;
    border-left: 0.5rem solid transparent;
    margin: auto;
    margin-top: 1rem;
    animation-iteration-count: infinite;

    animation: 1.5s linear infinite rotation;    animation-duration: 2s;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
    `

/* Component ---------------------------------------------------------------- */
interface Props {
    title?: string
    message?: string
}

export function LoadingComponent(props: Props) {
    const title = props.title ? <h3>{props.title}</h3> : null
    const message = props.message ? <h5>{props.message}</h5> : null
    return (
        <LoadingContainer>
            {title}
            {message}
            <Spinner />
        </LoadingContainer>
    )
}
