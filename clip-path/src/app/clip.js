

var toAnimate = document.querySelector('.trigger');
var button = document.querySelector('.trigger-btn');

button.addEventListener('click', function() {
  if (toAnimate.classList.contains('animate')) {
    toAnimate.classList.remove('animate');
    this.innerText = 'Start';
  } else {
    toAnimate.classList.add('animate');
    this.innerText = 'Stop';
  }
});
