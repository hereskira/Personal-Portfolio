document.querySelector('.button1').addEventListener('click', function () {
    document.querySelector('.aboutme-pic').style.display = 'block';
    document.querySelector('.aboutme-pic2').style.display = 'none';

    document.querySelector('.perso-name').style.display = 'block';
    document.querySelector('.perso-name2').style.display = 'none';

    document.querySelector('.button1').classList.add('active');
    document.querySelector('.button2').classList.remove('active');
});

document.querySelector('.button2').addEventListener('click', function () {
    document.querySelector('.aboutme-pic').style.display = 'none';
    document.querySelector('.aboutme-pic2').style.display = 'block';

    document.querySelector('.perso-name').style.display = 'none';
    document.querySelector('.perso-name2').style.display = 'block';

    document.querySelector('.button2').classList.add('active');
    document.querySelector('.button1').classList.remove('active');
});

function myFunction() {
    var r = confirm("Are you sure you want to proceed?");
    if (r == true) {
        // Code to run if OK is clicked
        alert("You clicked OK!");
    } else {
        // Code to run if Cancel is clicked
        alert("You clicked Cancel!");
    }
}