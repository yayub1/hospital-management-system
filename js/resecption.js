const user = document.getElementById("user");
const container = document.getElementById("container");
const user_name =  document.getElementById("user_name");
const close_btn1 = document.getElementById("close_btn1");
const docter_add_info = document.getElementById("docter_add_info");
 const add_info = document.getElementById("add_info");
const close_btn2 = document.getElementById("close_btn2");
 const dark_mode = document.getElementById("dark_mode");
 const ligth_mode = document.getElementById("ligth_mode");
 const content = document.getElementById("content");
 const work_shop = document.getElementById("work_shop");
 const remindernotify = document.getElementById("remindernotify");
 const userp = document.getElementById("userp");
user.onclick = function(){
    if(user_name.style.display === "none"){
        user_name.style.display = "block"
    }
    else{
        user_name.style.display = "none"}
    
}
close_btn1.onclick = function(){
    if(user_name.style.display === "block"){
        user_name.style.display = "none"
    }
     
}



dark_mode.onclick = function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    container.style.borderColor = "white";
     user_name.style.borderColor = "black";
    user_name.style.Color = "black";
    content.style.borderColor = "white";
     right_body.style.color = "white"
     work_shop.style.borderColor = "white";
     remindernotify.style.borderColor = "white";
     userp.style.borderColor = "white";
}
ligth_mode.onclick = function(){
    document.body.style.backgroundColor = "white";
   
    right_body.style.color = "black"
    container.style.borderColor = "black";
}