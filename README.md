# ECMA Script 6 Experience

ECMAScript 6 Experience is a simple project to start with es6 convention.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
 * node js 
 * git 
 * (use your favorite IDE)
```

### Installing

A step by step series of examples that tell you how to get a development env running

Step 1 : Configuration and install root project

```
1°) Clone or download this repository : https://github.com/Gparquet/EcmaScript6Experience.git

2°) go into folder and type this commande --> npm install
 
```

Step 2 : Let's GO !

```
1°) Rename data folder by contact.
2°) Create an contact service for all methodes that parse contact.json file. This name can called : contact.service.js file.

```

```

Step 3 : Enhance contact service

```
1°1) Create method that return a contact by his first and last name. If user not found, the function return message for exemple (User [first name] [last Name] not found).

Skills : 
	* Use arrow function 
	* Use litteral expression 
	* Use lodash utility library 

1°2) Update the index.js file by adding the route to the created method

2°1) Create method that return a contact by his identification number and create another by lastName. If user not found, the function return message for exemple (User [first name] [last Name] not found).

Skills :
	* Use arrow function
	* Use litteral expression 
	* Use lodash utility library 

2°2) Update the index.js file by adding the route to the created method

3°1) Create method that add a new contact to existing list. If user not found, the function return message for exemple (User [first name] [last Name] not found).

Skills :
	* Use arrow function
	* Use destructuring 
	* Use litteral expression (string interpolation)
	* Use default parameter value

3°2) Update the index.js file by adding the route to the created method

```

Step 4 : Export functions created in service constant

```
Create contact service variable and add functions previously created and export it.
```

## Authors

* **Geoffrey Parquet** - *Initial work* - [PersonalGit](https://github.com/Gparquet/)

## Acknowledgments

* Overview of ECMA Script 6
* Const and Let key word 
* Destructuring
* Arrow Function 
* Spread Operator 
* Modules 
* Literal Expression (String interpolation)