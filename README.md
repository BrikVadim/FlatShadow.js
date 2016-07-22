# FlatShadow.js v0.2.1
![Flat Shadow](http://storage3.static.itmages.ru/i/16/0721/h_1469088856_9927674_ffc2e1f0b7.png)
###Генератор плоских теней на чистом JavaScript
##Новое в версии 0.2.1
* Примененте тени не только к тексту (drawTextShadow, drawBoxShadow)
* Изменение направления тени
* Использование нескольких теней
##Логотип Google Chrome с помощью FlatShadow.js
![Google Chrome Logo](http://storage9.static.itmages.ru/i/16/0722/h_1469165511_8914631_724befd6d6.png)
##Текстовое поле с плоской тенью:
![Example 1](http://storage3.static.itmages.ru/i/16/0721/h_1469089627_4831789_e8080801fa.jpg)
##Логотипы в стиле Habrahabr:
![HabrExample 1](http://storage5.static.itmages.ru/i/16/0721/h_1469093205_7184148_f474e2dae3.png)
![HabrExample 2](http://storage5.static.itmages.ru/i/16/0721/h_1469093205_3319567_62e78868f8.png)
![HabrExample 3](http://storage4.static.itmages.ru/i/16/0721/h_1469093200_4283351_e7af337ab9.png)
##Пример использования:
drawFlatShadow( объект, длина тени, цвет тени )
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
##Описание функции:
```JavaScript
drawFlatShadow(object, shadowLenght = 100, shadowColor = "#CCC", shadowBefore = "", shadowAfter = "0 0 0 #000")
```
##Варианты использования:
```JavaScript
drawFlatShadow(document.getElementById("logo")) // Рисует тень для объекта с id logo. Длина: 100, Цвет: #CCC
drawFlatShadow(document.getElementById("logo"), 50) // Длина: 50, Цвет: #CCC
drawFlatShadow(document.getElementById("logo"), 50, "#ADA") // Длина: 50, Цвет: #ADA
```
