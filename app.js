
this.readDataFromLocalStorage();
if (!this.nom) this.nom =[];

const elements = {
    
    tovch: document.querySelector(".btn"),
    shine: document.querySelector(".shine"),
    shineNom: document.querySelector(".shineNom"),
    
    
};

const tovchDarsan = () =>{
   
    const html =  `
               <div class="shineNom" id="shineNom">
                <input type="text" class="nomID" placeholder="Номын дугаар"/>
                <input type="text" class="nomNer" placeholder="Номын нэр"/>
                <input type="text" class="nomZohiolch" placeholder="Зохиоляр"/>
                <input type="text" class="nomAguullaga" placeholder="Агууллага"/>
                <input type="text" class="nomOgnoo" placeholder="Хэвлэгдсэн онгоо"/><br>
               <label class="sh" for="img">Зураг оруулах:</label>
               <input type="file" class="img " id="img"  name="imgName" action="image/*>     
                <button class="shineBtn sh" id="shineBtn" type="Ном бүртгэх">шинэ ном бүртгэх</button>

                </div>
    `;

    

    elements.shine.insertAdjacentHTML('beforeend', html);   
    elements.tovch.style.visibility = 'hidden'; 
         

    document.getElementById("shineBtn").addEventListener('click', e => {
      const btn = e.target.closest(".shineBtn");
      const el = elements;
      if (btn){        
                       
        shinee();
        
    };
  } ); 
  
}; 
  
  function shinee() {   
    const node = document.getElementById("shineNom");
    const newLocal = {
    id: document.querySelector(".nomID"),
    ner: document.querySelector(".nomNer"),
    zohiolch: document.querySelector(".nomZohiolch"),
    aguullaga: document.querySelector(".nomAguullaga"),
    ogno: document.querySelector(".nomOgnoo"),
    img: document.querySelector('input[type="file"]'),
    }

    const  nomAvah =  {                     
            nomId: newLocal.id.value,    
            nomNer: newLocal.ner.value, 
            nomZohiolch: newLocal.zohiolch.value, 
            nomAguu: newLocal.aguullaga.value, 
            nomOgno: newLocal.ogno.value, 
            nomImg: newLocal.img.value             
    }
    
      
     this.nom.push(nomAvah);
     this.saveDataToLocalStorage();

     elements.tovch.style.visibility = 'visible';  
     
     node.parentNode.removeChild(node);

     jagsaalt();
    
       return this.nom
  } 
    
    function saveDataToLocalStorage(){
        localStorage.setItem("nom", JSON.stringify(this.nom));
    }

    function readDataFromLocalStorage() {
       // data г JS обект болно /массив/
       this.nom = JSON.parse( localStorage.getItem('nom'));
    }

  const jagsaalt = ()=> {
            
  this.nom.forEach(e => {
       
    const html = `       
      <li><a class="harah" href="#${e.nomId}">${e.nomNer}</a></li> 
      
      `;
  document.querySelector('.jagsaalt').insertAdjacentHTML('beforeend', html);
  }); 

    
};



function medeelel() {
  
  const id = window.location.hash.replace("#", "");
  let ind

  for (let el = 0; el < nom.length; el++) {
    
    if(nom[el].nomId === id) { 
      ind = nom[el];    
      
    };
    
  };  
  
   
  document.getElementById('medeelel').innerHTML = "";
  const htmll = `
  
  <h4>номын нэр${ind.nomNer}</h4>
  <p>Номын дугаар: ${ind.nomId}</p><br>         
  <p>Зохиолч: ${ind.nomZohiolch}</p><br>         
  <p>Агууллага: ${ind.nomAguu}</p><br>         
  <p>Хэвлэгдсэн огноо:${ind.nomOgno}</p><br>     
  `; 
  
  document.getElementById("medeelel").insertAdjacentHTML('beforeend', htmll);
  //const img = ind.nomImg.replace("\", "");
  //console.log(img);
  
  myFunction();
  function myFunction() {
    const mon = ind.nomImg.replace("C:\\fakepath\\", "") ;
  
  //const om = `"./src/image/${mon}"`; 
  //console.log(om);
  var x = document.createElement("IMG");
  x.setAttribute("src", `./image/${mon}`);
  x.setAttribute("width", "130");
  x.setAttribute("height", "220");
  x.setAttribute("alt", "The Pulpit Rock");
  document.getElementById("medeelel").appendChild(x);
}
};
  
document.getElementById("btn").addEventListener('click', tovchDarsan);    
jagsaalt();



window.addEventListener("hashchange", medeelel);







 