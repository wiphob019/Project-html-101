const form = document.querySelector("form"),

eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{ //error if not input anything.
    e.preventDefault();
    if(eInput.value == ""){
        eField.classList.add("shake","error");
    }
    else{
        checkEmail();
    }
    if(pInput.value == ""){
        pField.classList.add("shake","error");
    }
    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    },500)

    eInput.onkeyup = ()=>{
        checkEmail();
    }

    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Password can't be blank";
        }
        else{
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = ()=>{
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(pInput.value == ""){
            pField.classList.add("error");
        }
        else{
            pField.classList.remove("error");
        }
    }

    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = "#";
        console.log("Form Submitted!");
    }
}