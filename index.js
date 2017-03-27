
const sys = require('sys');
const exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
// exec("ls -la", puts);

exec ("browser-sync start --server --serveStatic --startPath ./bootstrap.html --files=./bootstrap.pug --browser chrome --no-inject-changes", puts);
