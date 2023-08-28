const genRestaurantCard = (restaurant) =>{
    const card = document.createElement("div")
    card.className = "card"
    card.style = "width : 18rem"
    const restoCard = ` 
   
    <img src="${restaurant.imageurl}" class="card-img-top" alt="...">
    <div class= "card-body">
        <h5 class = "card-title"> ${restaurant.name}</h5>
        <p class= "card-text"> ${restaurant.type}  </p>
        <a href="update.html?id=${restaurant.id}" class="btn btn-primary">update</a>
        <a href="" class="btn btn-danger col-xs-2"onclick="deleteRestaurant(${restaurant.id})">Delete</a>
        </div>
    
`;
    card.innerHTML = restoCard;

    const restaurants = document.querySelector("#restaurant");
    restaurants.appendChild(card);
    
}


const onLoad = async () => {
    const allRestaurant = await fetch("http://localhost:5000/restaurant", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

    }).then((response)=>{
        return response.json();
    })
     console.log(allRestaurant);
    allRestaurant.forEach((restaurant) => genRestaurantCard(restaurant))

}

const deleteRestaurant = async (id) =>{
    if(id){
        const url = "http://localhost:5000/restaurant/"
        const restaurant = await fetch(url + id , {
            method:"DELETE",
            moode:"cors",
            cache:"no-cache",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>response.json())
        .then(()=>{
            alert(`Restaurant ID: ${id} is delete`)
            location.reload();
        })
    }else{
        alert("Restaurant ID is missing")
    }
    }
  
const main = () => {
    onLoad();
}
main();