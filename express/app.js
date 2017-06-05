var express = require('express');
var port = process.env.PORT||3000;
var app = express();

app.set('views','./views');//设置视图根目录
app.set('view engine','jade');//设置视图模版引擎为 pug
app.listen(port);

console.log('start on ' + port);

//index
app.get('/',function(req,res){
	//数据填充方法
	res.render('index',{
		title:'imooc index'
	})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{//
		title:'imooc detail'
	})
})

app.get('/admin/movie',function(req,res){
	res.render('list',{
		title:'imooc list'
	})
})

app.get('/admin/list',function(req,res){
	res.render('admin',{
		title:'imooc admin'
	})
})