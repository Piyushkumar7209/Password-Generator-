const pwd=document.getElementById("pwd_text");
const generate=document.getElementById("generate");
const clipboard=document.getElementById("clipboard");
let pwd_lenght=document.getElementById("slider");
let copy_text=document.getElementById("copy_text");
let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
generate.addEventListener('click',() => {
        let password="";
        let checked=document.getElementById("checked").checked;
        let final_string=string;
        if(checked)  {
            final_string+="@#$%^&*/=+?";
        }
        for (let i = 0; i<pwd_lenght.value; i++){
            let pwd=final_string[Math.floor(Math.random()* final_string.lenght)];
             password+= pwd;
        }
        pwd.innerText=password;
        final_strnig=string;
});
clipboard.addEventListener('click', () =>{
           navigator.clipboard.writeText(pwd.innerText);
           copy_text.textContent.textContent="password copied";
           copy_text.style.display="block"
           SetTimeOut(() =>{
            copy_text.style.display="none";
           },2000);
});