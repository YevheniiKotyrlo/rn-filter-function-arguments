# rn-filter-function-arguments

React Native's `filter` string parser reads `brightness()` as `brightness(0)`, where CSS uses 1 for an omitted amount, and accepts a `px` length on `brightness()`, which takes a number or a percentage. This repository is [React Native's reproducer template](https://github.com/react-native-community/reproducer-react-native) (React Native 0.88.1) with one change, `ReproducerApp/App.tsx`: four grey (`#808080`) 96×96 boxes on a white screen, with `filter` set to `'brightness()'`, `'brightness(1)'`, `'brightness(2px)'` and `'brightness(2)'`.

## Steps

1. Clone and install:
   ```sh
   git clone https://github.com/YevheniiKotyrlo/rn-filter-function-arguments
   cd rn-filter-function-arguments/ReproducerApp
   yarn install
   ```
2. Build and install the app on an Android device: `yarn android`, or `cd android && ./gradlew assembleRelease` and `adb install -r app/build/outputs/apk/release/app-release.apk`.
3. Open it and compare the boxes.

Expected: the first three boxes unchanged grey: `brightness()` is `brightness(1)`, and `brightness(2px)` is invalid, so the declaration is ignored.

What I see on a Galaxy S23 (Android 14): `brightness()` paints the box black, `brightness(1)` leaves it grey, and `brightness(2px)` turns it white like `brightness(2)`.
