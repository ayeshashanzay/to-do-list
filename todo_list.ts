import inquirer from "inquirer";

let todos = [];
let condition = true;
while(condition){
let todoQuestions = await inquirer.prompt(
    [
        {
            name:"firstQuestion",
            type:"input",
            message:"what you want to add in your todos?"
        },
        {
            name:"secondQuestion",
            type:"confirm",
            message:"Do you want to add more",
            default:"false"
        }
            
        
    ]
)
todos.push(todoQuestions.firstQuestion);
console.log(todos);
condition = todoQuestions.secondQuestion;


}