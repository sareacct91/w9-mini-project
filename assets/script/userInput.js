const inquirer = require('inquirer');

const getUserInput = async () => await inquirer.prompt([
  // First and last name
  {
    type: 'input',
    message: 'Enter your first and last name (John Doe): ',
    name: 'name',
    validate: (input) => new Promise((resolve, reject) => input.split(' ').length === 2 ? resolve(true) : reject('Plase type in first and last name seperated by a space!')),
  },
  // Location (city, state)
  {
    type: 'input',
    message: 'Where are you located (ex. Long Beach, CA): ',
    name: 'location',
    validate: (input) => new Promise((resolve, reject) => {
      const userInputArr = input.split(', ');

      if (userInputArr.length !== 2) {
        reject('Plase type in a city name then comma+space 2 characters state code');

      } else if (userInputArr[1].length !== 2) {
        reject('Please only use 2 characters state code')

      } else {
        resolve(true);
      }
    }),
  },
  // Favorite coding language
  {
    type: 'list',
    message: 'What is your favorite part of front-end dev? ',
    name: 'favFrontEnd',
    choices: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  },
  // Favorite part of full stack dev
  {
    type: 'list',
    message: 'What do you prefer front-end or back-end? ',
    name: 'favFullStack',
    choices: [
      'Front end',
      'Back end'
    ]
  },
  // Github username
  {
    type: 'input',
    message: 'Enter your Github username: ',
    name: 'githubName',
  },
  // LinkedIn url
  {
    type: 'input',
    message: 'Enter your LinkedIn URL: ',
    name: 'linkedInUrl',
    validate: async (input) => await new Promise((resolve, reject) => input.includes('linkedin.com/in') ? resolve(true) : reject('Please enter a valid github profile url')),
    filter: (input) => !input.startsWith('https://') ? input = `https://${input}` : input
  },
]);

module.exports = getUserInput
