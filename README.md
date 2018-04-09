# json-to-prolog

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Overview

Simple Javascript library for converting JSON objects to Prolog facts. Useful for converting, for
example, results from a database query to Prolog facts.

For example, the following object:

```json
{
  "parent": [
    { "parent": "mike", "child": "greg" },
    { "parent": "mike", "child": "marcia" },
    { "parent": "mike", "child": "peter" },
    { "parent": "mike", "child": "jan" },
    { "parent": "mike", "child": "bobby" },
    { "parent": "mike", "child": "cindy" },
    { "parent": "carol", "child": "greg" },
    { "parent": "carol", "child": "marcia" },
    { "parent": "carol", "child": "peter" },
    { "parent": "carol", "child": "jan" },
    { "parent": "carol", "child": "bobby" },
    { "parent": "carol", "child": "cindy" }
  ]
}
```

Will convert to:

```prolog
% parent(Parent, Child).
parent(mike, greg).
parent(mike, marcia).
parent(mike, peter).
parent(mike, jan).
parent(mike, bobby).
parent(mike, cindy).
parent(carol, greg).
parent(carol, marcia).
parent(carol, peter).
parent(carol, jan).
parent(carol, bobby).
parent(carol, cindy).
```

The JSON object must follow the following format:

```json
{
  "predicate1": [
    { "argument1": "someValue", ..., "argumentN": "anotherValue"},
    ...,
    { "argument1": "andAnotherValue", ..., "argumentN": "etc."}
  ],
  ...,
  "predicateN": [
    ...
  ]
}
```

Each property of the main object describes a predicate, and each predicate has an array (list) of
facts represented as objects, with the predicate's arguments as properties.

## Installation

## Usage

## To Do

* Complete the README.
* Add a method for converting _from_ Prolog to JSON.