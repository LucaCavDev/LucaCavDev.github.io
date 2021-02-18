const loading = document.querySelector('.loading')
const bg = document.querySelector('.backG')

let load = 0

let int = setInterval(blurring, 20)

function blurring() {
  load++
  console.log(load);
  if (load >= 100) {
    clearInterval(int)
  }

  loading.innerText = `${load}%`
  loading.style.opacity = scale(load, 0, 100, 1, 0)
  
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}



//FONTE PER ARE QUESTO ESERCIZIO:
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}