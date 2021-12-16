/*
function sloppyFunction() {
    if (true) {
        //OK:
        function nested() {}
    }
    nested();
}
sloppyFunction();
*/

/*
function strictFunction() {
    'use strict';
    if (true) {
        // SyntaxError:
        function nested() {}
    }
    nested();
}
strictFunction();
*/

/*
function strictFunction() {
    'use strict';
    //OK:
    function nested() {}
    if (true) {
        nested();
    }
}
strictFunction();
*/