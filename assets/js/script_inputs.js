const input_email=document.querySelector('#email');
const input_senha=document.querySelector('#senha');
const patternEmail1=/^[A-z0-9]+[@]{1}[A-z0-9]+[.]+[A-z.]+$/;
function loginRegexEmail(){
    if(patternEmail1.exec(input_email.value)!=null){
        input_email.style.backgroundColor="rgb(234, 255, 190)";
        input_email.style.borderColor="#b0ff4f";
    }else{
        input_email.style.backgroundColor="rgb(255, 190, 190)";
        input_email.style.borderColor="#ff4f4f";
    }
}
function loginRegexSenha(){
    let tam_input_senha=(input_senha.value).length;
    if(tam_input_senha>=8){
        input_senha.style.backgroundColor="rgb(234, 255, 190)";
        input_senha.style.borderColor="#b0ff4f";
    }else{
        input_senha.style.backgroundColor="rgb(255, 190, 190)";
        input_senha.style.borderColor="#ff4f4f";
    }
}