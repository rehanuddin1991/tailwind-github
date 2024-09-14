 
        const loadMeal=()=>
    {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Potato")
        .then(res=>res.json())
        .then (data=>showMeals(data.meals));
    }
    const showMeals=(meals)=>
    {
        document.getElementById("meal_container").innerHTML="";
        const meal_container=document.getElementById("meal_container");

        meals.forEach(items => {
            console.log(items);
            const new_div=document.createElement("div");
        new_div.classList="card b g-base-100 w-72 shadow-xl  rounded-md";

        new_div.innerHTML=
        `
         
            <figure>
                <img
                src="${items.strMealThumb}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${items.strMeal}</h2>
                <p>${items.strInstructions}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
         
        `;
        meal_container.appendChild(new_div);
            
        });
        

    }
    