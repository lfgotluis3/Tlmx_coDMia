var dbContent;

var database =firebase.database();

var productsRef = database.ref(`/products`);

var productArray = [];

productsRef.on("value", (snapshot) =>
    {
        console.log(snapshot.val());
        dbContent = snapshot.val();
        fillCatalog();
    });

const fillCatalog = () =>
    {
        console.log(dbContent);
        $("#products-wrapper").empty();
        $.each(dbContent, (key, value) =>
            {
                console.log(`key ${key}, value{value}`);
                $("#products-wrapper").append
                    (` 
                        <div class="col-12 col-md-6 col-lg-3 mb-3">
                            <div class="card">
                                <img src="${value.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${value.name}</h5>
                                    <p class="card-text">${value.descripción}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${value.locacion}</li>
                                    <li class="list-group-item">${value.price}</li>
                                    <li class="list-group-item"></li>
                                </ul>
                                <button type="button" class="btn btn-success">Comprar</button>
                            </div>
                        </div>
                    `)
            });
    };

const getProductData = () =>
    {
        let name = $("#product-name").val();
        let descripción = $("#product-description").val();
        let price = $("#product-price").val();
        let locacion = $("#product-location").val();
        let image = $("#product-image").val();
        let productObject = {name, descripción, price, locacion, image};
        console.log(productObject); 
        productsRef.push(productObject);
    };

const loadContent = (contentUrl) =>
    {
        $("#content-wrapper").load(contentUrl, () =>
            {
                if (contentUrl === "index_2.html")
                    {
                        fillCatalog();
                    }

                else if (contentUrl === `upload_products.html`);
                    {
                        $("#add-product").on("click", () => 
                            {
                                getProductData();
                            });
                    }
            });
    };

const activeLink = (element) =>
    {
        $(".nav-item").removeClass("active");
        $(element).closest(".nav-item").addClass("active");
    };

$("#luis").show("slow");

loadContent("principal.html");