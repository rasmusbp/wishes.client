declare var require;

// Put NG templates into $templateCache (*)
var templates = require.context('ng-cache?-url&prefix=layers:layers/**/**!.', true, /\.html$/);
templates.keys().forEach(templates);

'use strict';

var appModule = angular
  .module('Wishes', [
    'ng', // <- (*) $templateCache
    'ui.router',
    'resources',
    'matchMedia',
    'angularFileUpload',
    'iso.directives',
    'uiSwitch'
  ]);

export { appModule as default };
