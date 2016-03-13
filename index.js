var fs = require('fs');

module.exports = function paintSvg(name, head, content, cb) {
  // Compose Svg
  var svg = '<svg ' + head + '>' + content + '</svg>';

  // Export file
  fs.writeFile(name + '.svg', svg, (err) => {
    if (err) throw err;
    if (typeof cb === 'function') cb(svg);
  });
};


