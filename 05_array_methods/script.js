const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calcWealthBtn = document.getElementById('calculate-weath')


let data = [];


//fetch randome use and add money
const getRandomUser = async() => {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    console.log(newUser)
    addData(newUser);
}

const addData = (obj) => {
    data.push(obj);
    updateDom();
}

const doubleMoney = () => {
    data = data.map(user => {
        return {...user, money: user.money * 2 }
    })
    updateDom();
}

//update DOM
const updateDom = (providedData = data) => {
    //clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> $${formatMoney(item.money)}`;
        main.appendChild(element)
    });
}

//format number as money
const formatMoney = (number) => {
    return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}



//event listeners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)


//initialize 3 random users
getRandomUser();
getRandomUser();
getRandomUser();