;

// YouTube sintaxis for embedded videos and images

const ytVideoPrefix = `https://www.youtube.com/embed/`
const ytImagePathPrefix = `https://i.ytimg.com/vi/`
const ytImagePathSufix = `/hqdefault.jpg`

// Array of Videos

let arrVideos = [
  {name: ' Introduction, Types of Compiler', data: 'hRM9ZvjbpVY'},
  {name: ' Cousins of a compiler', data: 'tHjuY9p1-mc'},
  {name: '6 different phases of the compilation process', data: 'SzESrHNTqjY'},
  {name: ' Main functions performed by the lexical analyzer ', data: 'I9mD_DmZl4o'},
  {name: ' Tokens, Patterns , Lexemes and Lexical Errors', data: 'b4YV9hs7jDo'},
  {name: ' Token Attribute, Symbol Table  ', data: 'A6YGnzc9x64'},
  {name: 'Syntax analysis, Tasks Performed by Parser', data: 'BbWp47YOBgo'},
  {name: ' Grammar, Four Components', data: 'r0cZ_y-yViY'},
  {name: 'Parse Tree-Properties', data: 'ExABzseph9o'},
  {name: ' Parser Error Recovery Mechanisms', data: 'BJX8PRnagFE'},
  {name: 'Grammar for arithmetic expressions', data: 'jUfX9sKDZ4c'},
  {name: '  Common Notations ', data: 'T56bm2Q23HY'},
  {name: 'Leftmost/Rightmost/ Derivation', data: 'KRx-BPR4bbs'},
  {name: '  Associativity, Precedence of Operators   ', data: 'XULOa4JHxDE'},
  {name: 'Convert ambiguous grammar into unambiguous', data: 'dWElP_OgRuU'},
  {name: ' Left Recursion', data: 'JCiIn2vKCaQ'},
  {name: ' Examples of Left Recursion', data: 'VzuNz0KDAK0'},
  {name: ' Syntax Directed Definition, Annotated Parse Tree ', data: 'ujSjuzE0kcA'},
  {name: ' Parse Tree Construction ', data: 'nd_0-IVUSvg'},
  {name: ' Abstract,Concrete Syntax Tree ', data: 'zeYrepLPtw4'},
  {name: 'Difference b/w Syntax Directed Def and Translation Scheme', data: 'omVC4dsa4K0'},
  {name: ' Semantic Actions and Translation Scheme Example ', data: 'KJuHF9ZKdLk'},
  {name: 'What is FIRST()', data: 'aDYUFeSzAO0'},
  {name: ' Solved Examples of Finding FIRST()  ', data: '6aGWhdflU7k'},
  {name: ' What is Follow() ', data: 'xx6cUpJJw8I'},
  {name: '  Examples on finding Follow()', data: 'GUKmRluGR98'},
  {name: 'Left Factoring ', data: 'lIQqqGF4P8k'},
  {name: ' how to remove left factoring Examples', data: 'jpVYuekuQwQ'},
  {name: 'Bottom Up and Shift Reduce Parsing', data: 'QTNmobGlqao'},
  {name: '  Handles  ', data: '1GKYXMIuBSQ'},
  {name: ' Handle pruning', data: 'IDAYd0v8OXE'},
  {name: ' Stack Implementation of Shift Reduce Parsing', data: '8ScEX4JnjFE'},
  {name: 'performing shift reduce parsing Example ', data: '5aSTm9o3_A0'},
  {name: 'Stack for SR Parsing  ', data: 'Esrvy7ZJIxQ'},
  {name: 'SR (shift reduce), RR (reduce reduce) conflict example ', data: 'NooPlbilRVg'},
  {name: ' Operator Precedence Grammar', data: 'm7AC-P-AirU'},
  {name: ' Operator Precedence Table', data: 'TjgUVY4zgGI'},
  {name: 'Operator precedence parsing using a stack ', data: 'IIzN8x7o4yw'},
  {name: ' Advantage/Disadvantage of Operator Precedence Parsing', data: 'lYWi-NHccLY'},
  {name: ' Operator Precedence Functions', data: 'PPPwJln4Cxo'},
  {name: ' Introduction to LR(k) Parsers', data: 'wnHVxzYg9lA'},
  {name: ' Components and Working of LR-Parsers', data: 'GvSROlhEs8A'},
  {name: ' How to Perform Parsing Actions', data: 'sc1331jV3Dc'},
  {name: '  LR(0) Items, Augmented Grammars, Kernel Items', data: 'hxk-CSVA8R0'},
  {name: ' Closure Function', data: 'KqdoyF-J3gQ'},
  {name: ' GOTO Function ', data: 'ASC-xW7wAao'},
  {name: 'How to Find Canonical Collection of LR(0) Items', data: 'RJU38s7upTA'},
  {name: ' Construction of LR(0) Parsing Table  ', data: 'dVBshLp4a5k'},
  {name: ' Parsing a String using LR(0) Parsing Table ', data: 'yat2xIlMz2k'},
  {name: 'Canonical collection of LR(0) items for SLR(1) parser ', data: 'q20w6ykTa24'},
  {name: ' Construction of SLR(1) Parsing Table', data: 'nZSX3xYKX6M'},
  {name: ' SR-Conflict & RR-Conflict in Parsing Table ', data: 'W7HowpsgopQ'},
  {name: ' Canonical Collection of LR(1) Items ', data: '5ugZucMfUbs'},
  {name: ' Examples of LR(1) Items ', data: '879oA6c886Q'},
  {name: ' Construction of CLR Parsing Table  ', data: 'rRgzNGkLvs0'},
  
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
