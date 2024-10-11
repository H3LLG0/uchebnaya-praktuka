$('#input').on('submit', function(){
    $('.output').empty();
    event.preventDefault();
    $.ajax({
        url: 'http://localhost:5000/api/resultPlus',
        type: 'POST',
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
            "argOne": `${document.querySelector('#argOne').value}`,
            "argTwo": `${document.querySelector('#argTwo').value}`
        }),
        success: function(res) {
            $('.output').append(`${document.querySelector('#argOne').value} + ${document.querySelector('#argTwo').value} = ${res.result}<br>`)
        }
    });
    $.ajax({
        url: 'http://localhost:5000/api/resultMultiply',
        headers: { "Content-Type": "application/json" },
        type: 'POST',
        data: JSON.stringify({
            "argOne": `${document.querySelector('#argOne').value}`,
            "argTwo": `${document.querySelector('#argTwo').value}`
        }),
        success: function(res) {
            $('.output').append(`${document.querySelector('#argOne').value} * ${document.querySelector('#argTwo').value} = ${res.result}`)
        }
    });
});