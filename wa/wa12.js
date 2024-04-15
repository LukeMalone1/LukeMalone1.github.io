const btnNewPic = document.querySelector("#js-new-pic");
const btnNewFact = document.querySelector("#js-new-fact");
const imageContainer = document.getElementById('image-container');
const factContainer = document.getElementById('fact-container');

btnNewPic.addEventListener('click', getPic);
btnNewFact.addEventListener('click', getFact);

async function getPic() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const jsonData = await response.json();
        const imageUrl = jsonData.message;

        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Doggo";

        image.width = 300; 
        image.height = 300; 

        imageContainer.innerHTML = '';

        imageContainer.appendChild(image);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new image');
    }
}

async function getFact() {
    try {
        const response = await fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1");
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const factData = await response.json();

        const randomIndex = Math.floor(Math.random() * factData.length);
        const randomFact = factData[randomIndex].fact;

        factContainer.textContent = randomFact;
    } catch (err) {
        console.log(err);
        alert('Failed to fetch dog fact');
    }
}


