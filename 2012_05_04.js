var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var controls1 = [[1,0,0],[0,1,0],[0,2,0],[-2,0,0]];
var c1 = CUBIC_HERMITE(S0)(controls1);
var curve1 = MAP(c1)(domain1);

var controls2 = [[2,0,0],[0,2,0],[0,4,0],[-4,0,0]];
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve2 = MAP(c2)(domain1);

var curves = STRUCT([curve1,curve2]);
DRAW(curves);

var s1 = BEZIER(S1)([c1,c2]);
var surface1 = MAP(s1)(domain2);
DRAW(surface1);
DRAW(SKELETON(1)(surface1));

var s2 = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]);
var surface2 = MAP(s2)(domain2);
DRAW(surface2);
DRAW(SKELETON(1)(surface2));

/*********************************************************/

var domain = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function (p) {return [p[0],p[1],p[2]+10]});
var p2 = p0.map(function (p) {return [p[0],p[1]-5,p[2]+20]});
var p3 = p0.map(function (p) {return [p[0],p[1]+5,p[2]+30]});
var p4 = p0.map(function (p) {return [p[0],p[1],p[2]+40]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);

var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4]))(domain));
DRAW(curves);

var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
var surf = MAP(wing)(domain2);
DRAW(surf);

/*********************************************************/

var domain = INTERVALS(1)(20);
var controls = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots = [0,0,0,1,2,3,3,3];
var c1 = NUBS(S0)(2)(knots)(controls);
var curve = MAP(c1)(domain);
DRAW(curve);

var controls2 = [[0,0,0],[2,5,3],[7,3,6],[9,7,-2],[12,2,-3]];
var knots2 = [0,0,0,1,2,3,3,3];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain);
DRAW(curve2);

var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var s12 = BEZIER(S1)([c1,c2]);
var surf = MAP(s12)(domain2);
DRAW(surf);