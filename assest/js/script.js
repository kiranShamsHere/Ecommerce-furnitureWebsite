let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = (e) => {
    e.preventDefault();
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}



// REVIEW SECTION ANIMATIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
const dispValues = document.querySelectorAll('.num');
let interval = 8000;

dispValues.forEach((dispValue) => {
    let startValue = 700;
    let endValue = parseInt(dispValue.getAttribute('data-val'))
    let value = parseInt(dispValue.textContent);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 5;
        dispValue.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
})



// FEATURED SECTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

const hideOne = document.querySelector('.hideOne');
const hideTwo = document.querySelector('.hideTwo');
const hideThree = document.querySelector('.hideThree');
const clckOne = document.querySelector('.clckOne');
const clckTwo = document.querySelector('.clckTwo');
const clckThree = document.querySelector('.clckThree');
const btNext = document.getElementById('btNext');
const btPrev = document.getElementById('btPrev');

const fadeOut = (element, callback) => {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    setTimeout(() => {
        element.style.display = 'none';
        callback();
    }, 300); // 300ms to match the CSS transition duration
};

const fadeIn = (element) => {
    element.style.display = 'grid';
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    }, 50); // A small delay to ensure the display property has taken effect
};

const showHideContent = (toShow, toHide1, toHide2) => {
    fadeOut(toHide1, () => {
        fadeOut(toHide2, () => {
            fadeIn(toShow);
        });
    });
};

const updateActiveDot = () => {
    clckOne.classList.remove('actv');
    clckTwo.classList.remove('actv');
    clckThree.classList.remove('actv');
    if (hideOne.style.display === 'grid') {
        clckOne.classList.add('actv');
    } else if (hideTwo.style.display === 'grid') {
        clckTwo.classList.add('actv');
    } else if (hideThree.style.display === 'grid') {
        clckThree.classList.add('actv');
    }
};

clckOne.addEventListener('click', () => {
    showHideContent(hideThree, hideOne, hideTwo);
    clckOne.classList.add('actv');
    clckTwo.classList.remove('actv');
    clckThree.classList.remove('actv');
});

clckTwo.addEventListener('click', () => {
    showHideContent(hideOne, hideTwo, hideThree);
    clckOne.classList.remove('actv');
    clckTwo.classList.add('actv');
    clckThree.classList.remove('actv');
});

clckThree.addEventListener('click', () => {
    showHideContent(hideTwo, hideOne, hideThree);
    clckOne.classList.remove('actv');
    clckTwo.classList.remove('actv');
    clckThree.classList.add('actv');
});

btNext.addEventListener('click', () => {
    if (hideOne.style.display === 'grid') {
        showHideContent(hideTwo, hideOne, hideThree);
        clckOne.classList.remove('actv');
        clckTwo.classList.add('actv');
    } else if (hideTwo.style.display === 'grid') {
        showHideContent(hideThree, hideOne, hideTwo);
        clckTwo.classList.remove('actv');
        clckThree.classList.add('actv');
    } else if (hideThree.style.display === 'grid') {
        showHideContent(hideOne, hideTwo, hideThree);
        clckThree.classList.remove('actv');
        clckOne.classList.add('actv');
    }
});














// PRODUCTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
const bedRoom = document.querySelector('.bedRoom');
const livingRoom = document.querySelector('.livingRoom');
const diningRoom = document.querySelector('.diningRoom');
const outDoor = document.querySelector('.outDoor');
const inDoor = document.querySelector('.inDoor');

const bR = document.querySelector('.bR');
const lR = document.querySelector('.lR');
const dR = document.querySelector('.dR');
const oR = document.querySelector('.oR');
const iR = document.querySelector('.iR');

bR.addEventListener('click', () => {
    bR.classList.add('now');
    lR.classList.remove('now');
    dR.classList.remove('now');
    oR.classList.remove('now');
    iR.classList.remove('now');
    bedRoom.style.display = 'grid';
    livingRoom.style.display = 'none';
    diningRoom.style.display = 'none';
    outDoor.style.display = 'none';
    inDoor.style.display = 'none';
});

lR.addEventListener('click', () => {
    bR.classList.remove('now');
    lR.classList.add('now');
    dR.classList.remove('now');
    oR.classList.remove('now');
    iR.classList.remove('now');
    bedRoom.style.display = 'none';
    livingRoom.style.display = 'grid';
    diningRoom.style.display = 'none';
    outDoor.style.display = 'none';
    inDoor.style.display = 'none';
});

dR.addEventListener('click', () => {
    bR.classList.remove('now');
    lR.classList.remove('now');
    dR.classList.add('now');
    oR.classList.remove('now');
    iR.classList.remove('now');
    bedRoom.style.display = 'none';
    livingRoom.style.display = 'none';
    diningRoom.style.display = 'grid';
    outDoor.style.display = 'none';
    inDoor.style.display = 'none';
});

oR.addEventListener('click', () => {
    bR.classList.remove('now');
    lR.classList.remove('now');
    dR.classList.remove('now');
    oR.classList.add('now');
    iR.classList.remove('now');
    bedRoom.style.display = 'none';
    livingRoom.style.display = 'none';
    diningRoom.style.display = 'none';
    outDoor.style.display = 'grid';
    inDoor.style.display = 'none';
});

iR.addEventListener('click', () => {
    bR.classList.remove('now');
    lR.classList.remove('now');
    dR.classList.remove('now');
    oR.classList.remove('now');
    iR.classList.add('now');
    bedRoom.style.display = 'none';
    livingRoom.style.display = 'none';
    diningRoom.style.display = 'none';
    outDoor.style.display = 'none';
    inDoor.style.display = 'grid';
});

const drop = document.querySelector('.drop');
const colon = document.querySelector('.hes');

colon.addEventListener('click', () => {
    drop.classList.toggle('sow');
});