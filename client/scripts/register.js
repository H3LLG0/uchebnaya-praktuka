const reg_form = document.querySelector('#reg-form');
const err_container = document.querySelector('.errors')
reg_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const candidate = {
        surname: document.querySelector('#surname').value,
        name: document.querySelector('#name').value,
        pathronumic: document.querySelector('#pathronumic').value,
        sex: document.querySelector('#sex').value,
        phone: document.querySelector('#phone').value,
        BDay: new Date(document.querySelector('#BDay').value).toISOString().slice(0, 10),
        email: document.querySelector('#email').value,
        RegDay: new Date().toISOString().slice(0, 10),
        login: document.querySelector('#login').value,
        password: document.querySelector('#password').value,
    }
    fetch('http://localhost:5000/api/reg',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(candidate)
    })
    .then((response) => {
        if (!response.ok) {
            err_container.innerHTML = "Ошибка: регистрации";
        }
        else {
            return response.json();
        }
      })
      .then((res) => {
        window.location.href = 'http://127.0.0.1:5500/index.html'
      })
})