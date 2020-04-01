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

In development, for the Code Self Study version, you can use our public settings in your `.env` file.

```
REACT_APP_APIKEY=AIzaSyCToota4ZITvzYLX5MoIGJsFc7qF7l96k8
REACT_APP_AUTHDOMAIN=focustimer-codeselfstudy.firebaseapp.com
REACT_APP_DATABASEURL=https://focustimer-codeselfstudy.firebaseio.com
REACT_APP_PROJECTID=focustimer-codeselfstudy
REACT_APP_STORAGEBUCKET=focustimer-codeselfstudy.appspot.com
REACT_APP_MESSAGINGSENDERID=935684307688
REACT_APP_APPID=1:935684307688:web:fa71f29224fbb7b3b8a75d
```

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

Create Redux boilerplate in the `src/redux` dir:

```text
$ ./g r timer
```

Use snake-case.

## TODO

- [X] user sign up
- [X] user sign in
- [ ] style the sign-in/up forms
- [ ] "create timer" form (MVP can use default 25/5 time blocks)
- [ ] when user creates a timer it redirects to a URL with a timer
- [ ] set firestore permissions
- [ ] add sound notifications
- [ ] add browser notifications
- [ ] work on design
- [ ] work on accessibility
- [ ] create user profile pages
- [ ] join a timer
- [ ] show the number of users on a timer
- [ ] points system
