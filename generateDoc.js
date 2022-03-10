var fs = require('fs');
var log = require('npmlog');
var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};
execute('npx whale-component-docgen README.md', function(data){
data = data.replace(/<br\/><br\/>\*\*可选值\*\*<br\/>/g, ' ');
console.log(data);
fs.writeFile('./README.md', data, function(err) {
    if (err) {
        throw err;
    }
    log.info('Docgen', 'README.MD 文档生成成功');
});
}); 