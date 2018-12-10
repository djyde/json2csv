const json2csv = require('../')

describe('json2csv', () => {
  const arr = [
    { name: 'foo', age: 126, isDeleted: false},
    { name: 'bar', age: 122, isDeleted: false},
    { name: 'a', age: 123, isDeleted: true},
    { name: 'b', age: 145, isDeleted: false},
    { name: 'fooc', age: 142, isDeleted: true}
  ]

  it('should match snapshot', () => {
    expect(json2csv(arr, { fields: [ 'name', 'age', 'isDeleted' ] })).toMatchSnapshot()
    expect(json2csv(arr, { fields: [ 'name', 'age' ] })).toMatchSnapshot()
    expect(json2csv(arr, { fields: [ 'name', 'isDeleted', 'age' ] })).toMatchSnapshot()
  })
})