/* CREAZIONI DEI DOMINI */

// dominio monodimensionale
// il dominio viene diviso in 4
var domain1 = DOMAIN([1.5,5.5])([4]);

// coloro il dominio
// colori in RGB
COLOR([0,0,0])(domain1);

// disegno il dominio sullo schermo
DRAW(domain1);

// dominio bidimensionale
// il primo intervallo viene diviso in 4, il secondo in 2 
var domain2 = DOMAIN([[1.5,5.5],[1,3]])([4,2]);

// coloro il dominio
// colori in RGB
COLOR([0,0,0])(domain2);

// disegno il dominio sullo schermo
DRAW(domain2);

// dominio tridimensionale
// il primo intervallo viene diviso in 4, il secondo in 2, il terzo rimane intero 
var domain3 = DOMAIN([[1.5,5.5],[1,3],[4,5]])([4,2,1]);

// coloro il dominio
// colori in RGB
COLOR([0,0,0])(domain3);

// disegno il dominio sullo schermo
DRAW(domain3);

/* UTILIZZO DELLA FUNZIONE MAP */

//prendiamo un dominio che rappresenta una retta
var domain = DOMAIN([[0,10]])([10]);
//definiamo una funzione che ad ogni punto della retta associa un punto del piano
var mapping = function(p) {
  var u = p[0];
  return [u, 1];  
}
//applichiamo la mappatura alla retta
var mapped = MAP(mapping)(domain);
COLOR([0,0,0])(mapped);
DRAW(mapped);

//disegnamo la bisettrice del piano
var domain = DOMAIN([[0,10]])([10]);
var mapping = function(p) {
  var u = p[0];
  return [u, u];  
}
var mapped = MAP(mapping)(domain);
COLOR([0,0,0])(mapped);
DRAW(mapped);

//disegnamo una sinusoide
var domain = DOMAIN([[0,20*PI]])([360]);
var mapping = function(p) {
  var u = p[0];
  return [u, SIN(u)];  
}
var mapped = MAP(mapping)(domain);
COLOR([0,0,0])(mapped);
DRAW(mapped);

/* CREAZIONE DI FUNZIONI PER DISEGNARE SOLIDI */

//definiamo una funzione per creare cilindri
//un cilindro di raggio 'r' altezza 'h' e di colore 'c'
//la definizio grafica del cilindro è data da 'm'
var drawCylinder = function(r, h, m, c) {
  var domain = DOMAIN([[0,2*PI],[0,h]])([m,1]);
  var mapping = function(p) {
    u = r * COS(p[0]);
    v = r * SIN(p[0]);
    w = p[1];
    return [u, v, w];
  }
  var mapped = MAP(mapping)(domain);
  COLOR(c)(mapped);
  DRAW(mapped);
}

//definiamo una funzione che disegna 'n' colonne di raggio 'r' e altezza 'h'
//le colonne avranno colore 'c' e saranno a distanza 'd' l'una dall'altra
//le colonne verranno traslate rispetto all'asse x (quindi coordinata 'u')
var drawColonnato = function(n, r, h, d, c) {
  for (var i = 0; i < n; i++) {
    var domain = DOMAIN([[0,2*PI],[0,h]])([36,1]);
    var mapping = function(p) {
      u = r * COS(p[0]) + d * i;
      v = r * SIN(p[0]);
      w = p[1];
      return [u, v, w];
    }
    var mapped = MAP(mapping)(domain);
    COLOR(c)(mapped);
    DRAW(mapped);
  }
}

//definiamo una funzione per disegnare una sfera di raggio 'r' e colore 'c'
//la definizione grafica è data da 'm' e 'n'
var drawSphere = function(r, m, n, c) {
  var domain = DOMAIN([[0,2*PI],[0,PI]])([m,n]);
  var mapping = function(p) {
    u = r * COS(p[1] - PI/2) * COS(p[0]);
    v = r * COS(p[1] - PI/2) * SIN(p[0]);
    w = r * SIN(p[1] - PI/2);
    return [u, v, w];
  }
  var mapped = MAP(mapping)(domain);
  COLOR(c)(mapped);
  DRAW(mapped);
}

//definiamo una funzione per disegnare una semisfera di raggio 'r' e colore 'c'
//la definizione grafica è data da 'm' e 'n'
var drawSemisphere = function(r, m, n, c) {
  var domain = DOMAIN([[0,2*PI],[0,PI/2]])([m,n]);
  var mapping = function(p) {
    u = r * COS(p[1]) * COS(p[0]);
    v = r * COS(p[1]) * SIN(p[0]);
    w = r * SIN(p[1]);
    return [u, v, w];
  }
  var mapped = MAP(mapping)(domain);
  COLOR(c)(mapped);
  DRAW(mapped);
}
