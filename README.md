# Hello, this Project is a fun, awesome palace

## Vensure Mobile App base on my test in MyLong.

In this project, i wanna do many things. But time is limited. So, some features a not yet completed. (Will be list in Check list)

> Please view `Scrum Daily report` file to more detail.


-----

## Core Technologies
- React Native 0.64.2
- React Navigation 5
- MobX (Awesome state manager, bye bye Redux)
- Reanimated 2 (2.2.0 still meet trouble with React Native right now, i will work with community to find a way)
- MMKV storage
- react-native-svg and d3-shape

## Conventions
- Code lint and auto format by Eslint with Prettier plugin
- Commit lint using husky and commit-lint
- Base on my Uncle Bob "The Clean Code" spirit.

## Get Starts


> Before start please ensure your environment ready for build and develop react native Application.
>


### In Your project root folder, open terminal and get start!

1. Install Dependencies
```bash
# install dependencies
yarn

# install cocoapods
cd ios
pod install
```

2. Start your Application
```bash
# start dev server
yarn start

# run ios version in Debug mode
yarn ios
```

3. Test Application with Enzyme

    This project using `jest` and `enzyme` to unit testing, with help of `testing-library`.
```bash
# test overall project
yarn test
# test overall with coverage report
yarn test --coverage
yarn open:coverage
# test single Component
yarn test <Component Name>
```

## Check list

- [x] Login Screen
- [x] Onboarding Screen
- [x] Home Screen
- [x] Svg and d3 Pie Chart
- [x] Profile Screen
- [x] Notification Screen
- [x] Setting Screen
- [x] Paid Detail Screen
- [ ] Paid History Screen
- [x] Drawer Navigation
- [x] Personal Info Screen
- [x] Edit Text (Utility Screen) Use for simple Text data like Nick Name in Personal Info. Can be reuse for another.
- [x] Notification Detail Screen
- [x] Setup unit test (coverage 30%)
- [x] Add commit lint
- [ ] Revoke token when logout
- [ ] Optimize for Android Layout
- [ ] Fix Reanimated problems with Drawer
- [ ] Fix Reanimated rise crash when use useSharedValue
- [ ] Implement Collapsible menu using Reanimated (Current using Layout Animation)
- [ ] Implement Reanimated Chart


## Again thanks sifu Long to bring me a very interesting project. I be attracted with this very much. <3

