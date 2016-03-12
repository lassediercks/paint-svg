var fs = require('fs');

module.exports = function paintSvg(name, head, content){
  // Compose Svg
  var svg = '<svg '+head+'>' + content + '</svg>';
  // Export file
  fs.writeFile(name + '.svg', svg, (err) => {
      if (err) throw err;
      console.log('created: ' + name + ".svg");
  });



};


