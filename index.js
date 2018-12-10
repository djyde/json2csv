function json2csv (arr,{ fields, separator }) {
  fields = fields || []
  separator = separator || ','
  let content = fields.join(separator)
  arr.forEach(item => {
    const toAppend = fields.map(fieldName => item[fieldName]).join(separator)
    content += `\n${toAppend}`
  })
  return content
}

module.exports = json2csv
