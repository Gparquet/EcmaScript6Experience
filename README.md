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

### Installation

A step by step series of examples that tell you how to get a development env running

### Step 1 : Clone projet [EcmaScript6Experience](https://github.com/Gparquet/EcmaScript6Experience.git)


```bash
git clone https://github.com/Gparquet/EcmaScript6Experience.git
```

### Step 2 : Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install EcmaScriptExperience

```bash
npm install
```

### Step 3 : Let's GO !


In **Contact folder**, create two files :

- **contact.service.js** file : will contain **all methodes that parse contact.json** file.
- **contact.service.spec.js** file: will container **all tests of each methods** that will make in contact.service file.

Be carefull, each development must be done in the TDD way. This implies that each method must have one or more associated tests.

### Step 4 : Enhance contact service 

#### 1 . ***Create method that return a contact by his first and last name.***

If user not found, **the function return message** for exemple (User [first name] [last Name] not found).

**Skills** : 
- Use arrow function 
- Use litteral expression 
- Use lodash utility library 

For realise this you must **update the index.js** file by **adding the route** to the created method

#### 2 . ***Create two search method that return a contact. One by his identification number and another by lastName. If user not found, the function return message for exemple (User [first name] [last Name] not found).***

**Skills** :
- Use arrow function
- Use litteral expression 
- Use lodash utility library (if you want).  

For realise this you must **update the index.js** file by **adding the route** to the created method

#### 3 . ***Create method that add a new contact to existing list. If user not found, the function return message for exemple (User [first name] [last Name] not found).***

**Skills** :
- Use arrow function
- Use destructuring 
- Use litteral expression (string interpolation)
- Use default parameter value

For realise this you must **update the index.js** file by **adding the route** to the created method

### Step 5 : Export functions created in service constant

Create contact service variable and add functions previously created and export it.


## Authors

* **Geoffrey Parquet** - [PersonalGit](https://github.com/Gparquet/)

## Acknowledgments

* Overview of ECMA Script 6
* Const and Let key word 
* Destructuring
* Arrow Function 
* Spread Operator 
* Modules 
* Literal Expression (String interpolation)