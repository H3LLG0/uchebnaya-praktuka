const loginForm = document.querySelector('#login-form');
let err_container = document.querySelector('.err');

function getCookie(name) {
    let cookie = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

window.onload = () => {
    let token = getCookie('token');
    if(!token) {
        loginForm.addEventListener('submit',(event) => {
            event.preventDefault();
            const user = {
                login: document.querySelector('#login').value,
                password: document.querySelector('#password').value
            }
            fetch('http://localhost:5000/api/auth',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })
            .then((response) => {
                if (!response.ok) {
                    err_container.innerHTML = "Ошибка: Неверный логин или пароль";
                }
                else {
                    return response.json();
                }
              })
              .then((res) => {
                document.cookie = `token=${res.token}`;
                window.location.href = 'http://127.0.0.1:5500/main.html';
              })
              .catch((err) => {
                console.log(err)
              }
            )
        })
    }
    else {
        window.location.href = 'http://127.0.0.1:5500/main.html';
    }
}