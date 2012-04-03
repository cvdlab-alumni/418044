
//spessore dei muri = 0.15 m = 15 cm
//spessore delle vetrate = 0.08 m = 8 cm

//il contorno dell'edificio
var boundary = POLYLINE([[0,0],[39,0],[39,4],[53,4],[53,6],[52.15,6],[52.15,16.15],[40,16.15],[40,17],[9,17],[9,22],[1,22],[1,2],[0,2],[0,0]]);

//la 'piscina'
var swimmingpoll = POLYLINE([[1,1],[22,1],[22,10],[1,10],[1,1]]);

//muro esterno a sinistra
var wallsxex = POLYLINE([[8,1],[8,0.85],[0.85,0.85],[0.85,22.15],[9.15,22.15],[9.15,17]]);

//muri interni a sinistra
var wallsxin1 = POLYLINE([[1,17],[1,17.08],[4.925,17.08],[4.925,18],[5.075,18],[5.075,17.08],[9,17.08],[9,17],[1,17]]);
var wallsxin2 = POLYLINE([[4.925,22],[4.925,19],[5.075,19],[5.075,20],[5.575,20],[5.575,20.15],[5.075,20.15],[5.075,22]]);
var wallsxin3 = POLYLINE([[9,20],[6.575,20],[6.575,20.15],[9,20.15]]);
var wallsxin4 = POLYLINE([[6.925,22],[6.925,21],[7.075,21],[7.075,22]]);
var wallsxin = STRUCT([wallsxin1,wallsxin2,wallsxin3,wallsxin4]);

//muri esterni a destra
var walldxex1 = POLYLINE([[52.15,6],[52.15,5],[42,5],[42,5.15],[52,5.15],[52,16],[38.5,16],[38.5,16.15],[40,16.15]]);
var walldxex2 = POLYLINE([[42,5.15],[31,5.15],[31,5.07],[42,5.07]]);
var walldxex3 = POLYLINE([[48,16],[48,5.15]]);
var walldxex = STRUCT([walldxex1,walldxex2,walldxex3]);

//muro a sinistra e panchina sopra la piscina
var wallsxswim = POLYLINE([[7.25,15],[7.25,15.15],[27.75,15.15],[27.75,15],[7.25,15]]);
var bench = POLYLINE([[7.75,14.25],[7.75,14.75],[23.25,14.75],[23.25,14.25],[7.75,14.25]]);
var wallbench = STRUCT([wallsxswim,bench]);

//muri interni all'edificio
var wallin1 = POLYLINE([[26,7.25],[26,7.4],[35,7.4],[35,7.25],[26,7.25]]);
var wallin2 = POLYLINE([[31,13.6],[31,13.68],[41,13.68],[41,13.6],[31,13.6]]);
var wallin3 = POLYLINE([[32,13.6],[32,7.4],[32.08,7.4],[32.08,13.6],[32.92,13.6],[32.92,7.4],[33,7.4],[33,13.6]]);
var wallin4 = POLYLINE([[38.25,11.5],[38.25,11.65],[43.5,11.65],[43.5,11.5],[38.25,11.5]]);
var wallin5 = POLYLINE([[45.5,14.25],[45.65,14.25],[45.65,6.75],[45.5,6.75],[45.5,14.25]]);
var wallin = STRUCT([wallin1,wallin2,wallin3,wallin4,wallin5]);

//colonne interne all'edificio
var pillar1 = POLYLINE([[26.925,6.925],[26.925,7.075],[27.075,7.075],[27.075,6.925],[26.925,6.925]]);
var pillar2 = POLYLINE([[26.925,13.925],[26.925,14.075],[27.075,14.075],[27.075,13.925],[26.925,13.925]]);
var pillar3 = POLYLINE([[33.255,6.925],[33.255,7.075],[33.405,7.075],[33.405,6.925],[33.255,6.925]]);
var pillar4 = POLYLINE([[33.255,13.925],[33.255,14.075],[33.405,14.075],[33.405,13.925],[33.255,13.925]]);
var pillar5 = POLYLINE([[39.585,6.925],[39.585,7.075],[39.735,7.075],[39.735,6.925],[39.585,6.925]]);
var pillar6 = POLYLINE([[39.585,13.925],[39.585,14.075],[39.735,14.075],[39.735,13.925],[39.585,13.925]]);
var pillar7 = POLYLINE([[45.915,6.925],[45.915,7.075],[46.065,7.075],[46.065,6.925],[45.915,6.925]]);
var pillar8 = POLYLINE([[45.915,13.925],[45.915,14.075],[46.065,14.075],[46.065,13.925],[45.915,13.925]]);
var pillars = STRUCT([pillar1,pillar2,pillar3,pillar4,pillar5,pillar6,pillar7,pillar8]);

var map = STRUCT([boundary,swimmingpoll,wallsxex,wallsxin,walldxex,wallbench,wallin,pillars]);
DRAW(COLOR([0,0,0])(map));