// var Boss= {
//     firstName: "Dalia",
//     lastName: "Zegaya",
//     age: 23,
//     wages: "50,000$"
// }

// var employee= {
//     firstName: "Batel",
//     lastName: "Haiylo",
//     YearofBirth: 1997,
//     email: "batel12@gmail.com",
//     adress: "anna frank 4, lod"
// }

// var fruit= {
//     name: "watermelon",
//     color: "red",
//     type: "summer"
// }

// document.write (fruit.name)
// document.write (fruit.color)
// document.write (fruit.type)

// var classRoom= {
//     numberClass: 5,
//     numberOfStudents: 5,
//     nameOfStudents: ["batel", "chen", "or", "yonatan", "daniel"]
// }
// for (var i=0; i<classRoom.nameOfStudents.length;i++) {
//     document.write (classRoom.nameOfStudents[i])
// }

// var kinderGarden= {
//     KindergartenTeacher: "shosi",
//     numberOfkids: 10,
//     namesOfkids: ["batel","yosi","yonatan","chen","netanel","daniel","solomon","sara","lior","aviel"]
// }
// for (var i=0; i<kinderGarden.namesOfkids.length;i++) {
//     document.write (kinderGarden["namesOfkids"][i])
// }
// var myKey= prompt("enter")
// document.write (kinderGarden[myKey])

// var course= {}  
// course.courseNumber= +prompt("course")
// course.numberOfstudents= prompt("number")
// course.age= +prompt("your age")

// console.log(course);

// var someObject= {}
// var keyUser= prompt("key")
// var valueUser= prompt("value")
// someObject[keyUser]=valueUser
// console.log(someObject);

// var teacher= {}
// var keyName= prompt ("key")
// var valueUser= prompt ("value")
// teacher[keyName]= valueUser
// console.log(teacher);

// var directorLongWay= {}
// var keyName= prompt("name")
// var keyLastName= prompt("last name")
// var keyAge= prompt("age")
// var keyWages= prompt("wages")
// director[keyName]=prompt("enter your name")
// director[keyLastName]=prompt("enter your last name")
// director[keyAge]=+prompt("enter your age")
// director[keyWages]=prompt("enter your wages")
// console.log(director);

// var directorShortWay= {}
// for (var i=0; i<4;i++) {
//     director[prompt("key")]=prompt("value")
// }
// console.log(director);

// var userObject= {}
// for (var i=0; i<4;i++) {
//     document.write(userObject[prompt("key")]= prompt("value")+"<div>");
// }

// var carsArray= []
// for (var i=0; i<4;i++) {
//     var carObject= {}
//     carObject.carName= prompt("company"),
//     carObject.carColor=prompt("car color"),
//     carObject.carKm=prompt("car KM"),
//     carObject.carYear=+prompt("car year")
//     carsArray.push(carObject)
//     document.write("<div>"+carObject.carName+carObject.carColor+carObject.carKm+carObject.carYear+"<div>");
// }
// console.log(carsArray);

// function catfunction () {
//     for (var i=0; i<3;i++) {
//         var cat= {}
//         cat.catName= prompt ("cat name")
//         cat.catYear= +prompt ("cat year")
//         cat.catType= prompt ("cat type")
//         cat.catWeigth= prompt("cat weigth")
//         document.write ("<h1>"+cat.catName+cat.catYear+cat.catType+cat.catWeigth+"<h1>")
//     }
// }
// catfunction()

// function dogFunction () {
//     for (var i=0; i<3;i++) {
//         var dog= {}
//         dog.dogName= prompt ("dog name")
//         dog.dogAge= prompt ("dog year")
//         dog.dogType= prompt ("dog type")
//         dog.dogOwner= prompt ("dog owner")
//         document.write ("<p>"+dog.dogName+dog.dogAge+dog.dogType+dog.dogOwner+"<p>")

//     }
// }
// dogFunction()

// function bugFunction () {
//     for (var i=0; i<3;i++) {
//         var bug= {}
//         bug.bugName= prompt("bug name")
//         bug.ScientificName= prompt ("Scientific name")
//         bug.legs= prompt ("number of legs")
//         bug.wings= prompt("have wings?")
//         if (bug.wings=="yes") {
//             document.write("<h3>"+bug.bugName+" "+bug.ScientificName+" "+bug.bugName+" "+bug.wings+"<h3>")
//         }
//     }  
// }
// bugFunction ()

// function kidFunction (kidNum) {
//     for (var i=0;i<kidNum;i++) {
//         var kid= {}
//         kid.fullName= prompt ("enter your full name")
//         kid.age= +prompt("enter your age")
//         kid.gan= prompt("do yo in garden?")
//         if (kid.age>4) {
//             document.write ("<p>"+kid.fullName+" "+kid.age+"<p>")
//         }
//     }
// }
// kidFunction (+prompt("enter a number"))

// function computerFunction (num) {
//     for (var i=0; i<num;i++) {
//         var computer= {}
//         computer.company= prompt ("computer company")
//         computer.model= prompt ("computer model")
//         computer.weight= prompt("computer weight")
//         computer.stock= confirm("Is in stock?")
//         if (computer.stock==true && computer.weight>2) {
//             document.write ("<p>"+computer.company+" "+computer.model+" "+computer.weight+" "+computer.stock+"<p>")
//         }
//     }
// }
// computerFunction(+prompt("your number"))

// function teacherFunction (num) {
//     for (i=0; i<num; i++) {
//         var teacher= {}
//         teacher.fullName= prompt("enter full name")
//         teacher.hourPey= +prompt("enter your hour pey")
//         teacher.email= prompt("enter your email")
//         teacher.yearOfBirth= prompt("enter your year of birth")
//         if (teacher.hourPey>100 || teacher.yearOfBirth<1990) {
//             document.write ("<span>"+teacher.fullName+"<span>"+"<br>")
//         }
//     }
// }
// teacherFunction (+prompt("enter number"))

// function pieceFunction (num) {
//     for (var i=0; i<num; i++) {
//         var piece= {}
//         piece.name= prompt ("piece name")
//         piece.brand= prompt ("piece brand")
//         piece.stores= []
//     }
//     var numberOfStores= +prompt("number of stores")
//     for (var j=0; j<numberOfStores;j++) {
//         piece.stores.push (prompt("stores you can buy"))
//     }
//     document.write (piece.name+piece.stores)
// }
// pieceFunction (3)


// function apartmentsFunction (num) {
//     for (var i=0; i<num;i++) {
//         var apartment= {}
//         apartment.address= prompt("your adress")
//         apartment.rentPrice= +prompt("rent price")
//         apartment.interested= []
//         apartment.tivuch= confirm ("have tivuch?")
//     }
//     var numberOfInrestend= +prompt ("number of inrestend")
//     for (var j=0; j<numberOfInrestend;j++) {
//         apartment.interested.push (prompt("interested preson"))
//     }
//     if (!apartment.tivuch) {
//         document.write (apartment.address+"<br>"+apartment.interested)

//     }
//     console.log(apartment.interested);
// }
// apartmentsFunction (3)

// function countryFunction () {
//     var userNumber= +prompt ("enter number")
//     for (var i=0; i<userNumber;i++) {
//         var country= {}
//         country.name= prompt ("country name")
//         country.pplNumber= +prompt ("number of Residents")
//         country.cities= []
//         country.habad= confirm ("do you have bit habad?")
//     }
//     var numberOfCities= +prompt ("number of cities")
//     for (j=0; j<numberOfCities;j++) {
//         country.cities.push (prompt("name of the city"))
//     }
//     if (country.habad) {
//         document.write (country.name+country.cities)
//     }

// }
// countryFunction ()