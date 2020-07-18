document.querySelector("#theme-btn").addEventListener("click", (e) =>{
    if (document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        for(let i=0; i <document.querySelectorAll(".country").length; i++){
            document.querySelectorAll(".country")[i].style.color = "black";
        }
        document.querySelector("#theme-btn").innerHTML = '<i class="fas fa-moon">Dark Mode</i>';
        document.querySelector("#theme-btn").style.backgroundColor = "white";
        document.querySelector("#theme-btn").style.color = "black";



    }

    else {document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.querySelector("#theme-btn").innerHTML = '<i class="fas fa-sun">Light Mode</i>';
    document.querySelector("#theme-btn").style.backgroundColor = "black";
    document.querySelector("#theme-btn").style.color = "white";
    for(let i=0; i <document.querySelectorAll(".country").length; i++){
        document.querySelectorAll(".country")[i].style.color = "white";
    }}
})


let search = document.querySelector("#search")

let container = document.querySelector(".container");

fetch(`https://restcountries.eu/rest/v2/all`).then(res => res.json()).then(data => {

let output = ""
    data.forEach((a) =>{
        
        output += ` <a class="country" href="#">
        <img src = ${a.flag}>
        <h4>${a.name}</h4>
        <p>Population: ${a.population}</p>
        <p>Region:${a.region}</p>
        <p>Capital: ${a.capital}</p>
       </a>
`
        container.innerHTML = output;
    })
})

search.addEventListener("keyup", (e)=>{

    fetch(`https://restcountries.eu/rest/v2/name/${search.value}`).then(res => res.json()).then(data => {

let output = ""
    data.forEach((a) =>{
        
        output += ` <a class="country" href="#">
        <img src = ${a.flag}>
        <h4>${a.name}</h4>
        <p>Population: ${a.population}</p>
        <p>Region:${a.region}</p>
        <p>Capital: ${a.capital}</p>
       </a>
`
        container.innerHTML = output;
    })
})


})



let countries = document.querySelectorAll(".country");



// for (let i=0; i < , i++){
//     countries[i].addEventListener("click", (e)=>{
//         e.preventDefault();
//         console.log("testing")
//     })
// }

for(let i=0; i <countries.length; i++){
    countries[i].addEventListener("click", (e)=>{
                e.preventDefault();
                console.log("testing")
            })
}

num = 0;
document.querySelector("main").addEventListener("click", (e) =>{
    e.preventDefault();
    if (e.target.parentElement.classList.contains("country") || e.target.classList.contains("country")){
        document.querySelector("main").style.display = "none";
        document.querySelector(".more-info").style.display = "block"
        document.querySelector(".search-div").style.display = "none"
        
        
    }
    
})

document.querySelector(".back").addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("main").style.display = "flex"
    document.querySelector(".more-info").style.display = "none"
    document.querySelector(".search-div").style.display = "flex"
})
 console.log(1)
