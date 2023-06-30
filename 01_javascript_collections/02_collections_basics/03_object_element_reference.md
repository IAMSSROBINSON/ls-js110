# Object Element Reference

Objects are data-structure collection that use `key:value` pairs to store data.

The `key` / `property` is a 'string' and the value can be anything, even another object. Keys / Property names must be unique. If a key / property name is repeated then the last key to be scripted is counted and the others ignored.

<br>

## 2 Ways To Reference An Objects Elements

### Dot Notation

`obj.propertyName` to return the value

<br>

### Bracket Notation

`obj['propertyName']` to return the value

<br>

## Return An Array Of An Objects Keys Or Values

### `Object.keys(objectName)`

Returns an array of the objects keys as the array elements. The index positions can be used to access specific elements.

<br>

### `Object.values(objectName)`

Returns an array of the objects values as the array elements. The index positions can be used to access specific elements.
