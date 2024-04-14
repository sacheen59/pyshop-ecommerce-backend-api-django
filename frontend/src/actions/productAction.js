import * as actions from '../constants/productConstants';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actions.PRODUCT_LIST_REQUEST });

        const { data } = await axios.get('http://localhost:8000/api/products/');
        console.log(data);

        dispatch({ type: actions.PRODUCT_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: actions.PRODUCT_LIST_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: actions.PRODUCT_DETAIL_REQUEST });

        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
        dispatch({ type: actions.PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actions.PRODUCT_DETAIL_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}