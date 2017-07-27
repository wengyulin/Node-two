var express=require('express');
var app=express();
//主页输出 "Hello World"

app.get('/',function (req,res) {
    console.log('主页 Get请求');
    res.send('Hello Get')
})
//post 请求
app.post('/',function (req,res) {
    console.log('主页 post请求');
    res.send('Hello Post')
})
// 页面相应
app.get('/del_user',function (req,res) {
    console.log('/del_user 相应Delete 请求');
    res.send('删除页面');
})
app.get('/list_user',function (req,res) {
    console.log('/list_user Get请求');
    res.send('用户列表页面');
})
app.get('/ab*cd',function (req,res) {
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
})

var server=app.listen(8081,function () {
    var host=server.address(),address
    var port=server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})