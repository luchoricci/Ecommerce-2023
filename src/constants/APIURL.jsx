export const BASE_URL = 'https://64addf9cb470006a5ec67639.mockapi.io';


export const API_URLS = {
    
  PRODUCTS: {
    URL: `${BASE_URL}/products`,
    config: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
  CATEGORY: {
    URL: `${BASE_URL}/Category`,
    config: {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
},

};
