
//spessore dei muri = 0.15 m = 15 cm
//spessore delle vetrate = 0.08 m = 8 cm
//altezza muri = 3 m
//altezza basamento = 1.4 m

//un gradino
var step = SIMPLEX_GRID([[0.35],[3],[0.2]]);
//le scale
var stairs = STRUCT([
	T([0,1,2])([36.55,1,1.2]), step,
	T([0,2])([0.35,-0.2]), step,
	T([0,2])([0.35,-0.2]), step,
	T([0,2])([0.35,-0.2]), step,
	T([0,2])([0.35,-0.2]), step,
	T([0,2])([0.35,-0.2]), step,
	T([0,2])([0.35,-0.2]), step
]);

//la base dell'edificio
//base esterna (sezioni orizzontali)
var b1 = SIMPLEX_GRID([
	[-0.85,35.7],
	[1,-9,7],
	[1.4]
]);
//base esterna (bordino sinistro)
var b2 = SIMPLEX_GRID([
	[1],
	[2],
	[1.4]
]);
//base esterna (piscina)
var b3 = SIMPLEX_GRID([
	[-0.85,21.15],
	[-1,9],
	[1.3]
]);
//base esterna (sezione centrale)
var b4 = SIMPLEX_GRID([
	[-22,14.55],
	[-1,9],
	[1.4]
]);
//base esterna (bordino scale)
var b5 = SIMPLEX_GRID([
	[-36.55,2.45],
	[1],
	[1.4]
]);
//base interna (sinistra)
var b6 = SIMPLEX_GRID([
	[-0.85,8.3],
	[-17,5.15],
	[1.4]
]);
//base interna (destra)
var b7 = SIMPLEX_GRID([
	[-36.55,11.45],
	[-4,12],
	[1.4]
]);
//base interna (piscina interna destra)
var b8 = SIMPLEX_GRID([
	[-48,4],
	[-5,11],
	[1.3]
]);
//base esterna (bordino destro orizzontale)
var b9 = SIMPLEX_GRID([
	[-48,4],
	[-4,1],
	[1.4]
]);
//base esterna (bordino sinistro verticale)
var b10 = SIMPLEX_GRID([
	[-52,1],
	[-4,2],
	[1.4]
]);
//base esterna (bordina destro in alto)
var b11 = SIMPLEX_GRID([
	[-36.55,3.45],
	[-16,1],
	[1.4]
]);
var bases = STRUCT([b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11]);

//tutti i muri dell'edificio
//muri esterni a sinistra
var w1 = new SIMPLEX_GRID([
	[-0.85,7.15],
	[-0.85,0.15],
	[-1.4,3]
]);
var w2 = new SIMPLEX_GRID([
	[-0.85,0.15],
	[-1,21.15],
	[-1.3,3.1]
]);
var w3 = new SIMPLEX_GRID([
	[-1,8.15],
	[-22,0.15],
	[-1.4,3]
]);
var w4 = new SIMPLEX_GRID([
	[-9,0.15],
	[-17,5.15],
	[-1.4,3]
]);
var wallsxex = STRUCT([w1,w2,w3,w4]);

//muri interni a sinistra
var w5 = new SIMPLEX_GRID([
	[-4.925,0.15],
	[-19,3],
	[-1.4,3]
]);
var w6 = new SIMPLEX_GRID([
	[-5.075,0.5],
	[-20,0.15],
	[-1.4,3]
]);
var w7 = new SIMPLEX_GRID([
	[-6.575,2.425],
	[-20,0.15],
	[-1.4,3]
]);
var w8 = new SIMPLEX_GRID([
	[-6.925,0.15],
	[-21.15,0.85],
	[-1.4,3]
]);
var w9 = new SIMPLEX_GRID([
	[-4.925,0.15],
	[-17.08,1],
	[-1.4,3]
]);
var wallsxin = STRUCT([w5,w6,w7,w8,w9]);

var walls = STRUCT([wallsxex,wallsxin]);

var glasswalls = STRUCT([]);

var pillars = STRUCT([]);

var model = STRUCT([stairs,bases,walls,glasswalls,pillars]);
DRAW(model);