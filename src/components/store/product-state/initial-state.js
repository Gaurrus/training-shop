export const initialProductState = {
  isLoading: false,
  isError: false,
  data: {
    name: '',
    category: '',
    brand: '',
    material: '',
    rating: null,
    price: null,
    sizes: [],
    discount: null,
    reviews: [
      {
        name: '',
        text: '',
        rating: null,
        id: '',
      },
    ],
    images: [
      {
        color: '',
        url: '',
        id: '',
      },
    ],
    id: '',
  },
};
