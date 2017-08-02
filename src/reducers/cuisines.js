
const initialState = [
    { id: 1, name: "Chinese" },
    { id: 2, name: "Italian" },
    { id: 3, name: "Thai" },
    { id: 4, name: "Japanese" },
    { id: 5, name: "Burrito" },
    { id: 6, name: "Pizza" }
];

const cuisines = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default cuisines;
