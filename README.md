# TypeScript Algorithms

[![Travis CI Build Status](https://travis-ci.com/w0rp/typescript-algorithms.svg?branch=master)](https://travis-ci.com/w0rp/typescript-algorithms)

This repository hosts some TypeScript algorithms which are licensed other the
[Unlicense](https://unlicense.org/), and therefore released into the public
domain. The intention of this repository is to share important algorithms for
writing TypeScript code such that they can be copy and pasted into any codebase
and used freely by anyone for any reason.

The NPM package has no dependences other than `devDependences`, and the code is
designed to work in any
[ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/) environment with a recent stable TypeScript compiler.

## Algorithms

Here is a comprehensive list of every algorithm demonstrated in this repository,
with links to behaviour tests for each algorithm.

* [`notNull(x, message?)`](src/not-null.spec.ts) - Return `x`, but throw if `x`
  is `null` or `undefined`. An optional `message` can be provided for showing if
  `x` turns out to be `null` or `undefined`.
* [`orderBy(cb)`](src/order-by.spec.ts) - Return a callback function for
  sorting Arrays by particular keys.
* [`pick(obj, ...keys)`](src/pick.spec.ts) - Pick a subset of keys from
  an object.
* [`uniq(array, cmp)`](src/uniq.spec.ts) - Create an Array with repeated
  elements removed.

## Running tests

To run all of the tests on Unix, run `./run-tests`, and hopefully everything
should go well. You will need to have [yarn](https://yarnpkg.com) installed on
your system. You should see the results in your browser.
