document.getElementById('footer-text').addEventListener('click', function() {
    document.body.style.backgroundColor = 'grey'; 
});
var sequence = '';

document.addEventListener('keypress', function(event) {
    sequence += event.key;
    if (sequence === '1337') {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        setTimeout(function() {
            sequence = '';
        }, 1000);
    }
});

var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}