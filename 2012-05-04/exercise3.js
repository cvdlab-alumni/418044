var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([10,20]);

var controls0 = [[0.5,0.05,0]];
var c0 = BEZIER(S0)(controls0);
var curve0 = MAP(c0)(domain1);

var controls1 = [[0.9,0.05,0],[0.55,0.2,0],[-1.1,0.05,0],[0.55,-0.1,0],[0.9,0.05,0]];
var c1 = BEZIER(S0)(controls1);
var curve1 = MAP(c1)(domain1);

var controls2 = [[1.1,0.05,0.1],[0.55,0.2,0.1],[-1.1,0.05,0.1],[0.55,-0.1,0.1],[1.1,0.05,0.1]];
var c2 = BEZIER(S0)(controls2);
var curve2 = MAP(c2)(domain1);

var controls3 = [[1.1,0.05,1.2],[0.55,0.2,1.2],[-1.1,0.05,1.2],[0.55,-0.1,1.2],[1.1,0.05,1.2]];
var c3 = BEZIER(S0)(controls3);
var curve3 = MAP(c3)(domain1);

var controls6 = [[1.1,0.05,0.75],[0.55,0.2,0.75],[-1.1,0.05,0.75],[0.55,-0.1,0.75],[1.1,0.05,0.75]];
var c6 = BEZIER(S0)(controls6);
var curve6 = MAP(c6)(domain1);

var controls4 = [[1,0.05,1.3],[0.55,0.2,1.3],[-1,0.05,1.3],[0.55,-0.1,1.3],[1,0.05,1.3]];
var c4 = BEZIER(S0)(controls4);
var curve4 = MAP(c4)(domain1);

var controls5 = [[0.55,0.05,1.3]];
var c5 = BEZIER(S0)(controls5);
var curve5 = MAP(c5)(domain1);

/*
var curves = STRUCT([curve0,curve1,curve2,curve3,curve4,curve5,curve6]);
DRAW(curves);

DRAW(POLYLINE([[0,0],[0,0.1],[1.1,0.1],[1.1,0],[0,0]]));
*/

var s = BEZIER(S1)([c0,c1,c2,c3,c4,c5]);
var hstab1 = T([0,1])([0.3,-0.3])(MAP(s)(domain2));
var hstab2 = S([2])([-1])(hstab1);
var hstabs = STRUCT([hstab1,hstab2]);
DRAW(hstabs);

var controls6 = [[1.8,0,0],[1.4,-0.15,0],[-5,0,0],[1.4,0.15,0],[1.8,0,0]];
var c6 = BEZIER(S0)(controls6);
var curve6 = MAP(c6)(domain1);

var controls7 = [[1.75,0,0.2],[1.375,-0.15,0.2],[-2.5,0,0.2],[1.375,0.15,0.2],[1.75,0,0.2]];
var c7 = BEZIER(S0)(controls7);
var curve7 = MAP(c7)(domain1);

var controls8 = [[1.7,0,0.4],[1.35,-0.15,0.4],[-1.4,0,0.4],[1.35,0.15,0.4],[1.7,0,0.4]];
var c8 = BEZIER(S0)(controls8);
var curve8 = MAP(c8)(domain1);

var controls9 = [[1.65,0,0.6],[1.175,-0.15,0.6],[-0.3,0,0.6],[1.175,0.15,0.6],[1.65,0,0.6]];
var c9 = BEZIER(S0)(controls9);
var curve9 = MAP(c9)(domain1);

var controls10 = [[1.6,0,0.8],[1.25,-0.15,0.8],[0.2,0,0.8],[1.25,0.15,0.8],[1.6,0,0.8]];
var c10 = BEZIER(S0)(controls10);
var curve10 = MAP(c10)(domain1);

var controls11 = [[1.55,0,1],[1.275,-0.15,1],[0.5,0,1],[1.275,0.15,1],[1.55,0,1]];
var c11 = BEZIER(S0)(controls11);
var curve11 = MAP(c11)(domain1);

var controls12 = [[1.4,0,1.3],[1.25,-0.15,1.3],[0.7,0,1.3],[1.25,0.15,1.3],[1.4,0,1.3]];
var c12 = BEZIER(S0)(controls12);
var curve12 = MAP(c12)(domain1);

var controls13 = [[1.3,0,1.3]];
var c13 = BEZIER(S0)(controls13);
var curve13 = MAP(c13)(domain1);

var controls14 = [[1.75,0,0-0.1],[0.9,-0.15,-0.1],[-2,0,-0.1],[0.9,0.15,-0.1],[1.75,0,-0.1]];
var c14 = BEZIER(S0)(controls14);
var curve14 = MAP(c14)(domain1);

var controls15 = [[1.4,0,0-0.2],[0.7,-0.15,-0.2],[-1.5,0,-0.2],[0.7,0.15,-0.2],[1.4,0,-0.2]];
var c15 = BEZIER(S0)(controls15);
var curve15 = MAP(c15)(domain1);

var controls16 = [[0.8,0,-0.3]];
var c16 = BEZIER(S0)(controls16);
var curve16 = MAP(c16)(domain1);

/*
var curves2 = STRUCT([curve6,curve7,curve8,curve9,curve10,curve11,curve12,curve13,curve14,curve15,curve16]);
DRAW(curves2);

DRAW(POLYLINE([[0,0.05,-0.2],[1.4,0.05,-0.2],[1.4,-0.05,-0.2],[0,-0.051,-0.2],[0,0.05,-0.2]]));
DRAW(POLYLINE([[0,0.05,-0.1],[1.75,0.05,-0.1],[1.75,-0.05,-0.1],[0,-0.051,-0.1],[0,0.05,-0.1]]));
DRAW(POLYLINE([[0,0.05,0],[1.8,0.05,0],[1.8,-0.05,0],[0,-0.05,0],[0,0.05,0]]));
DRAW(POLYLINE([[0,0.05,0.2],[1.75,0.05,0.2],[1.75,-0.05,0.2],[0,-0.05,0.2],[0,0.05,0.2]]));
DRAW(POLYLINE([[0.4,0.05,0.4],[1.7,0.05,0.4],[1.7,-0.05,0.4],[0.4,-0.05,0.4],[0.4,0.05,0.4]]));
DRAW(POLYLINE([[0.7,0.05,0.6],[1.65,0.05,0.6],[1.65,-0.05,0.6],[0.7,-0.05,0.6],[0.7,0.05,0.6]]));
DRAW(POLYLINE([[0.9,0.05,0.8],[1.6,0.05,0.8],[1.6,-0.05,0.8],[0.9,-0.05,0.8],[0.9,0.05,0.8]]));
DRAW(POLYLINE([[1,0.05,1],[1.55,0.05,1],[1.55,-0.05,1],[1,-0.051,1],[1,0.05,1]]));
*/

var s2 = BEZIER(S1)([c16,c15,c14,c6,c7,c8,c9,c10,c11,c12,c13]);
var vstab = R([1,2])([PI/2])(MAP(s2)(domain2));
DRAW(vstab);
