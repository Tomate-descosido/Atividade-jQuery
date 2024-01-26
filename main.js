$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault()

        const nomedatarefa = $('#nome-da-tarefa').val()
        const novoItem = $(`<li>- ${nomedatarefa}</li>`)

        $(novoItem).appendTo('ul')
        $('#nome-da-tarefa').val('')
    })

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through')
    })
})