const checks = document.getElementsByClassName("check");

for (let i = 0; i < checks.length; i++) { 
    checks[i].onclick = clickEnCheckbox;   
}

function clickEnCheckbox(e) { 
    let count = 0;
    let hayQueDeshabilitar = false; 
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == true) {
            count++;      
        };
    }
    if (count == 3) {
        hayQueDeshabilitar = true; 
    }
    if (hayQueDeshabilitar) {     
        for (let i = 0; i < checks.length; i++) {
            if (checks[i].checked == false) {  
                checks[i].disabled = true;  
            };
        }
    }
    else {
        for (let i = 0; i < checks.length; i++) {
            if (checks[i].disabled == true) {
                checks[i].disabled = false;
            };
        }
    }
}















