var coffeeArray = 
    [
        {
            coffeName: "Moca",
            coffeDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, officia. ",
            coffePrice: "$25.00",
            coffeImage: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale"
        },
        {
            coffeName: "Capuccino",
            coffeDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, officia.",
            coffePrice: "$35.00",
            coffeImage: "img/descarga.jpg"
        },
        {
            coffeName: "Levanta muertos",
            coffeDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, officia.Capuccino",
            coffePrice: "$50.00",
            coffeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYf09RGqRwQqB3LzxxgJ9uxNWNpTy-mvp8BDNS0fEXllppsgC"
        }
    ];

const getCoffeeForm = () =>
    {
        let coffeName = $("#coffe-name").val();
        let coffeDescription = $("#coffe-description").val();
        let coffePrice = $("#coffe-price").val();
        let coffeImage = $("#coffe-image").val();
        console.log(coffeName);
        let coffeeObject = {coffeName, coffeDescription, coffePrice, coffeImage};
        console.log(coffeeObject);
        coffeeArray.push(coffeeObject);
        console.log(coffeeArray);
        printCoffeeCatalog();
    }
    
$("#save-button").on("click", () =>
    {
        getCoffeeForm();
    })

const printCoffeeCatalog = () =>
    {
        $("#coffee-wrapper").empty();
        coffeeArray.forEach((item) =>
            {
                console.log(item);
                $("#coffee-wrapper").append
                    (`
                        <div class="col-12 col-lg-4">
                            <div class="card mt-3">
                                <img class="w-100 d-block mx-auto" src="${item.coffeImage}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${item.coffeName}</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item">${item.coffeDescription}</li>
                                        <li class="list-group-item text-right font-italic font-weight-bold text-success">${item.coffePrice}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `)
            })
    };

var petsArray = [];

const addPet = (name, breed, color) =>
    {
        petsArray.push
            (
                {
                    name, breed, color
                }
            );
        console.log(petsArray)
        printPets();
    }

const printPets = () =>
    {
        petsArray.forEach((item) =>
            {
                console.log(`Hola, soy ${item.name}, soy un ${item.breed} y mi color es ${item.color}`)
            })
    }