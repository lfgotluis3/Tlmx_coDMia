/*
//ciclo for
var results = [];
for (let i = 0; i <= 10; i++) 
{
    console.log (i);
    results[i] = function () 
    {
        return i * 2;
    }
};
/*esto es lo mismo en ecmascript6*/
/*for (let i = 0; i <= 10; i++) 
{
    console.log (i);
    results [i] = () => 
    {
        return i * 2;
    }  
};*/

//Array
/*var members = 
[
    {
        nombre: "isra",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "enrique",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "jorge",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "victor",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "luis",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "david",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "daniel",
        apellido: "lopez",
        edad: "28"
    }
];

//funcion map
var fullName = members.map ((member) =>
{
    console.log(`${member.nombre} ${member.apellido}`);
    return (`${member.nombre} ${member.apellido}`);
});*/
//funcion forEach--mas lento que funcion map
/*var fullName = members.forEach((member) => 
{
    console.log(`${member.nombre} ${member.apellido}`);
    return (`${member.nombre} ${member.apellido}`);
});*/


//recoger números divisibles entre 5 y guardarlos en nuevo Array
//forEach
/*var nums = [10, 7, 30, 82, 6, 5,];
var newNums = [];

nums.forEach ((num) =>
{
    if (num % 5 == 0)
    {
        console.log (num);
        newNums.push (num);
    }
});
console.log (newNums);*/

//sprite operate
//Union de dos Arrays
/*var days = ['lunes', 'martes'];
var otherDays = ['jueves', 'viernes'];
days.push ('miercoles');
otherDays.push ('sábado', 'domingo');
console.log (days);
console.log (otherDays);*/

//formula antigua
/*union = days.concat (otherDays);
console.log (union);*/

//formula actual
/*var week = [...days, ...otherDays];
console.log (week);*/

//otra virtud de sprite operate
//ejemplo
/*var x = 'deletrear';
x = [...x];*/

//Array
/*var members =
[
    {
        nombre: "isra",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "enrique",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "jorge",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "victor",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "luis",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "david",
        apellido: "lopez",
        edad: "29"
    },
    {
        nombre: "daniel",
        apellido: "lopez",
        edad: "28"
    }
];

//funcion map
var fullName = members.map ((member) =>
{
    let deletrear = `${member.nombre} ${member.apellido}`
    return [...deletrear];
});
console.log (fullName);*/

//jquery
