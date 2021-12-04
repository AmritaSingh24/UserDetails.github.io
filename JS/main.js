let index = 0;
const card = document.querySelector("#card");
const preLoader = document.querySelector(".pre-loader");

preLoader.style.display = "block";
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((post) => {
    preLoader.style.display = "none";
    for (let i = 0; i < post.length; i++){
        const userId = post[index].id;
        const name = post[index].name;

        // get first letter of name.
        const x = name.indexOf(" ");
        const partOne = name.substr(0, x);
        const partTwo = name.substr(x + 1);
        const y = partTwo.indexOf(" ");
        const part2 = partTwo.substr(0, y);
        const partThree = partTwo.substr(y + 1);
        let firstletter = "";
        function fLetter(){
            if(partOne === "Mrs." || partOne === "Mr."){
                firstletter = part2.charAt(0);
            }else{
                firstletter = partOne.charAt(0);
            }
        }
        fLetter()

        // DOM
        card.innerHTML += `
                            <div class="profile_card">
                                <div class="profile_content">
                                    <div class="profile_head flex">
                                        <div class="img flex">${firstletter}</div>
                                    </div>
                                    <div class="desc flex">
                                        <h2>${name}</h2>
                                        <ul>
                                            <li class="flex">
                                                <svg class="icon">
                                                    <use xlink:href="Images/sprite.svg#iconmonstr-mail-thin"></use>
                                                </svg>
                                                <dd>${post[index].email}</dd>
                                            </li>
                                            <li class="flex"> 
                                                <svg class="icon">
                                                    <use xlink:href="Images/sprite.svg#iconmonstr-phone-thin"></use>
                                                </svg>
                                                <dd>${post[index].phone}</dd>
                                            </li>
                                        </ul>
                                        <a href="Acount/Account.html">
                                            <button class="btn" id="${userId}">View More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>`
        
        index = index + 1;

        // store userID in local storage.
        const btn = document.querySelectorAll(".btn");
        btn.forEach(e => {
            e.addEventListener("click", function(){
                const input = e.id;
                if(input != 0){
                    let storage = localStorage.getItem("localstorage");
                    if(storage == null){
                        inputObj = [];
                    }
                    else{
                        inputObj = JSON.parse(storage);
                    }
                    inputObj.push(input);
                    localStorage.setItem("localstorage", JSON.stringify(inputObj));
                }
            });  
        });
        
    }
})
.catch((error)=>{
    console.log(error);
})

