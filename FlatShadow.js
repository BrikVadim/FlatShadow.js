/*
 *  flatShadow.js 0.4
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
  constructor(type = ShadowType.box, lenght = 100, color = `#CCC`, angle = 45) {
    this.lenght = lenght;
    this.angle  = angle;
    this.color  = color;
    this.type   = type;
  }
}

function drawShadow(element, ...shadow) {
  function applyStyle(el) {
    el.style.boxShadow  = boxStyle.substring (0, boxStyle.length  - 1);
    el.style.textShadow = textStyle.substring(0, textStyle.length - 1);
  }
  let DegToRad = deg => deg * Math.PI/180,
      textStyle = ``, boxStyle = ``,
      angleX, angleY;

  for (let item of shadow) {
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
        console.log(`Invalid shadowType...
                      Use 'ShadowType.box' or 'ShadowType.text'... `);
    }
  }

  if (element.length === undefined)
    applyStyle(element);
  else
    Array.prototype.forEach.call(element, function(item) {
      applyStyle(item);
    });
}
