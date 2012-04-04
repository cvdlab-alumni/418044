
//spessore dei muri = 0.15 m = 15 cm
//spessore delle vetrate = 0.08 m = 8 cm
//ampiezza delle vetrate interne = 1 m
//ampiezza delle vetrate esterne a sinistra = 1.9 m
//ampiezza colonnine vetrate = 0.08 m = 8 cm
//altezza muri = 3 m
//altezza basamento = 1.4 m
//altezza piscine = 1.3 m

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
	[-4,12.15],
	[1.4]
]);
//base interna (piscina interna destra)
var b8 = SIMPLEX_GRID([
	[-48,4.15],
	[-5,11.15],
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
var w1 = SIMPLEX_GRID([
	[-0.85,7.15],
	[-0.85,0.15],
	[-1.4,3]
]);
var w2 = SIMPLEX_GRID([
	[-0.85,0.15],
	[-1,21.15],
	[-1.3,3.1]
]);
var w3 = SIMPLEX_GRID([
	[-1,8.15],
	[-22,0.15],
	[-1.4,3]
]);
var w4 = SIMPLEX_GRID([
	[-9,0.15],
	[-17,5.15],
	[-1.4,3]
]);
var wallsxex = STRUCT([w1,w2,w3,w4]);

//muri interni a sinistra
var w5 = SIMPLEX_GRID([
	[-4.925,0.15],
	[-19,3],
	[-1.4,3]
]);
var w6 = SIMPLEX_GRID([
	[-5.075,0.5],
	[-20,0.15],
	[-1.4,3]
]);
var w7 = SIMPLEX_GRID([
	[-6.575,2.425],
	[-20,0.15],
	[-1.4,3]
]);
var w8 = SIMPLEX_GRID([
	[-6.925,0.15],
	[-21.15,0.85],
	[-1.4,3]
]);
var w9 = SIMPLEX_GRID([
	[-4.925,0.15],
	[-17.08,1],
	[-1.4,3]
]);
var wallsxin = STRUCT([w5,w6,w7,w8,w9]);

//muri esterni a destra
var w10 = SIMPLEX_GRID([
  [-42,10.15],
  [-5,0.15],
  [-1.3,3.1]
]);
var w11 = SIMPLEX_GRID([
  [-52,0.15],
  [-5.15,11],
  [-1.3,3.1]
]);
var w12 = SIMPLEX_GRID([
  [-38.5,13.5],
  [-16,0.15],
  [-1.3,3.1]
]);
var wallexdx = STRUCT([w10,w11,w12]);

//muri centrali interni
var w13 = SIMPLEX_GRID([
  [-7.25,20.5],
  [-15,0.15],
  [-1.4,3]
]);
var w14 = SIMPLEX_GRID([
  [-26,9],
  [-7.25,0.15],
  [-1.4,3]
]);
var w15 = SIMPLEX_GRID([
  [-38.25,5.25],
  [-11.5,0.15],
  [-1.4,3]
]);
var wallin = STRUCT([w13,w14,w15]);

var walls = STRUCT([wallsxex,wallsxin,wallexdx,wallin]);

//tutte le vetrate dell'edificio (prima i pilastri e poi le travi)
//vetrata sinistra
var pg1 = SIMPLEX_GRID([
  [-1,0.08,-1.9,0.08,-1.9,0.08,-1.9,0.08,-1.9,0.08],
  [-17,0.08],
  [-1.48,2.84]
]);
var bg1 = SIMPLEX_GRID([
	[-1,8],
	[-17,0.08],
	[-1.4,0.08,-2.84,0.08]
]);
var g1 = STRUCT([pg1,bg1]);
//vetrata destra
var g2 = SIMPLEX_GRID([
  [-31,11],
  [-5.07,0.08],
  [-1.4,3]
]);
//vetrate centrali
var g3 = SIMPLEX_GRID([
  [-31,10],
  [-13.6,0.08],
  [-1.4,3]
]);
var g4 = SIMPLEX_GRID([
  [-32,0.08,-0.84,0.08],
  [-7.4,6.2],
  [-1.4,3]
]);
var g5 = SIMPLEX_GRID([
  [-45.5,0.08],
  [-6.75,7.5],
  [-1.4,3]
]);

var glasswalls = STRUCT([g1,g2,g3,g4,g5]);

var pillars = STRUCT([]);

var model = STRUCT([stairs,bases,walls,glasswalls,pillars]);
DRAW(model);