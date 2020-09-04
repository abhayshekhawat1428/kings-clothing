import CartAActionTypes from './cart.types';


export const toggleCartHidden = () =>({
    type:CartAActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>({
    type:CartAActionTypes.ADD_ITEM,
    payload:item
});