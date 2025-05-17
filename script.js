let password=document.getElementById("password");
let image=document.getElementById("image");

image.addEventListener("click",()=>{
    if(password.type=="password"){
        password.type="text";
        image.src="eye-close.png";
    }
    else{
        password.type="password";
        image.src="eye-open.png";
    }
})