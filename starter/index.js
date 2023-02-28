const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const getTeamData = () => {

    // Take input from user about team manager
const getManagerInput = () =>
    inquirer.prompt([
        {
            type:"input",
            message: "What is your manager's name?",
            name: "manName",
        },
        {
            type:"input",
            message: "What is your manager's ID?",
            name: "manId",
        },
        {
            type:"input",
            message: "What is your manager's email?",
            name: "manEmail",
        },
        {
            type:"input",
            message: "What is your manager's office number?",
            name: "manOffNo",
        }
        // Then create a manager object and continue with user input
]).then((data) => {createManager(data), getMoreTeam()});

// Create manager object from Manager class
const createManager = (data) => {
    const manager = new Manager(data.manName, data.manId, data.manEmail, data.manOffNo);
    console.log(manager);
}

    // Get engineer input 
const getEngineerInput = () => 
    inquirer.prompt([
        {
            type:"input",
            message: "What is your engineer's name?",
            name: "engName",
        },
        {
            type:"input",
            message: "What is your engineer's ID?",
            name: "engId",
        },
        {
            type:"input",
            message: "What is your engineer's email?",
            name: "engEmail",
        },
        {
            type:"input",
            message: "What is your engineer's github username?",
            name: "engGithub",
        }
        // Then create a engineer object and continue with user input
]).then((data) => {createEngineer(data), getMoreTeam()});

// Create engineer object from Engineer class
const createEngineer = (data) => {
    // Create array for engineers
    const engineers = []
    // Create new engineer object from data
    const engineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
    // Push this engineer into array
    engineers.push(engineer);
}

    // Get intern input
const getInternInput = () => 
    inquirer.prompt([
        {
            type:"input",
            message: "What is your intern's name?",
            name: "intName",
        },
        {
            type:"input",
            message: "What is your intern's ID?",
            name: "intId",
        },
        {
            type:"input",
            message: "What is your intern's email?",
            name: "intEmail",
        },
        {
            type:"input",
            message: "What is your intern's school?",
            name: "intSchool",
        }
        // Then create intern object and continue with user input
]).then((data) => {createIntern(data), getMoreTeam()});

// Create intern object
const createIntern = (data) => {
    // Create intern array
    const interns = []
    // Create new intern object from data
    const intern = new Engineer(data.intName, data.intId, data.intEmail, data.intSchool);
    // Push intern into array
    interns.push(intern);
}

// Take input from user if to keep continue with team profile
const getMoreTeam = () =>
    inquirer.prompt([
        {
            type:"list",
            message:"Now... ",
            choices: ["Add an engineer", "Add an intern", "Finish"],
            name: "continueBuilding",
        }
]).then((data) => {
    checkContinue(data);
});

// Function to check if users want to keep creating more members
function checkContinue (data){

    // Switch statement to check input
    switch (data.continueBuilding){
        case "Add an engineer":
            getEngineerInput();
            break;
        case "Add an intern":
            getInternInput();
            break;
        case "Finish":
            console.log("done bozo");
            break;
    }
}

// Start user input
getManagerInput();
}

getTeamData();