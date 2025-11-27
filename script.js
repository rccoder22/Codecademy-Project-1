const pixabayApiKey = "53427526-fe30e2c0c76c912f8b2e0f609";
const fact = document.getElementById("cat-fact");
const url = "https://catfact.ninja/fact";
const button = document.getElementById("cat-fact-btn");
// const pixabayURL = "https://pixabay.com/api/";
const image = document.getElementById("cat-image");
const pixabayURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=cat&image_type=photo`;

function getFact() {
    fetch(url)
        .then(res => res.json())
        .then(data =>
            {console.log(data.fact);
            fact.textContent = data.fact;
    });
    fetch(pixabayURL)
        .then(res => res.json())
        .then(data =>
            {console.log(data.hits[0]);
                console.log(pixabayURL);
            image.src = data.image;
    });
}


button.addEventListener('click', getFact);