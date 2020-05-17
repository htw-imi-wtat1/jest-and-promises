# Jest and Promises

This is an example project that demonstrates Jest, Promises and using unit tests as a strategy to learn and explore an api or programming language using unit tests.

## Exploring APIs with Printing to the Console

A common approach to trying out an interface or language is to use printouts.
For instance, if you want to loop through the properties of an object, you might do this:

    var obj = {a:1, b:2, c:3};

    for (var prop in obj) {
      console.log("o." + prop + " = " + obj[prop]);
    }

(Example taken from [For..In on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in))

Thus, to see the output of the code snippet you have to run it, and check the
output. If the output is copied to your documentation as it is on the mentioned
web page -

    // Output:
    // "o.a = 1"
    // "o.b = 2"
    // "o.c = 3"

You cannot be 100% sure if this is accurate unless you run it again and manually
search for the output and compare it with the file.
If you tryout variations, the output quickly becomes longer and finding the output
of your latest tryout becomes harder.

[Example with Print](01_exploring_apis_with_tests/01_using_print.js)

## Using unit tests to learn and explore a language

If you use a unit test to explore the same code snippet, you know that the
result in your test expectation is correct (as long as all tests succeed) -
thus, you can try out a lot of things and can be sure that the expectations hold.
See
[Example with Unit Test](01_exploring_apis_with_tests/02_using_jest.test.js)
for the first example. Of course you would rather use map than a loop to create
one collection out of the other, [Using Jest Map Test](01_exploring_apis_with_tests/03_using_jest_map.test.js) plays around with this (Note that [Object.keys()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) only lists the objects own attributes, for..in
also loops through the prototypes properties)

# Promises

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

# Links

https://github.com/htw-imi-wtat1/jest-and-promises
