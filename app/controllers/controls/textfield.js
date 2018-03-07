var log = require('log');

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
    
})();

var focussedTextfield;
function textFieldValueChanged(e) {
    log.args(e.source.id + ' changed value to ' + e.value);
}

function textFieldFocussed(e) {
    focussedTextfield = e.source.id;
    log.args(e.source.id + ' focussed!');
}

function textFieldBlurred(e) {
    focussedTextfield = null;
    log.args(e.source.id + ' blurred!');
}

function blurTextfield() {
    if (focussedTextfield) {
        $[focussedTextfield].blur();
    }
}
