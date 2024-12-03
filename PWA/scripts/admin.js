const service_container = document.querySelector('.services');
const user_container = document.querySelector('.users');
function getCookie(name) {
    let cookie = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

window.onload = () => {
    let userToken = getCookie('token');
    if (!userToken) {
        window.location.href = 'http://127.0.0.1:5500/index.html';
    }
    else {

        fetch('http://localhost:5000/api/getAllUsers',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${userToken}`
              }
        })
        .then((response) => {return  response.json()})
        .then((res) => {
            res.forEach(element => {
                user_container.innerHTML +=`<div id="${element.idUser}">
                                            фамилия: ${element.surname}<br>
                                            имя: ${element.name}<br>
                                            отчество: ${element.pathronumic}<br>
                                            пол: ${element.sex}<br>
                                            дата рождения: ${element.Bday}<br>
                                            дата регистрации: ${element.RegDay}<br>
                                            номер телефона: ${element.phone}<br>
                                            адрес электронной почты: ${element.email}<br>
                                            </div>`
            });
        })
        fetch('http://localhost:5000/api/GetAllServices',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${userToken}`
              }
        })
        .then((response) => {return  response.json()})
        .then((res) => {
            
        })  
    }
}