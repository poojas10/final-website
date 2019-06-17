;

// YouTube sintaxis for embedded videos and images

const ytVideoPrefix = `https://www.youtube.com/embed/`
const ytImagePathPrefix = `https://i.ytimg.com/vi/`
const ytImagePathSufix = `/hqdefault.jpg`

// Array of Videos

let arrVideos = [
  {name: 'What is Artificial Intelligence', data: 'J7LqgglEfQw'},
  {name: ' Propositional Logic', data: 'tpDU9UXqsUo'},
  {name: 'First Order Logic', data: 'pcV2lL6yNZ8'},
  {name: 'Propositional Logic Vs First Order Logic', data: 'GS3HKR6CV8E'},
  {name: 'Resolution Convert To Fol Part -1', data: 'eaCVH8XWaPc'},
  {name: 'Resolution Part-2', data: 'TR7iWaN_nHQ'},
  {name: 'Resolution Part-3', data: '-LT96Et6b0A'},
  {name: 'Water Jug Problem', data: 'u9KMMudAQ6M'},
  {name: 'Breadth First Search (BFS)', data: 'jWpLuRAYk3s'},
  {name: 'Depth First Search (DFS)', data: 'W2FFDygadgc'},
  {name: 'BFS vs DFS', data: '8C_eBEQPZbY'},
  {name: 'Hill Climbing Algorithm', data: 'FU6ZzRs6szE'},
  {name: '8-puzzle problem', data: 'VR0mhQfOAbQ'},
  {name: 'Heuristic Search and Function', data: 'japhjrVxJdg'},
  {name: 'Best First Search', data: 'i9NvNJgIlHo'},
  {name: 'A* Algorithm', data: 'V1i7EcynYKk'},
  {name: 'AO* Algorithm', data: 'B3I5kbdPPuM'},
  {name: 'Knowledge Representation Semantic Network', data: 'y2HQmvqXON4'},
  {name: ' Minmax Algorithm', data: 'bOxdGdu1suk'},
  {name: 'Alpha Beta pruning', data: '7X_2vRO7YAM'},
  {name: 'Steepest Ascent Hill Climbing', data: '4pVYqxoPE94'},
  {name: 'Monotonic and Non-Monotonic Reasoning', data: 'igESYLCwkkQ'},
  {name: 'Goal Stack planning', data: 'PaKRt05Zk50'},
  {name: 'Missionaries and Cannibals Problem', data: '4VBilo4bt68'},
  {name: 'Bays Theorem', data: 'rZHazFsLQ6o'},
  {name: 'Conceptual Dependency', data: 'oL8ApH82s6s'},
  {name: 'fuzzy logic', data: 'Ps6WjpgkK3Y'},
  {name: 'genetic algorithm', data: 'FwPgHgbncPk'},
  {name: 'Unification Part-1', data: 'k_vRMh82gzU'},
  {name: 'Unification Part-2', data: '9hE1CLCzjLM'},
  {name: 'Inference', data: 'aVwcNDKXcHU'},
  {name: 'Backward Chaining', data: 'W5O8QAWu-OM'},
  {name: 'Forward Chaining', data: 'PBTSdx_C9WM'},
  {name: 'Natural Language Processing', data: 'IpBZ01g0pGE'},
  {name: 'Steps In Natural Language Processing', data: 'pHiIwQk57dc'}
]

// Current video

let currentVideo = document.getElementById('current-video')
currentVideo.src = `${ytVideoPrefix}${arrVideos[0].data}`

// Add .gallery__items to .gallery

let gallery = document.querySelector('.gallery')
gallery.innerHTML = ``

for (let i = 0; i < arrVideos.length; i++) {
  gallery.innerHTML += `
    <div class="gallery__item" data="${arrVideos[i].data}">
      <img class="gallery__item__img" src="${ytImagePathPrefix}${arrVideos[i].data}${ytImagePathSufix}">
      <span class="gallery__item__span">${arrVideos[i].name}</span>
    </div>`
}

// Add event listeners

gallery.addEventListener('click', (e) => {
  // When click on .gallery__item element
  if (e.target.classList.contains('gallery__item')) {
    currentVideo.src = `${ytVideoPrefix}${e.target.getAttribute('data')}`
  }
  // When click on .gallery__item__img element
  if (e.target.classList.contains('gallery__item__img')) {
    let data = e.target.src
    data = data.replace(ytImagePathPrefix, '')
    data = data.replace(ytImagePathSufix, '')
    currentVideo.src = `${ytVideoPrefix}${data}`
  }
  // When click on .gallery__item__span element
  if (e.target.classList.contains('gallery__item__span')) {
    console.log(e.target.innerText)
    for (let i = 0; i < arrVideos.length; i++) {
      if (arrVideos[i].name === e.target.innerText) {
        currentVideo.src = `${ytVideoPrefix}${arrVideos[i].data}`
      }
    }
  }
})
