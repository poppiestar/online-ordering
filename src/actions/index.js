
import fetch from 'isomorphic-fetch';

export const setCuisine = (id) => ({
    type: 'SELECT_CUISINE',
    id
});

export const selectCuisine = (id) =>
    async (dispatch, getState) => {
        const { menus } = getState();
        
        if (!menus[id]) {
            // call for this menu
            try {
                const menu = await fetch(`/api/menu/${id}`);

                dispatch(addMenu(id, menu));
            } catch (err) {
                throw new Error();
            }

            dispatch(setCuisine(id));
        } else {
            console.log('menu', menus[id]);
            dispatch(setCuisine(id));
        }
    };

export const addMenu = (id, data) => ({
    type: 'ADD_MENU',
    id,
    data
});
