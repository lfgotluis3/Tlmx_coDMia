var database = firebase.database();
var coffeeReference = database.ref(`/coffeeCatalog`);

coffeeReference.on(`value`, (snapshot) =>
    {
        console.log(snapshot.val());
        let refContent = snapshot.val();
        printCoffeeCatalog(refContent);
    })

const printCoffeeCatalog = (refContent) =>
    {
        $("#coffee-wrapper").empty();

        $.each(refContent, (key, value) => 
            {
                console.log(`key ${key}, value ${value}`)
                $("#coffee-wrapper").append
                    (`
                        <div class="col-12 col-lg-4">
                            <div class="card mt-3">
                                <img class="w-100 d-block mx-auto" src="${value.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${value.name}</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item">${value.description}</li>
                                        <li class="list-group-item text-right font-italic font-weight-bold text-success">${value.price}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `)
            })
    }

const uploadCoffee = () =>
        {
            let coffeName = $("#coffe-name").val();
            let coffeDescription = $("#coffe-description").val();
            let coffePrice = $("#coffe-price").val();
            let coffeImage = $("#coffe-image").val();
            let coffeeObject = 
                {
                    name: coffeName,
                    description: coffeDescription,
                    price: coffePrice,
                    image: coffeImage
                }
            console.log (coffeeObject);
            coffeeReference.push
                (
                coffeeObject
                )
        }

$("#save-button").on("click", () =>
    {
        uploadCoffee ();
    })

/*
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
    */



