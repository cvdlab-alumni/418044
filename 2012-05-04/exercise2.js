domain1 = INTERVALS(1)(30);

var controls0 = [[-0.5,0,0],[-0.5,0,0],[0,0,0],[0,0,0]];
var c0 = CUBIC_HERMITE(S0)(controls0);
var curve0 = MAP(c0)(domain1);

var controls1 = [[-0.5,-0.3,0],[-0.5,0.1,0],[0,0,0.4],[0,0,-0.4]];
var c1 = CUBIC_HERMITE(S0)(controls1);
var curve1 = MAP(c1)(domain1);

var controls2 = [[-0.2,-0.5,0],[-0.2,0.2,0],[0,0,0.8],[0,0,-0.8]];
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve2 = MAP(c2)(domain1);

var controls3 = [[0,-0.7,0],[0,0.3,0],[0,0,1],[0,0,-1]];
var c3 = CUBIC_HERMITE(S0)(controls3);
var curve3 = MAP(c3)(domain1);

var controls4 = [[1,-0.8,0],[1,0.4,0],[0,0,1.2],[0,0,-1.2]];
var c4 = CUBIC_HERMITE(S0)(controls4);
var curve4 = MAP(c4)(domain1);

var controls5 = [[2,-0.9,0],[2,0.5,0],[0,0,1.6],[0,0,-1.6]];
var c5 = CUBIC_HERMITE(S0)(controls5);
var curve5 = MAP(c5)(domain1);

var controls6 = [[3,-1,0],[3,0.6,0],[0,0,1.6],[0,0,-1.6]];
var c6 = CUBIC_HERMITE(S0)(controls6);
var curve6 = MAP(c6)(domain1);

var controls7 = [[4,-0.85,0],[4,0.55,0],[0,0,1.6],[0,0,-1.6]];
var c7 = CUBIC_HERMITE(S0)(controls7);
var curve7 = MAP(c7)(domain1);

var controls8 = [[5,-0.7,0],[5,0.5,0],[0,0,1.6],[0,0,-1.6]];
var c8 = CUBIC_HERMITE(S0)(controls8);
var curve8 = MAP(c8)(domain1);

var controls9 = [[6,-0.55,0],[6,0.45,0],[0,0,1.2],[0,0,-1.2]];
var c9 = CUBIC_HERMITE(S0)(controls9);
var curve9 = MAP(c9)(domain1);

var controls10 = [[7,-0.4,0],[7,0.4,0],[0,0,1],[0,0,-1]];
var c10 = CUBIC_HERMITE(S0)(controls10);
var curve10 = MAP(c10)(domain1);

var controls11 = [[7,-0.3,0],[7,0.3,0],[0,0,0],[0,0,0]];
var c11 = CUBIC_HERMITE(S0)(controls11);
var curve11 = MAP(c11)(domain1);

/*
var curves = STRUCT([curve0,curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,curve11]);
DRAW(curves);
*/

var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var s = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11]);
var surf1 = MAP(s)(domain2);
var surf2 = S([2])([-1])(surf1);
var surfes = STRUCT([surf1,surf2]);
DRAW(surfes);

/*
var p0 = POLYLINE([[-0.5,-1,0.1],[-0.5,1,0.1]]);
var p1 = POLYLINE([[-0.2,-1,0.2],[-0.2,1,0.2]]);
var p2 = POLYLINE([[0,-1,0.25],[0,1,0.25]]);
var p3 = POLYLINE([[1,-1,0.3],[1,1,0.3]]);
var p4 = POLYLINE([[2,-1,0.4],[2,1,0.4]]);
var p5 = POLYLINE([[3,-1,0.4],[3,1,0.4]]);
var p6 = POLYLINE([[4,-1,0.4],[4,1,0.4]]);
var p7 = POLYLINE([[5,-1,0.4],[5,1,0.4]]);
var p8 = POLYLINE([[6,-1,0.3],[6,1,0.3]]);
var p9 = POLYLINE([[7,-1,0.25],[7,1,0.25]]);
var lines = STRUCT([p0,p1,p2,p3,p4,p5,p6,p7,p8,p9]);
DRAW(lines);
*/