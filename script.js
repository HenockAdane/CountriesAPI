document.querySelector("#theme-btn").addEventListener("click", (e) =>{
    if (document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        for(let i=0; i <document.querySelectorAll(".country").length; i++){
            document.querySelectorAll(".country")[i].classList.toggle("dark-mode")
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
        document.querySelectorAll(".country")[i].classList.toggle("dark-mode")
    }}
})

let search = document.querySelector("#search")

let container = document.querySelector(".container");

fetch(`https://restcountries.eu/rest/v2/all`).then(res => res.json()).then(data => {

let output = ""
    data.forEach((a) =>{

        let aTag = document.createElement("a");
        aTag.classList.add("country");
        aTag.setAttribute("href", "#");

        let img = document.createElement("img");
        img.setAttribute("src", a.flag);

        let h4 = document.createElement("h4");
        h4.textContent = a.name

        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        
        p1.textContent = `Population: ${a.population}`
        p2.textContent = `Region:${a.region}`
        p3.textContent = `Capital: ${a.capital}`

        aTag.appendChild(img);
        aTag.appendChild(h4)
        aTag.appendChild(p1)
        aTag.appendChild(p2)
        aTag.appendChild(p3)
        
//         output += ` <a class="country" href="#">
//         <img src = ${a.flag}>
//         <h4>${a.name}</h4>
//         <p>Population: ${a.population}</p>
//         <p>Region:${a.region}</p>
//         <p>Capital: ${a.capital}</p>
//        </a>
// `
//         container.innerHTML = output;

            output += aTag;
            container.appendChild(aTag)
    })
})


    



search.addEventListener("keyup", (e)=>{

    let term = search.value.toLowerCase();
    let aTag = document.querySelectorAll(".country");

    aTag.forEach((a)=>{
        console.log(a.children)
        if (a.children[1].textContent.toLowerCase().indexOf(term) !== -1){
            a.style.display = "flex"
        }

        else {
            a.style.display = "none"
        }
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

document.querySelector("main").addEventListener("click", (e) =>{
    e.preventDefault();


        
        
    
    let nameC;
    if (e.target.parentElement.classList.contains("country")){
        nameC = e.target.parentElement.children[1].textContent
        document.querySelector("main").style.display = "none";
        document.querySelector(".more-info").style.display = "block"
        document.querySelector(".search-div").style.display = "none"
    } 

    else if(e.target.classList.contains("country")){
        nameC = e.target.children[1].textContent;
        document.querySelector("main").style.display = "none";
        document.querySelector(".more-info").style.display = "block"
        document.querySelector(".search-div").style.display = "none"
    }

    fetch(`https://restcountries.eu/rest/v2/name/${nameC}`).then(res => res.json()).then(data => {
        data.forEach((a) =>{
            let currencies; 
            a.currencies.forEach((c)=>{
                currencies = `${c.name}, ${c.symbol}`
            
            })

            let languages = "";
            a.languages.forEach((l)=>{
                languages += `${l.name},`
            })

            // let borders = "";
            // a.borders.forEach((border)=>{
            //     fetch(`https://restcountries.eu/rest/v2/alpha/${border}`).then(res1 => res1.json()).then(data2 => console.log(data2.name))
            // })
            // console.log(borders)

            // let img = document.createElement("img");
            // img.src= a.flag;

            // let li1 = document.createElement("li")
            // let li1 = document.createElement("li")
            // let li1 = document.createElement("li")
            // let li1 = document.createElement("li")
            // let li1 = document.createElement("li")

            // let p1 = document.createElement("p");
            // let p1.5 = document.createElement("p");
            // let p2 = document.createElement("p");
            // let p2.5 = document.createElement("p");
            // let p3 = document.createElement("p");
            // let p3.5 = document.createElement("p");
            // let p4 = document.createElement("p");
            // let p4 = document.createElement("p");
            
            document.querySelector(".flex").innerHTML = `
            <img src=${a.flag}>
     
    
        <div class="info">
            <h3>${a.name}</h3>
    
            <ul>
                <li>
                    <p><strong>Native Name:</strong> ${a.nativeName}</p><p><strong>Top Level Domain:</strong> ${a.topLevelDomain}</p>
                </li>
    
                <li>
                    <p><strong>Population:</strong> ${a.population}</p><p><strong>Currencies:</strong> ${currencies}</p>
                </li>
    
                <li>
                    <p><strong>Region:</strong> ${a.region}</p><p><strong>Languages:</strong> ${languages}</p>
                </li>
    
                <li><p><strong>Sub Region:</strong> ${a.subregion}</p></li>
    
                <li><p><strong>Capital:</strong> ${a.capital}</p></li>
            </ul>
        </div>`

        })
    })

    
    
    

    
    
})

document.querySelector("#back").addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("main").style.display = "flex"
    document.querySelector(".more-info").style.display = "none"
    document.querySelector(".search-div").style.display = "flex"
})

 console.log(1)
