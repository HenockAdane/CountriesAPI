document.querySelector("#theme-btn").addEventListener("click", (e) =>{
    if (document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }

    else {document.body.style.backgroundColor = "black"
    document.body.style.color = "white"}
})


let search = document.querySelector("#search")

let container = document.querySelector(".container");
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


 console.log(1)