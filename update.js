
const init = async () => {
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
    if (id) {
      //get restarant by ID
      try {
        const url = `http://localhost:5000/restaurants/${id}`;
        // console.log(url + id);
        const restaurant = await fetch(url + id, {
          method: "GET",
          moode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        //console.log(restaurant.result);
        document.getElementById("id").value = restaurant.result.id;
        document.getElementById("name").value = restaurant.result.name;
        document.getElementById("type").value = restaurant.result.type;
        document.getElementById("imageurl").value = restaurant.result.imageurl;
      } catch (error) {
        alert(`Restaurant id ${id} is not found`);
      }
    } else {
      alert("Restaurant id is missing");
    }
  };
  const editResto = async () => {
      console.log("hello");
      const id = document.getElementById("id").value;
    if(id){
        const params = {
            id:id,
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            imageurl: document.getElementById("imageurl").value,
        }
        try{
          const url = "http://localhost:5000/restaurant/"
        console.log(url+id);
        const restaurant = await fetch(url + id, {
        method:"PUT",
        moode:"cors",
        cache:"no-cache",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(params)
    }).then((response)=>response.json())
    .then(() =>{
        alert(`Restaurant id ${id} is not Update!`)
        
    })
        }catch(error){
            console(error)
        }
    }
  }