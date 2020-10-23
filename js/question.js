const quiz = [
  {
    q: "Inside which HTML element do we put the JavaScript?",
    options: ["js", "javascript", "script", "scripting"],
    answer: 1,
  },
  {
    q:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    options: [
      "document.getElementById('demo').innerHTML = 'Hello World!';",
      "document.getElement('p').innerHTML = 'Hello World!';",
      " document.getElementByName('p').innerHTML = 'Hello World!';",
      " #demo.innerHTML = 'Hello World!';",
    ],
    answer: 2,
  },
  {
    q: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <head> section",
      "The <body> section",
      "Both the <head> section and the <body> section are correct",
    ],
    answer: 1,
  },
  {
    q:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["script.js", "app.js", "server.js"],
    answer: 0,
  },
  {
    q: "The external JavaScript file must contain the <script> tag.",
    options: ["true", "false"],
    answer: 1,
  },
  {
    q: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
    ],
    answer: 1,
  },
  {
    q: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
    ],
    answer: 1,
  },
  {
    q: "How do you call a function named 'myFunction'?",
    options: [
      "call function myFunction()",
      "myFunction()",
      "call myFunction()",
    ],
    answer: 1,
  },
  {
    q: "How to write an IF statement in JavaScript?",
    options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i = 5 then"],
    answer: 0,
  },
  {
    q:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i != 5)", "if (i <> 5)", "if i <> 5", "if i =! 5 then"],
    answer: 2,
  },
];
