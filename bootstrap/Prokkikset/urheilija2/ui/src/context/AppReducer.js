export default (state, action) => {
    const {
        payload,
        type
    } = action;
    switch (type) {
        case "GET_URHEILIJATIEDOT":
            return {
                ...state,
                urheilijatiedot: payload,
            };
        case "GET_URHEILIJATIETO":
            return {
                ...state,
                urheilijatieto: payload,
            };
        case "DELETE_URHEILIJATIETO":
            return {
                ...state,
                urheilijatiedot: state.urheilijatiedot.filter(
                    (urheilijatieto) => urheilijatieto.id !== action.payload
                ),
            };
        case "ADD_URHEILIJATIETO":
            return {
                ...state,
                urheilijatiedot: [action.payload, ...state.urheilijatiedot],
            };
        case "EDIT_URHEILIJATIETO":
            return {
                ...state,
                urheilijatiedot: state.urheilijatiedot.map((urheilijatieto) =>
                urheilijatieto.id === action.payload.id
                    ?(urheilijatieto = action.payload):urheilijatieto
                ),
            };
        default:
            return state;

    }
};