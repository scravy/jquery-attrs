$.fn.attrs()
============

Retrieves all the attributes with their associated values as object.

Example
-------

```HTML
<div id="elem" data-one="hello" data-two="world" something="else"></div>
```

```JavaScript
$("#elem").attrs()
// -> { 'data-one': "hello", 'data-two': "world", 'something': "else" }

$("#elem").attrs(/^data\-/)
// -> { 'data-one': "hello", 'data-two': "world" }
```

