const imageModal = $('#img-modal')
    imageModalContent = $('img','.modal-body'),
    fullBtn = $('#full-size-btn'),
    images = $('.figure');

$(images).on('click', function(){
    let imgURL = $('img', this).attr('src');
    imageModalContent.attr('src', imgURL);
    fullBtn.attr('href', imgURL);
    imageModal.modal('show');
})