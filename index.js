var inquirer = require('inquirer');
var fs = require('fs');
inquirer.prompt([
    {
       type:'input',
       name: 'first',
       message: 'What is your project called ?' 
    },
    {
        type:'input',
        name: 'second',
        message: 'Please give a brief Description!' 
     },
     {
      type:'input',
      name: 'Third',
      message: 'Please describe the installation process!' 
   },
   {
    type:'input',
    name: 'fourth',
    message: 'Please describe the usage for your application!' 
 },
 {
  type:'input',
  name: 'fifth',
  message: 'Please describe the test protocol!' 
},
{
  type:'input',
  name: 'sixth',
  message: 'Please include contributions!' 
},
{
  type:'input',
  name: 'seven',
  message: 'Add collaborators GitHub!' 
},
    {
      type: 'rawlist',
      name: 'badges',
      message: 'Which licence do you want to add?',
      choices: ['MIT', 'Creative Commons'], 
   }
  ])
  .then(function(answers)  {
      console.log('This is frist answer!!!', answers);
      var badgeUrl = answers.badges;
      if(answers.badges === 'MIT') {
        badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      } else  if (answers.badges === 'Creative Commons') {
        badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
      } 
      var readMeString = `
# Title: ${answers.first}
# Description: ${answers.second}
Istalation process: ${answers.Third}
Aplication Usage: ${answers.fourth}
Aplication Protocol: ${answers.fifth}
Contributions: ${answers.sixth}
GitHub of creators: ${answers.seven}
${badgeUrl}
      `
      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })