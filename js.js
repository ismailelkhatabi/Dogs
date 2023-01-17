const menuItems = document.querySelectorAll('.menu-item');

const messagesNotif = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

var root = document.querySelector(':root');
const bgLight = document.querySelector('.bg-light');
const bgDim = document.querySelector('.bg-dim');
const bgDark = document.querySelector('.bg-dark');

//***************SIDEBAR****************//
//remove active class
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//***************MESSAGES****************//
//search chat
const searchMessege = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessege);

messagesNotif.addEventListener('click', ()  => {
    messages.style.boxShadow = '0 0 0.4rem var(--color-primary)';
    messagesNotif.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})

//***************THEME****************//
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = () => {
    themeModal.style.display = 'none';
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//*******************BACKGROUND*****************//
//values
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

//change
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bgLight.addEventListener('click', () => {
    //active
    bgLight.classList.add('active');
    //remove
    bgDim.classList.remove('active');
    bgDark.classList.remove('active');
    
    window.location.reload();
})

bgDim.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '22%';
    whiteColorLightness = '20%';

    //active
    bgDim.classList.add('active');
    //remove
    bgLight.classList.remove('active');
    bgDark.classList.remove('active');
    changeBg();
});

bgDark.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '15%';
    whiteColorLightness = '5%';

    //active
    bgDark.classList.add('active');
    //remove
    bgLight.classList.remove('active');
    bgDim.classList.remove('active');
    changeBg();
});