// aos scroll animation 
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1600,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
});

// counter 
(() => {
  const counter = document.querySelectorAll('.counter');
  // covert to array
  const array = Array.from(counter);
  // select array element
  array.map((item) => {
      // data layer
      let counterInnerText = item.textContent;

      let count = 1;
      let speed = item.dataset.speed / counterInnerText
      function counterUp() {
          item.textContent = count++
          if (counterInnerText < count) {
              clearInterval(stop);
          }
      }
      const stop = setInterval(() => {
          counterUp();
      }, speed);
  })
})();
// team img light box 
const teamImg = document.querySelectorAll(".team-img img");

