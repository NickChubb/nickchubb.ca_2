---
title: My Experience as a New Rust-acean
tags: 'Rust, Coding'
date: 2020-08-23 22:54:54
---


This last semester in my AI class, we were encouraged to use a language faster and more efficient than Python for our implementation of the final project.  Against my teammate's better judgement, I convinced him to let us use Rust (a language neither of us had ever so-much-as looked at).  Because of the purported awesomeness of its speed, reliability, and security, while still being easy to use, I was excited for a chance to sink my teeth into a new language and see what all the hype is about.  After a month of using Rust almost daily for our project, here is my personal pros and cons list and for what scenarios I see myself using it again in the future.

## The Good

### 1. It's pretty easy to pick-up quickly

Definitely the part of the undertaking that I was concerned the most with was the idea of learning an entirely new language within such a short time period.  However, any challenges that typically come with learning a new language are definitely helped with [the Book](https://doc.rust-lang.org/book/ch00-00-introduction.html "The Rust Programming Language").  _The Rust Programming Language_ (or the Book) is the official resource for aspiring rust-aceans to learn basic principles for using the language effectively.  Just a few hours of studying and I felt _better_ using Rust than other languages I've taken classes on.

Another rad resource any new rust-acean should be aware of is [this github repo](https://github.com/rust-lang/rustlings), containing tons of small practice problems to get you reading and writing rust code ASAP.

### 2. The best error handling

This might sound weird (because who likes getting errors while compiling, right?), but the Rust compiler contains awesome error messages which underline the exact problem areas of your code and often tells you precisely how to fix it.  The pre-installed Clippy crate makes the error messaging even better, with hundreds of additional lints to let you know your code is broken long before it ruins your entire night.

![Clippy is Awesome](https://chubb.blog/images/rust_clippy.png)

### 3. Cargo is awesome

By far the best package manager I've ever used, Cargo runs extremely smoothly, is loaded with features, and just does everything you could ever ask.  [Crates.io](https://crates.io/) is cargos online repository of crates, and currently contains tens-of-thousands of useful libraries and programs to help you code Rust better.

One upgrade I'd highly suggest, however, is the crate [cargo-edit](https://crates.io/crates/cargo-edit).  Currently, when installing a new crate, cargo doesn't automatically add the dependencies to the cargo.toml file.  Cargo-edit gives cargo a new "cargo add" command which not only installs the crate, but also updates the dependencies. 

### 3. 

## The Bad

### 1. The Borrow Checker

While I guess in the grand scheme of things, this is actually a good thing... The borrow checker gets incredibly frustrating while writing any object-based Rust program.  Rust prevents a variable from having multiple mutable references to it; this prevents the data from being changed in one location by one function while it is also being accessed and changed at another location.  While this prevents race situations (and other weird bugs) from occuring, more often than not it seemed to be an annoyance; colloquially known in the Rust community as "fighting the borrow checker".

### 2. Maybe it's a little too secure for class projects...

While lots of the security features I like, for a class project, it might be a little much sometimes.  Rust is designed as a security forward language, and when you don't necessarily have to worry about hackers or other malicious problems, you don't have to be concerned about the smallest security vulnerabilities.

## Conclusion

I'm sure with time and practice it becomes easier to avoid the common borrow checker errors, but for the time being, my relationship with Rust remains uncertain.  I can definitely see myself using it for creating command-line applications (as a potential future side project) or if I find myself having to use C++ for anything, I will likely opt to use Rust instead for it modern features, but otherwise I can't imagine much else I would end up using it for.  
