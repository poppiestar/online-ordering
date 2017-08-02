// @flow

import React from 'react';

import MenuItem from './MenuItem';

type Props = {
    items: Array<any>,
    addItemToMenu: () => any
};

const Menu = ({ items, addItemToMenu }: Props) => {
    return items ? 
        <ul className="menu">
            {
                items.map((item, i) =>
                    <MenuItem key={i} addItemToMenu={addItemToMenu} id={item.id} name={item.name} price={item.price} />
                )
            }
        </ul> :
        null;
};
    
export default Menu;