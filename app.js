function showNav(){
    document.getElementById('mobile-menu').addEventListener('click', function(){
        document.getElementById('mob-main-nav').style ='display: block;';
        document.getElementById('mobile-menu').style = 'display: none;';
        document.getElementById('close-menu').style = 'display: block;';
    })
}
showNav();
function closeNav(){
    document.getElementById('close-menu').addEventListener('click', function(){
        document.getElementById('mob-main-nav').style ='display: none;';
        document.getElementById('mobile-menu').style = 'display: block;';
        document.getElementById('close-menu').style = 'display: none;';
    })
}
closeNav();

// function alerting(){
//     document.getElementsByTagName('a')[0].addEventListener('click', function(){
//         alert('this website for testing developer skills');
//     })
// }
// alerting();

const links =  document.getElementsByTagName('a');
// console.log(links)
// function alerting(){
// links.forEach(function (link) {
//     link.addEventListener('click', function(){
//         alert('this website for testing developer skills');
//     });
//     return
// });
// }
// alerting();



for(var i = 0; i<links.length; i++){
    links[i].addEventListener("click", clicked(i));
}

function clicked(i){
    return function(){
        // alert('you clicked ' + (links[i].innerText) + " "+'button');
        alert(`

BUTTONS HERE ARE JUST IMAGINARY THING.

This Landing Page Is For Showing Developer Skills In Web Design

thanks for understanding.

you've clicked "${links[i].innerText}" button
`)
    }
}

function alreadyClicked(){
    alert(`

    BUTTONS HERE ARE JUST IMAGINARY THING.

    This Landing Page Is For Showing Developer Skills In Web Design

    thanks for understanding.`)
}

// const btns = document.getElementById('intro-btn1');

