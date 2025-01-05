# project of dom 

## project link
[click here bhai ](https://stackblitz.com/edit/dom-project-chaiaurcode-ebzt6omq?file=3-DigitalClock%2Findex.html,3-DigitalClock%2Fchaiaurcode3.js    )

solution of javascript
``` javascript


const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
clock.innerHTML=date.toLocaleTimeString()
}, 1000);

