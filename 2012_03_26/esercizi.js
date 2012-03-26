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
var domain2 = DOMAIN([1.5,5.5][1,3])([4,2]);

// coloro il dominio
// colori in RGB
COLOR([0,0,0])(domain2);

// disegno il dominio sullo schermo
DRAW(domain2);

// dominio tridimensionale
// il primo intervallo viene diviso in 4, il secondo in 2, il terzo rimane intero 
var domain3 = DOMAIN([1.5,5.5][1,3][4,5])([4,2,1]);

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
var mapping = function(p) {
  var u = p[0];
  return [u, u];  
}
var mapped = MAP(mapping)(domain);
COLOR([0,0,0])(mapped);
DRAW(mapped);