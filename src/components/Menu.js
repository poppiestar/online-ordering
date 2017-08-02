// @flow

import React from 'react';

import MenuItem from './MenuItem';

type Props = {
    items: Array<any>,
    addItemToOrder: () => any
};

const Menu = ({ items, addItemToOrder }: Props) => {
    return items ? 
        <ul className="menu">
            {
                items.map((item, i) =>
                    <MenuItem key={i} addItemToOrder={addItemToOrder} id={item.id} name={item.name} price={item.price} />
                )
            }
        </ul> :
        null;
};
    
export default Menu;
