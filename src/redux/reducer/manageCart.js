const cart = [];
const manageCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "DELETE":
            const existNew = state.find((x) => x.id === product.id);
            if (existNew.qty === 1) {
                return state.filter((x) => x.id !== existNew.id)
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }
            break;
        default:
            return state;
            break;
    }
}

export default manageCart;