
function login(){
const manager = document.getElementById('manager');
const docter = document.getElementById('docter');
const nurse = document.getElementById('nurse');
const reception = document.getElementById('reception');
const pharmacy = document.getElementById('pharmacy');
const managerdetail = document.getElementById('managerdetail');
const docterdetail = document.getElementById('docterdetail');
const nursedetail = document.getElementById('nursedetail');
const receptiondetail = document.getElementById('receptiondetail');
const pharmacydetail = document.getElementById('pharmacydetail');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
let managerClicked = false;
let docterClicked = false;
let nurseClicked = false;
let receptionClicked = false;
let pharmacyClicked = false;
function click(){
 manager.onclick= function(){
managerClicked = true;
    
        if(managerClicked == true){
            t1.style.color = "white";
            t2.style.color = "black";
            t3.style.color = "black";
            t4.style.color = "black";
            t5.style.color = "black";
            managerdetail.style.display = 'block';
            docterdetail.style.display = 'none';
            nursedetail.style.display = 'none';
            receptiondetail.style.display = 'none';
            pharmacydetail.style.display = 'none';
        }
       
    }
    docter.onclick= function(){
        docterClicked = true;
     
        if(docterClicked == true){
            t2.style.color = "white";
            t1.style.color = "black";
            t3.style.color = "black";
            t4.style.color = "black";
            t5.style.color = "black";
            docterdetail.style.display = 'block';
            managerdetail.style.display = 'none';
            nursedetail.style.display = 'none';
            receptiondetail.style.display = 'none';
            pharmacydetail.style.display = 'none';
        }
        
    }
    nurse.onclick= function(){
        nurseClicked = true;
     
        if(nurseClicked == true){
            t3.style.color = "white";
            t1.style.color = "black";
            t2.style.color = "black";
            t4.style.color = "black";
            t5.style.color = "black";
            nursedetail.style.display = 'block';
            docterdetail.style.display = 'none';
            managerdetail.style.display = 'none';
            receptiondetail.style.display = 'none';
            pharmacydetail.style.display = 'none';
          
        }
        
    }

    reception.onclick= function(){
        receptionClicked = true;
     
        if(receptionClicked == true){
            t4.style.color = "white";
            t5.style.color = "black";
            t3.style.color = "black";
            t1.style.color = "black";
            t2.style.color = "black";
            receptiondetail.style.display = 'block';
            docterdetail.style.display = 'none';
            managerdetail.style.display = 'none';
            nursedetail.style.display = 'none';
            pharmacydetail.style.display = 'none'; } }
pharmacy.onclick= function(){
    pharmacyClicked = true;
 
    if(pharmacyClicked == true){
        t4.style.color = "black";
        t5.style.color = "white";
         t3.style.color = "black";
            t1.style.color = "black";
            t2.style.color = "black";
        pharmacydetail.style.display = 'block';
        receptiondetail.style.display = 'none';
        docterdetail.style.display = 'none';
        managerdetail.style.display = 'none';
        nursedetail.style.display = 'none';}}}
click()
}
login();
function login2(){
function managerdetail(){
const usernamemanager = document.getElementById("username_manager");
const passworldmanager =  document.getElementById("password_manager"); 
const managerlogin = document.getElementById("manager_login");
const text1 = document.getElementById("text1");
let managername = ["ayu","moh" ,"abdi"]
let managerpasswords = ["123","456","789"]

managerlogin.onclick = function(){
  
    let username = usernamemanager.value;
    let password= passworldmanager.value;
    if(managername.includes(username) && managerpasswords.includes(password)){
        window.location.href = "managerDashbord.html";}
    else{
        text1.innerHTML="username or password are not found <br> please try again";
    }}}
  
managerdetail()

function docterdetail(){
    const usernamedocter= document.getElementById("username_docter");
    const passworddocter =  document.getElementById("password_docter"); 
    const docterlogin = document.getElementById("docter_login");
    const text2 = document.getElementById("text2");
    let doctername = ["ayu","moh" ,"abdi"];
    let docterpasswords = ["123","456","789"];
    
    docterlogin.onclick = function(){
        let username = usernamedocter.value;
        let password= passworddocter.value;
        if(doctername.includes(username) && docterpasswords.includes(password)){
            window.location.href = "docter.html";}
        else{
            text2.innerHTML="username or password are not found <br> please try again";}
    }}
            docterdetail()
        function nursedetail(){
            const usernamenurse= document.getElementById("username_nurse");
            const passwordnurse=  document.getElementById("password_nurse"); 
            const nurselogin = document.getElementById("nurse_login");
            const text3 = document.getElementById("text3");
           let nursename = ["ayu","moh" ,"abdi"];
            let nursepasswords = ["123","456","789"];
            nurselogin.onclick = function(){
                let username = usernamenurse.value;
                let password= passwordnurse.value;
                if(nursename.includes(username) && nursepasswords.includes(password)){
                    window.location.href = "Nurs.html";}
                else{
                    text3.innerHTML="username or password are not found <br> please try again";
                }}}
                nursedetail()
         function receptiondetail(){
                    const usernamereception= document.getElementById("username_reception");
                    const passwordreception=  document.getElementById("password_reception"); 
                    const receptionlogin = document.getElementById("reception_login");
                    const text4 = document.getElementById("text4");
                   let receptionname = ["ayu","moh" ,"abdi"];
                    let receptionpasswords = ["123","456","789"];
                    receptionlogin.onclick = function(){
                        let username = usernamereception.value;
                        let password= passwordreception.value;
                        if(receptionname.includes(username) && receptionpasswords.includes(password)){
                            window.location.href = "reseption.html";}
                        else{
                            text4.innerHTML="username or password are not found <br> please try again";
                        }}}
                        receptiondetail()
    function pharmacydetail(){
                            const usernamepharmacy= document.getElementById("username_pharmacy");
                            const passwordpharmacy=  document.getElementById("password_pharmacy"); 
                            const pharmacylogin = document.getElementById("pharmacy_login");
                            const text5 = document.getElementById("text5");
                           let pharmacyname = ["ayu","moh" ,"abdi"];
                            let pharmacypasswords = ["123","456","789"];
                            pharmacylogin.onclick = function(){
                                let username = usernamepharmacy.value;
                                let password= passwordpharmacy.value;
                                if(pharmacyname.includes(username) && pharmacypasswords.includes(password)){
                                    window.location.href = "re.html";}
                                else{
                                    text5.innerHTML="username or password are not found <br> please try again";
                                }}}
                                pharmacydetail()}
login2();