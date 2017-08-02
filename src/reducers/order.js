
const initialState = {};

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CUISINE':
            return Object.assign({}, state, { cuisine: action.id });

        default:
            return state;
    }
};

export default order;
