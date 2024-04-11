const btn = document.querySelector("#js-new-pic");
btn.addEventListener('click', getPic);


const image = document.createElement("img");
const body = document.querySelector(".app");
body.appendChild(image);

let answer = '';

async function getPic() {
    
    try {
        const response = await fetch("https://random.dog/woof.json");
        // if (!response.ok) {
        //     throw Error(response.statusText)
        // }

        const jsonData = await response.json();
        image.src = jsonData;
        image.alt = "alt text"
        console.log(jsonData);
        image.src=jsonData["url"];
        
        
       
    } catch (err) {
        console.log(err);
        alert ('Failed to fetch new quote');
    }
}




getPic();