declare var require;

var templates = require.context('./layout', true, /\.html$/);
templates.keys().forEach(templates);
var foo = 'foo';

console.log(templates);

export { foo as default };
