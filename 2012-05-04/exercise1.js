var domain1 = INTERVALS(1)(30);

var controls0 = [[-0.4,3,0],[-0.4,2.25,1],[-0.4,-6,0],[-0.4,2.25,-0.7],[-0.4,3,0]];
var c0 = BEZIER(S0)(controls0);
var curve0 = MAP(c0)(domain1);

var controls1 = [[0,2.1,0],[0,1.35,0.5],[0,-2.3,0],[0,1.3,-0.5],[0,2.1,0]];
var c1 = BEZIER(S0)(controls1);
var curve1 = MAP(c1)(domain1);

var controls2 = [[0.5,2.1,0],[0.5,1.35,0.5],[0.5,-2.3,0],[0.5,1.3,-0.5],[0.5,2.1,0]];
var c2 = BEZIER(S0)(controls2);
var curve2 = MAP(c2)(domain1);

var controls3 = [[1,2.1,0],[1,1.35,0.5],[1,-2.3,0],[1,1.3,-0.5],[1,2.1,0]];
var c3 = BEZIER(S0)(controls3);
var curve3 = MAP(c3)(domain1);

var controls4 = [[1.5,2.05,0.045],[1.5,1,0.5],[1.5,-1.5,.045],[1.5,1,-0.4],[1.5,2.05,0.045]];
var c4 = BEZIER(S0)(controls4);
var curve4 = MAP(c4)(domain1);

var controls5 = [[2,2,0.115],[2,1,0.6],[2,-1.4,0.115],[2,1,-0.3],[2,2,0.115]];
var c5 = BEZIER(S0)(controls5);
var curve5 = MAP(c5)(domain1);

var controls6 = [[2.5,1.95,0.16],[2.5,1,0.6],[2.5,-1.2,0.16],[2.5,1,-0.25],[2.5,1.95,0.16]];
var c6 = BEZIER(S0)(controls6);
var curve6 = MAP(c6)(domain1);

var controls7 = [[3,1.9,0.205],[3,1,0.5],[3,-1.1,0.205],[3,1,-0.1],[3,1.9,0.205]];
var c7 = BEZIER(S0)(controls7);
var curve7 = MAP(c7)(domain1);

var controls8 = [[3.5,1.85,0.25],[3.5,1,0.5],[3.5,-0.9,0.25],[3.5,1,0],[3.5,1.85,0.25]];
var c8 = BEZIER(S0)(controls8);
var curve8 = MAP(c8)(domain1);

var controls9 = [[4,1.8,0.295],[4,1,0.5],[4,-0.75,0.295],[4,1,0.1],[4,1.8,0.295]];
var c9 = BEZIER(S0)(controls9);
var curve9 = MAP(c9)(domain1);

var controls10 = [[4.5,1.7,0.34],[4.5,1,0.5],[4.5,-0.55,0.34],[4.5,1,0.2],[4.5,1.7,0.34]];
var c10 = BEZIER(S0)(controls10);
var curve10 = MAP(c10)(domain1);

var controls11 = [[5,1.5,0.41],[5,1,0.55],[5,-0.25,0.41],[5,1,0.3],[5,1.5,0.41]];
var c11 = BEZIER(S0)(controls11);
var curve11 = MAP(c11)(domain1);

var controls12 = [[5,1,0.41]];
var c12 = BEZIER(S0)(controls12);
var curve12 = MAP(c12)(domain1);

/*
var curves = STRUCT([curve0,curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,curve11,curve12]);
DRAW(curves);

DRAW(POLYLINE([[-0.4,-0.5,-0.25],[-0.4,-0.5,0.25],[-0.4,4,0.25],[-0.4,4,-0.25],[-0.4,-0.5,-0.25]]));
DRAW(POLYLINE([[0,0,-0.25],[0,0,0.25],[0,2.7,0.25],[0,2.7,-0.25],[0,0,-0.25]]));
DRAW(POLYLINE([[0.5,0.1,-0.2],[0.5,0.1,0.2],[0.5,2.1,0.2],[0.5,2.1,-0.2],[0.5,0.1,-0.2]]));
DRAW(POLYLINE([[1,0.1,-0.2],[1,0.1,0.2],[1,2.1,0.2],[1,2.1,-0.2],[1,0.1,-0.2]]));
DRAW(POLYLINE([[1.5,0.2,-0.13],[1.5,0.2,0.22],[1.5,2.05,0.22],[1.5,2.05,-0.13],[1.5,0.2,-0.13]]));
DRAW(POLYLINE([[2,0.25,-0.06],[2,0.25,0.29],[2,2,0.29],[2,2,-0.06],[2,0.25,-0.06]]));
DRAW(POLYLINE([[2.5,0.3,0.01],[2.5,0.3,0.31],[2.5,1.95,0.31],[2.5,1.95,0.01],[2.5,0.3,0.01]]));
DRAW(POLYLINE([[3,0.35,0.08],[3,0.35,0.33],[3,1.9,0.33],[3,1.9,0.08],[3,0.35,0.08]]));
DRAW(POLYLINE([[3.5,0.4,0.15],[3.5,0.4,0.35],[3.5,1.85,0.35],[3.5,1.85,0.15],[3.5,0.4,0.15]]));
DRAW(POLYLINE([[4,0.45,0.22],[4,0.45,0.37],[4,1.8,0.37],[4,1.8,0.22],[4,0.45,0.22]]));
DRAW(POLYLINE([[4.5,0.5,0.29],[4.5,0.5,0.39],[4.5,1.7,0.39],[4.5,1.7,0.29],[4.5,0.5,0.29]]));
DRAW(POLYLINE([[5,0.6,0.36],[5,0.6,0.46],[5,1.5,0.46],[5,1.5,0.36],[5,0.6,0.36]]));
*/

var domain2 = DOMAIN([[0,1],[0,1]])([10,20]);
var s = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]);
var surf = MAP(s)(domain2);
DRAW(surf);
