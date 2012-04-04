
//spessore dei muri = 0.15 m = 15 cm
//spessore delle vetrate = 0.08 m = 8 cm
//altezza muri = 3 m

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
var base1 = SIMPLEX_GRID([
	[-1,35.55],
	[1,-9,7],
	[1.4]
]);
//base esterna (bordino sinistro)
var base2 = SIMPLEX_GRID([
	[1],
	[2],
	[1.4]
]);
//base esterna (piscina)
var base3 = SIMPLEX_GRID([
	[-1,21],
	[-1,9],
	[1.3]
]);
//base esterna (sezione centrale)
var base4 = SIMPLEX_GRID([
	[-22,14.55],
	[-1,9],
	[1.4]
]);
//base esterna (bordino scale)
var base5 = SIMPLEX_GRID([
	[-36.55,2.45],
	[1],
	[1.4]
]);
//base interna (sinistra)
var base6 = SIMPLEX_GRID([
	[-1,8],
	[-17,5],
	[1.4]
]);
//base interna (destra)
var base7 = SIMPLEX_GRID([
	[-36.55,11.45],
	[-4,12],
	[1.4]
]);
//base interna (piscina interna destra)
var base8 = SIMPLEX_GRID([
	[-48,4],
	[-5,11],
	[1.3]
]);
//base esterna (bordino destro orizzontale)
var base9 = SIMPLEX_GRID([
	[-48,4],
	[-4,1],
	[1.4]
]);
//base esterna (bordino sinistro verticale)
var base10 = SIMPLEX_GRID([
	[-52,1],
	[-4,2],
	[1.4]
]);
//base esterna (bordina destro in alto)
var base11 = SIMPLEX_GRID([
	[-36.55,3.45],
	[-16,1],
	[1.4]
]);
var base = STRUCT([base1,base2,base3,base4,base5,base6,base7,base8,base9,base10,base11]);


var model = STRUCT([stairs,base]);
DRAW(model);