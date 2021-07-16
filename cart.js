const checkbox = document.querySelector('.check-box div');
checkbox.onclick = function() {
    var content =  $('.check-box div').html();
    if(content !== '')
    $('.check-box div').empty();
    else
    $('.check-box div').append('<i class="fas fa-check"></i>')
}