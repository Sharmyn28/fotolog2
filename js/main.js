/*aquí va tu código*/

const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name = $('#nombre');
        app.item.comment = $('#comentario');

        app.setup ();
        app.showPrevComments ();
    },

    setup: function () {
        $('#btn_add').click (app.addComment) ;
        $('#btn_clear').click (app.clearComments) ;
    },

    saveData: function(){
        localStorage.setItem(app.item.name.val(), app.item.name.val() + ' ' +app.item.comment.val());
        console.log(localStorage);
    },

    addComment: function (event) {
        $('#ale').append ( `<div class='coment'><p class= 'name'><strong> ${app.item.name.val()}</strong> \
                            <br> ${app.item.comment.val()} </p></div>`);
        app.saveData();
    },

    clearComments: function (event) {
        $('#ale').empty();
        localStorage.clear();
        console.log(localStorage);
    },

    showPrevComments: function(){
        $.each(localStorage, function (index, value) {
            $('#ale').append ( `<div class='coment'> <p> ${value} </p></div>`);
        });
    }
};

$(document).ready ( app.init );




/* ---------CODIGO INICIAL--------- */
/*
$("#btn_add").click(function () {
    saveData()
});
$("#btn_clear").click(function () {
    deleteData();
});

function saveData() {
    localStorage.setItem($("#nombre").val(), '<strong>' + $("#nombre").val() + ':' + '<br></strong>' + $("#comentario").val());
    toHTML();
}

function toHTML() {
    console.log(localStorage);
    let a = localStorage.getItem($("#nombre").val());
    $('#ale').append ( `<div class='coment'> <p> ${a} </p></div>`);
    cleanInput();
}

function deleteData() {
    localStorage.clear();
    $("#ale").empty();
    console.log(localStorage);
}

function cleanInput() {
    $('#nombre').val('');
    $('#comentario').val('');
}

window.onload = function () {
    if (localStorage.length > 0) {
        for (var i in localStorage) {
            let a = localStorage[i];
            $('#ale').append ( `<div class='coment'> <p> ${a} </p></div>`);
        }
    }
}*/
