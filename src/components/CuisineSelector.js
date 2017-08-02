// @flow

import React from 'react';

type Props = {
    options: Array<{ id: number, name: string }>
};

const CuisineSelector = ({ options }: Props) =>
    <div>
        <h1>What taste sensation are you after tonight?</h1>
        <select>
            <option>Select cuisine:</option>
            {
                options.map(option =>
                    <option key={option.id} value={option.id}>{option.name}</option>
                )
            }
        </select>
    </div>;

export default CuisineSelector;
