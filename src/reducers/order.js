
const initialState = {
    order: []
};

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CUISINE':
            return Object.assign({}, state, { cuisine: action.id, order: [] });

        case 'ADD_ITEM_TO_ORDER':
            return Object.assign({}, state, { order: [...state.order, action.id]});

        default:
            return state;
    }
};

export default order;
