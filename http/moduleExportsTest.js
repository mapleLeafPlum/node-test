
//module.exports = Exports 是对 module.exports 进行了覆盖，此时 module.exports 和 exports 的关系断裂，
// module.exports 指向了新的内存块，而 exports 还是指向原来的内存块，为了让 module.exports
// 和 exports 还是指向同一块内存或者说指向同一个 “对象”，所以我们就 exports = module.exports 。

// Exports 对象
//先把 module.exports 指向  Exports
//在把 exports 重新指向 module.exports
exports=module.exports=Exports;



//构造函数
function Exports() {
}

//实例化对象调用 私有方法
Exports.prototype.one=function one() {
    console.log("one");
};

//实例化对象调用 私有方法
Exports.prototype.two=function () {
    console.log("two");
};

//实例化对象调用 私有方法
Exports.prototype.three=function () {
    console.log("three");
};

//静态方法 直接拿类型调用  静态方法
Exports.getName=function() {
    console.log('my name is one');
};

function getAge() {
    console.log(34);
}

//添加属性 静态方法
exports.getAge=getAge;

//添加属性 静态方法
exports.getAddress=function(){
    console.log("深圳");
};


