// Created by Curtis Spence Sep 8, 2022

import React from "react";
import styled from "styled-components";

/* Component Styling -------------------------------------------------------- */
const PairValue = styled.div`
display: flex;
flex-direction: row;
width: 100%;

.Label {
    color: black;
    font-weight: bold;
}

.Value {
    color: #666;
    padding-left: 0.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
`

/* Component ---------------------------------------------------------------- */
/**
 * Interface used to group key value pairs for rendering.
 */
export interface PairValues {
    label: string,
    value: string
}

/**
 * Renders a standardized key value pair component.
 * @param pairs - List of PairValues to render.
 * @returns
 */
export function renderKeyValPair(pairs: PairValues[]): JSX.Element[] {
    return pairs.map((pair, i) => (
        <PairValue key={i} >
            <div className="Label">
                {pair.label}
            </div>
            <div className="Value">
                {pair.value}
            </div>
        </PairValue>
    ))
}