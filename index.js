var fs = require('fs');

module.exports = function paintSvg(name, content, width, height){
  // Create defaults

  if (!width){
    console.log("width is undefined")
    return false;

  }
  if (!height){
    console.log("height is undefined")
    return false;
  }


  // Compose Svg
  var svg = '<svg\
    width="'+ width +'" height="'+height+'"\
    x="0px" y="0px">' + content + '</svg>';
    fs.writeFile(name + '.svg', svg, (err) => {
      if (err) throw err;
      console.log('created: ' + name + ".svg");
    });



};


