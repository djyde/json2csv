# json2csv

[![](https://badgen.net/npm/v/@djyde/json2csv)](https://npm.im/@djyde/json2csv)
[![CircleCI](https://circleci.com/gh/djyde/json2csv/tree/master.svg?style=svg)](https://circleci.com/gh/djyde/json2csv/tree/master)

Easy to use CSV generator

## Install

```
npm install @djyde/json2csv
```

## Usage

```js
const json2csv = require('@djyde/json2csv')

const arr = [
  { name: 'foo', age: 126, isDeleted: false},
  { name: 'bar', age: 122, isDeleted: false},
  { name: 'a', age: 123, isDeleted: true},
  { name: 'b', age: 145, isDeleted: false},
  { name: 'fooc', age: 142, isDeleted: true}
]

const csv = json2csv(arr, { fields: [ 'name', 'age', 'isDeleted' ] }) // => output CSV string

fs.writeFileSync('foo.csv', csv)
```

## API

### json2csv(data: Array, options)

- **data** Array of Object

#### options

- **fields** 
- **separator** Separator. `,` is default

# License 

MIT License