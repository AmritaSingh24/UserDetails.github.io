
// Get userID from local storage.
let storage = localStorage.getItem("localstorage");
let id = "";
if(storage == null){
    inputObj = [];
}
else{
    inputObj = JSON.parse(storage);
    id = inputObj[0]
}

// delete userID to local storage.
const home = document.querySelector('.nav__list');
home.onclick = ()=>{
    inputObj = [];
    localStorage.setItem("localstorage", JSON.stringify(inputObj));
}

let apiKey = "0b9aa1ce15a36848a7fce495b9f3008c"; // for location api.

//  fetch user data to JSON Placeholder.
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res) => {
    return res.json();
})
.then((post) => {
    // console.log(post)
    
    // const latitude = post.address.geo.lat;
    // const longitude = post.address.geo.lng;

    const name = post.name;

    // get First Name, Last Name and First letter of Name.
    const x = name.indexOf(" ");
    const partOne = name.substr(0, x);
    const partTwo = name.substr(x + 1);
    const y = partTwo.indexOf(" ");
    const part2 = partTwo.substr(0, y);
    const partThree = partTwo.substr(y + 1);
    function nameParts (){
        if(partOne === "Mrs." || partOne === "Mr."){
            document.querySelector("#Fname").innerHTML = part2;
            document.querySelector("#FLetter").innerHTML = part2.charAt(0);
            document.querySelector("#Lname").innerHTML = partThree;
        }else{
            document.querySelector("#Fname").innerHTML = partOne;
            document.querySelector("#FLetter").innerHTML = partOne.charAt(0);
            document.querySelector("#Lname").innerHTML = partTwo;
        }
    }
    nameParts();
    
    document.querySelector("#name").innerHTML = name;
    document.querySelector("#email").innerHTML = post.email;
    document.querySelector("#phone").innerHTML = post.phone;
    document.querySelector("#ID").innerHTML = post.id;
    document.querySelector("#username").innerHTML = post.username;
    document.querySelector("#street").innerHTML = post.address.street;
    document.querySelector("#suite").innerHTML = post.address.suite;
    document.querySelector("#city").innerHTML = post.address.city;
    document.querySelector("#zipcode").innerHTML = post.address.zipcode;
    document.querySelector("#website").innerHTML = post.website;
    document.querySelector("#companyName").innerHTML = post.company.name;
    document.querySelector("#CatchPhrase").innerHTML = post.company.catchPhrase;
    document.querySelector("#BS").innerHTML = post.company.bs;

    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    // .then( res=>{
    //     res.json()
    // 	.then(data=>{
    //         console.log(data)
    //     })
    //     .catch(err=>console.log(err))
    // })
    // .catch(err=>console.log(err))
})
.catch(err=>console.log(err))