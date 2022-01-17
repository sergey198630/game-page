import data from './data.js';

const wrapper = document.querySelector('.wrapper')

data.map((item, i, arr) => {
    return wrapper.innerHTML += `
        <div class="card">
            <img src="pics/${item.name}.jpg">
            <div class="info">
                <h1>${arr[arr.length - 1].getAccuratedDate(item.date())}</h1>
                <h2>${item.header}</h2>
                <h3>${item.name}</h3>
            </div>
            <button>Перейти</button>
        </div>
    `
})