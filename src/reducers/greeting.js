
const initialState = "Initial state greeting";

const greeting = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GREETING':
            return action.greeting;

        default:
            return state;
    }
};

export default greeting;
