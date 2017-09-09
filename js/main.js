
const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name = $('#name');
        app.item.comment = $('#comment');

        app.setup ();
        app.showPrevComments ();
    },

    setup: function () {
        $('#btn_add').click (app.addComment) ;
        $('#btn_clear').click (app.clearComments) ;
    },

    saveData: function(){
        localStorage.setItem(app.item.name.val(), app.item.comment.val());
        console.log(localStorage);
    },

    addComment: function (event) {
        $('#ale').append ( `<div class='coment'><p class= 'name'><strong> ${app.item.name.val()}</strong> \
                            <br> ${app.item.comment.val()} </p></div>`);
        app.saveData();
        app.item.name.val('');
        app.item.comment.val('');
    },

    clearComments: function (event) {
        $('#ale').empty();
        localStorage.clear();
        console.log(localStorage);
    },

    showPrevComments: function(){
        $.each(localStorage, function (index, value) {
            $('#ale').append( `<div class='coment'><p class= 'name'><strong> ${index}</strong> \
                                <br> ${value} </p></div>`);
        });
    }
};

$(document).ready (app.init);
