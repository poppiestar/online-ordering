// @flow

import React from 'react';

type Props = {
    id: string,
    name: string,
    price: number,
    addItemToMenu: (id: string) => any
};

const MenuItem = ({ id, name, price, addItemToMenu }: Props) =>
    <li>
        <input onChange={() => addItemToMenu(id) } type="checkbox" name={id} />
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
    </li>;
    
export default MenuItem;
