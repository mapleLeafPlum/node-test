let ModuleExportsTest = require("./moduleExportsTest");
let exportsTest = require("./exportsTest");

//实例化对象
let moduleExportsTest = new ModuleExportsTest();
//私有方法
moduleExportsTest.one();
moduleExportsTest.two();
//静态方法
ModuleExportsTest.getName();
ModuleExportsTest.getAge();
ModuleExportsTest.getAddress();


exportsTest.one();
exportsTest.four();

