// async function getDrinkData() {
//   console.log('get drinks menu');
//   return [
//     {
//       "id": "1",
//       "name": "Water",
//       "size": "S",
//       "price": "10",
//     },
//     {
//       "id": "2",
//       "name": "Coke",
//       "size": "S",
//       "price": "15",
//     },
//     {
//       "id": "3",
//       "name": "Tea",
//       "size": "S",
//       "price": "20",
//     }
//   ];
// }
//
// async function chooseDrink() {
//   console.log('choose some drinks');
//   return [
//     {
//       "id": "1",
//       "quantity": "2",
//     },
//     {
//       "id": "3",
//       "quantity": "4",
//     }
//   ];
// }
//
// async function addDrinkToCart() {
//   console.log('add drinks to cart');
//   return chooseDrink();
// }
//
// async function getPizzaData() {
//   console.log('get');
//   return [
//     {
//       "id": "1",
//       "name": "Thin",
//       "price": "10",
//     },
//     {
//       "id": "2",
//       "name": "Normal",
//       "price": "15",
//     },
//     {
//       "id": "3",
//       "name": "Thick",
//       "price": "20",
//     }
//   ];
// }
//
// async function choosePizza() {
//   console.log('choosed');
//   return [
//     {
//       "id": "3",
//       "quantity": "1",
//     }
//   ];
// }
//
// async function addPizzaToCart() {
//   console.log('added');
//   return choosePizza();
// }
//
// async function getCartItems() {
//   console.log('cart');
//   return [
//     {
//       'drink': getDrinkData(),
//     },
//     {
//       'pizza': getPizzaData(),
//     },
//   ];
// }
//
// async function sendRequest() {
//   console.log('send');
//   return getCartItems();
// }
//
// async function orderItems() {
//   const items = await getCartItems()    // async call
//   const noOfItems = items.length
//   const promises = []
//   for(var i = 0; i < noOfItems; i++) {
//     const orderPromise = sendRequest(items[i])    // async call
//     promises.push(orderPromise)    // sync call
//   }
//   await Promise.all(promises)    // async call
// }
//
// // Although I prefer it this way
//
// async function orderItems() {
//   const items = await getCartItems()    // async call
//   const promises = items.map((item) => sendRequest(item))
//   await Promise.all(promises)    // async call
// }
//
// async function selectPizza() {
//   const pizzaData = await getPizzaData()    // async call
//   const chosenPizza = choosePizza()    // sync call
//   await addPizzaToCart(chosenPizza)    // async call
// }
//
// async function selectDrink() {
//   const drinkData = await getDrinkData()    // async call
//   const chosenDrink = chooseDrink()    // sync call
//   await addDrinkToCart(chosenDrink)    // async call
// }
//
// (async () => {
//   const pizzaPromise = selectPizza()
//   const drinkPromise = selectDrink()
//   await pizzaPromise
//   await drinkPromise
//   orderItems()    // async call
// })();
//
// // Although I prefer it this way
//
// (async () => {
//   Promise.all([selectPizza(), selectDrink()]).then(orderItems)   // async call
// })();

(function (fn) {
  window._fn = fn;
})(window._);

$(document).ready(function () {
  var foo = {};
  console.log(_fn(foo).isArray());
});
