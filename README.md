# IEEE 754 Number Deconstructor

This project provides a tool to deconstruct a JavaScript number into its underlying IEEE 754 double-precision components. It expresses a number as:

  number = sign × coefficient × (2 ** exponent)

The tool extracts the binary exponent by repeatedly dividing the number by 2 and then rescales the coefficient so that, when multiplied by 2 raised to the computed exponent, it reconstructs the original number.

## Features

- **Sign Extraction:** Determines if the number is positive or negative.
- **Exponent Derivation:** Extracts the binary exponent by counting how many times the number can be divided by 2 before underflow.
- **Coefficient Recovery:** Rescales the coefficient to reflect the full-precision internal integer representation.
- **IEEE 754 Insight:** Reveals how numbers are internally represented in JavaScript.

## Usage

Call the `deconstruct(number)` function with any finite, nonzero number. The function returns an object with:

- `sign`: 1 or -1
- `coefficient`: The rescaled integer value representing the full-precision coefficient.
- `exponent`: The computed binary exponent.
- `number`: The original number

For example, calling `deconstruct(128)` may yield:

```json
{
  "sign": 1,
  "coefficient": 9007199254740992,
  "exponent": -46,
  "number": 128
}
```
This indicates that 128 is internally represented as 9007199254740992 × 2^(-46), which is equivalent to 128.
