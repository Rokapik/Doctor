// je vais build deux objets et leur donner une valeure 

var text    = document.querySelector(".text");
var epaule  = document.querySelector("#epaule");


// la je fais une target pour faire apparaitre le txt en survole (je galère encore un peu avec ca )
epaule.addEventListener("mouseover", function(){
text.innerHTML = " L\'Epaule:<br /><br />C\'est la région morphologique de l\'épaule (nom feminin) permet la jonction du tronc avec le membre superieur au niveau du bras. Elle comporte plusieurs articulation qui concourent et en faire l\'articulation la plus mobile du corps humain. Elle permetd\'orienter le membresuperieur dans l\'espace, permettant à son éxtremité effectrice, la main,s\'assurer ses rôles de préhention et de communication avec l\'environnement situé à sa portée."
;

});
// j'ai essayé un truc à base de hide mais c'était faisandé, du coups pour faire disparaitre le txt on m'a filer l'astuce du empty qui foncionne bien 
epaule.addEventListener("mouseout", function(){
text.innerHTML = ""; 
});



var text   = document.querySelector(".text");
var coude  = document.querySelector("#coude");



coude.addEventListener("mouseover", function(){
text.innerHTML = "Le coude:<br /><br /> Coude,(ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l\'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l\'avant-bras. Il unit ainsi trois os entre eux : le radius, l\'ulna (cubitus) et l\'humérus. "
;

});

coude.addEventListener("mouseout", function(){
text.innerHTML = ""; 
});



var text   = document.querySelector(".text");
var poignet  = document.querySelector("#poignet");



poignet.addEventListener("mouseover", function(){
text.innerHTML = "Le poignet:<br /><br /> Le poignet est une région du membre supérieur située entre la main et l\'avant-bras, et contenant le carpe.Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l\’avant-bras, transmet les forces appliquées de la main à l\’avant-bras, permet d\'adapter la capacité de flexion-extension maximale des doigts et de la préhension."
;

});

poignet.addEventListener("mouseout", function(){
text.innerHTML = ""; 
});




var text   = document.querySelector(".text");
var hanche  = document.querySelector("#hanche");



hanche.addEventListener("mouseover", function(){
text.innerHTML = "La hanche:<br /><br /> Hanche, ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l\'os iliaque et le fémur."
;

});

hanche.addEventListener("mouseout", function(){
text.innerHTML = ""; 
});



var text   = document.querySelector(".text");
var genoux  = document.querySelector("#genoux");



genoux.addEventListener("mouseover", function(){
text.innerHTML = "Le genou:<br :><br /> Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l\'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l\'os et fait en sorte que les surfaces de l\'articulation glissent facilement les unes contre les autres."
;

});

genoux.addEventListener("mouseout", function(){
text.innerHTML = ""; 
});



var text   = document.querySelector(".text");
var cheville  = document.querySelector("#cheville");



cheville.addEventListener("mouseover", function(){
text.innerHTML = "La cheville;<br /><br /> La cheville, (ou cou-de-pied) est l\'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin."
;

});

cheville.addEventListener("mouseout", function(){
text.innerHTML = ""; 
});









