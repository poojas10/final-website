;

// YouTube sintaxis for embedded videos and images

const ytVideoPrefix = `https://www.youtube.com/embed/`
const ytImagePathPrefix = `https://i.ytimg.com/vi/`
const ytImagePathSufix = `/hqdefault.jpg`

// Array of Videos

let arrVideos = [
  {name: 'Finite State Machine', data: 'iD6u_2iNnu0'},
  {name: 'DFA Definition, Examples', data: 'gAQIy_X5P9Y'},
  {name: 'Solved Examples – String of Length ‘2’', data: 'LjcwnV3gCtA'},
  {name: 'DFA Solved Examples (Set -2)', data: 'oj-Q6ss1UR4'},
  {name: 'DFA Solved Examples(Set - 3)', data: 'JpC3_7ZWu1M'},
  {name: 'NFA Definition', data: 'eLbKIrvc0T4'},
  {name: 'NFA Solved Examples (SET – 1)', data: 'UyfuVeBe8Gw'},
  {name: 'String with at least two consecutive 0’s or 1’s', data: 'IQ2Zyd-OLC4'},
  {name: 'NFA to DFA conversion using subset construction', data: 'fiT1nYM1j0Q'},
  {name: 'Minimization of DFA with Solved Examples', data: 'mjslzySmJSI'},
  {name: 'Solved Example of DFA Minimization', data: '1bQ3kq2-m00'},
  {name: 'Finite Automata with Output(Mealey and Moore Machine)', data: 'EmAizgKd4go'},
  {name: 'Construction of Mealey Machine', data: 'tpVlVtY8CVM'},
  {name: 'Construction of Mealey Machine Solved Examples', data: 'DaPIJOAWnAE'},
  {name: 'Construction of Moore Machine', data: 'AtDtYXDvbk0'},
  {name: 'Moore to Mealey Conversion Solved Examples(Set -1)', data: 'AuJNsJtGevA'},
  {name: 'Solved Examples on Conversion from Moore to Mealey Machine(Set -2)', data: 'GheGNgL9rj8'},
  {name: 'Mealey to Moore Conversion Solved Examples(Set - 1)', data: 'LxgVFGlbkjU'},
  {name: 'Mealey to Moore Conversion Solved Examples(Set-2)', data: '2nO3DZQefk0'},
  {name: 'Epsilon NFA to DFA I', data: '_OsI2s0sLRA'},
  {name: 'Epsilon NFA to DFA II', data: 'CIAikRQeLjQ'},
  {name: 'Regular Expression (Rules, Examples)', data: 'CYwDf85u7Mg'},
  {name: 'Identities of Regular Expression, Arden’s Theorem', data: 'S16tIFJZko0'},
  {name: 'Solved Example of Regular Expression Identities', data: '9TTJuhAxY1g'},
  {name: 'Regular Expression Questions', data: 'S-OaQF1LO4I'},
  {name: 'DFA to Regular Expression Conversion', data: 'gCXwlXdfLNY'},
  {name: 'DFA to Regular Expression Questions', data: 'ZWm6ZGELLq4'},
  {name: 'DFA to Regular Expression Conversion Example with Multiple Final State', data: 'KEX95UhhAiU'},
  {name: 'Regular Expression to DFA Rules', data: 'vMEMpSzL4VA'},
  {name: 'Regular Expression to DFA Conversion', data: 'S_27iQ1TgaM'},
  {name: 'Definition and Types of Grammar/Language (Chomsky Classification)', data: 'Mt0l7LjcMdc'},
  {name: 'Types of Regular Grammar', data: 'pUMHZwcT-aY'},
  {name: 'Derivations from Grammar Solved Examples', data: '_w3p1X3wyYM'},
  {name: 'Definition of Pushdown Automata(PDA)', data: 'oEYyTtF3nDo'},
  {name: 'Pushdown Automata(PDA)Example-1', data: 'JZ4LFQ-dnOg'},
  {name: 'Pushdown Automata(PDA)Example-2', data: 'J34oTeEZljo'},
  {name: 'Introduction to Turing Machine', data: 'IB5vGigfjFs'},
  {name: 'Turing Machine Explained with Solved Example-1', data: 'AVMqC3LP-oU'},
  {name: 'Turing Machine Explained with Solved Example-2', data: 'ic6JCkqI4pU'}

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
