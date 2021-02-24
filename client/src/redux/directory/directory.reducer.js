const INITIAL_STATE = {
  sections: [
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 1,
      linkUrl: "shop/mens",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 2,
      linkUrl: "shop/womens",
    },
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      id: 3,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      id: 4,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 5,
      linkUrl: "shop/sneakers",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
