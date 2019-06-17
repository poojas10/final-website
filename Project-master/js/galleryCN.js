;

// YouTube sintaxis for embedded videos and images

const ytVideoPrefix = `https://www.youtube.com/embed/`
const ytImagePathPrefix = `https://i.ytimg.com/vi/`
const ytImagePathSufix = `/hqdefault.jpg`

// Array of Videos

let arrVideos = [
  {name: 'Introduction to Computer Network', data: 'P_gj_gw_fhQ'},
  {name: 'Basics of Computer Networks', data: 'PYc2MfKoGlc'},
  {name: 'Classful IP Address', data: 'Ls5FiDw0qW4'},
  {name: 'Unicasting,Limited Broadcast and Directed Broadcast ', data: 'CmXIZeAKdbE'},
  {name: 'Example of Limited Broadcast and Directed Broadcast', data: 'Fi51Q-kmp3M'},
  {name: 'Subnetting in networking', data: 'Vhos1OBhsVY'},
  {name: 'Subnet Mask ', data: 'JpoYnW5TEP4'},
  {name: 'Routing table in networking', data: 'Bkhz_lKRTM4'},
  {name: 'Variable Length Subnet Masking', data: 'BZRKbOEiiVA'},
  {name: 'Classless inter Domain Routing ', data: 'xsDnxxPDL24'},
  {name: 'Classless Inter Domain Routing (CLDR) Rules ', data: '_gHaZktg32M'},
  {name: 'Classless Inter Domain Routing (CLDR) Representation ', data: 'xuJy74pAV08'},
  {name: 'Subnetting classless addressing', data: 'jzm8ZQOJDag'},
  {name: 'VLSM in CIDR ', data: 'Tl8e6vdYpUY'},
  {name: 'Transmission Delay', data: 'q62o3evQweg'},
  {name: 'Propagation delay ', data: 'iNwma8I1KZg'},
  {name: 'Flow Control in computer networks', data: 'PTn0Hy0wdvE'},
  {name: 'STOP and WAIT protocol cases', data: 'dPf7uxtitVA'},
  {name: 'Sliding window protocol I', data: 'FM6PwfWwGEg'},
  {name: 'Sliding window protocol II', data: '_kipUfonyM0'},
  {name: 'GO back N protocol', data: 'N5iYOkrA7Gk'},
  {name: 'GO Bck N ACK', data: 'k8G10NufX1U'},
  {name: 'Issues With GO BACK N', data: 'lHgmGqa-KxM'},
  {name: 'Selective Repeat sliding window protocol-1', data: 'bWadGLHmOMQ'},
  {name: 'Selective Repeat sliding window protocol-2 ', data: 'NBSpH44mY9Y'},
  {name: 'Flow Control Methods ', data: 'DLFjF94nFfU'},
  {name: 'Access Control Methods-1', data: '5ZSbRACfKCo'},
  {name: 'Access Control Methods-2', data: 'P6eS4SkdbDw'},
  {name: 'CSMA in Computer Networks ', data: '1Cyl4cYXXxo'},
  {name: 'Efficiency of CSMA/CD-1 ', data: 'QbE5QzluC1o'},
  {name: 'Efficiency of CSMA/CD-2', data: 'QbE5QzluC1o'},
  {name: 'CSMA/CD Backoff Algorithm', data: 'm571-5ki9-s'},
  {name: 'Pure ALOHA and Slotted ALOHA', data: '3YXDw2roIUg'},
  {name: 'Difference between Flow Control and Access Control ', data: 'vDBGyrljlBI'},
  {name: 'Error Detection and Error Correction', data: 'FCyrzulw_fY'},
  {name: 'Cyclic Redundancy Check ', data: 'gCrENXb24ls'},
  {name: 'Example of CSMA/CD', data: 'uWPIOwRgUeU'},
  {name: ' Slotted ALOHA ', data: 'DTy0epB54Fo'},
  {name: 'Cyclic Redundancy', data: 'WBKmGmnRf9A'},
  {name: 'OSI model', data: 'UOS7-zIcCGY'},
  {name: 'OSI Model Physical Layer ', data: 'ZBN-1zrnHHE'},
  {name: 'OSI Model Data Link Layer ', data: 'wNIhdkYr6kY'},
  {name: 'Framing in Computer Networks ', data: '9dsoyyOTByA'},
  {name: 'Character stuffing & Bit Stuffing ', data: 'c6e3l65Ua1w'},
  {name: 'Physical Adresssing ', data: 'jhpIETTeZxU'},
  {name: 'Network Layer', data: 'gH9HopYJ7hI'},
  {name: 'Transport Layer ', data: 'tL_jgUSJEZw'},
  {name: 'Session Layer ', data: 'x6d2qCcP0Ws'},
  {name: 'Presentation Layer', data: 'CnLVC0nk3SY'},
  {name: 'Example of Layering', data: 'o9rXN1YevcE'},
  {name: 'How all layers Work Together', data: 'qOwuwNMxf8M'},
  {name: 'Layering Example ', data: 'WgIvucEH93w'},
  {name: 'Ipv4 Header Format ', data: 'HqOxjW83FRw'},
  {name: 'MF, DF and Fragment offset', data: 'lR1ufdrtjZE'},
  {name: 'TTL, Protocol and Header Checksum', data: 'YLAN985nGJ8'},
  {name: 'Source IP and Destination IP', data: '54hts4fj0cE'},
  {name: 'Ipv4 Header Format ', data: '4DRttFrBbQY'}
  

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
