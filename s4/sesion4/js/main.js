function getFormData()
    {
        var projectObject = {};

        var projectName = $("#project-name").val();
        var projectDescription = $("#project-description").val();
        var customerMail = $("#customer-mail").val();
        var customerPhone = $("#customer-phone").val();
        var customerName = $("#customer-name").val();

        projectObject.projectName = projectName;
        projectObject.projectDescription = projectDescription;
        projectObject.customerMail = customerMail;
        projectObject.customerPhone = customerPhone;
        projectObject.customerName = customerName;
        console.log(projectObject)
        $("input").val("");
        $("textarea").val("");
    }

$("#submit-button").on("click",function()
    {
        getFormData();
    })

$("#get-purposes").on("click",function()
    {
        getPurposes();
    })
var projectArray =
    [
        {
            projectName:"Desarrollo de plataforma freelancer",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            customerMail:"luisf@gmail.com",
            customerPhone:"55 5598 5648",
            customerName:"Luis Fernando Rodríguez Ponce"
        },
        {
            projectName:"Desarrollo de plataforma freelancer",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            customerMail:"kodemia@gmail.com",
            customerPhone:"55 2365 4879",
            customerName:"Leonardo Santiago"
        },
        {
            projectName:"Desarrollo de plataforma freelancer",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            customerMail:"leonardo@gmail.com",
            customerPhone:"55 2365 4879",
            customerName:"Veronica Nemecio"
        }
    ]

var projectPurposeHtml =    `<div class="col-lg-3">
                                <div class="card my-2">
                                    <div class="card-body">
                                        <h5 class="card-title">Desarrollo de sitio web</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Luis Fernando Rodríguez Ponce</h6>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quis hic nemo nisi accusamus aperiam delectus laudantium nam laborum doloribus, dolor quos maiores aspernatur suscipit.</p>
                                        <p>lfgotluis3@gmail.com</p>
                                        <p>55 3429 6773</p>
                                        <p>Habilidades requeridas: <span class="badge badge-pill badge-primary">HTML</span> <span class="badge-primary">CSS</span> <span class="badge-primary">JS</span></p>
                                    </div>
                                </div>
                            </div>`

function getPurposes()
    {
        $("#purposes-wrapper").empty()
        projectArray.forEach(function(value, index)
            {
                console.log(value, index);
                var projectName = value.projectName;
                var projectDescription = value.projectDescription;
                var customerName = value.customerName;
                var customerPhone = value.customerPhone;
                var customerMail = value.customerMail;

                var projectPurposeHtml =    `<div class="col-lg-3">
                                                <div class="card my-2">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${projectName}</h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">${customerName}</h6>
                                                        <p class="card-text">${projectDescription}</p>
                                                        <p>${customerMail}</p>
                                                        <p>${customerPhone}</p>
                                                    </div>
                                                </div>
                                            </div>`

                $("#purposes-wrapper").append(projectPurposeHtml);
            })
    }

 var purposesDb = firebase.database();
var purposesReference = firebase.database().ref('purposesCollection/')
purposesReference.on('value', function(snapshot)
    {
        console.log(snapshot.val());
    });
