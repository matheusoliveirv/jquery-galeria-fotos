$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancel').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageAddress = $('#newImageAddress').val();
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${newImageAddress}" />`).appendTo(newItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${newImageAddress}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>    
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(500)
        $('#newImageAddress').val('') //Limpar o formulário
    })
})