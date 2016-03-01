module.exports = {
  title: 'Some country',
  type: 'object',
  required: [],
  properties: {
    grossSalary: {
      type: 'number',
      title: 'Base salary'
    },
    status: {
      type: 'string',
      title: 'Context',
      enum: [ 'single', 'married' ]
    }
  }
}
