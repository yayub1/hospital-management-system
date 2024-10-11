
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block'
});

closeBtn.addEventListener('click',  () =>{
    sideMenu.style.display = 'none'
});

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode-variables');
    document.querySelector('.dark-mode span:nth-child(1)').classList.toggle('active');
    document.querySelector('span:nth-child(2)').classList.toggle('active');
});

Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
        `;

        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
});

const user = document.getElementById('person_search');
const Analyse = document.getElementById('Analyse');

Analyse.addEventListener('click', ()=>{
    Analyse.classList.add('active');
    user.classList.remove('active');
    document.getElementById('GetUser').classList.add('dontDisplay');
    document.getElementById('analyses').classList.remove('dontDisplay');
    console.log(document.getElementById('GetUser'));
    console.log(document.getElementById('analyses'));

});

user.addEventListener('click', ()=>{
    Analyse.classList.remove('active');
    user.classList.add('active');
    document.getElementById('GetUser').classList.remove('dontDisplay');
    document.getElementById('analyses').classList.add('dontDisplay');
    console.log(document.getElementById('GetUser'));

});

