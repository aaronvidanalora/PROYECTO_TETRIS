(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const P=[{nombre:"palo",matriz:[[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]]]},{nombre:"cuadrado",matriz:[[[3,3],[3,3]],[[3,3],[3,3]],[[3,3],[3,3]],[[3,3],[3,3]]]},{nombre:"L",matriz:[[[4,0],[4,0],[4,4]],[[4,4,4],[4,0,0]],[[4,4],[0,4],[0,4]],[[4,4,4],[0,0,4]]]},{nombre:"L invertida",matriz:[[[0,5],[0,5],[5,5]],[[5,0,0],[5,5,5]],[[5,5],[5,0],[5,0]],[[5,5,5],[0,0,5]]]},{nombre:"T",matriz:[[[6,6,6],[0,6,0]],[[6,0],[6,6],[6,0]],[[0,6,0],[6,6,6]],[[6,0],[6,6],[6,0]]]},{nombre:"Z",matriz:[[[7,7,0],[0,7,7]],[[0,7],[7,7],[7,0]],[[0,7,7],[7,7,0]],[[7,0],[7,7],[0,7]]]},{nombre:"Z invertida",matriz:[[[0,8,8],[8,8,0]],[[8,0],[8,8],[0,8]],[[8,8,0],[0,8,8]],[[0,8],[8,8],[8,0]]]}];class T{constructor(t,i=0,o=0,n=0){this.modelo=t,this.angulo=n,this.matriz=P[this.modelo].matriz[this.angulo],this.x=i,this.y=o,this.longitud=this.matriz[0].length,this.altura=this.matriz.length}girar(){const t=this.angulo,i=this.matriz;this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=P[this.modelo].matriz[this.angulo],this.longitud=this.matriz[0].length,this.altura=this.matriz.length;const o=11-this.longitud;this.x>o&&(this.angulo=t,this.matriz=i,this.longitud=this.matriz[0].length,this.altura=this.matriz.length)}}let u=[];const b={template:`
    <header class="d-flex align-items-center justify-content-center">
        <img src="img/logo.png" alt="logo" width="200" class="mt-5" />
    </header>
    <main class="container mt-5 bg-opacity-50 bg-dark p-2">
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark">
            </div>
            <div id="partidas" class="m-5 p-5 bg-dark">
            </div>
        </div>
    </main>
    `,script:()=>{function a(){const l=document.querySelector("#ranking");u.sort((r,p)=>p.puntos-r.puntos);let c=`<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            
                        </tr>
                    </thead>
                    <tbody>`;u.forEach((r,p)=>{r.avatar&&r.nick&&r.puntos&&r.fecha&&(c+=`<tr>
                            <td>${p+1}</td> <!-- Mostrar el número de posición -->
                            <td><img src="${r.avatar}" style= "width: 30px" alt=""></td>
                            <td>${r.nick}</td>
                            <td>${r.puntos}</td>
                            <td>${r.fecha}</td>
                        </tr>`)}),c+=`
                    </tbody>
                    <tfoot></tfoot>
                </table>`,l.innerHTML=c}function t(){const l=document.querySelector("#partidas");let c=`<h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                    <button id="botonBuscar">BUSCAR</button>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Buscador"
                        aria-describedby="button-addon2"
                        id="buscadorNick"
                    />
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nick <i id="nick-header" class="bi bi-arrow-up-square"></i></th>
                            <th>Puntuación <i id="puntos-header" class="bi bi-arrow-up-square"></i></th>
                            <th>Fecha <i id="fecha-header" class="bi bi-arrow-up-square"></i></th>
                        </tr>
                    </thead>
                    <tbody>`;u.forEach(r=>{r.avatar&&r.nick&&r.puntos&&r.fecha&&(c+=`<tr>
                            <td><img src="${r.avatar}" style= "width: 30px" alt=""></td>
                            <td>${r.nick}</td>
                            <td>${r.puntos}</td>
                            <td>${r.fecha}</td>
                        </tr>`)}),c+=`
                    </tbody>
                    <tfoot></tfoot>
                </table>`,l.innerHTML=c}function i(l){console.log("Guardando partida"),l.avatar&&l.nick&&l.puntos&&l.fecha&&(u.push(l),console.log(u),t())}const o=new Date,n={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:e.nick||"",puntos:e.puntos||"",fecha:o.toLocaleString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})};i(n),console.log(a),console.log(t),t(),document.getElementById("botonBuscar").addEventListener("click",d);function d(){const l=document.getElementById("buscadorNick").value;console.log("nombre buscado: ",l);const c=u.filter(r=>r.nick.toLowerCase().includes(l.toLowerCase()));z(c)}function z(l){const c=document.querySelector("#partidas tbody");c.innerHTML="",l.forEach(r=>{if(r.avatar&&r.nick&&r.puntos&&r.fecha){const p=`
                        <tr>
                            <td><img src="${r.avatar}" style="width: 30px" alt=""></td>
                            <td>${r.nick}</td>
                            <td>${r.puntos}</td>
                            <td>${r.fecha}</td>
                        </tr>
                    `;c.innerHTML+=p}})}function h(l){const c=document.querySelector("#partidas tbody");let r=c.dataset.orden||"asc",p=l===c.dataset.ultimoCampoOrdenado&&r==="asc"?"desc":"asc";switch(c.dataset.orden=p,c.dataset.ultimoCampoOrdenado=l,l){case"nick":console.log("Ordenar por nick"),u.sort((m,v)=>p==="asc"?m.nick.localeCompare(v.nick,"es",{sensitivity:"base"}):v.nick.localeCompare(m.nick,"es",{sensitivity:"base"}));break;case"puntos":console.log("Ordenar por puntos"),p==="asc"?u.sort((m,v)=>m.puntos-v.puntos):u.sort((m,v)=>v.puntos-m.puntos);break;case"fecha":console.log("Ordenar por fecha"),u.sort((m,v)=>{const y=new Date(m.fecha),k=new Date(v.fecha);return p==="asc"?y-k:k-y});break}const q=x(u);c.innerHTML=q}const x=l=>{let c="";return l.forEach(r=>{c+=`
                    <tr>
                        <td><img src="${r.avatar}" style= "width: 30px" alt=""></td>
                        <td>${r.nick}</td>
                        <td>${r.puntos}</td>
                        <td>${r.fecha}</td>
                    </tr>`}),c};a(),document.querySelector("#nick-header").addEventListener("click",function(){console.log("Click en flechaNick"),h("nick")}),document.querySelector("#puntos-header").addEventListener("click",function(){console.log("Click en flechaPuntuacion"),h("puntos")}),document.querySelector("#fecha-header").addEventListener("click",function(){console.log("Click en flechaFecha"),h("fecha")})}},L={template:`
  <!-- Pantalla del juego -->

  <div id="guardar" class="mt-5  d-flex justify-content-center align-items-center">
  <div  class="bg-dark position-center p-2" style="">
    <h1>¡¡¡¡¡GAME OVER!!!!!!</h1>
      <h3>Quieres guardar la partida?</h3>
          <label for="nick">Nick:</label><br>
          <input type="text" id="nick" name="nick" required><br><br>
          <button id="btnGuardar">Guardar</button>
        <button id="btnCancelar">Cancelar</button>
   
  </div>
</div>
  
    `,script:()=>{}},e={matriz:[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]],nuevaPieza:null,cambiarPieza:null,piezaGuardada:null,nivel:1,limpiar:1,tiempo:0,pintaPanel:()=>{const a=document.querySelector("#panel");a.innerHTML="";const t=["black","black","rgb(64, 230, 64)","rgb(255, 255, 0)","purple","red","aqua","rgb(255, 182, 47)","rgb(255, 190, 201)"];for(let o=1;o<e.matriz.length-1;o++){let n='<div class="fila d-flex justify-content-center">';for(let s=0;s<e.matriz[o].length;s++){let d="";if(e.matriz[o][s]==0)d+='<div class="celda bg-dark border border-secondary"></div>';else{const z=e.matriz[o][s];d=`<div class="celda border border-secondary" style="background-color: ${t[z]};"></div>`}n+=d}n+="<div>",a.innerHTML+=n}const i=document.querySelector("#puntos");i.innerHTML=e.puntos},borrarPieza:()=>{if(e.nuevaPieza){for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)e.nuevaPieza.matriz[a][t]&&(e.matriz[a+e.nuevaPieza.y][t+e.nuevaPieza.x]=0);e.pintaPanel()}},limpiarFila(){let a=0;for(let t=0;t<e.matriz.length-1;t++)if(e.matriz[t].every(i=>i!==0)){e.matriz.splice(t,1),e.matriz.unshift(Array(10).fill(0)),a++;break}if(a>0){e.puntos+=100;const t=document.querySelector("#limpiar");t.innerHTML=e.limpiar,e.limpiar+=1,e.pintaPanel()}},jugar:()=>{e.matriz=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]],e.puntos=0,e.limpiar=1,e.nivel=1,e.tiempo=0,e.pintaPanel(),e.controlTeclas(),e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza(),e.iniciarMovimiento(),e.cambiarPieza()},crearNuevaPieza:()=>{const a=Math.floor(Math.random()*7),i=10-P[a].matriz[0].length,o=Math.floor(Math.random()*(i+1)),n=new T(a,o,1,0);return e.nuevaPieza=n,n},finalizarPartida:()=>{console.log("Partida Finalizada");const a=document.querySelector("#juego");if(a){a.innerHTML=L.template,clearInterval(e.movimientoInterval);const t=document.querySelector("#btnGuardar"),i=document.querySelector("#btnCancelar");t.addEventListener("click",()=>{const o=document.querySelector("#nick").value;e.nick=o;const n=document.querySelector("main");n.innerHTML=b.template,b.script()}),i.addEventListener("click",()=>{a.innerHTML=f.template,e.reiniciarMatriz(),e.pintaPanel(),e.iniciarMovimiento()})}else console.error("El elemento #juego no se encontró en el DOM.")},insertarPieza:()=>{let a=!0;for(let t=0;t<e.nuevaPieza.altura;t++){for(let i=0;i<e.nuevaPieza.longitud;i++)if(e.nuevaPieza.matriz[t][i]===e.nuevaPieza.modelo+2&&e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x+i]>0){a=!1;break}if(!a)break}if(a)for(let t=0;t<e.nuevaPieza.altura;t++)for(let i=0;i<e.nuevaPieza.longitud;i++)e.nuevaPieza.matriz[t][i]===e.nuevaPieza.modelo+2&&(e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x+i]=e.nuevaPieza.matriz[t][i]);else e.finalizarPartida()},puntos:0,moverIzq(){for(let a=0;a<e.nuevaPieza.altura;a++)if(e.matriz[e.nuevaPieza.y+a][e.nuevaPieza.x-1]!==0)return;e.borrarPieza(),e.nuevaPieza.x-=1,e.puntos+=10,e.insertarPieza(),e.pintaPanel()},moverDra(){for(let a=0;a<e.nuevaPieza.altura;a++)if(e.matriz[e.nuevaPieza.y+a][e.nuevaPieza.x+e.nuevaPieza.longitud]!==0)return;e.borrarPieza(),e.nuevaPieza.x+=1,e.puntos+=10,e.insertarPieza(),e.pintaPanel()},bajar:()=>{if(e.nuevaPieza.y==1){let a=!1;for(let t=0;t<e.nuevaPieza.longitud;t++)if(e.matriz[e.nuevaPieza.y+e.nuevaPieza.altura][e.nuevaPieza.x+t]>0){a=!0;break}if(a){e.finalizarPartida();return}}if(e.nuevaPieza.y+e.nuevaPieza.altura<21){e.borrarPieza(),e.nuevaPieza.y++,e.puntos+=10;for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)if(e.nuevaPieza.matriz[a][t]&&e.matriz[a+e.nuevaPieza.y][t+e.nuevaPieza.x]){e.nuevaPieza.y--,e.insertarPieza(),e.pintaPanel(),e.limpiarFila(),e.nuevaPieza=e.crearNuevaPieza();return}e.insertarPieza(),e.pintaPanel()}else e.limpiarFila(),e.nuevaPieza=e.crearNuevaPieza()},siguienteNivel:()=>{if(e.puntos>=5e3){e.reiniciarMatriz(),e.borrarPieza(),e.pintaPanel();const a=document.querySelector("#nivel");a.innerHTML=e.nivel,e.nivel+=1}},reiniciarMatriz:()=>{e.borrarPieza(),e.matriz=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]],e.puntos=0,e.limpiar=0,e.nuevaPieza=null,e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza()},minutos:0,segundos:0,iniciarMovimiento:()=>{e.movimientoInterval=setInterval(()=>{e.bajar(),e.siguienteNivel(),e.tiempo++,e.minutos=Math.floor(e.tiempo/60),e.segundos=e.tiempo%60,e.minutos=e.minutos<10?"0"+e.minutos:e.minutos,e.segundos=e.segundos<10?"0"+e.segundos:e.segundos,document.querySelector("#minutos").innerHTML=e.minutos,document.querySelector("#segundos").innerHTML=e.segundos},2e3)},cambiarPieza(){e.borrarPieza();const a=e.nuevaPieza;e.piezaGuardada===null?(e.piezaGuardada=a,e.nuevaPieza=e.crearNuevaPieza()):(e.nuevaPieza=e.piezaGuardada,e.piezaGuardada=a),e.insertarPieza(),e.pintaPiezaGuardada(),e.pintaPanel()},pintaPiezaGuardada:()=>{const a=document.querySelector(".piezaSiguiente2");a.innerHTML="";const t=["","","rgb(64, 230, 64)","rgb(255, 255, 0)","rgb(211, 39, 211)","red","aqua","rgb(255, 182, 47)","rgb(255, 190, 201)"];for(let i=0;i<e.piezaGuardada.matriz.length;i++){let o='<div class="fila d-flex justify-content-center">';for(let n=0;n<e.piezaGuardada.matriz[i].length;n++){let s="";if(e.piezaGuardada.matriz[i][n]==0&&(s+='<div class="celda bg-dark border-secondary"></div>'),e.piezaGuardada.matriz[i][n]>=2){let d=e.piezaGuardada.matriz[i][n];s=`<div class="celda tipo${d}" style="background-color: ${t[d]};"></div>`}o+=s}o+="</div>",a.innerHTML+=o}},controlTeclas:()=>{document.addEventListener("keydown",e.teclas)},teclas:a=>{const i=document.querySelector("#juego").innerHTML===L.template;switch(a.key){case"ArrowUp":i||e.borrarPieza(),a.preventDefault(),e.nuevaPieza.girar(),e.insertarPieza(),e.pintaPanel();break;case"ArrowDown":i||e.bajar(),a.preventDefault();break;case"ArrowLeft":i||e.moverIzq(),a.preventDefault();break;case"ArrowRight":i||e.moverDra(),a.preventDefault();break;case"c":i||e.cambiarPieza(),a.preventDefault();break}},limpiarEventListener:()=>{document.removeEventListener("keydown",e.teclas)}},f={template:`
  <!-- Pantalla del juego -->

  <div id="juego">
  <div class="row">
    <!-- Panel izquierda -->
    <div
      class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
    >
      <h4>Nivel: <span id="nivel"></span></h4>
      <h4>Tiempo: <span id="minutos">0</span>:<span id="segundos">00</span></h4>
      <h4>Lineas: <span id="limpiar"></span></h4>
      <h4>Puntos: <span id="puntos"></span></h4>
    </div>
    <!-- Panel central -->
    <div class="col-4 d-flex justify-content-center">
      <div id="panel" class="p-5">
       
      </div>
    </div>
    					<!-- Panel derecha -->
              <div
              class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
            >
              
              <hr />
              
                <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente2 m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    `,script:()=>{e.jugar()}},g={template:`
    <div id="intro" class="text-center p-5">
    <p>
      Tetris és un videojoc de tipus trencaclosques. Fou inventat per
      l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre
      treballava a l'Acadèmia de Ciències de Moscou.
    </p>
    <h2>Instruccions:</h2>
    <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
    <p>Amb la fletxa avall pots girar la peça</p>
    <p>
      '<strong>Ñ</strong>' per canviar la peça actual per la peça que està a
      punt de sortir (que pots veure a la columna de la dreta)
    </p>
    <p>
      Al final de la partida podràs desar la teva puntuació, i verue el
      ranking de jugadors
    </p>
    <button id="btnJugar" class="btn btn-success fs-1 mt-5">JUGAR</button>
    <hr />
  </div>
    `,script:()=>{document.querySelector("#btnJugar").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=f.template,f.script()})}},M={template:`
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#vistaHome").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=g.template,g.script()}),document.querySelector("#vistaRanking").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=b.template,b.script()}),document.querySelector("#vistaJuego").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=f.template,f.script()})}};document.querySelector("header").innerHTML=M.template;M.script();document.querySelector("main").innerHTML=g.template;g.script();b.script();f.script();
