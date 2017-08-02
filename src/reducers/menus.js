
const initialState = {};

const menus = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MENU':
            return Object.assign({}, state, { [action.id]: action.data });

        default:
            return state;
    }
};

export default menus;
