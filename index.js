document.addEventListener('keyup', function (event) {
  let message = document.querySelector('.message');
  message = message.value;
  console.log(message.length);
  document.querySelector('.symbols__number').innerHTML = message.length;
})