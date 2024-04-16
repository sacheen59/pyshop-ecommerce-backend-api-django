import * as actions from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actions.CART_ADD_ITEM:
            const productItem = action.payload;
            const existItems = state.cartItems.find((item) => item.product === productItem.product);
            if (existItems) {
                return {
                    ...state,
                    cartItems: [...state.cartItems.map(x => x.product === existItems.product ? productItem : x)],
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, productItem]
                }
            }

        case actions.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.product !== action.payload),
            }

        default:
            return state;
    }
}