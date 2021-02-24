import { createSelector } from "reselect";

// Make Sure the cart dropdown is not re-rendering whenever the cartitems state is changing
// Items stay when the user is signing out

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumilatedQuantity, cartItem) =>
        accumilatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumilatedQuantity, cartItem) =>
      accumilatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
