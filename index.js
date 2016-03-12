var fs = require('fs');

module.exports = function paintSvg(name, content){
  var svg = '<svg\
    width="200" height="200"\
    id="templateSvg"\
    version="1.1"\
    x="0px" y="0px"\
    xml:space="preserve">' + content + '</svg>';
    fs.writeFile(name + '.svg', svg, (err) => {
      if (err) throw err;
      console.log('created: ' + name + ".svg");
    });
};


