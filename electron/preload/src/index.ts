const styleStr = `.header .logo {}`;

document.addEventListener('DOMContentLoaded', () => {
  const head = document.querySelector('head');
  const style = document.createElement('style');
  style.textContent = styleStr;
  if (head) {
    head.append(style);
  }
});
