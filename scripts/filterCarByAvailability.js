/**
 *
 * @param {Array} cars
 * @returns
 */

function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  let result = [];

  // Tulis code-mu disini
  // for (let i = 0; i < cars.length; i++) {
  //   if (cars[i].available === true) {
  //     result.push(cars[i]);
  //   }
  // }

  cars.forEach((item) => {
    item.available === true ? result.push(item) : "Ignore";
  });

  // for (const item of cars) {
  //   item.available === true ? result.push(item) : "ignore";
  // }

  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
