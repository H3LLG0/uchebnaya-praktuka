const menu = document.querySelector('.menu-list');
const profile = document.querySelector('#profile');
const exit = document.querySelector('#exit');

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
function pagination(data) {
    let currentPage = 1;
    let rows = 10;

    function displayList(data, rowPerPage, page) {
        const ServiceContainer = document.querySelector('.services');
        ServiceContainer.innerHTML = ``;
        page--;
        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(el => {
            const servEl = document.createElement('div');
            servEl.classList.add('service');
            servEl.innerHTML = `<h3>${el.Service_name}</h3>
                                <div>Длительность процедуры ${el.duration}<br>
                                Цена ${el.price} р.
                                </div>`;
            ServiceContainer.appendChild(servEl);
        });
    }

    function displayPagination(data, rowPerPage) {
        const paginationEl = document.querySelector('.pagination');
        const pagestCount = Math.ceil(data.length / rowPerPage);
        const ulEl = document.createElement("ul");
        ulEl.classList.add('pagination__list');

        for(let i = 0; i<pagestCount; i++) {
            const li = displayPaginationBtn(i + 1);
            ulEl.appendChild(li);
        }
        paginationEl.appendChild(ulEl);
    }   

    function displayPaginationBtn (page) {
        const liEl = document.createElement("li");
        liEl.classList.add('pagination__item');
        liEl.innerText = page;

        if(currentPage == page) {
            liEl.classList.add('pagination__item--active')
        }

        liEl.addEventListener('click',() => {
            currentPage = page;
            displayList(data, rows, currentPage);

            let currentItemLi = document.querySelector('.pagination__item--active');
            currentItemLi.classList.remove('pagination__item--active');

            liEl.classList.add('pagination__item--active');
        })
        return liEl;
    }

    displayList(data, rows, currentPage);
    displayPagination(data, rows);
}

window.onload = () => {
    const userToken = getCookie('token');
    if (!userToken) {
        window.location.href = 'http://127.0.0.1:5500/index.html';
    }
    else {
        fetch('http://localhost:5000/api/GetUserData',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${userToken}`
              }
        })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            profile.innerHTML = res.name;
            if(res.role == 'admin') {
                menu.innerHTML += `<li><a href='admin.html'>Панель администратора</a></li>`;
            }
            fetch('http://localhost:5000/api/GetAllServices',{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${userToken}`
                }
            })
            .then((services) => { return services.json()})
            .then((serv) => {
                 pagination(serv);
            })
        })
    }
}

exit.addEventListener('click', (event) => {
    deleteAllCookies();
    location.reload(true);
})