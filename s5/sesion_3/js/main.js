var foo = "Hola de nuevo Koders";
var bar = 29

var coffeeArray = 
    [
        "Capuchino",
        "Latte",
        "Americano"
    ]

var pricesArray = 
    [
        20,
        30, 
        25.5
    ]

var productsArray = 
    [
        {
            name: "Capucchino",
            description: "Some text",
            price: "$20.00"
        },
        {
            name: "Latte",
            description: "Some Text",
            price: "$25.00"
        }
    ]

var coffeeObject = 
    {
        name: "Capucchino",
        description: "Some Text",
        price: "$30.00"
    }

var koderObject = 
    { 
        name: "Luis Fernando",
        edad: 29,
        matricula: "lmbmomp",
        sexo: "M",
        intereses: 
            [
                "Futbol",
                "Starcraft",
                "Música"
            ],
        dirección:
            {
                calle: "Campo Horcón",
                colonia: "Reynosa",
                número: "589"
            }
    }

var someArray = 
    [
        " item 1 ",
        " item 2 ",
        " item 3 ",
        " item 4 ",
        " item 5 ",
        " item 6 ",
        " item 7 "
    ]

    const sumaDosNumeros = (datoA, datoB) =>
    {
        console.log(datoA + datoB)
    }

/*metodo jquery
var userName = $("#user-name").val()

/*metodo javascript
var userName = document.getElementById("user-name").value
    
var userLastName;
var userMotherName;*/

const printFullName = (nombre, apaterno, amaterno) => 
    {
        userName = nombre;
        userLastName = apaterno;
        userMotherName = amaterno;
        console.log("Mi nombre es " + userName + " " + userLastName + " " + userMotherName)
    }

const printVariables = () =>
    {
        console.log(userName);
        console.log(userLastName);
        console.log(userMotherName);
    }

const getUserData = () =>
    {
        let userName = $("#user-name").val();
        let userLastName = $("#user-lastname").val();
        let userMotherName = $("#user-mothername").val();
        console.log(userName + " " + userLastName + " " + userMotherName)
        let userObject = {};
        userObject.name = userName;
        userObject.lastName = userLastName;
        userObject.motherName = userMotherName;
        console.log(userObject);
    }

$("#save-button").on("click", (/*event*/) =>
    {
        getUserData();
        /*$(event.target).fadeOut();
        $("form").fadeOut();*/
    })

$("#user-name").on("keypress",(event) =>
    {
        console.log($(event.target).val())
    })