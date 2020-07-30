var foo = "Hola a todos";
var bar = "Esté es el mundo de JavaScript";
var edad = "34";
var weAreLearning = true; 
var loosingTime = false;
var character = "A";

var animalsArray = 
    [
        "Gato",
        "Perro",
        "Perico",
        "Foca",
        "8",
        7,
        true,
        false
    ];

var animalsArray = 
    [
        {
            name: "pingo",
            breed: "Gato",
            owner: "Yo"
        },
        {
            name: "pingo",
            breed: "Gato",
            owner: "Yo"
        },
        {
            name: "pingo",
            breed: "Gato",
            owner: "Yo"
        },
    ];

var animalObject = 
    {
        name: "Firulais",
        breed: "Perro",
        owner: "Yo merengues",
        color: "Black",
        age: 5
    };

var animalObject = 
    { 
        name: "Firulais",
        breed: "Perro",
        owner: "Yo merengues",
        color: "Black",
        age: 5,
        vacunas:
            [
                "Rabía",
                "Parvovirus",
                "etc",
                "etc"
            ],
            
        address: 
            { 
                street: "Lago",
                block: "Reynosa Tamaulipas",
                city: "CDMX",
                country: "México"
            }
    };

/*Operadores matematicos
adición: + ,
sustracción: - ,
multiplicación: * , 
división: / ,
módulo: % */

/*Operadores lógicos
mayor qué:  >,
menor qué: < ,
igual a: == ,
extremadamente igual a: === ,
diferente de: != ,
mayor o igual qué: >= ,
menor o igual qué: <= ,
negación: ! */

/*Condiciones
if(10 > 5)
    {
        console.log("true");
    }

if(a == b && a > b){}
if(a == b or a > b){}
*/

/*Funciones*/

const someFunction  = () =>
    {
        alert("Hola mundo!!!");
    }

/*printText()*/

/*const printText = (textToPrint) =>
    {
        console.log(textToPrint);
    }*/


/*Crear las sig. funciones:

*Función que me permita sumar 2 números cualquiera, e imprima el resultado.
*Función que me permita restar 2 números cualquiera, e imprima el resultado.
*Función que me permita comparar la igualdad de los resultados de las 2 operaciones anteriores.*/

const twoNumbersAddition = (n1, n2) => 
    {
        console.log(n1 + n2);
        return n1 + n2;
    }

const twoNumbersSubstraction = (n1, n2) =>
    {
        console.log(n1 - n2);
        return n1 - n2;
    }

const comparation = (ra, rb) =>
    {
        if (ra == rb)
            {
                alert("Los números son iguales")
            }

        else
            {
                alert("Los números son diferentes")
            }

    }



/*prvar name = "Luis Fernando";
var lastName = "Rodríguez Ponce";
var fullName = name + " " + lastName;

const printName = (name, lastName) =>
    {
        console.log(name + " " + lastName);
    }*/

const printFirstName = (name) =>
    {
        console.log(name);
        return name;
    }

const printLastName = (lastName) =>
    {
        console.log(lastName);
        return lastName;
    }

const printName = (name, lastName) =>
    {
        let userName = printFirstName(name);
        let userLastName = printLastName(lastName);
        console.log(userName + " " + userLastName);
    }

  
/*forma dificil   
const createCar = (marca, modelo, año) =>
    {
        let carObject = {};
        carObject.marca = marca;
        carObject.modelo = modelo;
        carObject.año = año;
        console.log(carObject);
    }*/


    /*forma facil*/
var carsCollection = [];

const createCar = (marca, modelo, año) =>
    {
        let carObject = {marca, modelo, año};
        addCar(carObject, carsCollection);
    }

const addCar = (addedObject, targetArray) =>
    {
        targetArray.push(addedObject);
    }

/*var carsCollection.forEach({item,index} =>
    {
        console.log(item.marca);
    });*/
