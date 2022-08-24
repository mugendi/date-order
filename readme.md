# date-order

Get the order of date components given a date pattern such as "YYYY-MM-DD".

## Usage

```javascript
const DateOrder = require('date-order');

console.log(DateOrder('YY-MMMM-DDD HH:mm:ss:ms'));
//=> ['year','month','day','hour','minute','second']

console.log(DateOrder('YY-MMMM-DDD HH:mm:ss'));
//=> ['year','month','day','hour','minute','second']

console.log(DateOrder('DD-MM-YYY'));
//=> ['day','month','year']

// It will even handle funny formats like these...

console.log(DateOrder('MMMM/DDDD/YYY'));
//=> ['month','day','year']

console.log(DateOrder('HH:ss:mm A DD-MM-YYY'));
// => ['hour','second','minute','AM/PM','day','month','year']
```

**Note:** milliseconds (ms) in formats are ignored as it is hardly used in actual dates.
