
function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
}

exports.four=function(){
  console.log('four');
};

exports.one=one;
exports.two=two;
exports.three=three;