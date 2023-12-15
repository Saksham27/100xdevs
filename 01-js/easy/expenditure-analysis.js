/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  for (let i = 0; i < transactions.length; i++) {
    let iscatagoryAlreadyAdded = false;
    output.map((item)=>{
      if(item["category"] == transactions[i].category){
        item["totalSpent"] += transactions[i].price;
iscatagoryAlreadyAdded = true;
      }
    })
    if(!iscatagoryAlreadyAdded){
      output.push({
        "category" : transactions[i].category,
        "totalSpent" : transactions[i].price
      });
    }
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
