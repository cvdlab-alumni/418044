/*
Funzione utilizzata in fase di progettazione per avere una "griglia 3D" di riferimento.
*/
var disegnaCoordinate = function () {
  var polylines = new Array();

  for (var i = 0; i < 31; i++) {
    polylines.push( COLOR([1,0,0])( POLYLINE([[0.5*i, 0, 0], [0.5*i, 15, 0]])));
    polylines.push( COLOR([1,0,0])( POLYLINE([[0, 0.5*i, 0], [15, 0.5*i, 0]])));
    polylines.push( COLOR([0,1,0])( POLYLINE([[0, 0, 0.5*i], [0, 15, 0.5*i]])));
    polylines.push( COLOR([0,1,0])( POLYLINE([[0, 0.5*i, 0], [0, 0.5*i, 15]])));
    polylines.push( COLOR([0,0,1])( POLYLINE([[0, 0, 0.5*i], [15, 0, 0.5*i]])));
    polylines.push( COLOR([0,0,1])( POLYLINE([[0.5*i, 0, 0], [0.5*i, 0, 15]])));
  }

  DRAW(STRUCT(polylines));
};

/*
Funzione che restituisce una curva di Bezier (il suo utilizzo è legato a quello delle funzioni 'bezierCurves' e 'bezierSurfaces').
    input:
      controls - punti di controllo della curva in cui non si specifica la coordinata 'z'.
      height - specifica la coordinata 'z' su cui giacerà la curva.
*/
var myBezier = function (controls, height) { 
  var points = [];

  controls.forEach( function (item, index, array) {
    points.push([controls[index][0], controls[index][1], height]);
  });

  return BEZIER(S0)(points);
};

/*
Funzione utilizzata in fase di progettazione che restituisce una STRUCT contenente varie curve di Bezier. 
La curva i-esima è identificata dall'i-esimo elemento della variabile 'controls' e dall'i-esimo elemento della variabile 'heights'.
  Mi è tornata molto utile per disegnare gruppi di curve in cui tutti i punti di una curva hanno la stessa coordinata 'z' (mi sono 
  risparmiato ogni volta di scrivere la stessa coordinata 'z' e, in caso di modifica, doverla cambiare in tutti i punti di controllo).
  Ho poi utilizzato la funzione 'myBezier' per creare la curva.
Può essere utilizzata senza specificare la variabile 'heights'. In questo caso la si utilizza per creare un gruppo di curve 
  di Bezier in cui almeno una curva non ha tutti i suoi punti sulla stessa coordinata 'z' (per ogni punto della curva si 
  specificano tutte e tre le coordinate e si utilizza la funzione BEZIER per creare la curva).
    input:
      controls - un array in cui ogni elemento specifica i punti di controllo per una curva.
      heights - un array in cui l'i-esimo elemento specifica la coordinata 'z' dell'i-esima curva.
*/
var bezierCurves = function (controls, heights) {
  var domain = INTERVALS(1)(30);
  var curves = new Array();
  var h = heights || 0;

  if (h != 0) {
    for (var i = 0; i < controls.length; i++) {
      var curvefun = myBezier(controls[i], heights[i]);
      var curve = MAP(curvefun)(domain);
      curves.push(curve);
    }
  }
  else {
    for (var i = 0; i < controls.length; i++) {
      var curvefun = BEZIER(S0)(controls[i]);
      var curve = MAP(curvefun)(domain);
      curves.push(curve);
    }
  }

  return STRUCT(curves);
}

/*
Funzione che restituisce una superficie definita da varie curve di Bezier.
Il suo utilizzo è simile a quello della funzione 'bezierCurves': se si specifica la variabile 'heights' si farà uso della funzione 'myBezier'
  altrimenti si utilizza la normale funzione BEZIER.
    input:
      controls - un array in cui ogni elemento specifica i punti di controllo per una curva.
      heights - un array in cui l'i-esimo elemento specifica la coordinata 'z' dell'i-esima curva.
*/
var bezierSurface = function (controls, heights) {
  var domain = DOMAIN([[0,1], [0,1]])([30, 30]);
  var curvefuns = new Array();
  var h = heights || 0;

  if (h != 0) {
    for (var i = 0; i < controls.length; i++) {
      var curvefun = myBezier(controls[i], heights[i]);
      curvefuns.push(curvefun);
    }
  }
  else {
    for (var i = 0; i < controls.length; i++) {
      var curvefun = BEZIER(S0)(controls[i]);
      curvefuns.push(curvefun);
    }
  }

  var surface = BEZIER(S1)(curvefuns);
  return MAP(surface)(domain);
}

/*
Qui ho definito alcune variabili da poter usare per colorare il modello
*/
var coloreOssa = [255/255, 250/255, 175/255];
var coloreDisco = [200/255, 190/255, 230/255];
var coloreDuraMadre = [135/255, 210/255, 230/255];
var colorePiaMadre = [250/255, 230/255, 150/255];
var coloreSostanzaGrigia = [220/255, 190/255, 120/255];

/*
Funzione che crea il modello del corpo vertebrale di una vertebra.
*/
var CorpoVertebrale = function () {
  //La base curva inferiore
  var controls1 = [
    [[0,4.5]],
    [[0,4],[1,4.5],[0,5]],
    [[0,1],[2,1],[3,1.5],[5,2],[6,3],[6.5,4],[6,8],[4,9],[3,8.5],[2,8],[1,7],[0,7]],    
    [[0,1],[2,1],[3,1.5],[5,2],[6,3],[6.5,4],[6,8],[4,9],[3,8.5],[2,8],[1,7],[0,7]]
  ];
  var h1 = [1.25,1.25,1,0];
  var surf1 = bezierSurface(controls1,h1);

  //La base piatta inferiore
  var controls2 = [
    [[0,1],[2,1],[3,1.5],[5,2],[6,3],[6.5,4],[6,8],[4,9],[3,8.5],[2,8],[1,7],[0,7]],
    [[0,0],[2,0],[3,0.5],[5,1],[6,1.5],[7,2.5],[7.5,4],[7,8],[6,9],[4,10],[3,9.5],[2,9],[1,8],[0,8]]
  ];
  var h2 = [0,0];
  var surf2 = bezierSurface(controls2,h2);

  //La superficie di contorno
  var controls3 = [
    [[0,0],[2,0],[3,0.5],[5,1],[6,1.5],[7,2.5],[7.5,4],[7,8],[6,9],[4,10],[3,9.5],[2,9],[1,8],[0,8]],
    [[0,1],[2,1],[3,1.5],[5,2],[6,3],[6.5,4],[6,8],[4,9],[3,8.5],[2,8],[1,7],[0,7]],
    [[0,0],[2,0],[3,0.5],[5,1],[6,1.5],[7,2.5],[7.5,4],[7,8],[6,9],[4,10],[3,9.5],[2,9],[1,8],[0,8]]
  ];
  var h3 = [0,2.5,5];
  var surf3 = bezierSurface(controls3,h3);

  //La base piatta superiore
  var surf4 = T([2])([5])(surf2);

  //La base curva superiore
  var surf5 = T([2])([5])(S([2])([-1])(surf1));

  var surf = STRUCT([surf1,surf2,surf3,surf4,surf5]);
  var specsurf = S([0])([-1])(surf);
  
  return COLOR(coloreOssa)(STRUCT([surf,specsurf]));
}

/*
Funzione che crea il modello del processo spinoso di una vertebra.
*/
var ProcessoSpinoso = function () {
  //Superficie principale
  var controls = [
    [[0,1]],
    [[0,0],[0.4,0],[1,1],[-1,2],[1,3],[0.4,4],[0,4],[-0.4,4],[-1,3],[1,2],[-1,1],[-0.4,0],[0,0]],
    [[0,0],[0.4,0],[1,1],[-1,2],[1,3],[0.4,4],[0,4],[-0.4,4],[-1,3],[1,2],[-1,1],[-0.4,0],[0,0]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[0,1],[0.4,1],[1,1.5],[-1,2.5],[1,3.5],[0.4,4.5],[0,4.5],[-0.4,4.5],[-1,3.5],[1,2.5],[-1,1.5],[-0.4,1],[0,1]],
    [[4,4],[4.4,4],[5,5],[3,5],[5,6.5],[3.4,6.5],[4,6.5],[3.6,6.5],[3,6.5],[5,5],[3,5],[3.6,4],[4,4]],
    [[4,4],[6,1.5],[5.5,5],[3.5,5],[5.5,6.5],[3.9,6.5],[4,6.5],[3.9,6.5],[2,6.5],[4.5,5],[3,5],[3.6,4],[4,4]],
    [[4,4],[6,1.5],[5.5,5],[3.5,5],[5.5,6.5],[3.9,6.5],[4,6.5],[3.9,6.5],[2,6.5],[4.5,5],[3,5],[3.6,4],[4,4]],
    [[4,3],[4.4,3],[6,4],[4,4],[6,6.5],[4.4,6.5],[4,6.5],[3.4,6.5],[2,6.5],[4,4],[4,4],[3.4,3],[4,3]],
  ];
  var h = [-0.1,-0.1,0.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,5,6,7,8];
  var surf = bezierSurface(controls,h);

  var specsurf = S([0])([-1])(surf);

  return COLOR(coloreOssa)(T([1,2])([15.5,-1.5])(R([1,2])([PI/2])(STRUCT([surf,specsurf]))));
}

/*
Funzione che crea il modello del processo articolare superiore di una vertebra.
*/
var ProcessoArticolareSuperiore = function () {
  //Superficie principale
  var controls1 = [
    [[4,12,6.5],[4,12.4,6.5],[3.5,14,5.75],[3,12,4],[3.5,10,5.75],[4,11.6,6.5],[4,12,6.5]],
    [[5,12,7.75],[5,13.4,7.5],[4.75,15,5.25],[4,12,2.5],[4.25,9,5.25],[5,10.6,7.5],[5,12,7.75]],
    [[5.5,10.5,4],[5,11.5,3],[3,10.5,2.5],[3,11.5,4],[4,10,6.5],[4.5,10.5,5],[6,11,5.5],[5.5,10,4.5],[5.5,10.5,4]],
    [[3.75,9.5,2.5],[2.5,10.5,1.5],[2,10.5,1],[2.5,10.5,2.5],[3.5,9,5],[4.5,8.5,3.5],[5,8,4],[4.5,9,3],[3.75,9.5,2.5]]
  ];
  var surf1 = COLOR(coloreOssa)(bezierSurface(controls1));

  //Faccetta articolare
  var controls2 = [
    [[4,12,6.5],[4,12.4,6.5],[3.5,14,5.75],[3,12,4],[3.5,10,5.75],[4,11.6,6.5],[4,12,6.5]],
    [[3.9,12,6.6],[3.9,12.4,6.6],[3.4,14,5.76],[2.9,12,4.1],[3.4,10,5.85],[3.9,11.6,6.6],[3.9,12,6.6]]
  ];
  var surf2 = COLOR(coloreDisco)(bezierSurface(controls2));

  //Base della faccetta articolare
  var controls3 = [
    [[3.75,12,6]],
    [[3.9,12,6.6],[3.9,12.4,6.6],[3.4,14,5.76],[2.9,12,4.1],[3.4,10,5.85],[3.9,11.6,6.6],[3.9,12,6.6]]
  ];
  var surf3 = COLOR(coloreDisco)(bezierSurface(controls3));

  var surf = STRUCT([surf1,surf2,surf3]);
  var specsurf = S([0])([-1])(surf);

  return STRUCT([surf,specsurf]);
}

/*
Funzione che crea il modello del processo articolare inferiore di una vertebra.
*/
var ProcessoArticolareInferiore = function () {
  //Superficie principale
  var controls1 = [
    [[2.25,10.75,2.75],[-1.65,12.5,1.75],[0.1,16,0.75],[0.1,16,-0.75],[-0.25,13.5,0.5],[-2.25,12.5,0.5],[3.45,9.75,-0.25],[4.5,9,3.25],[2.25,10.75,2.75]],
    [[2.9,12,1.1],[2.9,12.4,1.1],[2.4,14,0.35],[1.9,12,-1.4],[2.4,10,0.35],[2.9,11.6,1.1],[2.9,12,1.1]],
    [[3.9,12,1.1],[3.9,12.4,1.1],[3.4,14,0.35],[2.9,12,-1.4],[3.4,10,0.35],[3.9,11.6,1.1],[3.9,12,1.1]],
    [[3.9,12,0.1],[3.9,12.4,0.1],[3.4,14,-0.65],[2.9,12,-2.4],[3.4,10,-0.65],[3.9,11.6,0.1],[3.9,12,0.1]]
  ];
  var surf1 = bezierSurface(controls1);

  //Faccetta articolare
  var controls2 = [
    [[3.5,12,-0.5]],
    [[3.9,12,0.1],[3.9,12.4,0.1],[3.4,14,-0.65],[2.9,12,-2.4],[3.4,10,-0.65],[3.9,11.6,0.1],[3.9,12,0.1]]
  ];
  var surf2 = bezierSurface(controls2);

  var surf = STRUCT([surf1,surf2]);
  var specsurf = S([0])([-1])(surf);

  return COLOR(coloreOssa)(STRUCT([surf,specsurf]));
}

/*
Funzione che crea il modello del processo trasverso di una vertebra.
*/
var ProcessoTrasverso = function () {
  //Superficie principale
  var controls = [
    [[-0.5,1]],
    [[-0.5,0.75],[-0.1,0.75],[0.5,1],[-1.5,2],[0.5,2.5],[-0.1,3],[-0.5,3],[-0.9,3],[-1.5,2.5],[0.5,2],[-1.5,1],[-0.9,0.75],[-0.5,0.75]],
    [[0,0.75],[0.4,0.75],[1,1],[-1,2],[1,2.5],[0.4,3],[0,3],[-0.4,3],[-1,2.5],[1,2],[-1,1],[-0.4,0.75],[0,0.75]],
    [[0,0.75],[0.4,0.75],[1,1],[-1,2],[1,2.5],[0.4,3],[0,3],[-0.4,3],[-1,2.5],[1,2],[-1,1],[-0.4,0.75],[0,0.75]],
    [[1,0.5],[1.4,0.5],[2,1.25],[0,2.25],[2,2.75],[1.4,3.25],[1,3.25],[0.6,3.25],[0,2.75],[2,2.25],[0,1.25],[0.6,0.5],[1,0.5]]
  ];
  var h = [0,0,0.5,3,4.5];
  var surf = bezierSurface(controls,h);

  var proc1 = T([0,1,2])([8.5,9.75,1.5])(R([0,1])([-PI/2])(R([1,2])([PI/2])(surf)));
  var proc2 = S([0])([-1])(proc1);

  return COLOR(coloreOssa)(STRUCT([proc1,proc2]));
}

/*
Funzione che crea il modello di un disco intervertebrale.
*/
var Disco = function () {
  //Superficie principale
  var controls = [
    [[0,0],[2,0],[3,0.5],[5,1],[6,1.5],[7,2.5],[7.5,4],[7,8],[6,9],[4,10],[3,9.5],[2,9],[1,8],[0,8]],
    [[0,0],[2,0],[4,0.5],[6,1],[7,1.5],[8,2.5],[8.5,4],[8,8],[7,9],[5,10],[4,9.5],[3,9],[2,8],[0,8]],
    [[0,0],[2,0],[3,0.5],[5,1],[6,1.5],[7,2.5],[7.5,4],[7,8],[6,9],[4,10],[3,9.5],[2,9],[1,8],[0,8]]
  ];
  var h = [0,0.75,1.5];
  var surf = bezierSurface(controls,h);

  var specsurf = S([0])([-1])(surf);

  return COLOR(coloreDisco)(T([2])([5])(STRUCT([surf,specsurf])));
}

/*
Funzione che crea il modello del midollo spinale.
*/
var Midollo = function () {
  //Pia madre
  var controls1 = [
    [[0,1.5],[0.1,1.5],[0.1,1],[-0.6,0],[0.2,0],[2,0.25],[3.5,1.5],[2,2.75],[0.2,3],[-0.5,3],[0.1,2.75],[0.1,2],[0,2]],
    [[0,1.5],[0.1,1.5],[0.1,1],[-0.6,0],[0.2,0],[2,0.25],[3.5,1.5],[2,2.75],[0.2,3],[-0.5,3],[0.1,2.75],[0.1,2],[0,2]]
  ];
  var h1 = [24,24.5];
  var surf1 = bezierSurface(controls1,h1);

  //Pia madre (base)
  var controls2 = [
    [[0,1.75]],
    [[0,1.5],[0.1,1.5],[0.1,1],[-0.6,0],[0.2,0],[2,0.25],[3.5,1.5],[2,2.75],[0.2,3],[-0.5,3],[0.1,2.75],[0.1,2],[0,2]]
  ];
  var h2 = [24.5,24.5];
  var surf2 = bezierSurface(controls2,h2);

  //Dura madre
  var controls3 = [
    [[0,0],[0.5,0],[1,0.25],[5.5,1.5],[1,2.75],[0.5,3],[0,3]],
    [[0,0],[0.5,0],[1,0.25],[5.5,1.5],[1,2.75],[0.5,3],[0,3]]
  ];
  var h3 = [0,24];
  var surf3 = bezierSurface(controls3,h3);

  //Dura madre (base)
  var controls4 = [
    [[0,1.5]],
    [[0,0],[0.5,0],[1,0.25],[5.5,1.5],[1,2.75],[0.5,3],[0,3]]
  ];
  var h4 = [24,24];
  var surf4 = bezierSurface(controls4,h4);

  //Sostanza grigia
  var controls5 = [
    [[0,1.9],[0.5,1.9],[0.25,2.75],[1.5,2.75],[0,1.75],[1.5,1.5],[0,1],[3.5,-0.5],[-0.5,0.5],[0.5,1.75],[0.25,1.75],[0,1.75]],
    [[0,1.9],[0.5,1.9],[0.25,2.75],[1.5,2.75],[0,1.75],[1.5,1.5],[0,1],[3.5,-0.5],[-0.5,0.5],[0.5,1.75],[0.25,1.75],[0,1.75]]
  ];
  var h5 = [24.5,25];
  var surf5 = bezierSurface(controls5,h5);
  
  //Sostanza grigia (base 1)
  var controls6 = [
    [[0.5,1.8]],
    [[0,1.9],[0.5,1.9],[0.25,2.75],[1.5,2.75],[0,1.75],[1.5,1.5],[0,1],[3.5,-0.5],[-0.5,0.5],[0.5,1.75],[0.25,1.75],[0,1.75]]
  ];
  var h6 = [25,25];
  var surf6 = bezierSurface(controls6,h6);

  //Sostanza grigia (base 2)
  var controls7 = [
    [[0.5,1.8]],
    [[0,1.9],[0,1.75]]
  ];
  var h7 = [25,25];
  var surf7 = bezierSurface(controls7,h7);
  
  var piaMadre = COLOR(colorePiaMadre)(STRUCT([surf1,surf2]));
  var duraMadre = COLOR(coloreDuraMadre)(STRUCT([surf3,surf4]));
  var sostanzaGrigia = COLOR(coloreSostanzaGrigia)(STRUCT([surf5,surf6,surf7]));

  var surf8 = COLOR(coloreDuraMadre)(T([2])([-24])(surf4));
  var surf9 = COLOR(colorePiaMadre)(T([2])([-24.525])(surf2));
  var surf10 = COLOR(coloreSostanzaGrigia)(T([2])([-25.05])(STRUCT([surf6,surf7])));
  var fondo = STRUCT([surf8,surf9,surf10]);

  var surf = STRUCT([piaMadre,duraMadre,sostanzaGrigia,fondo]);
  var specsurf = S([0])([-1])(surf);

  return T([1,2])([11.25,-2])(S([1])([-1])(STRUCT([surf,specsurf])));
}

/*
Funzione che crea il modello dei nervi spinali.
*/
var Nervi = function () {
  //Superficie principale
  var controls1 = [
    [[1.5,9.25,8],[2,9.25,8],[2.5,10,8],[1.5,10.75,8],[0.5,10,8],[1,9.25,8],[1.5,9.25,8]],
    [[1.5,9.5,6.5],[2,9.5,6.75],[2.25,10.25,7],[1.5,11,6.5],[0.5,10.25,5.5],[1,9.5,6.25],[1.5,9.5,6.5]],
    [[3,9.5,5.5],[3.5,9.5,5.75],[4,10.25,6.5],[3.5,11,6],[2,10.25,4.5],[2.5,9.5,5.25],[3,9.5,5.5]],
    [[3.5,9,5],[4,9,5.25],[5,10.25,6],[3.5,11.5,5],[2,10.25,4],[3,9,4.75],[3.5,9,5]],
    [[3.5,9,4.5],[3.75,9,4.75],[4,9.25,5],[3.5,9.5,4.5],[2.5,9.25,4],[3.25,9,4.25],[3.5,9,4.5]],
    [[5.5,7.5,3.5],[5.5,7.5,3.75],[5.5,8,4],[5.5,8.5,3.5],[5.5,8,3],[5.5,7.5,3.25],[5.5,7.5,3.5]],
    [[6.5,6.5,2.5],[6.5,6.5,2.75],[6.5,7,3],[6.5,7.5,2.5],[6.5,7,2],[6.5,6.5,2.25],[6.5,6.5,2.5]]
  ];
  var surf1 = bezierSurface(controls1);

  //Sezione trasversale
  var controls2 = [
    [[6.5,7,2.5]],
    [[6.5,6.5,2.5],[6.5,6.5,2.75],[6.5,7,3],[6.5,7.5,2.5],[6.5,7,2],[6.5,6.5,2.25],[6.5,6.5,2.5]]
  ];
  var surf2 = bezierSurface(controls2);
  
  var surf = COLOR(coloreDuraMadre)(T([1,2])([0.25,0.5])(STRUCT([surf1,surf2])));
  var specsurf = S([0])([-1])(surf);

  var nervo1 = STRUCT([surf,specsurf]);
  var nervo2 = T([2])([6.5])(nervo1);
  var nervo3 = T([2])([6.5])(nervo2);
  return STRUCT([nervo1,nervo2,nervo3]);
}

/*
Funzione che ritorna il modello della lettera passata in input.
    input:
      lettera - un carattere tra [a,z] dell'alfabeto inglese.
*/
var Lettera = function (lettera) {
  switch (lettera) {
    case 'a' :       
      var a1 = TRIANGLE_FAN([[0.4,0,0.5],[0.6,0,0.5],[0.6,0,0.3],[0.4,0,0.3],[0.3,0,0],[0,0,0],[0.3,0,1],[0.5,0,1],[0.5,0,0.8]]);
      var a2 = TRIANGLE_FAN([[0.6,0,0.5],[0.5,0,0.8],[0.5,0,1],[0.7,0,1],[1,0,0],[0.7,0,0],[0.6,0,0.3]]);
      return COLOR([0,0,0])(STRUCT([a1,a2]));
    case 'b' :
      var b1 = TRIANGLE_FAN([[0.7,0,0.3],[0.6,0,0.4],[0.5,0,0.6],[0.8,0,0.6],[1,0,0.4],[1,0,0.2],[0.8,0,0],[0.6,0,0],[0.6,0,0.2]]);
      var b2 = TRIANGLE_FAN([[0,0,0],[0.6,0,0],[0.6,0,0.2],[0.3,0,0.2],[0.3,0,0.7],[0.2,0,0.7],[0.2,0,1],[0,0,1]]);
      var b3 = TRIANGLE_FAN([[0.4,0,0.8],[0.2,0,0.9],[0.2,0,1],[0.5,0,1],[0.6,0,0.9],[0.6,0,0.7],[0.5,0,0.6],[0.6,0,0.4],[0.3,0,0.4],[0.3,0,0.7]]);
      return COLOR([0,0,0])(STRUCT([b1,b2,b3]));
    case 'c' :
      var c1 = TRIANGLE_FAN([[0.3,0,1],[1,0,1],[0.8,0,0.8],[0.5,0,0.8],[0.3,0,0.6],[0.3,0,0],[0,0,0.3],[0,0,0.7]]);
      var c2 = TRIANGLE_FAN([[0.3,0,0],[1,0,0],[0.8,0,0.2],[0.5,0,0.2],[0.3,0,0.4]]);
      return COLOR([0,0,0])(STRUCT([c1,c2]));  
    case 'd' :
      var d1 = TRIANGLE_FAN([[0,0,0],[0,0,0.5],[0.3,0,0.5],[0.3,0,0.3],[0.6,0,0.3],[0.7,0,0]]);
      var d2 = TRIANGLE_FAN([[0.8,0,0.5],[0.6,0,0.7],[0.7,0,1],[1,0,0.7],[1,0,0.3],[0.7,0,0],[0.6,0,0.3]]);
      var d3 = TRIANGLE_FAN([[0,0,1],[0.7,0,1],[0.6,0,0.7],[0.3,0,0.7],[0.3,0,0.5],[0,0,0.5]]);
      return COLOR([0,0,0])(STRUCT([d1,d2,d3]));  
    case 'e' :
      var e1 = TRIANGLE_FAN([[1,0,1],[1,0,0.8],[0.3,0,0.8],[0,0,1]]);
      var e2 = TRIANGLE_FAN([[1,0,0],[1,0,0.2],[0.3,0,0.2],[0,0,0]]);
      var e3 = TRIANGLE_FAN([[0,0,0.5],[0,0,1],[0.3,0,0.8],[0.3,0,0.6],[0.6,0,0.6],[0.6,0,0.4],[0.3,0,0.4],[0.3,0,0.2],[0,0,0]]);
      return COLOR([0,0,0])(STRUCT([e1,e2,e3]));   
    case 'f' :
      var f1 = TRIANGLE_FAN([[1,0,1],[1,0,0.8],[0.3,0,0.8],[0,0,1]]);
      var f2 = TRIANGLE_FAN([[0,0,0.5],[0,0,1],[0.3,0,0.8],[0.3,0,0.6],[0.6,0,0.6],[0.6,0,0.4],[0.3,0,0.4],[0.3,0,0],[0,0,0]]);
      return COLOR([0,0,0])(STRUCT([f1,f2]));  
    case 'g' :
      var g1 = TRIANGLE_FAN([[0.3,0,1],[1,0,1],[0.8,0,0.8],[0.5,0,0.8],[0.3,0,0.6],[0.3,0,0],[0,0,0.3],[0,0,0.7]]);
      var g2 = TRIANGLE_FAN([[0.3,0,0],[0.3,0,0.4],[0.5,0,0.2],[1,0,0.2],[0.8,0,0]]);
      var g3 = TRIANGLE_FAN([[1,0,0.6],[1,0,0.2],[0.6,0,0.2],[0.8,0,0.4],[0.5,0,0.4],[0.5,0,0.6]]);
      return COLOR([0,0,0])(STRUCT([g1,g2,g3]));  
    case 'h' :
      var h1 = TRIANGLE_FAN([[0.3,0,0.6],[0.7,0,0.3],[0.3,0,0.3],[0.3,0,0],[0,0,0],[0,0,1],[0.3,0,1]]);
      var h2 = TRIANGLE_FAN([[0.7,0,0.6],[0.7,0,1],[1,0,1],[1,0,0],[0.7,0,0],[0.7,0,0.3],[0.3,0,0.6]]);      
      return COLOR([0,0,0])(STRUCT([h1,h2]));  
    case 'i' :
      var i1 = TRIANGLE_FAN([[0.3,0,0.6],[0.7,0,0.6],[0.7,0,0],[0.3,0,0]]);
      var i2 = TRIANGLE_FAN([[0.3,0,0.7],[0.7,0,0.7],[0.7,0,1],[0.3,0,1]]);     
      return COLOR([0,0,0])(STRUCT([i1,i2]));  
    case 'j' :
      var j1 = TRIANGLE_FAN([[0.3,0,0],[0,0,0.3],[0.2,0,0.5],[0.4,0,0.3],[0.8,0,0.3],[0.8,0,0.2],[0.6,0,0]]);
      var j2 = TRIANGLE_FAN([[0.5,0,0.7],[0.2,0,0.7],[0.2,0,1],[1,0,1],[1,0,0.7],[0.8,0,0.7],[0.8,0,0.3],[0.5,0,0.3]]);  
      return COLOR([0,0,0])(STRUCT([j1,j2]));  
    case 'k' :
      var k1 = TRIANGLE_FAN([[0.3,0,0.7],[0.6,0,1],[1,0,1],[0.5,0,0.5],[1,0,0],[0.7,0,0],[0.3,0,0.4],[0.3,0,0],[0,0,0],[0,0,1],[0.3,0,1]]); 
      return COLOR([0,0,0])(STRUCT([k1]));        
    case 'l' :
      var l1 = TRIANGLE_FAN([[0,0,0],[0,0,1],[0.3,0,1],[0.3,0,0.3],[1,0,0.3],[1,0,0]]);
      return COLOR([0,0,0])(STRUCT([l1]));    
    case 'm' :
      var m1 = TRIANGLE_FAN([[0.7,0,0.6],[0.7,0,0],[1,0,0],[1,0,1],[0.7,0,1],[0.5,0,0.8],[0.5,0,0.4]]);
      var m2 = TRIANGLE_FAN([[0.3,0,0.6],[0.5,0,0.4],[0.5,0,0.8],[0.3,0,1],[0,0,1],[0,0,0],[0.3,0,0]]);
      return COLOR([0,0,0])(STRUCT([m1,m2]));    
    case 'n' :
      var n1 = TRIANGLE_FAN([[0.3,0,0.4],[0.3,0,0],[0,0,0],[0,0,1],[0.3,0,1],[0.7,0,0.6]]);
      var n2 = TRIANGLE_FAN([[0.7,0,0.6],[0.7,0,1],[1,0,1],[1,0,0],[0.7,0,0],[0.3,0,0.4]]);
      return COLOR([0,0,0])(STRUCT([n1,n2]));   
    case 'o' :
      var o1 = TRIANGLE_FAN([[0,0,0.7],[0.3,0,1],[0.4,0,0.7],[0.3,0,0.6],[0.3,0,0.4],[0.4,0,0.3],[0.3,0,0],[0,0,0.3]]);
      var o2 = TRIANGLE_FAN([[1,0,0.7],[1,0,0.3],[0.7,0,0.4],[0.7,0,0.6],[0.6,0,0.7],[0.4,0,0.7],[0.3,0,1],[0.7,0,1]]);
      var o3 = TRIANGLE_FAN([[0.7,0,0],[0.3,0,0],[0.4,0,0.3],[0.6,0,0.3],[0.7,0,0.4],[1,0,0.3]]);
      return COLOR([0,0,0])(STRUCT([o1,o2,o3]));
    case 'p' :
      var p1 = TRIANGLE_FAN([[0,0,1],[0.6,0,1],[0.6,0,0.8],[0.3,0,0.8],[0.3,0,0.6],[0,0,0.6]]);
      var p2 = TRIANGLE_FAN([[0.7,0,0.7],[0.6,0,0.8],[0.6,0,1],[0.8,0,1],[1,0,0.8],[1,0,0.6],[0.8,0,0.4],[0.6,0,0.4],[0.6,0,0.6]]);
      var p3 = TRIANGLE_FAN([[0.3,0,0.4],[0.3,0,0],[0,0,0],[0,0,0.6],[0.6,0,0.6],[0.6,0,0.4]]);
      return COLOR([0,0,0])(STRUCT([p1,p2,p3]));  
    case 'q' :
      var q1 = TRIANGLE_FAN([[0,0,0.7],[0.3,0,1],[0.4,0,0.7],[0.3,0,0.6],[0.3,0,0.4],[0.4,0,0.3],[0.3,0,0],[0,0,0.3]]);
      var q2 = TRIANGLE_FAN([[1,0,0.7],[1,0,0.3],[0.7,0,0.4],[0.7,0,0.6],[0.6,0,0.7],[0.4,0,0.7],[0.3,0,1],[0.7,0,1]]);
      var q3 = TRIANGLE_FAN([[0.7,0,0],[0.3,0,0],[0.4,0,0.3],[0.6,0,0.3],[0.7,0,0.4],[1,0,0.3]]);
      var q4 = TRIANGLE_FAN([[0.5,0,0.5],[1,0,0.5],[1,0,0],[0.5,0,0]])
      return COLOR([0,0,0])(STRUCT([q1,q2,q3,q4]));
    case 'r' :
      var r1 = TRIANGLE_FAN([[0,0,1],[0.6,0,1],[0.6,0,0.8],[0.3,0,0.8],[0.3,0,0.6],[0,0,0.6]]);
      var r2 = TRIANGLE_FAN([[0.7,0,0.7],[0.6,0,0.8],[0.6,0,1],[0.8,0,1],[1,0,0.8],[1,0,0.6],[0.8,0,0.4],[0.6,0,0.4],[0.6,0,0.6]]);
      var r3 = TRIANGLE_FAN([[0.3,0,0.4],[0.3,0,0],[0,0,0],[0,0,0.6],[0.6,0,0.6],[0.6,0,0.4]]);
      var r4 = TRIANGLE_FAN([[0.3,0,0.4],[0.6,0,0.4],[1,0,0],[0.6,0,0],[0.3,0,0.3]]);
      return COLOR([0,0,0])(STRUCT([r1,r2,r3,r4]));
    case 's' :
      var s1 = TRIANGLE_FAN([[0.8,0,0],[1,0,0.2],[1,0,0.4],[0.7,0,0.3],[0.6,0,0.2],[0.2,0,0.2],[0,0,0]]);
      var s2 = TRIANGLE_FAN([[0.3,0,0.6],[0.8,0,0.6],[1,0,0.4],[0.7,0,0.3],[0.6,0,0.4],[0.1,0,0.4],[0,0,0.5],[0,0,0.8],[0.2,0,0.7]]);
      var s3 = TRIANGLE_FAN([[0.2,0,1],[1,0,1],[0.8,0,0.8],[0.3,0,0.8],[0.2,0,0.7],[0,0,0.8]]);
      return COLOR([0,0,0])(STRUCT([s1,s2,s3]));
    case 't' :
      var t1 = TRIANGLE_FAN([[0.4,0,0.7],[0,0,0.7],[0,0,1],[1,0,1],[1,0,0.7],[0.6,0,0.7],[0.6,0,0],[0.4,0,0]]);
      return COLOR([0,0,0])(STRUCT([t1]));
    case 'u' :
      var u1 = TRIANGLE_FAN([[0.3,0,0],[0,0,0.3],[0,0,1],[0.3,0,1],[0.3,0,0.4],[0.4,0,0.3],[0.6,0,0.3]]);
      var u2 = TRIANGLE_FAN([[0.7,0,0],[0.3,0,0],[0.6,0,0.3],[0.7,0,0.4],[0.7,0,1],[1,0,1],[1,0,0.3]]);
      return COLOR([0,0,0])(STRUCT([u1,u2]));
    case 'v' :
      var v1 = TRIANGLE_FAN([[0.3,0,0],[0,0,0.3],[0,0,1],[0.3,0,0.7],[0.3,0,0.4],[0.4,0,0.3],[0.6,0,0.3]]);
      var v2 = TRIANGLE_FAN([[0.7,0,0],[0.3,0,0],[0.6,0,0.3],[0.7,0,0.4],[0.7,0,0.7],[1,0,1],[1,0,0.3]]);
      return COLOR([0,0,0])(STRUCT([v1,v2]));
    case 'w' :
      var w1 = TRIANGLE_FAN([[0.3,0,0.4],[0.5,0,0.6],[0.5,0,0.2],[0.3,0,0],[0,0,0],[0,0,1],[0.3,0,0.8]]);
      var w2 = TRIANGLE_FAN([[0.7,0,0.4],[0.7,0,0.8],[1,0,1],[1,0,0],[0.7,0,0],[0.5,0,0.2],[0.5,0,0.6]]);
      return COLOR([0,0,0])(STRUCT([w1,w2]));
    case 'x' :
      var x1 = TRIANGLE_FAN([[0.5,0,0.5],[0.5,0,0.7],[0.7,0,1],[1,0,1],[0.7,0,0.5],[1,0,0],[0.7,0,0],[0.5,0,0.3],[0.3,0,0],[0,0,0],[0.3,0,0.5],[0,0,1],[0.3,0,1],[0.5,0,0.7]]);
      return COLOR([0,0,0])(STRUCT([x1]));
    case 'y' :
      var y1 = TRIANGLE_FAN([[0.5,0,0.5],[0.5,0,0.7],[0.7,0,1],[1,0,1],[0.3,0,0],[0,0,0],[0.3,0,0.5],[0,0,1],[0.3,0,1],[0.5,0,0.7]]);
      return COLOR([0,0,0])(STRUCT([y1]));
    case 'z' :
      var z1 = TRIANGLE_FAN([[0.8,0,1],[0,0,1],[0.2,0,0.8],[0.7,0,0.8],[0.8,0,0.7],[1,0,0.8]]);
      var z2 = TRIANGLE_FAN([[0.7,0,0.6],[0.8,0,0.7],[1,0,0.8],[1,0,0.5],[0.9,0,0.4],[0.4,0,0.4],[0.3,0,0.3],[0,0,0.4],[0.2,0,0.6]]);
      var z3 = TRIANGLE_FAN([[0.2,0,0],[0,0,0.2],[0,0,0.4],[0.3,0,0.3],[0.4,0,0.2],[0.8,0,0.2],[1,0,0]]);
      return COLOR([0,0,0])(STRUCT([z1,z2,z3]));
    default : return POLYLINE([[0,0,0],[1,0,0]]);
  }
}

/*
Funzione che ritorna il modello della parola passata in input.
    input:
      parola - la parola (o frase) che si intende trasformare in un modello.
      font - la grandezza del font (di default le lettere sono racchiuse in un quadrato 1x1).
      spazio - lo spazio tra una lettera e l'altra (di default è pari a 0.1).
*/
var Parola = function (parola, font, spazio) {
  var lettere = new Array();
  var dimensioneFont = font || 1;
  var spazioTraLettere = spazio || 0.1;

  for (var i = 0; i < parola.length; i++) {
    if (parola[i] != ' ')
      lettere.push( T([0])( [(dimensioneFont+spazioTraLettere)*i] )( S([0,2])( [dimensioneFont,dimensioneFont] )(new Lettera(parola[i]))));
  }

  return STRUCT(lettere);
}

/*
Funzione che ritorna un modello di una didascalia, utilizzata per indicare parti specifiche del modello finale.
    input:
      parola - la parola (o frase) della didascalia.
      x - la coordinata 'x' della didascalia.
      y - la coordinata 'y' della didascalia.
      z - la coordinata 'z' della didascalia.
      x2 - la coordinata 'x' dove deve puntare la didascalia.
      z2 - la coordinata 'z' dove deve puntare la didascalia.
      destra - se è uguale a 1 indica che la didascalia punta a destra.
      font - la grandezza del font (di default le lettere sono racchiuse in un quadrato 1x1).
      spazio - lo spazio tra una lettera e l'altra (di default è pari a 0.1).
*/
var Didascalia = function (parola, x, y, z, x2, z2, destra, font, spazio) {
  var dimensioneFont = font || 1;
  var spazioTraLettere = spazio || 0.1;
  var length = parola.length*(dimensioneFont+spazioTraLettere);

  //La parola
  var p = T([0,1,2])([x,y,z])(S([0])([-1])(new Parola(parola)));

  //La sottolineatura
  var s = TRIANGLE_FAN([[x,y,z-0.2], [x-length,y,z-0.2], [x-length,y,z-0.4], [x,y,z-0.4]]);

  //La linea che punta al modello
  if (destra == 1)
    var l = TRIANGLE_FAN([[x-length,y,z-0.2], [x2,y,z2], [x2,y,z2-0.2], [x-length,y,z-0.4]]);
  else
    var l = TRIANGLE_FAN([[x,y,z-0.2], [x2,y,z2], [x2,y,z2-0.2], [x,y,z-0.4]]);

  return COLOR([0,0,0])(STRUCT([p,s,l]));
}

/*
Funzione che disegna le varie didascalie del modello.
*/
var disegnaDidascalie = function () {
  var didascalie = STRUCT([
    new Didascalia("processo trasverso", 34, 10, 7.5, 9, 2.5, 1),
    new Didascalia("processo spinoso", -5, 15, -5.5, -0.5, -1, 0),
    new Didascalia("disco intervertebrale", -15, 5, 8.5, -7, 6, 0),
    new Didascalia("midollo spinale", 28, 11, -4, 2.5, -2, 1),
    new Didascalia("processo articolare superiore", -10, 10.5, 0, -5, 4, 0),
    new Didascalia("processo articolare inferiore", 45, 12.5, 17.5, 2.75, 14.5, 1),
    new Didascalia("corpo vertebrale", -12.5, 4, 16.5, -6.5, 15, 0),
    new Didascalia("nervo spinale", -10, 10, 18.5, -3, 20, 0),
    new Didascalia("dura madre", -5, 10.5, 24, -1.75, 22.5, 0),
    new Didascalia("sostanza bianca", 25, 10, 25, 1.25, 23, 1),
    new Didascalia("sostanza grigia", 22, 9.5, 28.5, 0.5, 23.5, 1)
  ]);
  DRAW(didascalie);
}

/*
In questa parte si assemblano i vari pezzi per formare il modello.
*/
//disegnaCoordinate();
disegnaDidascalie();

var corpo = new CorpoVertebrale();
var procspin = new ProcessoSpinoso();
var procsup = new ProcessoArticolareSuperiore();
var procinf = new ProcessoArticolareInferiore();
var proctras = new ProcessoTrasverso();
var vertebra1 = STRUCT([corpo,procspin,procsup,procinf,proctras]);

var disco1 =  new Disco();
var midollo = new Midollo();
var nervi = new Nervi();

var model = STRUCT([midollo,nervi,vertebra1,disco1,T([2])([6.5]),vertebra1,disco1,T([2])([6.5]),vertebra1]);
DRAW(model);