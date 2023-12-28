let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

// 냅바를 액티브 했을 때 냅바 있는 리스트(이게 뭐임)를 토글(이건 뭐임)
// 서치폼에 있는 리스트는 액티브 했을때 리무브