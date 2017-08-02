/* eslint-env node */

import menus from '../data/menus';

const MenuHandler = (request, reply) => {
    const menuId = encodeURIComponent(request.params.id);
    return reply(menus[menuId]);
};

export default MenuHandler;
