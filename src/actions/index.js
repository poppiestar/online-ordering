
export const setCuisine = (id) => ({
    type: 'SELECT_CUISINE',
    id
});

export const selectCuisine = (id) =>
    (dispatch, getState) => {
        const { menus } = getState();
        
        if (!menus[id]) {
            // call for this menu
            console.log('menu does not exist');
            dispatch(setCuisine(id));
        } else {
            dispatch(setCuisine(id));
        }
    };

export const addMenu = (id, data) => ({
    type: 'ADD_MENU',
    id,
    data
});
