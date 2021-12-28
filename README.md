# Ground mobile app

The official Groundhandling Challenge mobile app.

Download on the [Play Store](https://play.google.com/store/apps/details?id=de.schmidt_voigt.ground) or visit the Groundhandling Challenge [website](https://www.groundhandlingchallenge.com).

## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/groundhandling-challenge/ground-mobile-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.

## Build an Android release version

1. Emulate and test the app with `ionic cordova emulate android`
2. Build a release version with `ionic cordova build android --release`
3. Sign the unsigned release with `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./ground-release-key.jks ./platforms/android/app/build/outputs/bundle/release/app-release.aab ground`
4. Zipalign the unsigned release with `zipalign  -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./platforms/android/app/build/outputs/apk/release/app-release.apk`

## Contributing

Thank you for considering contributing to this package! Please see [CONTRIBUTING](CONTRIBUTING.md) for details.
