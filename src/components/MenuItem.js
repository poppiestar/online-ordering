// @flow

import React from 'react';

type Props = {
    id: string,
    name: string,
    price: number,
    addItemToOrder: (id: string) => any
};

const MenuItem = ({ id, name, price, addItemToOrder }: Props) =>
    <li>
        <input onChange={() => addItemToOrder(id) } type="checkbox" name={id} />
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
    </li>;
    
export default MenuItem;
