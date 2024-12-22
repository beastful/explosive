# Explosive

**Explosive** is a functional programming language based on JSON syntax, designed to provide a simple and intuitive way to define and execute functions. With its straightforward syntax, you can easily create and process functional expressions.

## Installation

You can install the `explosive` package via npm:

```bash
npm install explosive
```

## Syntax

The basic syntax of Explosive is as follows:

```js
['function_name', [parameters]]
```

- function_name: The name of the function you want to call.
- parameters: An array of parameters to be passed to the function.

## Example

To calculate the sum of two numbers, you would write:

```json
['sum', [1, 2]]
```

## API

### new Explosive()

Creates a new instance of the Explosive processor.

```js
const Explosive = require('explosive');
const explosive = new Explosive();
```

### .process(code)

Processes the provided code and executes the corresponding function.

```js
const result = explosive.process(['sum', [1, 2]]);
console.log(result); // Outputs: 3
```


## Extending the Processor

The Explosive processor is extensible, allowing you to add your own libraries and functions. You can define custom functions and make them available for processing.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.