var p1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
var p2 = POLYLINE([[0,4],[1,4],[1,6],[4,6],[4,4],[5,4],[5,6],[8,6],[8,4],[9,4],[9,7],[0,7],[0,4]]);
var plant = STRUCT([p1,p2]);
var ex = EXTRUDE([3])(plant);
var color_ex = COLOR([0,1,0,1])(ex);
DRAW(color_ex);

var c = T([2])([3])(COLOR([1,0,0,0.5])(BOUNDARY(CUBOID([9,7,1]))));
DRAW(c);