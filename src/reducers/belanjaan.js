export default belanjaan = (state = [], action) => {
    switch (action.type) {
        case "ADD_BELANJAAN":
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case "TOGGLE_BELANJAAN":
            return state.map(barang =>
                (barang.id === action.id) ?
                    { ...barang, completed: !barang.completed } :
                    barang
            )

        default:
            return state;
    }
}