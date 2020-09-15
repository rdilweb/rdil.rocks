---
layout: default
title: My Code Style
---

# My Code Style

I personally have a less traditional code style for certain languages, but as long as there is an automatic formatter or linter I'm fine with any code style for the most part.

## Python

I like statements that are short. Functions should have type hints if they don't need to support 3.5 or lower.
One variable per line. Imports should either all be full module, or all be members (`from` imports). The only exception to this is if an initialization function not wrapped in a `__main__` check needs to be run.

## Java

I like statements that are short. Lambdas are amazing and I love using them where possible.
Statements can be long, assuming they aren't just return chains.
Final variables should be used for the compiler to inline them.
Builders should be continued on the next line, with the `.` being 4 spaces after the column the first line of the builder is on.
If statements shouldn't go on more than one line.
Opening brackets should be on the line of the block they start, they do not get their own line.

## JavaScript

Here is where things get really controversial.
ES6 should be used if either Babel is in the environment, it will work on its own, or a bundler will automatically rewrite it as ES5.
This means arrow functions are very great.
Semicolons should be avoided at all costs. As long as the statement is properly logically closed, a semicolon should not be used.
Things should be indented like Python: 4 spaces.
2 spaces isn't enough to see blocks in my opinion.
JSX should follow Prettier defaults.
Quotes should be double quotes.

My Prettier configuration:

```json
{
    "semi": false,
    "tabWidth": 4,
    "trailingComma": "none"
}
```
