# indival

India-first validation library for Node.js and JavaScript.

## Installation

```bash
npm install indival
```

---

# Usage

```js
const indival = require('indival');

console.log(indival.isPAN('ABCDE1234F'));
console.log(indival.isGST('22ABCDE1234F1Z5'));
console.log(indival.isUPI('ravi@paytm'));
console.log(indival.isIndianMobile('9876543210'));
console.log(indival.isIFSC('SBIN0001234'));
```

---

# Available Functions

## isPAN()

Validate Indian PAN card number.

```js
indival.isPAN('ABCDE1234F');
```

Returns:

```js
true
```

---

## isGST()

Validate Indian GST number.

```js
indival.isGST('22ABCDE1234F1Z5');
```

Returns:

```js
true
```

---

## isUPI()

Validate UPI ID.

```js
indival.isUPI('ravi@paytm');
```

Returns:

```js
true
```

---

## isIndianMobile()

Validate Indian mobile number.

```js
indival.isIndianMobile('9876543210');
```

Returns:

```js
true
```

---

## isIFSC()

Validate bank IFSC code.

```js
indival.isIFSC('SBIN0001234');
```

Returns:

```js
true
```