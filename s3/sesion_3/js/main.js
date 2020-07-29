/*
var x = 5;
var y = 10;
var someName ="lfgotluis3";
var weAreLearning = true;
var someFloat = 3.245689;

console.log(x*y);
console.log(x/y);
console.log(x+y);
console.log(x-y);
console.log(x%y);

console.log(typeof x);
console.log(typeof y);
console.log(typeof someName);
console.log(typeof weAreLearning);
console.log(typeof someFloat);
*/

//metodo que ejecuta una funcion, cuando el documento esta listo
/*$(document).ready(function()
    {
        printCars ();
    })*/

/*var someArray =
    [
        "mazda",
        "honda",
        "toyota",
        "renault"
    ]

var someObject =
    {
        company:"mazda",
        model:"mazda 6",
        color:"red",
        horsePower:"250hp",
        cilinders:"6"
    }*/

var mazdaCars = localStorage.getItem("carsArray");
console.log(mazdaCars);
mazdaCars =JSON.parse(mazdaCars)//get, traer datos
console.log(mazdaCars);
    [
    /*    {
            company:"mazda",
            model:"mazda 6",
            color:"red",
            horsePower:"250hp",
            cilinders:"6"
        },
        {
            company:"mazda",
            model:"mazda 2",
            color:"blue",
            horsePower:"110hp",
            cilinders:"4"
        },{
            company:"mazda",
            model:"mazda 3",
            color:"green",
            horsePower:"250hp",
            cilinders:"6"
        },
        {
            company:"mazda",
            model:"mazda 4",
            color:"black",
            horsePower:"110hp",
            cilinders:"4"
        },
        {
            company:"mazda",
            model:"mazda 4",
            color:"black",
            horsePower:"110hp",
            cilinders:"4"
        }*/
    ]

//barrido de datos y los muestra en consola
function printCars()
    {
        $("#cars-list tbody").append(rowHtml).empty();//empty, metodo para vaciar la tabla y no repita los datos en la impresion
        for(i = 0; i < mazdaCars.length; i++)
        {
            //debugger
            var objeto1 = mazdaCarsre[i];
            console.log(objeto1);
            //acceso a las propiedades del objeto e impresion en consola
            var carCompany = objeto1.company;
            var carModel = objeto1.model;
            var carColor = objeto1.color;
            var carHp = objeto1.horsePower;
            var carCilinders = objeto1.cilinders;
            console.log(carCompany, carModel, carColor, carHp, carCilinders);
            //impresion de datos en la tabla, creando una fila por cada elemento (html en js)
            var rowHtml =  "<tr>"+
                                "<td>"+carCompany+"</td>"+
                                "<td>"+carModel+"</td>"+
                                "<td>"+carColor+"</td>"+
                                "<td>"+carHp+"</td>"+
                                "<td>"+carCilinders+"</td>"+
                            "</tr>"
            //para incertar los datos en la tabla con jquery
            $("#cars-list tbody").append(rowHtml);//.append pide un selector y que le voy a incertar a ese selector
        }
    }

/*printCars()*///muestra los datos obtenidos en la tabla
//(formulario form-group)
//agregando datos del usuario, atravez de una interfaz
//e impresion en consola
function getCarData()//extrallendo datos del formulario
    {
        //val metodo de input que extrae los datos del formulario
        var carCompany = $("#car-company").val();
        var carModel = $("#car-model").val();
        var carColor = $("#car-color").val();
        var carHp = $("#car-horse-power").val();
        var carCilinders = $("#car-cilinders").val();
        console.log(carCompany, carModel, carColor, carHp, carCilinders);

//agregando los datos a la tabla como array, convirtiendo las variables a objeto e imprimiendo datos atravez de un boton
        var carObject =
        {
            company:carCompany,
            model:carModel,
            color:carColor,
            horsePower:carHp,
            cilinders:carCilinders
        }
        mazdaCars.push(carObject);
        /*printCars();*/
        console.log(mazdaCars);
        $("#add-car-form input").val("");//selector para vaciar formulario de entrada de datos del usuario

        //Local Store, base de datos (PRUEBA)
        var carsString = JSON.stringify(mazdaCars);//stringify-de array a string
        localStorage.setItem("carsArray", carsString);//setItem, para guardar los datos en la base de datos
    }

$("#submit-button").on("click", function()//boton para guardar datos del usuario
{
    getCarData();
});
