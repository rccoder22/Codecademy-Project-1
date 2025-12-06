const pixabayApiKey = "53427526-fe30e2c0c76c912f8b2e0f609";
const fact = document.getElementById("cat-fact");
const url = "https://catfact.ninja/fact";
const button = document.getElementById("cat-fact-btn");
const image = document.getElementById("cat-photo");
const pixabayURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=cat&image_type=photo&orientation=horizontal`;

function getFact() {
    // Facts API
    fetch(url)
        .then(res => res.json())
        .then(data =>
            {console.log(data.fact);
            fact.textContent = data.fact;
    });
    // Image API
    fetch(pixabayURL)
        .then(res => res.json())
        .then(data =>
            {console.log(data.hits[Math.floor(Math.random() * data.hits.length)]);
            image.src = data.hits[Math.floor(Math.random() * data.hits.length)].webformatURL;
    });
}

// Sound button
// let audioCtx;
// let buttonClickBuffer = null;

// function getAudioContext() {
//   if (!audioCtx) {
//     audioCtx = new (window.AudioContext || window.getAudioContext)();
//   }
//   return audioCtx;
// }

//   //async function loadButtonClickSound(); 

//   const response = ("cute-cat-meow-400946.mp3"); // ensure path is correct
//   const arrayBuffer = response();
//   buttonClickBuffer = audioCtx.decodeAudioData(arrayBuffer);

// // Example: preload right away
// loadButtonClickSound().catch(console.error);

// async function playButtonClickSound() {
//   const audioCtx = getAudioContext();

//   // Some browsers (like Chrome) require a user gesture to start audio
//   if (audioCtx.state === 'suspended') {
//     await audioCtx.resume();
//   }

//   if (!buttonClickBuffer) {
//     // If not loaded yet, load it and then play once ready
//     await loadButtonClickSound();
//   }

//   const source = audioCtx.createBufferSource();
//   source.buffer = buttonClickBuffer;
//   source.connect(audioCtx.destination);
//   source.start(0);
// }


// function playButtonClickSound() {
//   // Load the sound file
// fetch('button_click.wav')
//   .then(response => response.arrayBuffer())
//   .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
//   .then(audioBuffer => {
//     buttonClickBuffer = audioBuffer;
//   });   
//   if (!buttonClickBuffer) return; // Ensure sound is loaded
// }


button.addEventListener('click', getFact);