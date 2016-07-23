'use strict';

function drawShadowByFunc(object, fnx, fny, shadowType = ShadowType.box, shadowLenght = 100, shadowColor = "#CCC") {
  var shadowBefore = "";
  for (var i = 0; i < shadowLenght; i++)
    shadowBefore += fnx(i) + "px " + fny(i) + "px " + shadowColor + ",";

  switch (shadowType) {
    case 0:
      object.style.boxShadow = shadowBefore + "0 0 #000";
      break;
    case 1:
      object.style.textShadow = shadowBefore + "0 0 #000";
      break;
    case 2:
      object.style.boxShadow = shadowBefore + "0 0 #000";
      object.style.textShadow = shadowBefore + "0 0 #000";
      break;
    default:
      console.log("Invalid shadowType... Use 'ShadowType.box' or 'ShadowType.text'... ");
  }
}

function drawShadow(object, shadowType = ShadowType.box, shadowLenght = 100,
                    shadowColor = "#CCC", angle = 45, shadowBefore = "",
                    shadowAfter = "0 0 0 #000") {
  let DegToRad = deg => deg * Math.PI/180;
  var angleX, angleY;

  shadowBefore = shadowBefore != "" ? shadowBefore + ',' : "";

  switch (angle) {
    case 90:
      angleX = 1; angleY = 0;
      break;
    case 180:
      angleX = 0; angleY = -1;
      break;
    case 270:
      angleX = -1; angleY = 0;
      break;
    case 360:
      angleX = 0; angleY = 1;
      break;
    default:
      angleY = Math.cos(DegToRad(angle));
      angleX = Math.sin(DegToRad(angle));
  }

  for (var i = 0; i < shadowLenght; i++)
    shadowBefore += i * angleX + "px " + i * angleY + "px " + shadowColor + ",";

  var shadowStyle = shadowBefore + shadowAfter;

  switch (shadowType) {
    case 0:
      object.style.boxShadow = shadowStyle;
      break;
    case 1:
      object.style.textShadow = shadowStyle;
      break;
    case 2:
      object.style.boxShadow = shadowStyle;
      object.style.textShadow = shadowStyle;
      break;
    default:
      console.log("Invalid shadowType... Use 'ShadowType.box' or 'ShadowType.text'... ");
  }
}

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
  function parseXY(x, y) {
    for (var i = 0; i < shadowLenght; i++)
      shadowBefore += i * x + "px " + i * y + "px " + shadowColor + ",\n";
  }
  var anglesArray = angle.split('');
  shadowBefore = shadowBefore != "" ? shadowBefore + ',' : "";

  anglesArray.forEach(function(item) {
    switch (item) {
      case 'B': parseXY(-1, 1);
        break;
      case 'T': parseXY(1, -1);
        break;
      case 'R': parseXY(1, 1);
        break;
      case 'L': parseXY(-1, -1);
        break;
      case 'b': parseXY(0, 1);
        break;
      case 't': parseXY(0, -1);
        break;
      case 'r': parseXY(1, 0);
        break;
      case 'l': parseXY(-1, 0);
        break;
    }
  });
  return shadowBefore + shadowAfter;
}

/*
 * -----------------------------------------------------------------------------
 * -----------------------------------------------------------------------------
 */

let ShadowType = {
  "box"   : 0,
  "text"  : 1,
  "all"   : 2
}

/*
 *   Функция drawFlatShadow необходима для совместимости с предыдущей версией
 *   В новой версии используется drawTextShadow
 */

function drawFlatShadow(object, shadowLenght = 100, shadowColor = "#CCC",
                        shadowBefore = "", shadowAfter = "0 0 0 #000") {
  drawTextShadow(object, shadowLenght, shadowColor, shadowBefore, shadowAfter);
}
