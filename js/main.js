
 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("open").style.marginLeft = "250px";

    document. getElementById("opening"). style. display = "none";
    document. getElementById("closing").classList.remove("d-none") ;

  


}
  

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.marginLeft = "0";
  
    document. getElementById("opening"). style. display = "block";
    document. getElementById("closing"). style. display = "none";
  
  }

  //////////////////////////////////////////////////////////////

    

    function goToSearch(){

        document.getElementById("search").classList.replace("d-none", "d-block");
        document.getElementById("home").classList.add("d-none");
        document.getElementById("categories").classList.replace("d-block", "d-none");
        document.getElementById("ingredients").classList.replace("d-block", "d-none");
        document.getElementById("area").classList.replace("d-block", "d-none");
        document.getElementById("contact").classList.replace("d-block", "d-none");
        

    }

    function goToCategories(){

        document.getElementById("home").classList.add("d-none");
        document.getElementById("categories").classList.replace("d-none", "d-block");
        document.getElementById("search").classList.replace("d-block", "d-none");
        document.getElementById("ingredients").classList.replace("d-block", "d-none");
        document.getElementById("area").classList.replace("d-block", "d-none");
        document.getElementById("contact").classList.replace("d-block", "d-none");
        getCategories();


    }

    function goToIngredients(){

        document.getElementById("home").classList.add("d-none");
        document.getElementById("ingredients").classList.replace("d-none", "d-block");
        document.getElementById("categories").classList.replace("d-block", "d-none");
        document.getElementById("search").classList.replace("d-block", "d-none");
        document.getElementById("area").classList.replace("d-block", "d-none");
        document.getElementById("contact").classList.replace("d-block", "d-none");
        getIngredients();

    }

    function goToArea(){

        document.getElementById("home").classList.add("d-none");
        document.getElementById("area").classList.replace("d-none", "d-block");
        document.getElementById("ingredients").classList.replace("d-block", "d-none");
        document.getElementById("categories").classList.replace("d-block", "d-none");
        document.getElementById("search").classList.replace("d-block", "d-none");
        document.getElementById("contact").classList.replace("d-block", "d-none");
        getArea();

    }

    function goToContact(){

        document.getElementById("home").classList.add("d-none");
        document.getElementById("contact").classList.replace("d-none", "d-block");
        document.getElementById("area").classList.replace("d-block", "d-none");
        document.getElementById("ingredients").classList.replace("d-block", "d-none");
        document.getElementById("categories").classList.replace("d-block", "d-none");
        document.getElementById("search").classList.replace("d-block", "d-none");



    }


 


  ///////////////////////////////////////////////////////////////

         //search

  let searchedMeals=[];

 async function searchByName(name){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const finalResponse = await response.json();

    searchedMeals=finalResponse.meals;
    console.log(searchedMeals);
   
   
    displaySearchedMeals(searchedMeals);

  }

  function displaySearchedMeals(searchedMeals) {
    let cartoona = "";

    for (let i = 0; i < searchedMeals.length; i++) {
        cartoona += `
        <div class="col-md-3 ">
                <div onclick="getMealsDetails('${searchedMeals[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${searchedMeals[i].strMealThumb}" alt="hello">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${searchedMeals[i].strMeal}</h3>
                    </div>

                </div>
        </div>
        `
    }

        searchData.innerHTML = cartoona
}




 async function searchByLetter(letter){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    const finalResponse = await response.json();

    searchedMeals=finalResponse.meals;
    console.log(searchedMeals);
   
   
    displaySearchedMeals(searchedMeals);

  }







         


 ////////////////////////////////////////////////////////////
  //home page meals

  let rowData = document.getElementById("rowData");
 
  
  let data=[];


  async function getMeals(){

   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=  `)

   const finalResponse = await response.json();

   data=finalResponse.meals;
   console.log(data);
   
   
displayMeals(data);

}

      
    function displayMeals(arr) {
        let cartoona = "";
    
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3 ">
                    <div onclick="getMealsDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="hello">
                        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                        </div>

                    </div>
            </div>
            `
        }
    
        rowData.innerHTML = cartoona
    }
    

    getMeals();

  ///////////////////////////////////////////////////////

  //meals details

  
  let detailsData= document.getElementById("detailsData");
  let details=[];

  async function getMealsDetails(idMeal){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
 
    const finalResponse = await response.json();
 
    details=finalResponse.meals;
    console.log(details);
    
    
   displayMealsDetails(details);
 }

 //not working

  function displayMealsDetails(details){

    let cartoona = "";
    
    for (let i = 0; i < details; i++) {
        cartoona += `
        <div class="col-md-4">
            <img class="w-100 rounded-3" src="${details[i].strMealThumb}" alt="hello">
            <h2>${details[i].strMeal}</h2>
        </div>

    
  
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p> ${details[i].strInstructions}</p>

            <h2>Area : ${details[i].strArea}</h2>
            <h2>Category : ${details[i].strCategory}</h2>
            <h2>Recipes : </h2>

            <ul class="list-group d-flex flex-row flex-wrap ">

                <li class="list-group-item m-2 p-2 rounded-3 ">1 cup Lentils</li>
                
              </ul>

              <h2 class="mb-4">Tags :  <li class="alert alert-danger m-2 p-1">${details[i].strTags}</li>  </h2>
              <button type="button" class="btn btn-success">Source</button>
              <button type="button" class="btn btn-danger"><a href="${details[i].strYoutube}">YouTube</a></button>



        </div>

        `
    }

    detailsData.innerHTML = cartoona
}

    ///////////////////////////////////////////////////////////////////////

    //categories

    let categoriesData = document.getElementById("categoriesData");


    let categories=[];


  async function getCategories(){

   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php `)

   const finalResponse = await response.json();

   categories=finalResponse.categories;
   console.log(categories);
   
   
   displayCategories(categories);

}


    
    function displayCategories(arr) {
        let cartoona = "";
    
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3 ">
           
            <div onclick="getCategorymeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">

                        <img class="w-100" src="${arr[i].strCategoryThumb}" alt="hello">
                        <div class="meal-layer position-absolute d-flex flex-column align-items-center text-black p-2">

                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription}</p>
                        </div>

                    </div>
            </div>
            `
        }
    
        categoriesData.innerHTML = cartoona
    }
    

    getCategories();


/////////////////////////////////////////////////////////////

  //filtered categories

function displayFilteredCategories(filteredCategories){

    let cartoona = "";
    
    for (let i = 0; i < 20; i++) {
        cartoona += `
        <div class="col-md-3 ">
                <div onclick="getMealsDetails('${filteredCategories[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${filteredCategories[i].strMealThumb}" alt="hello">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${filteredCategories[i].strMeal}</h3>
                    </div>

                </div>
        </div>
        `
    }

    categoriesData.innerHTML = cartoona
}



  let filteredMeals=[];

   async function getCategorymeals(strCategory){

      
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)

        const finalResponse = await response.json();
     
        filteredMeals=finalResponse.meals;
        console.log(filteredMeals);

        displayFilteredCategories(filteredMeals);
        
       
    }



    

    ///////////////////////////////////////////////////////////////////////

    //Areaa

    let areaData = document.getElementById("areaData");


    let area=[];


  async function getArea(){

   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list `)

   const finalResponse = await response.json();

   area=finalResponse.meals;
   console.log(area);
   
   
   displayArea(area);

}


    
    function displayArea(arr) {
        let cartoona = "";
    
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3 ">
            <div onclick="getAreameals('${arr[i].strArea}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <div class="d-flex flex-column text-center">
                
            <i class="fa-solid fa-house-laptop fa-4x"></i>
             <h3>${arr[i].strArea}</h3>
            </div>              
            </div>
            </div>
            `
        }
    
        areaData.innerHTML = cartoona
    }
    

    getArea();

  ///////////////////////////////////////////////////////////////
   //filtered area

   
   let filteredarea=[];

function displayFilteredArea(filteredarea){

    let cartoona = "";
    
    for (let i = 0; i < filteredarea.length; i++) {
        cartoona += `
        <div class="col-md-3 ">
                    <div onclick="getMealsDetails('${filteredarea[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${filteredarea[i].strMealThumb}" alt="hello">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${filteredarea[i].strMeal}</h3>
                    </div>
                    </div>     
        </div>
        `
    }

    areaData.innerHTML = cartoona
}



  

   async function getAreameals(Area){

      
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)

        const finalResponse = await response.json();
     
        filteredarea=finalResponse.meals;
        console.log(filteredarea);

        displayFilteredArea(filteredarea);
        
       
    }


    /////////////////////////////////////////////////////////////////////////////


    //Ingredients


    let ingredientsData = document.getElementById("ingredientsData");


    let ingredients=[];


  async function getIngredients(){

   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list `)

   const finalResponse = await response.json();

   ingredients=finalResponse.meals;
   console.log(ingredients);
   
   
   displayIgredients(ingredients);

}


    
    function displayIgredients(arr) {
        let cartoona = "";
    
        for (let i = 0; i < 20; i++) {
            cartoona += `
            <div class="col-md-3">
            <div onclick="getIngredientsmeals('${arr[i].strIngredient}')">

                <div class="d-flex flex-column text-center  id="ingredients">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${arr[i].strIngredient}</h3>
                    <p > ${arr[i].strDescription.slice(0,200)}</p>
                  </div>          
               
    
            </div>
          </div>
            `

            
        }

       
    
        ingredientsData.innerHTML = cartoona;
    }
    

    getIngredients();

   

     /////////////////////////////////////////////////////////////////////////////


    //filtered ingredients

    let filteredIngredients=[];

 function displayFilteredIngredients(filteredIngredients){

    let cartoona = "";
    
    for (let i = 0; i < filteredIngredients.length; i++) {
        cartoona += `
        <div class="col-md-3 ">
        <div onclick="getMealsDetails('${filteredIngredients[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">

                    <img class="w-100" src="${filteredIngredients[i].strMealThumb}" alt="hello">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${filteredIngredients[i].strMeal}</h3>
                   </div>  
        </div>       
        </div>
        `
    }

    ingredientsData.innerHTML = cartoona
}



  

   async function getIngredientsmeals(ingredients){

      
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)

        const finalResponse = await response.json();
     
        filteredIngredients=finalResponse.meals;
        console.log(filteredIngredients);

        displayFilteredIngredients(filteredIngredients);
        
       
    }


    /////////////////////////////////////////////////////////////////////

    //Validation

    //name Validation

    document.getElementById("registerName").onkeyup= function nameValidation(){
        let nameInput=document.getElementById("name").value;
        let nameRegex=/^[a-zA-Z ]+$/;
        let valResult=nameRegex.test(nameInput);

        if(valResult==false){
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
        return true;
    }

    //Email Validation

    document.getElementById("registerEmail").onkeyup=function emailValidation(){
        let emailInput=document.getElementById("email").value;
        let emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valresult=emailRegex.test(emailInput);

        if(valresult==false){
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
        return true;
    }

    //Phone Validation

    document.getElementById("registerPhone").onkeyup=function phoneValidation(){
        let phoneInput=document.getElementById("phone").value;
        let phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        let valresult=phoneRegex.test(phoneInput);

        if(valresult==false){
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
        return true;
    }


    //Age Validation

    document.getElementById("registerAge").onkeyup=function ageValidation(){
        let ageInput=document.getElementById("age").value;
        let ageRegex=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
        let valresult=ageRegex.test(ageInput);

        if(valresult==false){
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
        return true;
    }

    //Password Validation

    document.getElementById("registerPassword").onkeyup=function passValidation(){
        let passwordInput=document.getElementById("password").value;
        let passwordRegex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
        let valresult=passwordRegex.test(passwordInput);

        if(valresult==false){
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
        return true;
    }

    //repassword validation

    document.getElementById("registerRepassword").onkeyup=function repassValidation(){
       
        let passwordInput=document.getElementById("password").value;
        let passwordRegex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
        let valresult=passwordRegex.test(passwordInput);


        if(valresult==false){
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
        return true;
    }


    //submit button
/*
    let submitBtn=document.getElementById("submit");

    if (nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passValidation() &&
    repassValidation()) {
    submitBtn.removeAttribute("disabled")
} else {
    submitBtn.setAttribute("disabled", true)
}
*/