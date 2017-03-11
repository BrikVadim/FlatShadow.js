# FlatShadow.js v0.6.0
![Flat Shadow](http://storage3.static.itmages.ru/i/16/0721/h_1469088856_9927674_ffc2e1f0b7.png)
###Генератор плоских теней на чистом JavaScript
## Новое в версии 0.6:
* Класс Shadow разделен на классы TextShadow и BoxShadow
* Добавлена структура ShadowDirection
* Добавлен метод clearShadow
* Класс FuncShadow удален из **master** и выделен в отдельную ветку;

## Тень по формуле 
### Teнь по формуле (версия 0.5)
![Func Shadow 1](http://storage6.static.itmages.ru/i/16/0725/h_1469451190_5587496_d1564a7f1f.png)
### Teнь по формуле beta (версия 0.2.3)
![Func Shadow 2](http://storage1.static.itmages.ru/i/16/0723/h_1469256426_5587485_7e0705d522.png)
## Логотип Google Chrome с помощью FlatShadow.js
![Google Chrome Logo](http://storage9.static.itmages.ru/i/16/0722/h_1469165511_8914631_724befd6d6.png)
##Часы с помощью FlatShadow.js
![Watch](http://storage2.static.itmages.ru/i/16/0722/h_1469188503_3671323_71ab72044c.png)
##Текстовое поле с плоской тенью:
![Example 1](http://storage3.static.itmages.ru/i/16/0721/h_1469089627_4831789_e8080801fa.jpg)
##Логотипы в стиле Habrahabr:
![HabrExample 1](http://storage5.static.itmages.ru/i/16/0721/h_1469093205_7184148_f474e2dae3.png)
![HabrExample 2](http://storage5.static.itmages.ru/i/16/0721/h_1469093205_3319567_62e78868f8.png)
![HabrExample 3](http://storage4.static.itmages.ru/i/16/0721/h_1469093200_4283351_e7af337ab9.png)
## Прозрачная тень:
![RealShadow](http://storage9.static.itmages.ru/i/16/0723/h_1469256426_1550657_f295a681a1.png)
![Example 1](http://storage6.static.itmages.ru/i/16/0721/h_1469096290_2520834_b1b399132d.png)

##Пример использования:
* **func**  drawShadow( элемент, объект (BoxShadow/TextShadow), ... )
* **class** TextShadow ( длина, цвет, угол )
* **class** BoxShadow ( длина, цвет, угол )

**old:**
* **class** Shadow ( тип, длина, цвет, угол )
* **class** FuncShadow ( функция для х, функция для у, тип, длина, цвет, угол )

##Описание функций:
```JavaScript
drawShadow(element, ...shadow);
```
##Варианты использования:
```JavaScript
// Тень с параметрами по умолчанию 
drawShadow(document.getElementById("flat"), new BoxShadow);
// Тень с произвольными параметрами
drawShadow(document.getElementById("flat"), new BoxShadow(30, "#CCC", ShadowDirection.downRight));
// Несколько теней с разными типами
drawShadow(document.getElementById("flat"), new BoxShadow, new TextShadow(30, "#CCC", 150), new TextShadow(30, "#999", 240));
```

## Простой пример:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script type="text/javascript" src="flatShadow.js"></script>
  </head>
  <body>
    <h1 id="flat">Hello, FlatShadow.js!</h1>
    <script>
      drawFlatShadow(document.getElementById("flat"), new TextShadow);
    </script>
  </body>
</html>
```
