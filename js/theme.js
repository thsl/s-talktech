$(document).ready(function () {
    var rellax = new Rellax('.rellax', {
        center: true
    });


    new WOW().init();

// Faz o back do browser fechar o modal
    $(".modal").on("shown.bs.modal", function () { // any time a modal is shown
        var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url

    });

    $(".modal").on("hidden", function () { // any time a modal is shown
        console.log("desligando");

    });

    $('#modal-detalha').on('shown', function () {
        $("body").css("overflow", "hidden");
    });

    $('#modal-detalha').on('hidden', function () {
        $("body").css("overflow", "visible");
        console.log("ligando");
    });

    $('body').on('hidden.bs.modal', '.modal', function () {
        $(this).removeData('bs.modal');
    });

// If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function () {
        $(".modal").modal('hide');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar-fixedtop").addClass("toggle-navbar");
        } else {
            $(".navbar-fixedtop").removeClass("toggle-navbar");
        }
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});


$(document).ready(function() {
    $('#modal-detalha').on('hidden.bs.modal', function() {
        var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
    });

    $('#html5Video').on('hidden.bs.modal', function() {
        var html5Video = document.getElementById("htmlVideo");
        if (html5Video != null) {
            html5Video.pause();
            html5Video.currentTime = 0;
        }
    });
});