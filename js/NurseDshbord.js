
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const divs = document.querySelectorAll('div');
const toggleButton = document.getElementById('toggle-button');
const body = document.body;
const compClosebtn = document.querySelectorAll('.h2closes');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const divId = link.querySelector('h3').textContent.replace(/\s/g, '');
      const targetDiv = document.getElementById(divId);
  
      if (targetDiv) {

        divs.forEach(div => {
          div.classList.add('dontDisplay');
        });
        targetDiv.classList.remove('dontDisplay');
        sidebarLinks.forEach(link => {
          link.classList.remove('active');
        });  
        link.classList.add('active');
      }
    });
  });

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block'
});

closeBtn.addEventListener('click',  () =>{
    sideMenu.style.display = 'none'
});

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode-variables');
    document.querySelector('.dark-mode span:nth-child(1)').classList.toggle('active');
    document.querySelector('span:nth-child(2)').classList.toggle('active');
});

compClosebtn.forEach(button => {
    button.addEventListener('click', () => {
        const parentDiv = button.closest('.dontDisplay').parentElement;
        if (parentDiv) {
          console.log(parentDiv);
        parentDiv.classList.add('dontDisplay');
      }
    });
  });

  //---------- auth --------------

const paitiont_name = document.getElementById("paitiont_name");
const paitiont_surname = document.getElementById("paitiont_surname");
const paitiont_cardnumber= document.getElementById("paitiont_cardnumber");
const add_further=document.getElementById("add_further");
const add_detail=document.getElementById("GetUser");
const text_nurse=document.getElementById("text_nurse");
const GEt = document.getElementById("AddUsers");
let paitiont_name1 = ["ayub" , "moha" ,"kal", "jo"];
let paitiont_surname1 = ["aa" , "bb" ,"cc", "dd"];
let paitiont_cardnumber1 = ["111" , "222" ,"333", "444"];


add_further.onclick = function(){
    let paitiontname  = paitiont_name.value;
    let paitiontsurname  = paitiont_surname.value;
    let paitiontcardnumber  = paitiont_cardnumber.value;
    console.log(paitiontname);
    if(paitiont_name1.indexOf(paitiontname) !== -1 && paitiont_surname1.indexOf(paitiontsurname) !== -1 || paitiont_cardnumber1.indexOf(paitiontcardnumber) !== -1){
        GEt.classList.remove('dontDisplay');
        add_detail.classList.add('dontDisplay');
        console.log(GEt);
    } else {
        text_nurse.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;there is no mach found";
    }
}