# Poki Template
Template project for Poki conversions

## Prerequistes ##
 - git ([installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
 - Node.js ([installation instructions](https://nodejs.dev/learn/how-to-install-nodejs))

## Installing ##
Click the 'Use this template' button and follow the instructions to create a copy of the template in your own repository. Then checkout and install a local copy in the usual way by typing the following into a terminal / cmd prompt / shell window:
```shell
git clone https://github.com/myorg/myconversionproject
cd myconversionproject
npm install
```

## Naming conventions ##
By default, your project name is `poki-template`. You can change this by opening `./package.json` and editing the `"name"` entry. You should also update the name visible in `./src/Main.ts` as this will be used to keep track of releases when publishing. Be sure to keep the `0.0.0` number at the end of the name as this is use to auto-increment version numbers.

## Configuration ##
Open the `pokiGame.config.js` file and add some SWF files to `fileconfigs`, including a `rt_title` and `rt_filename` entry (without the .swf extension), eg:
```javascript
fileconfigs: [
    {
        rt_title: "my Awesome Flash Game",
        rt_filename: "my_awesome_flash_game",
    },
],
```
`pokiGame.config.js` contains many additional configs (documented inline) that can be applied either global or locally to individual test SWFs.

## Poki SDK ##
The SDK's most commonly used functions are:
 - `commercialBreak()`
 - `gameplayStart()`
 - `gameplayStop()`

Use cases are described inside the examples found in [@awayfl/poki-player](https://github.com/awayfl/poki-player#pokisdk-examples)

## Preview ##
To run a preview of your SWFs, start up the webpack development server
```shell
npm start
```
Once compilation is complete, you can view your SWFs through the links at http://localhost. Updating SWFs or any files in  `/src` will auto-reload the browser. However, any changes to `pokiGame.config.js` will require a restart.

## Publishing ##
Once you are ready to publish a version of your game(s) for QA, you can create a new version by calling the following:
```shell
npm version patch
```
This automatically increments the version number, as well as building a local copy of your published files in the temporary `./bin` folder. The published files have the following structure:

 - game_name_1
   - /assets
   - /js
   - index.html
 - game_name_2
   - /assets
   - /js
   - index.html
 - ...

Each folder contains the source, swfs and support files to publish individual games. These can be compressed as `.zip`, `.rar` etc files and then passed to QA for testing.

> N.B. It is useful to tag different release versions of a game by adding the `_version` suffix at the end of a compressed file to identify its contents.