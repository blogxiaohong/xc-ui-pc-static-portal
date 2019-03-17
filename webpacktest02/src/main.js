var {add} = require('./module01.js');
var Vue = require('./vue.min.js');
var VM = new Vue({
    el:"#app",
    data:{
        name:'黑马程序猿',
        num1:0,
        num2:0,
        result:0,
        url:"http://www.baidu.com",
        size: 33
    },
    methods:{
        change:function () {
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2));
        }
    }
});