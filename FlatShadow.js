function drawFlatShadow(object, shadowLenght = 100, shadowColor = "#CCC",
                        shadowBefore = "", shadowAfter = "0 0 0 #000") {                        
  for (var i = 0; i != shadowLenght; i++) {
    shadowBefore +=  i + "px " + i + "px 0px " + shadowColor + ",\n";
  }
  object.style.textShadow = shadowBefore + shadowAfter;
}
