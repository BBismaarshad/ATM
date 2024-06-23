import inquirer from "inquirer";
let myBalance = 10000; //$
let myPin = 1231;
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAnswer = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Select option",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                type: "number",
                name: " amount",
                message: "Enter your amount",
            },
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficition balance");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                type: "list",
                name: "fastcash",
                message: "Select the amount which you withdraw",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdraw ${fast.fastcash}  Your remaining balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code..");
}
