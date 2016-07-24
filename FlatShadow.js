/*
 *  flatShadow.js 0.3
 *  Генератор плоских теней на чистом JavaScript
 *  © Вадим Брик, 2016
 */

'use strict';

const ShadowType = {
  box   : 0,
  text  : 1,
  all   : 2
}

class Shadow {
  constructor(type = ShadowType.box, lenght = 100, color = "#CCC", angle = 45) {
    this.lenght = lenght;
    this.angle  = angle;
    this.color  = color;
    this.type   = type;
  }
}

function drawShadow(element, ...shadow) {
  let DegToRad = deg => deg * Math.PI/180,
  textStyle = "", boxStyle = "", angleX, angleY;

  shadow.forEach(function(item) {
    switch (item.angle) {
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
        angleY = Math.cos(DegToRad(item.angle));
        angleX = Math.sin(DegToRad(item.angle));
    }

    switch (item.type) {
      case 0:
        for (let i = 0; i < item.lenght; i++)
          boxStyle  += `${i * angleX}px ${i * angleY}px ${item.color},`;
        break;
      case 1:
        for (let i = 0; i < item.lenght; i++)
          textStyle += `${i * angleX}px ${i * angleY}px ${item.color},`;
        break;
      case 2:
        for (let i = 0; i < item.lenght; i++) {
          boxStyle  += `${i * angleX}px ${i * angleY}px ${item.color},`;
          textStyle += `${i * angleX}px ${i * angleY}px ${item.color},`;
        }
        break;
      default:
        console.log("Invalid shadowType... Use 'ShadowType.box' or 'ShadowType.text'... ");
    }
  });
  element.style.boxShadow  = boxStyle.substring(0, boxStyle.length - 1);
  element.style.textShadow = textStyle.substring(0, textStyle.length - 1);
}
