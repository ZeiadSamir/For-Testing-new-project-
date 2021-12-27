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

function alerting(){
    document.getElementsByTagName('a')[0].addEventListener('click', function(){
        alert('this website for testing developer skills');
    })
}
alerting();
