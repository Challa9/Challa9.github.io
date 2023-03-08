
const all = document.querySelectorAll(".info");
const flag = document.getElementById("flag");
const off_name = document.getElementById("answer");
const nat_name = document.getElementById("answer1");
const currency = document.getElementById("answer2");
const capital = document.getElementById("answer3");
const cont = document.getElementById("answer4");
const landlocked = document.getElementById("answer5");
const pop = document.getElementById("answer6");
const lan = document.getElementById("answer7");
const google_link = document.getElementById("google_link");
const search = document.getElementById("search");

search.addEventListener("keydown", function(even){
    if(even.key === "Enter"){
        if(search.value != ""){
            fetchAPI(search.value);
        }
        else{
            console.log("search can't be empty");
        }
    }
})

async function fetchAPI(country){
    try {
        const url = `https://restcountries.com/v3.1/name/${country}`;

        const result = await fetch(url).then((res) => res.json());

        flag.src = result[0].flags.png;
        off_name.innerText =  result[0].name.official;
        nat_name.innerText = Object.values(result[0].name.nativeName)[0].official;
        lan.innerText = Object.values(result[0].languages)[0];
        capital.innerText = result[0].capital;
        cont.innerText = result[0].subregion;
        landlocked.innerText =  result[0].landlocked;
        currency.innerText = Object.values(result[0].currencies)[0].name + " (" + Object.values(result[0].currencies)[0].symbol+")";
        google_link.href = result[0].maps.googleMaps;
        console.log(result);
        let num = result[0].population;
        function addCommas(num){
            let str = num.toString().split("");
            for( let i = str.length - 3; i > 0; i -=3){
                str.splice(i, 0, ",");
            }
            return str.join('');
        }
        
        let new_pop = addCommas(num);
        pop.innerText = new_pop;
    } catch (error) {
        console.log(error)
    }

    

}
fetchAPI("United States of America");