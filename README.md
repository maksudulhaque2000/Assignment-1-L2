# What are some differences between interfaces and types in TypeScript?

   When working with TypeScript, developers often use interfaces and type aliases to define the shape of data. While they may seem interchangeable at first glance, they have some important differences. In this blog post, we'll explore the key distinctions between interface and type in TypeScript, along with practical use cases.
- Interfaces
   * Interfaces are extensible using the extends keyword.
   * Interface supports declaration merging.
   * Use interface when defining the structure of objects or working with class contracts.
- Types
   * Types can’t be merged.
   * Type does not support declaration merging.
   * Use type when need more flexibility, like creating union types, working with tuples, or defining primitive values.


# What is type inference in TypeScript? Why is it helpful?

   Type inference is a powerful feature in TypeScript where the compiler automatically determines the type of a variable, function return, or expression without you explicitly annotating it.Type inference is TypeScript’s smart way of reducing boilerplate while maintaining type safety. It boosts productivity by giving you the benefits of strong typing without forcing you to annotate everything manually.

    * write fewer type annotations, but TypeScript still knows the types keeping code clean and readable.
    * Editors like VSCode show accurate IntelliSense even without explicit types.
    * TypeScript still catches type errors at compile-time.
    * Don’t have to repeat obvious types that the compiler can easily deduce.
