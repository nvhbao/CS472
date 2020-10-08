//Exercise 1
String.prototype.filter = function(bannedWords) {
  var arrWords = this.split(" ");
  
  bannedWords.forEach(elem => arrWords = arrWords.filter(word => word !== elem));
  return arrWords.join(" ");
};

console.log("This house is not nice!".filter(["is"]));
console.log("This house is not nice!".filter(["not", "is"]));

//Exercise 2
let bubbleSort = function(inputArr) {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return inputArr;
};

console.log(bubbleSort([5,3,1,4,6]));

//Exercise 3a.
const Person = function(name) {
  this.name = name;
};

const Teacher = function(name) {
  Person.call(this,name);
};


Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(subject) {
  console.log(this.name + " is now teaching " + subject);
};

var teacher1 = new Teacher("Tina Xing");
teacher1.teach("WAP");



//Exercise 3b.
const Person = {
  name: "Default",
  setName: function(name) {
    this.name = name;
  }
};

const Teacher = Object.create(Person);
Teacher.teach = function(subject) {
  console.log(this.name + " is now teaching " + subject);
};

var teach2 = Object.create(Teacher);
teach2.setName("Obana Kalu");
teach2.teach("MPP");


//Exercise 4
const Person = {
  name: "Default",
  age: 18,
  greeting: function() {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + "  years old.");
  },
  salute: function() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
  }
};

const Student = Object.create(Person);
Student.major = "N/A";
Student.setMajor = function(major) {
  this.major = major;
};
Student.greeting = function() {
  console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
};

const Professor = Object.create(Person);
Professor.department = "N/A";
Professor.setDeparment = function(deparment) {
  this.deparment = deparment;
};
Professor.salute = function() {
  console.log("Good day, my name is " + this.name + " and I am in the " + this.deparment + " department.");
}

var s1 = Object.create(Student);
s1.setMajor('CS');
s1.greeting();
s1.salute();

var p1 = Object.create(Professor);
p1.setDeparment('Compro');
p1.greeting();
p1.salute();


//Exercise 4b
const Person = function(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.greeting = function() {
  console.log("Greetings, my name is " + this.name + " and I am " + this.age + "  years old.");
}

Person.prototype.salute = function() {
  console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
};

const Student = function(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function() {
  console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

const Professor = function(name, age, deparment) {
  Person.call(this, name, age);
  this.deparment = deparment;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.salute = function() {
  console.log("Good day, my name is " + this.name + " and I am in the " + this.deparment + " department.");
};

var s1 = new Student("Bao", 42, "CS");
s1.greeting();
s1.salute();

var p1 = new Professor("Tina Xing", 18, "Compro");
p1.greeting();
p1.salute();