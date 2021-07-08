# Hello, this Project is Frontend path of Tushare

A simple youtube videos sharing website.

In this project, i wanna do many things. But time is limited. So, some features a not yet completed. (Will be list in Check list)

> Please view `Scrum Daily report` file to more detail.


-----

## Core Technologies
- NextJS
- TailwindCSS
- Styled Components
- Authorizing with NextAuth

## Conventions
- Code lint by Eslint
- Code automation format using Prettier
- Commit lint using husky and commit-lint (not yet implement)

## Get Starts

1. First, complete setup & start your backend. If you just wanna test frontend. Use environment info from `.env.sample`

1. Create `.env.local` file. Copy content from `.env.dev`. Then, fill with your backend information. To get client ID and Client Scret, on your backend `rails console` run

```ruby
# client_id of the application
Doorkeeper::Application.find_by(name: "React").uid

# client_secret of the application
Doorkeeper::Application.find_by(name: "React").secret
```

3. Start your frontend server
```bash
# install dependencies
yarn

# start dev server
yarn dev
```
Frontend server will start at port 3001, open browser and navigate to address http://localhost:3001 to start test website.

4. Analyze your bundle
```bash
# Analyze application both on NextJs server side and browser side
yarn analyze
# Analyze NextJS server side bundle
yarn analyze:server
# Analyze NextJS browser side bundle
yarn analyze:browser
```

5. Unit Testing

This project using `jest` and `enzyme` to unit testing.
```bash
# run test using jest
yarn test
# run test and collect coverage
yarn test:coverage
# open coverage report file
yarn open:coverage
```
## Check list

- [x] login UI
- [x] register UI
- [x] header / footer UI
- [x] home UI
- [x] infinity list
- [x] share Video UI
- [x] auth config
- [x] build contextual modal navigation system config
- [x] Setup unit test
- [ ] responsive for contextual modal
- [ ] revoke token when logout
- [ ] handle 401 error
- [ ] handle refresh token at API side
- [ ] handle refresh token
- [ ] optimize lighthouse
- [ ] Add commit lint


