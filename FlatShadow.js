/*
 *  flatShadow.js 0.6.0
 *  Генератор плоских теней на чистом JavaScript
 *  © Вадим Брик, 2016
 */

const ShadowType = {
    box   : 0,
    text  : 1,
    all   : 2
}

const ShadowDirection = {
    down        : 0,
    downRight   : 45,
    right       : 90,
    topRight    : 135,
    top         : 180,
    topLeft     : 225,
    left        : 270,
    downLeft    : 315
}

class Shadow {
    constructor(lenght = 100, color = `#CCC`, angle = ShadowDirection.downRight) {
        this.lenght = lenght;
        this.angle  = angle;
        this.color  = color;
    }
}

class BoxShadow extends Shadow {
    constructor(lenght = 100, color = `#CCC`, angle = ShadowDirection.downRight) {
        super(lenght, color, angle);
        this.type = ShadowType.box;
    }
}

class TextShadow extends Shadow {
    constructor(lenght = 100, color = `#CCC`, angle = ShadowDirection.downRight) {
        super(lenght, color, angle);
        this.type = ShadowType.text;
    }
}

function drawShadow(element, ...shadow) {
    const applyStyle = el => {
        el.style.boxShadow  = boxStyle .slice(0, -1);
        el.style.textShadow = textStyle.slice(0, -1);
    }

    const applyStyles = el => {
        Array.prototype.forEach.call(el, function(item) {
            applyStyle(item);
        });
    }

    const DegToRad = deg => deg * Math.PI/180;
    const getStyle = (i, item) => `${i * angleX}px ${i * angleY}px ${item.color},`;

    const elementIsHTMLCollection = {}.toString.call(element) == "[object HTMLCollection]";

    let textStyle = ``;
    let boxStyle  = ``;

    let angleX;
    let angleY;

    for (let item of shadow) {
        switch (item.angle) {
            case ShadowDirection.right:
                angleX = 1; angleY = 0;
                break;
            case ShadowDirection.top:
                angleX = 0; angleY = -1;
                break;
            case ShadowDirection.left:
                angleX = -1; angleY = 0;
                break;
            case ShadowDirection.down:
                angleX = 0; angleY = 1;
                break;
            default:
                angleY = Math.cos(DegToRad(item.angle));
                angleX = Math.sin(DegToRad(item.angle));
        }

        switch (item.type) {
            case ShadowType.box:
                for (let i = 0; i < item.lenght; i++) {
                    boxStyle  += getStyle(i, item);
                }
                break;
            case ShadowType.text:
                for (let i = 0; i < item.lenght; i++) {
                    textStyle += getStyle(i, item);
                }
                break;
            case ShadowType.all:
                for (let i = 0; i < item.lenght; i++) {
                    boxStyle  += getStyle(i, item);
                    textStyle += getStyle(i, item);
                }
                break;
            default:
                console.error(`Invalid shadow type... Use 'ShadowType.box' or 'ShadowType.text'... `);
        }
    }

    if (elementIsHTMLCollection) {
        applyStyles(element);
    } else {
        applyStyle(element);
    }
}

function clearShadow(element) {
    element.style.textShadow = '';
}

      angleX, angleY, temp;

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
          boxStyle  += getStyle(i, item);
        break;
      case 1:
        for (let i = 0; i < item.lenght; i++)
          textStyle += getStyle(i, item);
        break;
      case 2:
        for (let i = 0; i < item.lenght; i++) {
          boxStyle  += getStyle(i, item);
          textStyle += getStyle(i, item);
        }
        break;
      default:
        console.log(`Invalid shadowType...
                     Use 'ShadowType.box' or 'ShadowType.text'... `);
    }
  }

  if ({}.toString.call(element) == "[object HTMLCollection]")
    Array.prototype.forEach.call(element, function(item) {
      applyStyle(item);
    });
  else
    applyStyle(element);
}
