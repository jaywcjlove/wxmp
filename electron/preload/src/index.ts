const styleStr = `.siderbar {
  -webkit-app-region: drag;
}
.siderbar header h1 a, github-corners {
  display: none;
}
article.content:before {
  -webkit-app-region: drag;
  position: absolute;
  content: ' ';
  display: block;
  height: 41px;
  width: 100%;
  z-index: -1;
}`;

document.addEventListener('DOMContentLoaded', () => {
  const head = document.querySelector('head');
  const style = document.createElement('style');
  style.textContent = styleStr;
  if (head) {
    head.append(style);
  }
});
