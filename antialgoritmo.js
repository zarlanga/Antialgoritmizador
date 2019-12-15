
document.querySelectorAll(".html5-video-player").onload = function(){chusmearTitulo()};

function chusmearTitulo(){
	guardarLS2(document.querySelector("h1").innerText);
}

function clickSaltar(){
	//console.log("entrofuncionsaltar");
document.querySelector("#byline-container").click();
}



function guardarLS2(testo){
  if (localStorage.getItem("hisArray") == null) {
	localStorage.setItem("hisArray","[]");
  }
  var cajon = JSON.parse(localStorage.getItem("hisArray"));
  
  var inin = cajon.findIndex ((c)=>c.nombre == testo);
  if (inin >=0) {
	  //console.log("ACATAH");
	  
	  
	  if (/*cajon.length > 20 && */ cajon[inin].repes > getAVG() ) {
		  //console.log("entrocondicionsaltar");
		  clickSaltar();
	  } else {
		  cajon[inin].repes ++;
	  }
		  
  } else {
	  cajon.push({"nombre":testo,"repes":1});
	  //console.log("notahh");
	  
  }
  
  localStorage.setItem("hisArray", JSON.stringify(cajon) );
}


function getAVG(){
	let cajo = getLS();
	let ac = 0;
	for (c of cajo) ac += c.repes;
	return ac/cajo.length;
}

function getLS() {
	if (localStorage.getItem("hisArray") != null) {
	  let cajon = JSON.parse(localStorage.getItem("hisArray"));
	  return cajon;
	} else{
	  return [];
	}
}

/*

function sumarNros2(){
	let cajo = getLS();
	let ac = 0;
	for (c of cajo) ac += c.repes;
	//for (caj of cajo) for (let k in caj) ac += caj[k];
	console.log(ac);
	
}



function sumarNros(){
	let cajo = getLS();
	let ac = 0;
	for (caj of cajo)
	for (let k in caj) ac += caj[k];
	console.log(ac);
	
}

function guardarLS(testo){
  if (localStorage.getItem("histArray") == null) {
	localStorage.setItem("histArray","[]");
  }
  var cajon = JSON.parse(localStorage.getItem("histArray"));
  
  var inin = cajon.findIndex ((c)=>c[testo]);
  if (inin >=0) {
	  console.log("ACATAH");
	  cajon[inin][testo] ++;
  } else {
	  cajon.push({[testo]:1});
	  console.log("notahh");
	  
  }
  
  localStorage.setItem("histArray", JSON.stringify(cajon) );
}



function guardarLS(arrIN, arrEX){
  if (localStorage.getItem("arrayME") == null) {
	localStorage.setItem("arrayME","[]");
  }
  let cajon = JSON.parse(localStorage.getItem("arrayME"));
  cajon.push([arrIN, arrEX]);
  localStorage.setItem("arrayME", JSON.stringify(cajon) );
}
			
function getLS() {
	if (localStorage.getItem("arrayME") != null) {
	  let cajon = JSON.parse(localStorage.getItem("arrayME"));
	  return cajon;
	} else{
	  return [];
	}
}
*/