export const loadWishList = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateList = (product) => {
  const wishList = loadWishList();

  try {
    const isDuplicate = wishList.some((p) => p.id === product.id);
    if (isDuplicate) return alert("already added a item");

    const updateWishList = [...wishList, product];
    localStorage.setItem("wishlist", JSON.stringify(updateWishList));
  } catch (error) {
    console.log(error);
  }
};



export const removeFromWishList = (id) => {
  const wishList = loadWishList();

  try{
    const updateWishList = wishList.filter(p=> p.id !== id)

    localStorage.setItem("wishlist", JSON.stringify(updateWishList));
  }
  catch(erro){
    console.log(erro);
  }
}