function drawBoxShadow(object, shadowLenght = 100, shadowColor = "#CCC",
                       angle = "B", shadowBefore = "", shadowAfter = "0 0 0 #000") {
  object.style.boxShadow = parseShadowStyle(shadowLenght, shadowColor,angle,
                                            shadowBefore, shadowAfter);
}

function drawTextShadow(object, shadowLenght = 100, shadowColor = "#CCC",
                        angle = "B", shadowBefore = "", shadowAfter = "0 0 0 #000") {
  object.style.textShadow = parseShadowStyle(shadowLenght, shadowColor, angle,
                                             shadowBefore, shadowAfter);
}

function parseShadowStyle(shadowLenght = 100, shadowColor = "#CCC",
                          angle = "B", shadowBefore = "", shadowAfter = "0 0 0 #000") {
  var anglesArray = angle.split('');
  shadowBefore = shadowBefore != "" ? shadowBefore + ',' : "";

  anglesArray.forEach(function(item) {
    switch (item) {
      case 'B':
        for (var i = 0; i != shadowLenght; i++)
          shadowBefore += i + "px " + i + "px 0px " + shadowColor + ",\n";
        break;
      case 'T':
        for (var i = 0; i != -shadowLenght; i--)
          shadowBefore += i + "px " + i + "px 0px " + shadowColor + ",\n";
        break;
      case 'R':
        for (var i = 0; i != shadowLenght; i++)
          shadowBefore += i + "px " + (-i) + "px 0px " + shadowColor + ",\n";
        break;
      case 'L':
        for (var i = 0; i != -shadowLenght; i--)
          shadowBefore += i + "px " + (-i) + "px 0px " + shadowColor + ",\n";
        break;
      case 'b':
        for (var i = 0; i != shadowLenght; i++)
          shadowBefore += "0px " + i + "px 0px " + shadowColor + ",\n";
        break;
      case 't':
        for (var i = 0; i != -shadowLenght; i--)
          shadowBefore += "0px " + i + "px 0px " + shadowColor + ",\n";
        break;
      case 'r':
        for (var i = 0; i != shadowLenght; i++)
          shadowBefore += i + "px 0px 0px " + shadowColor + ",\n";
        break;
      case 'l':
        for (var i = 0; i != -shadowLenght; i--)
          shadowBefore += i + "px 0px 0px " + shadowColor + ",\n";
        break;
    }
  });
  return shadowBefore + shadowAfter;
}

/*
 *   Функция drawFlatShadow необходима для совместимости с предыдущей версией
 *   В новой версии используется drawTextShadow
 */

function drawFlatShadow(object, shadowLenght = 100, shadowColor = "#CCC",
                        shadowBefore = "", shadowAfter = "0 0 0 #000") {
  drawTextShadow(object, shadowLenght, shadowColor, shadowBefore, shadowAfter);
}
