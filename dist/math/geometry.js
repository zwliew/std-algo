"use strict";
exports.__esModule = true;
exports.rectCircleIntersect = void 0;
function rectCircleIntersect(rad, cx, cy, x1, y1, x2, y2) {
    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }
    if (y1 > y2) {
        var tmp = y1;
        y1 = y2;
        y2 = tmp;
    }
    var x = cx;
    if (x1 > cx) {
        x = x1;
    }
    else if (x2 < cx) {
        x = x2;
    }
    var y = cy;
    if (y1 > cy) {
        y = y1;
    }
    else if (y2 < cy) {
        y = y2;
    }
    return Math.pow((x - cx), 2) + Math.pow((y - cy), 2) <= Math.pow(rad, 2);
}
exports.rectCircleIntersect = rectCircleIntersect;
