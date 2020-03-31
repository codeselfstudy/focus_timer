# Code Self Study Focus Timer

A networked pomodoro-style timer to help you focus with your friends.

In development. 🚧

In the meantime, join [our community](https://forum.codeselfstudy.com/).

## Install

```
$ npm install
```

## Configure

Copy the file `.env-example` to `.env` and add your Firebase settings there. They don't need to be secret, but Firebase costs money.

## Run

```text
$ npm start
```

## Development

There's a simple generator script to create new components and pages.

Create a component in the `src/components` dir:

```text
$ ./g c form-input
```

Create a page in the `src/pages` dir:

```text
$ ./g p contact
```

Use snake-case.

## TODO

- [X] user sign up
- [ ] user sign in
- [ ] "create timer" form
- [ ] when user creates a timer it redirects to a URL with a timer
- [ ] set firestore permissions
- [ ] add sound notifications
- [ ] add browser notifications
- [ ] work on design
- [ ] join a timer
- [ ] show user count
- [ ] points system
