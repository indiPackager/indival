# indival

Global validation and sanitization library for Node.js and JavaScript with strong India-first validation support.

indival provides:

- Global mobile number validation
- Indian financial and identity validators
- Automatic input sanitization
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
        '+91 98765-43210',
        'IN'
    )
);

console.log(
    indival.isPAN(
        ' abcde1234f '
    )
);

console.log(
    indival.isGST(
        '22abcde1234f1z5'
    )
);

console.log(
    indival.isUPI(
        ' Ravi@Paytm '
    )
);

console.log(
    indival.isIFSC(
        ' sbin0001234 '
    )
);
```

---

# Automatic Sanitization

indival automatically sanitizes inputs before validation.

Examples:

| Raw Input | Sanitized |
|---|---|
| ` abcde1234f ` | `ABCDE1234F` |
| `+91 98765-43210` | `+919876543210` |
| ` sbin0001234 ` | `SBIN0001234` |
| ` Ravi@Paytm ` | `ravi@paytm` |

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
    '+91 98765-43210',
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
    ' abcde1234f '
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
    '22abcde1234f1z5'
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
    ' Ravi@Paytm '
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
    ' sbin0001234 '
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

# Public Sanitizers

indival also exposes standalone sanitizers.

---

## sanitizeMobile(value)

```js
indival.sanitizeMobile(
    '+91 98765-43210'
);
```

### Output

```js
'+919876543210'
```

---

## sanitizePAN(value)

```js
indival.sanitizePAN(
    ' abcde1234f '
);
```

### Output

```js
'ABCDE1234F'
```

---

## sanitizeGST(value)

```js
indival.sanitizeGST(
    '22abcde1234f1z5'
);
```

### Output

```js
'22ABCDE1234F1Z5'
```

---

## sanitizeUPI(value)

```js
indival.sanitizeUPI(
    ' Ravi@Paytm '
);
```

### Output

```js
'ravi@paytm'
```

---

## sanitizeIFSC(value)

```js
indival.sanitizeIFSC(
    ' sbin0001234 '
);
```

### Output

```js
'SBIN0001234'
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
├── sanitizers/
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
- Automatic sanitization pipeline
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

## v1.0.3

- Automatic sanitization
- Standalone sanitizer utilities
- Improved validation pipeline

## Planned

- Number formatting
- Number parsing
- Metadata validation
- TypeScript support
- Country lookup utilities
- Smart universal validation engine

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