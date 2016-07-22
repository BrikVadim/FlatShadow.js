# FlatShadow.js v0.2.2
![Flat Shadow](http://storage3.static.itmages.ru/i/16/0721/h_1469088856_9927674_ffc2e1f0b7.png)
###Генератор плоских теней на чистом JavaScript
##Новое в версии 0.2:
### 0.2.2:
* Добавлена универсальная функция drawShadow;
* Добавлена возможность указывать произвольный угол наклона тени (для функции drawShadow);
* Добавлена возможность выбора типа тени (box, text, all) (для функции drawShadow);
* Добавлена сжатая версия (flatShadow.min.js);
* Переработан код;

### 0.2.1:
* Примененте тени не только к тексту (drawTextShadow, drawBoxShadow);
* Изменение направления тени;
* Использование нескольких теней;

##Логотип Google Chrome с помощью FlatShadow.js
![Google Chrome Logo](http://storage9.static.itmages.ru/i/16/0722/h_1469165511_8914631_724befd6d6.png)
```JavaScript
drawBoxShadow(document.getElementById("flat"), 120, "rgb(220,84,75)", "TtRr",
  parseShadowStyle(120, "rgb(254,205,82)", "rbB",
    parseShadowStyle(120, "rgb(37,160,97)", "Ll",
      parseShadowStyle(120, "rgb(220,84,75)", "T"))));
```
##Часы с помощью FlatShadow.js
![Watch](http://storage2.static.itmages.ru/i/16/0722/h_1469188503_3671323_71ab72044c.png)
```JavaScript
drawShadow(document.getElementById("cr"), ShadowType.Box, 500, "red", 130);
drawShadow(document.getElementById("ce"), ShadowType.Box, 350, "white", 30);
drawShadow(document.getElementById("cw"), ShadowType.Box, 200, "white", 280);
```
##Текстовое поле с плоской тенью:
![Example 1](http://storage3.static.itmages.ru/i/16/0721/h_1469089627_4831789_e8080801fa.jpg)
##Логотипы в стиле Habrahabr:
![HabrExample 1](http://storage5.static.itmages.ru/i/16/0721/h_1469093205_7184148_f474e2dae3.png)
![HabrExample 2](http://storage5.static.itmages.ru/i/16/0721/h_1469093205_3319567_62e78868f8.png)
![HabrExample 3](http://storage4.static.itmages.ru/i/16/0721/h_1469093200_4283351_e7af337ab9.png)
##Пример использования:
drawBoxShadow( объект, длина тени, цвет, угол, стиль до тени, стиль после тени )
drawTextShadow( объект, длина тени, цвет, угол, стиль до тени, стиль после тени )
parseShadowStyle( длина тени, цвет, угол, стиль до тени, стиль после тени )
drawFlatShadow( объект, длина тени, цвет тени )

###Варианты angle

R - ↘︎
B - ↙︎
L - ↖︎
T - ↗︎
r - →
b - ↓
l - ←
t - ↑

###HTML:
```HTML
<div id="logo">𝞅</div>
```
###JavaScript:
```JavaScript
drawFlatShadow(document.getElementById("logo"), 100, "rgb(40,160,110)");
```
###Результат:
![Example 1](http://storage6.static.itmages.ru/i/16/0721/h_1469096290_2520834_b1b399132d.png)
##Описание функций:
```JavaScript
drawShadow(object, shadowType = ShadowType.box, shadowLenght = 100, shadowColor = "#CCC", angle = 45, shadowBefore = "", shadowAfter = "0 0 0 #000")

drawBoxShadow(object, shadowLenght = 100, shadowColor = "#CCC", angle = "B", shadowBefore = "", shadowAfter = "0 0 0 #000")
drawTextShadow(object, shadowLenght = 100, shadowColor = "#CCC", angle = "B", shadowBefore = "", shadowAfter = "0 0 0 #000")
parseShadowStyle(shadowLenght = 100, shadowColor = "#CCC", angle = "B", shadowBefore = "", shadowAfter = "0 0 0 #000")

drawFlatShadow(object, shadowLenght = 100, shadowColor = "#CCC", shadowBefore = "", shadowAfter = "0 0 0 #000")
```
##Варианты использования:
```JavaScript
drawBoxShadow(document.getElementById("logo")) // Рисует тень для объекта
drawTextShadow(document.getElementById("logo")) // Рисует тень для текста 
parseShadowStyle(120, "rgb(220,84,75)", "T"); // Возвращает строку со стилем слоя 
/*
 *   Функция drawFlatShadow необходима для совместимости с предыдущей версией
 *   В новой версии используется drawTextShadow
 */
drawFlatShadow(document.getElementById("logo")) // Рисует тень для текста объекта с id logo. Длина: 100, Цвет: #CCC
drawFlatShadow(document.getElementById("logo"), 50) // Длина: 50, Цвет: #CCC
drawFlatShadow(document.getElementById("logo"), 50, "#ADA") // Длина: 50, Цвет: #ADA
```
