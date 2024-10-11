$('spisok-input').on('submit', function(){
    event.preventDefault();

    $.ajax({
        url:'',
        headers: { "Content-Type": "application/json" },
        type:'POST',
        data: `${document.querySelector('#name').value}`,
        success: function(res) {
            console.log(res.name)
        }
    })
})