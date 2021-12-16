
function sloppyFunction(){
    myVar = 123;
}
sloppyFunction();



function strictFunction(){
    'use strict';
    myVar = 123;
}
strictFunction();

function strictFunction(){
    'use strict';
    var myVar = 123;
}
strictFunction();
