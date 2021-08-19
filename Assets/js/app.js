const btn = document.querySelector('.btn');
const audioContext = new AudioContext();



window.addEventListener('scroll', function () {
    const nav = this.document.querySelector('nav')
    nav.classList.toggle("sticky", window.scrollY > 560)
})

const sound = (free) => {
    let osc = audioContext.createOscillator();
    let gain = audioContext.createGain();
    osc.connect(gain)
    osc.type = 'sawtooth'
    osc.frequency.value = free;
    osc.connect(gain).connect(audioContext.destination);
    osc.start(0);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1.5)
}

// btn.addEventListener('click', () => {
//     console.log('triangle')

//     if (audioContext.state === 'suspended') {
//         audioContext.resume()
//     }

//     sound()
// })

const containerGiphy = document.querySelector('.container-giphy')

const getGiphy = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eWcKI92A6rFco0aDKev6BT5Az7ARx38f&q=music&limit=5&offset=0&rating=g&lang=en`
    const request = await fetch(url)
    const giff = await request.json()
    for (let i = 0; i <= 2; i++) {
        cardgiff(giff, i)
    }
}

getGiphy()

function cardgiff(data, index) {
    const cardg = document.createElement('div')
    cardg.classList.add('container_giff')
    const imgsource = data.data[index].images.original.url
    const cardinnerData = `
    <img src="${imgsource}">
    `
    cardg.innerHTML = cardinnerData
    containerGiphy.appendChild(cardg)
}


// const productos = [
//     {nombre: 'zandia', valor : 250.000},
//     {nombre: 'melon', valor : 250.000},
//     {nombre: 'aguacate', valor : 250.000},
//     {nombre: 'piña', valor : 250.000},
//     {nombre: 'manzana', valor : 250.000},
//     {nombre: 'naranja', valor : 250.000}
// ]

// const form = document.querySelector('#form')
// const resultado = document.querySelector('#result')
// form.addEventListener('keyup', filter)


// function filter(){

//     resultado.innerHTML = '';
//     const text = form.value.toLowerCase()
//     console.log(text)
//     for (product of productos){
//         let nombre = product.nombre.toLowerCase();
//         if(nombre.indexOf(text) !== -1){
//             resultado.innerHTML += `
//             <li>${product.nombre} - valor ${product.valor} </li>
//             `
//         }
//     }

// }

// filter()