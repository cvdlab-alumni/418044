/*Estrudere una POLYLINE per ottenere i bordi di un muro*/
var p1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
var p2 = POLYLINE([[0,4],[1,4],[1,6],[4,6],[4,4],[5,4],[5,6],[8,6],[8,4],[9,4],[9,7],[0,7],[0,4]]);
var plant = STRUCT([p1,p2]);
var ex = EXTRUDE([3])(plant);
var color_ex = COLOR([0,1,0,1])(ex);
DRAW(color_ex);

var c = T([2])([3])(COLOR([1,0,0,0.5])(BOUNDARY(CUBOID([9,7,1]))));
DRAW(c);

/*
Curva di Hermite
	è composta da quattro punti di controllo
	va da p0 a p1
	su p0 si ha tangente t0
	su p1 si ha tangente t1
*/
var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,1],[1,0],[1,1]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);

/*
Curva di Bezier
	è composta da un qualsiasi numero di punti di controllo
	la curva approssima il poligono dato dalla congunzione dei punti	
	n punti di controllo = curva di grado n-1
*/
var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]];
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);

/*
Cuva Spline
	è composta da un qualsiasi numero di punti di controllo
	la curva congunge tutti i punti (tranne il primo e l'ultimo)
	sul punti Pi abbiamo tangente uguale alla differenza Pi-1 - Pi+1
*/
var domain = INTERVALS(1)(20);
var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW(splineCardinal);

/*
Per ogni tipo di curva si definisce una funzione che mostra:
	- punti di controllo		(viola)
	- poligono di controllo		(arancione)
	- tangenti					(celeste)
	- la curva stessa			(nero)
*/

var viola = [163/255,73/255,164/255];
var arancione = [250/255,177/255,100/255];
var celeste = [90/255,205/255,250/255];

var MY_CUBIC_HERMITE = function (controlpoints, intervals) {
	var p0 = controlpoints[0];
	var p1 = controlpoints[1];
	var t0 = controlpoints[2];
	var t1 = controlpoints[3];

	var points = COLOR([163/255,73/255,164/255])(SIMPLICIAL_COMPLEX([p0,p1])([[0],[1]]));

	var polygon = COLOR([250/255,177/255,100/255])(POLYLINE([p0,p1]));
	
	var s0 = T([0,1])(p0)(POLYLINE([[0,0],t0]));
	var s1 = T([0,1])(p1)(POLYLINE([[0,0],t1]));
	var segmentes = COLOR([90/255,205/255,250/255])(STRUCT([s0,s1]));

	var domain = INTERVALS(1)(intervals);
	var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
	var curve = MAP(curveMapping)(domain);

	return STRUCT([points,segmentes,polygon,curve]);
};

var controlpoints = [[1,0],[1,1],[1,0],[1,1]];
var model = MY_CUBIC_HERMITE(controlpoints,20);
DRAW(model);



var MY_BEZIER = function (controlpoints, intervals) {
	var points = [];
	controlpoints.forEach( function (item, index, array) {
		points.push(SIMPLICIAL_COMPLEX([controlpoints[index]])([[0]]));
	});
	var pointsStruct = COLOR([163/255,73/255,164/255])(STRUCT(points));

	var polygon = COLOR([250/255,177/255,100/255])(POLYLINE(controlpoints));

	var domain = INTERVALS(1)(intervals);
	var curveMapping = BEZIER(S0)(controlpoints);
	var curve = MAP(curveMapping)(domain);

	return STRUCT([pointsStruct,polygon,curve]);
};

var controlpoints = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]];
var model = MY_BEZIER(controlpoints,20);
DRAW(model);



var MY_SPLINE_CARDINAL = function (controlpoints, intervals) {
	var points = [];
	controlpoints.forEach( function (item, index, array) {
		points.push(SIMPLICIAL_COMPLEX([item])([[0]]));
	});
	var pointsStruct = COLOR([163/255,73/255,164/255])(STRUCT(points));

	var polygon = COLOR([250/255,177/255,100/255])(POLYLINE(controlpoints));

	var segmentes = [];
	for (var i = 1; i <= controlpoints.length-1; i++) {
		var s = T([0,1])(
			[controlpoints[i][0]-controlpoints[i-1][0],controlpoints[i][1]-controlpoints[i-1][1]]
		)(POLYLINE([controlpoints[i-1],controlpoints[i+1]]));
		segmentes.push(s);
	};
	var segmentesStruct = COLOR([90/255,205/255,250/255])(STRUCT(segmentes));

	var domain = INTERVALS(1)(intervals);
	var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);

	return STRUCT([pointsStruct,segmentesStruct,polygon,splineCardinal]);
};

var controlpoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var model = MY_SPLINE_CARDINAL(controlpoints,20);
DRAW(model);