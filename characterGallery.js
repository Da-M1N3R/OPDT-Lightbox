console.log("Hello World");
// import characters from './data.json';

/*
const characters = [
    { image: "https://static.wikia.nocookie.net/onepiece/images/7/7b/Vinsmoke_Judge_Portrait.png/", name: "Judge" },
    { image: "https://static.wikia.nocookie.net/onepiece/images/7/74/Vinsmoke_Reiju_Portrait.png/", name: "Reiju" },
    // ... more character objects
  ];
*/

// console.log(characters);

const gallery = document.querySelector(".gallery");

function generateCardHTML(character) {
  return `
    <div class="card">
      <img src="${character.image}" alt="${character.name}">
      <span>${character.name}</span>
    </div>
  `;
}

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

fetch('data.json').then(response => response.json()).then(data => {
  const characters = data;
  characters.forEach(character => {
    const cardHTML = generateCardHTML(character);
    gallery.innerHTML += cardHTML;
    console.log("displayed characters");

    const images = document.querySelectorAll('.gallery .card')
    console.log("this")
    console.log(images)
    images.forEach(image => {
      console.log(images)
      console.log("Hello here ---")
      image.addEventListener('click', e => {
        let img = image.cloneNode(true);
        lightbox.classList.add('active')
        // const img = document.createElement('img')
        // img.src = image.src
        
        lightbox.appendChild(img);
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        console.log("Here noww - inside lightbox")
      })
    })
    lightbox.addEventListener('click', e => {
      if (e.target !== e.currentTarget) return
      lightbox.classList.remove('active')
    })
    console.log("outside")
  })
}).catch(error => console.error(error));