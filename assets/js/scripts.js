// function headAnimation(){
//     let h1 = document.getElementById('top-head');
//     h1.style.webkitBackgroundClip = "text";
//     h1.style.webkitTextFillColor = "transparent";
// }
//
// function headAnimationOff(){
//     let h1 = document.getElementById('top-head');
//     h1.style.removeProperty('-webkit-background-clip');
//     h1.style.removeProperty('-webkit-text-fill-color');
// }

let expiry; //global variable to store number of days for cookie expiry value

function daysCheck(){
    let days = document.getElementById('expiry').value;
    let daysResp = document.getElementById('daysResp');
    let daysReg = /^[1-5]$/;
    if(!daysReg.test(days)){
        document.getElementById('expiryBtn').setAttribute('disabled','disabled');
        daysResp.classList.remove('text-success');
        daysResp.classList.add('text-danger');
        daysResp.innerText = "Please enter a value between 1 & 5 days!";
    }
    else{
        document.getElementById('expiryBtn').removeAttribute('disabled');
        daysResp.classList.remove('text-danger');
        daysResp.classList.add('text-success');
        daysResp.innerText = "Valid Value! Continue ahead 😁!";
    }
}

function sectionOneOut(){
    expiry = document.getElementById('expiry').value;
    console.log(expiry);
    let sect1 = document.getElementById('first_expiry');
    sect1.style.transform = "translateX(-150%)";
    sect1.style.opacity = "0%";
    setTimeout(function (){
        sect1.classList.add('d-none');
        sectionTwoIn();
    }, 500);
}

function sectionTwoIn(){
    let sect2 = document.getElementById('second_data');
    sect2.classList.remove('d-none');
    setTimeout(function (){
        sect2.style.opacity = "100%"
        sect2.style.transform = "translateX(0%)";
    }, 200);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function sectionTwoOut(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let phone = document.getElementById('phone');
    setCookie(name.id, name.value, expiry);
    setCookie(email.id, email.value, expiry);
    setCookie(age.id, age.value, expiry);
    setCookie(phone.id, phone.value, expiry);
}