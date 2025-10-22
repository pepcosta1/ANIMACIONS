var num=0;		
var len = document.getElementById("cavall").children.length;

function next() {
    document.getElementById("cavall").children[num].style.display="none";
    num=++num%len;
    document.getElementById("cavall").children[num].style.display="inline";			
}


var rangVelocitat = document.getElementById("rangVelocitat");
var velocitat = rangVelocitat.value;
document.getElementById("txtVelocitat").innerHTML = velocitat;
var timer = setInterval("next()", velocitat);

rangVelocitat.addEventListener(
    'change',
    function() { 
        velocitat = rangVelocitat.value;
        document.getElementById("txtVelocitat").innerHTML = velocitat;     
        clearTimeout(timer);
        timer = setInterval("next()", Math.abs(velocitat-100));
    },
    false
 );