
export const setCuisine = (id) => ({
    type: 'SELECT_CUISINE',
    id
});

export const selectCuisine = (id) =>
    (dispatch, getState) => {
        dispatch(setCuisine(id));

        const { menus } = getState();
        
        if (!menus[id]) {
            // call for this menu
            console.log('menu does not exist');
        } else {
            console.log('menu does exist');
        }
    };
