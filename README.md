# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @calebseifu/lotide`

**Require it:**

`const _ = require('@calebseifu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: should take an array and return first element of the array. returns 'Hello' for array of ['Hello', 'Lighthouse', 'Labs']
* `function2(tail)`: should take an array and return back the array exept the first element(head).
* `function3(middle)`: should  take in an array and return the middle-most element(s) of the given array.returns [3, 4] for [1, 2, 3, 4, 5,6] and returns [3] for [1, 2, 3, 4, 5]
* `function4(without)`: shopuld take in an array and unwanted element. which will return a subset of a given array, removing unwanted elements.returns [2, 3] for  array of [1, 2, 3], unwanted element of [1].
* `function5(takeUntil)`: should take an array and callback.return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.returns [ 1, 2, 5, 7, 2 ] for  an array [1, 2, 5, 7, 2, -1, 2, 4, 5] and callback function x => x < 0.
* `function6(map)`: should take an array and callback function and returns new array baseon the result of callback function.
* `function7(leterPositions)`: should take in a sentence(string) and return all the indices in the sentence. returns [1] for for the position of 'e' in 'hello'
* `function8(flatten)`: should take an array with other arrays inside, it can flatten it into a single-level array.returns [1, 2, 3, 4, 5, 6] for given array of [1, 2, [3, 4], 5, [6]]
* `function9(findKey)`: which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.  
* `function10(countOnly)`: should take in an array of items and return count for specific item.
* `function11(countLetters)`: should take in a sentence(string) and return count of each letter as an object key/value. example countLetters("hello") return {h:1, e:1, l:2, o:1}
* `function12(findKeyByValue)`: shoud take in an object and a value. return the first key which contains the given value.