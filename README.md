# open-taxes

A common interface for calculating taxes across the world.

## API

### `taxes.schema`

This should export a valid [`JSON schema`](http://json-schema.org/) that defines the input values that the user should enter.

For example:
```javascript
{
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
```

### `taxes.calculate(value, callback)`

This should export a `function` that takes a `value` compliant with the `schema` and a `callback(err, annualIncome)` that is called after the calculations are made.

For example:
```javascript
function (value, callback) {
  if (value.status === 'single') {
    return callback(null, value * 0.7)
  } else {
    return callback(null, value * 0.6)
  }
}
```
