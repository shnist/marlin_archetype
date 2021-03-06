# Shnist Archetype

Archetype for small scale websites. Aims to use the latest techniques and best practices.

## Features

* Small screen first responsive
* Barebones Grunt included
	* CSS linting
	* JavaScript linting.
	* FTP uploading

## Warnings

I made the deliberate decision to make this a future looking project. So, while I have included
some polyfills to make things like HTML5 elements workable in IE8, anyone who is on IE8 without
JavaScript will suffer. Good.

## Dependencies

* Node
	* Grunt
	* LESS
* jQuery
* Require.js
* html5shiv - https://github.com/aFarkas/html5shiv/
* ios orientation fix (fixed for ios6)- https://github.com/scottjehl/iOS-Orientationchange-Fix

* Less syntax highlighting - shnist theme + https://github.com/danro/LESS-sublime


## Inspirations / Acknowledgements

320andup


## To Do List

- [] Make ios orientation fix load conditionally
- [] possibly add touch support with hammer (see if it's needed) - https://github.com/eightmedia/hammer.js
- [] flesh out the grunt build task
	- css linting
	- less compilation - https://github.com/gruntjs/grunt-contrib-less
	- html validation (on shtml files?)
	- concatentation
	- minification (optional?)
	- javascript linting
	- unit testing (mocha, jasmine or qunit?)
	- deployment to server (ftp? ssh?)
- Installing process that fills out all the stuff you need - marlin archetype generator - node based service
	- dynamically add correct UA string for analytics as part of build process
	- less variable fill in
	- ftp deployment details
- [] add example icons for favicon and iphone stuff, etc.
- [] read up on require.js
- [] less - basic.less - add common basic styling through the site, possibly along the lines of a reset


