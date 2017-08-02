
import fetch from 'isomorphic-fetch';

const myFetch = (url) => {
    return fetch(url)
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
};

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
                const menu = await myFetch(`/api/menu/${id}`);
                dispatch(addMenu(id, menu));
            } catch (err) {
                throw new Error();
            }
        }

        dispatch(setCuisine(id));
    };

export const addMenu = (id, data) => ({
    type: 'ADD_MENU',
    id,
    data
});
