import {toast} from 'react-toastify'
// Actiunea pentru adaugarea la favorite:
export function addToFavorites(product) {
  toast.success('✅ Articolul a fost adăugat la favorite!', {
    position: 'top-right',
    autoClose: 2000, // Va dispărea după 2 secunde
    hideProgressBar: true,
    closeOnClick: true,
  });
  
  return {
    type: "ADD_TO_FAVORITES",
    payload: product,
  };
}

// Actiunea pentru stergerea de la favorite.
export function removeFromFavorites(productId) {
  toast.info('🧐 Articolul a fost eliminat din favorite!', {
    position: 'top-right',
    autoClose: 2000, // Va dispărea după 2 secunde
    hideProgressBar: true,
    closeOnClick: true,
  });
  
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: productId,
  };
}

 