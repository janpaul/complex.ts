# complex.ts

A library of simple complex arithmetic, using a functional development style.

## create a complex number

Create the complex number `(2+3i)` and `(-1-i):
```javascript
const c1 = create(2)(3)
const c2 = create(-1)(-1)
```

## Adding two complex numbers:
```javascript
const added = add(c1)(c2)
```

## Subtracting two complex numbers:
```javascript
const subbed = subtract(c1)(c2)
```

## Multiplying two complex numbers:
```javascript
const multid = multiply(c1)(c2)
```

## Squaring a complex number:
```javascript
const squared = square(c1)
```

## Converting to polar coordinates
```javascript
const polar = polar(c1) 
```

## Displaying a complex number
```javascript
console.log(present(c1)) // (2+3i) 
```

## Displaying a polar representation
```javascript
console.log(present_polar(polar)) 
// or
console.log(present_polar(to_polar(c1)))
```

