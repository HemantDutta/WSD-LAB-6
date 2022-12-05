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

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

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
    let color = document.getElementById('color').value;
    let file = document.getElementById('img');
    localStorage.setItem('img', file.value);
    document.getElementById('body').style.backgroundColor = color;
    sessionStorage.setItem('bg-color', color);
    setCookie(name.id, name.value, expiry);
    setCookie(email.id, email.value, expiry);
    setCookie(age.id, age.value, expiry);
    setCookie(phone.id, phone.value, expiry);
    let sect2 = document.getElementById('second_data');
    sect2.style.transform = "translateX(-150%)";
    sect2.style.opacity = "0%";
    setTimeout(function (){
        sect2.classList.add('d-none');
        sectionThreeIn();
    }, 200)
}

function sectionThreeIn(){
    let sect3 = document.getElementById('pic_section');
    sect3.classList.remove('d-none');
    setTimeout(function (){
        sect3.style.opacity = "100%"
        sect3.style.transform = "translateX(0%)";
    }, 200);

    let imgSrc = localStorage.getItem('img');
    let name = getCookie('name');
    document.getElementById('img-sect').innerHTML = `<img src="${imgSrc}" alt="profile_image" id="profile-img">`;
    document.getElementById('name-sect').innerHTML = `<h3 class="text-light">${name}</h3>`;


}