// Created by Curtis Spence Sep 8, 2022

import styled from "styled-components";


/* Component Styling -------------------------------------------------------- */
const ErrorContainer = styled.div`
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

/* Component ---------------------------------------------------------------- */
interface Props {
    title?: string
    message?: string
}

export function ErrorComponent(props: Props) {
    const title = <h3>{props.title ?? "Error"}</h3>
    const message = props.message ? <h5>{props.message}</h5> : null
    return (
        <ErrorContainer>
            {title}
            {message}
        </ErrorContainer>
    )
}
