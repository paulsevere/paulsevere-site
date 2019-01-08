const fs = require('fs');
const path = require('path');
const execute = require('./getPixels');
const outPath = path.resolve(__dirname, '../dist/');
const buildHtml = els => {
  return fs.writeFileSync(
    outPath + '/index.html',
    `<!doctype html>
<html lang="en">

<head>

  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet">
    <link href="index.css" rel="stylesheet">


 
  <title>paulsevere.com</title>
</head>

<body>
<div class="letters">
  ${els}
  </div>
  <script>
  document.onclick = e => {
    if (Array.from(e.target.classList).includes('title')) {
      window.location.assign('https://github.com/paulsevere');
    }
  };
  
  </script>
</body>
</html>`,
  );
};

const moveCss = () => fs.copyFileSync(path.resolve(__dirname, '../index.css'), outPath + '/index.css');

const imagePath = path.resolve(__dirname, 'paulsevere.png');
execute(imagePath, buildHtml);
moveCss();
