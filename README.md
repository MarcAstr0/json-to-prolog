# json-to-prolog
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
    { "parent": "carol", "child": "cindy" },
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