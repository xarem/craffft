# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## v0.18.0 - 2016-03-01
### Fixed
* Reimplement CSS import globbing after they were removed from postcss-import.

## v0.17.0 - 2016-03-01
### Added
* `--outputLog` flag to show detailed log of the build.
* `options.sourceMaps` in craffft-config.json to output sourcemaps for JavaScript, TypeScript and CSS, when `--build` flag isn't set. *Default is `true`*

### Breaking changes
* TypeScript was updated to version 1.8.2. See [TypeScript Release Log](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#typescript-18) for further details.

## v0.16.0 - 2016-02-08
### Added
* Adds TypeScript support. Use with adding typescript as preprocessor to the craffft-config.json. **Hint**: All es2015 code 
 will also be transpiled to es5.
  
  ```json
    "javascript": {
      "preprocessors": [
        "typescript"
      ]
    }
  ```
  **Important:** After adding TypeScript, craffft will only process .ts files and skips js files.

## v0.15.0 - 2016-01-04
### Changed
* Command for running the build is now unified with flags.

## v0.12.0 - 2016-01-02
### Added
* Build for production with `--build` flag. Minifies Javascript and CSS.

### Changes
* Remove stylus compression option in config. It's automatically used in production builds.

## v0.11.0 - 2015-12-30

### Added
* Watch: The watcher was reimplemented. Use `npm run watch` to watch for file changes or just run the default task.

### Fixes
* PostCSS does no longer throw deprecation warnings.

### Changed
* Log is supressed by default. To see full output of the building process, use `npm run log`.
* Compile + Watch is now the default task.

### Breaking changes
* **Config is now in json format.** It's no longer submitted via a `gulpfile.js`. Instead it's decoupled. To use, **convert your config to json and save it as `craffftconfig.json` in your project's root.

## v0.4.0 - 2015-11-30
### Changed
* JavaScript config now takes an array with glob patterns including negotations. 
  It then automatically makes bundles and keeps file structure as is in src folder.

## v0.1.0 - 2015-09-28
### Added
* **Javascript**
  * Transpiles JavaScript EcmaScript 2015 to ES5
  * Processes TypeScript to JavaScript *including ES6*
  * Supports multiple bundles and mixing of ES6, TypeScript and ES5

* **Styles**
  * Processes Sass, Stylus, Less and raw CSS
  * Supports multiple bundles and mixing of all three languages
