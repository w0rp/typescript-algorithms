# TypeScript Algorithms

[![Travis CI Build Status](https://travis-ci.com/w0rp/typescript-algorithms.svg?branch=master)](https://travis-ci.com/w0rp/typescript-algorithms)

This repository hosts some TypeScript algorithms which are licensed under the
[Unlicense](https://unlicense.org/), and therefore released into the public
domain. This repository showcases how to write useful code in TypeScript,
and the code can be used freely by anyone for any reason.

The NPM package has no dependences other than `devDependences`, and the code is
designed to work in any
[ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
environment with a recent stable TypeScript compiler.

## Algorithms

Code for all of the algorithms below can be viewed by clicking on them, and
tests showing examples of how to use them can be viewed by clicking the
wrenches.

### notNull

[`notNull(x, message?)`](src/not-null.ts) [:wrench:](src/not-null.spec.ts)

Return `x`, but throw if `x` is `null` or `undefined`.

An optional `message` can be provided for showing if `x` turns out to be `null`
or `undefined`.

### orderBy

[`orderBy(cb)`](src/order-by.ts) [:wrench:](src/order-by.spec.ts)

Create a comparison function for sorting Arrays by particular keys.

### pick

[`pick(obj, ...keys)`](src/pick.ts) [:wrench:](src/pick.spec.ts)

Pick a subset of keys from an object.

### uniq

[`uniq(array, cmp)`](src/uniq.ts) [:wrench:](src/uniq.spec.ts)

Create an Array with repeated elements removed.

## Running tests

To run all of the tests on Unix, run `./run-tests`, and hopefully everything
should go well. You will need to have [yarn](https://yarnpkg.com) installed on
your system. You should see the results in your browser.
