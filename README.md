# oof!

`oof` is a tiny TypeScript library for functional programming utilities with type safety. When learning functional paradigm with JavaScript, you may feel some despair of typing `pipe` (or `go`) correctly.

# API

```ts
// you only type once
const foo = oof((x: string) => x.length)
  .compose(num => num === 42)
  .compose(isTruthUnveiled => isTruthUnveiled ? () => console.log("I'm die. Thank you forever.") : () => {})

// you can call this directly
foo() // foo(x: string): () => void

// want to proceed more?
const bar = foo.compose()
```

# Why?

```ts
// You're currently writing a nice composed function...
pipe(
  (value: string) => returnsSomeNiceComplexType(),
  // Parameter 'iWantNoImplicitAnyBeTrue' implicitly has an 'any' type (7006)
  (iWantNoImplicitAnyBeTrue) => butYouCantBecauseAboveTypeIsHell(),
)

// This is also verbose
// since most of the time you start with inner things
const result = pipe<[Do, I, Have, To, Declare, These, Always, QuestionMark]>(
  what,
  if,
  you,
  add,
  other,
  functions,
  somewhere,
  between,
  these // type error: Expected 8 arguments, but got 9 (2554)
)

// of course, this anyscript often ends up with 
// "Uncaught ReferenceError: peace is not defined"
result.peace()
```