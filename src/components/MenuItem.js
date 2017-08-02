// @flow

type Props = {
    id: string,
    name: string,
    price: number
};

import React from 'react';

const MenuItem = ({ id, name, price }: Props) =>
    <li>
        <input type="checkbox" name={id} />
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
    </li>;
    
export default MenuItem;
