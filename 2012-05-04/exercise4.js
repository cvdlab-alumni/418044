var Wing = function() {
	var domain1 = INTERVALS(1)(30);

	var controls0 = [[1.25,0,0],[0,0.3,0],[-1.25,0,0],[0,-0.3,0],[1.25,0,0]];
	var c0 = BEZIER(S0)(controls0);
	var curve0 = MAP(c0)(domain1);

	var controls1 = [[1.25,0,1],[0,0.3,1],[-1.25,0,1],[0,-0.3,1],[1.25,0,1]];
	var c1 = BEZIER(S0)(controls1);
	var curve1 = MAP(c1)(domain1);

	var controls2 = [[1,0.1,2],[0,0.4,2],[-1,0.1,2],[0,-0.2,2],[1,0.1,2]];
	var c2 = BEZIER(S0)(controls2);
	var curve2 = MAP(c2)(domain1);

	var controls3 = [[1,0.2,3],[0,0.5,3],[-1.25,0.2,3],[0,-0.1,3],[1,0.2,3]];
	var c3 = BEZIER(S0)(controls3);
	var curve3 = MAP(c3)(domain1);

	var controls4 = [[0.7,0.3,4],[0,0.6,4],[-1.25,0.3,4],[0,0,4],[0.7,0.3,4]];
	var c4 = BEZIER(S0)(controls4);
	var curve4 = MAP(c4)(domain1);

	var controls5 = [[0.5,0.4,4.5],[0,0.7,4.5],[-1.25,0.4,4.5],[0,0.1,4.5],[0.5,0.4,4.5]];
	var c5 = BEZIER(S0)(controls5);
	var curve5 = MAP(c5)(domain1);

	var controls6 = [[0.3,0.5,4.6],[0,0.8,4.6],[-0.6,0.5,4.6],[0,0.2,4.6],[0.3,0.5,4.6]];
	var c6 = BEZIER(S0)(controls6);
	var curve6 = MAP(c6)(domain1);

	var controls7 = [[0.15,0.6,4.75],[0,0.9,4.75],[-0.3,0.6,4.75],[0,0.3,4.75],[0.15,0.6,4.75]];
	var c7 = BEZIER(S0)(controls7);
	var curve7 = MAP(c7)(domain1);

	var controls8 = [[0,0.6,4.75]];
	var c8 = BEZIER(S0)(controls8);
	var curve8 = MAP(c8)(domain1);

	var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
	var s = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6,c7,c8]);
	var surf = MAP(s)(domain2);
	return surf;
}

var Fuselage = function() {
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
/*
	var controls10 = [[7,-0.4,0],[7,0.4,0],[0,0,1],[0,0,-1]];
	var c10 = CUBIC_HERMITE(S0)(controls10);
	var curve10 = MAP(c10)(domain1);
*/
	var controls11 = [[7,-0.3,0],[7,0.3,0],[0,0,0],[0,0,0]];
	var c11 = CUBIC_HERMITE(S0)(controls11);
	var curve11 = MAP(c11)(domain1);

	var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
	var s = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,/*c10,*/c11]);
	var surf1 = MAP(s)(domain2);
	var surf2 = S([2])([-1])(surf1);
	var surfes = STRUCT([surf1,surf2]);
	return surfes;
}

var Stabilizers = function() {	
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

	var controls0 = [[0.55,0.05,0]];
	var c0 = BEZIER(S0)(controls0);
	var curve0 = MAP(c0)(domain1);

	var controls1 = [[0.7,0.05,0],[0.55,0.2,0],[-0.55,0.05,0],[0.55,-0.1,0],[0.7,0.05,0]];
	var c1 = BEZIER(S0)(controls1);
	var curve1 = MAP(c1)(domain1);

	var controls2 = [[1.1,0.05,0.1],[0.55,0.2,0.1],[-1.1,0.05,0.1],[0.55,-0.1,0.1],[1.1,0.05,0.1]];
	var c2 = BEZIER(S0)(controls2);
	var curve2 = MAP(c2)(domain1);

	var controls3 = [[1.1,0.05,1.2],[0.55,0.2,1.2],[-1.1,0.05,1.2],[0.55,-0.1,1.2],[1.1,0.05,1.2]];
	var c3 = BEZIER(S0)(controls3);
	var curve3 = MAP(c3)(domain1);

	var controls4 = [[0.7,0.05,1.3],[0.55,0.2,1.3],[-0.55,0.05,1.3],[0.55,-0.1,1.3],[0.7,0.05,1.3]];
	var c4 = BEZIER(S0)(controls4);
	var curve4 = MAP(c4)(domain1);

	var controls5 = [[0.55,0.05,1.3]];
	var c5 = BEZIER(S0)(controls5);
	var curve5 = MAP(c5)(domain1);

	var s = BEZIER(S1)([c0,c1,c2,c3,c4,c5]);
	var hstab1 = T([0,1])([0.3,-0.3])(MAP(s)(domain2));
	var hstab2 = S([2])([-1])(hstab1);
	var hstabs = STRUCT([hstab1,hstab2]);

	var controls6 = [[1.8,0,0],[1.4,-0.15,0],[-2.5,0,0],[1.4,0.15,0],[1.8,0,0]];
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

	var controls12 = [[1.4,0,1.1],[1.25,-0.15,1.1],[0.7,0,1.1],[1.25,0.15,1.1],[1.4,0,1.1]];
	var c12 = BEZIER(S0)(controls12);
	var curve12 = MAP(c12)(domain1);

	var controls13 = [[1.2,0,1.1]];
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

	var s2 = BEZIER(S1)([c16,c15,c14,c6,c7,c8,c9,c10,c11,c12,c13]);
	var vstab = R([1,2])([PI/2])(MAP(s2)(domain2));
	return STRUCT([vstab,hstabs]);
}

var w1 = T([0,1])([1.3,-0.6])(Wing());
var w2 = S([2])([-1])(w1);

var f = Fuselage();

var s = R([1,2])(PI)(T([0])([6.2])(Stabilizers()));

var aircraft = STRUCT([w1,w2,f,s]);
DRAW(aircraft)