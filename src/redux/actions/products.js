import axios from "axios";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_FILTERED = "RECEIVE_FILTERED";

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

const receiveFiltered = (filtered) => ({
  type: RECEIVE_FILTERED,
  filtered
});

// const filter = (products, values) => {
//   let filtered = [];
//   //products = todos los productos del json
//   products.map(product => {
//      product.attributes.map(attribute => {
//          if(attribute.value == values) {
//         //  console.log(attribute);
//         filtered.push(product)
//         //  console.log(product);
//          }
//          })
        
//         //  console.log(attribute.value);
//      })
//   console.log(filtered);
// };
const removeDuplicates = arr => {
  let send = arr.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, [])
  return send
}

// let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue)
//   }
//   return accumulator
// }, [])

export const fetchFiltered = filters => (dispatch) =>
//   axios
//     .get("http://remote.fizzmod.com/body.json")
//     .then((res) => res.data)
//     .then(data => data.products)
//     .then(products => filter(products, filters))
    dispatch(receiveFiltered(filters));

export const fetchProducts = () => (dispatch) =>
  axios
    .get("http://remote.fizzmod.com/body.json")
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));
