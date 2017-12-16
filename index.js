"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebInterface_BlockTypes;
(function (WebInterface_BlockTypes) {
    /**
     * A standard text input
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["TEXT"] = 0] = "TEXT";
    /**
     * A textarea
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["TEXTAREA"] = 1] = "TEXTAREA";
    /**
     * A dropdown select
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["SELECT"] = 2] = "SELECT";
    /**
     * A text field with a number constraint
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["NUMBER"] = 3] = "NUMBER";
    /**
     * A standard checkbox
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["CHECKBOX"] = 4] = "CHECKBOX";
    /**
     * A stylish switch
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["SWITCH"] = 5] = "SWITCH";
    /**
     * A password entry
     */
    WebInterface_BlockTypes[WebInterface_BlockTypes["PASSWORD"] = 6] = "PASSWORD";
})(WebInterface_BlockTypes = exports.WebInterface_BlockTypes || (exports.WebInterface_BlockTypes = {}));
