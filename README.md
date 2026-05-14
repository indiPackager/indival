# indival

Global validation library for Node.js and JavaScript with strong India-first validation support.

indival provides:

- Global mobile number validation
- Indian financial and identity validators
- Metadata-driven validation architecture
- Standardized validation responses
- Lightweight and scalable utilities

---

# Installation

```bash
npm install indival
```

---

# Usage

```js
const indival = require('indival');

console.log(
    indival.isMobile(
        '+919876543210',
        'IN'
    )
);

console.log(
    indival.isPAN(
        'ABCDE1234F'
    )
);

console.log(
    indival.isGST(
        '22ABCDE1234F1Z5'
    )
);

console.log(
    indival.isUPI(
        'ravi@paytm'
    )
);

console.log(
    indival.isIFSC(
        'SBIN0001234'
    )
);
```

---

# Validation Response Structure

All validators return a standardized response object.

```js
{
  valid: true,
  type: 'mobile',
  message: 'Valid mobile number',
  data: {
    country: 'India',
    code: '+91',
    value: '+919876543210'
  }
}
```

---

# Available Functions

---

## isMobile(number, country)

Validate global mobile numbers using metadata-driven country validation.

### Example

```js
indival.isMobile(
    '+919876543210',
    'IN'
);

indival.isMobile(
    '+14155552671',
    'US'
);

indival.isMobile(
    '+447911123456',
    'GB'
);
```

### Returns

```js
{
  valid: true,
  type: 'mobile',
  message: 'Valid mobile number',
  data: {
    country: 'India',
    code: '+91',
    value: '+919876543210'
  }
}
```

---

## isPAN(value)

Validate Indian PAN card numbers.

### Example

```js
indival.isPAN(
    'ABCDE1234F'
);
```

### Returns

```js
{
  valid: true,
  type: 'pan',
  message: 'Valid PAN number',
  data: {
    value: 'ABCDE1234F'
  }
}
```

---

## isGST(value)

Validate Indian GST numbers.

### Example

```js
indival.isGST(
    '22ABCDE1234F1Z5'
);
```

### Returns

```js
{
  valid: true,
  type: 'gst',
  message: 'Valid GST number',
  data: {
    value: '22ABCDE1234F1Z5'
  }
}
```

---

## isUPI(value)

Validate UPI IDs.

### Example

```js
indival.isUPI(
    'ravi@paytm'
);
```

### Returns

```js
{
  valid: true,
  type: 'upi',
  message: 'Valid UPI ID',
  data: {
    value: 'ravi@paytm'
  }
}
```

---

## isIFSC(value)

Validate Indian bank IFSC codes.

### Example

```js
indival.isIFSC(
    'SBIN0001234'
);
```

### Returns

```js
{
  valid: true,
  type: 'ifsc',
  message: 'Valid IFSC code',
  data: {
    value: 'SBIN0001234'
  }
}
```

---

# Supported Regions

indival currently supports metadata-driven mobile validation for:

- Asia
- Europe
- Africa
- North America
- South America
- Oceania
- Special telecom regions

---

# Project Structure

```txt
indival/
│
├── data/
├── dist/
├── scripts/
├── utils/
├── validators/
│
├── index.js
├── package.json
└── README.md
```

---

# Build

Generate optimized runtime metadata:

```bash
npm run build
```

This command:

- Reads all regional metadata files
- Merges datasets
- Generates runtime validation data
- Creates production-ready dist files

---

# Architecture

indival uses:

- Metadata-driven validation
- Runtime-generated datasets
- Layered validation architecture
- Standardized response handling

---

# Version Roadmap

## v1.0.0

- India-first validators

## v1.0.1

- Documentation improvements

## v1.0.2

- Global mobile validation
- Metadata build system
- Runtime dist generation
- Standardized responses

## Planned

- Sanitizers
- Number formatting
- Number parsing
- Metadata validation
- TypeScript support
- Country lookup utilities

---

# Contributing

Contributions are welcome.

You can help with:

- Country metadata
- Validation improvements
- Documentation
- Performance optimization
- Additional validators

---

# License

MIT