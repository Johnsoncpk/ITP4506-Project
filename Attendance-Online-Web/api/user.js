var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
import $ from "jquery";

const api = "";

function login(){
    $.post("", {email:"admin", password:"admin"}, function(respone){
        alert(respone.data.result);
    });
}