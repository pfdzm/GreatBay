const inquirer = require("inquirer");

(function init() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        name: "mode",
        type: "rawlist",
        choices: ["POST", "BID"],
        message: "Welcome to GreatBay! What do you want to do today?"
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!

      if (answers.mode === "POST") {
        post();
      } else if (answers.mode === "BID") {
        bid();
      }
    });
})();

function post() {
  inquirer
    .prompt([
      {
        name: "article",
        type: "input",
        message: "What would you like to sell?"
      },
      {
        name: "category",
        type: "input",
        message: "Enter a category for this item:"
        // when: function(answers) {
        //   return answers.article == "iphone";
        // }
      },
      { name: "price", type: "number", message: "Enter a starting price:" }
    ])
    .then(answers => {
      const item = {
        article: answers.article,
        category: answers.category,
        price: answers.price
      };
      console.log(item);
    });
}

function bid() {
  //   const items = getItems();
  inquirer
    .prompt([
      {
        name: "item",
        message: "Select an item to bid on",
        choices: ["iPhone", "Computer man", "DayMan"], // @TODO replace with items from DB
        type: "list"
      }
    ])
    .then(answers => {
      console.log(answers.item);
      //   @TODO replace with real item price from DB
      // const price = getPrice(answers.item);
      inquirer
        .prompt([
          {
            name: "price",
            message: "Enter an amount: ",
            type: "number"
          }
        ])
        .then(answers => {
          console.log(answers.price);
        });
    });
}
