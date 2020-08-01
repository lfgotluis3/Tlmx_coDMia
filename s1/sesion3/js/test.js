var myVar = "Yo soy una variable tipo string";
var someNumber = 5;
var someFloat = 5.5;
var weAreKoders = true;
var someArray = ["sesion 1", "sesion 2", "sesion 3"];
var someObject = 
{
    name: "sesion 1",
    date: "08/08/18",
    topic: "JS Fundaments"
};

var someOtherObject =
{
    name: "Jhon", 
    personalData: 
    {
        address: "some address",
        phone: "some phone"
    }
};

var foo =
{
    groupName: "Temex koders",
    members:
    [
        {
            name: "juan manuel",
            mail: ""
        },
        {
            name: "andrea",
            mail: ""
        },
        {
            name: "alejandro",
            mail: ""
        },
        {
            name: "marco",
            mail: ""
        },
        {
            name: "zague",
            mail: ""
        }
    ]
};

/*console.log (myVar);*/

function someFunction (printText)
{
    alert (printText)
};

var memberList = 
[
    {
        name: "juan manuel",
        mail: ""
    },
    {
        name: "andrea",
        mail: ""
    },
    {
        name: "alejandro",
        mail: ""
    },
    {
        name: "marco",
        mail: ""
    },
    {
        name: "zague",
        mail: ""
    },
    {
        name: "david",
        mail: ""
    },
    {
        name: "israel",
        mail: ""
    },
    {
        name: "yamilet",
        mail: ""
    }
]

function getMemberName ()
{
    memberList = foo.members;
    console.log (memberList);
};

function getMemberByIndex (memberIndex)
{
    if (memberIndex > memberList.length)
    {
        alert ("el miembro no existe")
    }
    else
    {
        console.log (memberList[memberIndex-1].name);
        var selectedMemberName = memberList[memberIndex-1].name;
        setMemberName(selectedMemberName);
    }
};

function getIndex ()
{
    var obteinedIndex = document.getElementById ("member-index").value;
    console.log (obteinedIndex);
    getMemberByIndex (obteinedIndex);
};

function setMemberName (nameToPrint)
{
    var nameContainer = document.getElementById ("member-name");
    nameContainer.innerHTML = nameToPrint;
};

function setElementMax ()
{
    document.getElementById("member-index").setAttribute ("max", memberList.length);
}