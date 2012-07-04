var grigio = [0.4,0.4,0.4];
var blu = [0,150/255,1];
var Placca5 = function() {  
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([10,20]);
var c1 = CUBIC_HERMITE(S0)([[0,0,0.005],[0,0.04,0.075],[0,0.14,0],[0,0,0.05]]);
var c2 = CUBIC_HERMITE(S0)([[0,0,0],[0,0.05,0],[0,0,0],[0,0,0]]);
var c3 = CUBIC_HERMITE(S0)([[0,0.05,0.075],[0,0.05,0],[0,0,0],[0,0,0]]);
var c4 = CUBIC_HERMITE(S0)([[0,0,0.015],[0,0.03,0.075],[0,0.1,0],[0,0,0.05]]);
var c5 = CUBIC_HERMITE(S0)([[-0.04,0,0.005],[-0.04,0.04,0.075],[0,0.14,0],[0,0,0.05]]);
var c6 = CUBIC_HERMITE(S0)([[-0.04,0,0.015],[-0.04,0.03,0.075],[0,0.1,0],[0,0,0.05]]);
var c7 = CUBIC_HERMITE(S0)([[0,0.05,0.075],[0,0.04,0.075],[0,0,0],[0,0,0]]);
var s1 = BEZIER(S1)([c3,c7]);
var s2 = BEZIER(S1)([c1,c2]);
var surf1 = COLOR(blu)(STRUCT([MAP(s1)(domain2),MAP(s2)(domain2)]));
var s3 = BEZIER(S1)([c1,c4]);
var surf2 = COLOR([1,1,1])(T([0])([0.01])(MAP(s3)(domain2)));
var s4 = BEZIER(S1)([c1,c5]);
var surf3 = COLOR([1,1,1])(T([0])([0.01])(MAP(s4)(domain2)));
var s5 = BEZIER(S1)([c4,c6]);
var surf4 = COLOR([1,1,1])(T([0])([0.01])(MAP(s5)(domain2)));
var p51 = STRUCT([surf1,surf2,surf3,surf4]);
var p52 = S([1])([-1])(p51);
var p53 = T([2])([0.15])(R([1,2])([PI])(p51));
var p54 = S([1])([-1])(p53);
return STRUCT([p51,p52,p53,p54]);
}
var pl1 = COLOR([1,1,1])(EXTRUDE([0.15])(POLYLINE([[-0.005,0.015],[-0.005,0.05]])));
var pl2 = COLOR([1,1,1])(EXTRUDE([0.15])(POLYLINE([[-0.005,-0.015],[-0.005,-0.05]])));
var pl3 = COLOR(grigio)(T([0])([0.005])(R([0,2])([-PI/4])(EXTRUDE([0.03])(POLYLINE([[0,-0.015],[0,0.015]])))));
var t = T([2])([0.025]);
var placca5 = STRUCT([Placca5(),pl1,pl2,t,pl3,t,pl3,t,pl3,t,pl3]);
DRAW(placca5);