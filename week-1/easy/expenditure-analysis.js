/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  
  transactions.forEach(transaction => {
    let flag = false;
    ans.forEach(i => {
      if(i.category == transaction.category){
        i.totalSpent += transaction.price;
        flag = true;
      }
    });
    if(!flag)
      ans.push(newObject(transaction.category, transaction.price));
    
  });
  return ans;
}

function newObject(categoryName, price){
  return {
    category: categoryName,
    totalSpent: price
  }
}

// function calculateTotalSpentByCategory(transactions) {
//   let ans = new Map();

//   transactions.forEach(transaction => {
//     if (ans.has(transaction.category))
//       ans.set(transaction.category, ans.get(transaction.category) + transaction.price);
//     else
//       ans.set(transaction.category, transaction.price);
//   });

//   return Array.from(ans, ([category, price]) => ({category: category, totalSpent: price}));
// }

module.exports = calculateTotalSpentByCategory;
