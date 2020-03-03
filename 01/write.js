var fs=require('fs');
fs.writeFile('hello.md','hello',function(err){
	if(err){
		return console.error(err);
	}
	console.log('写入成功');
});