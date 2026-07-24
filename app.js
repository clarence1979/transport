const btn = document.getElementById('tapper');
const count = document.getElementById('count');
let n = 0;
btn.addEventListener('click', () => {
  n += 1;
  count.textContent = n + (n === 1 ? ' tap' : ' taps');
});
