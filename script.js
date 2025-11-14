//copy menu for mobile 
function copyMenu() {
    //copy inside .dpt-cat to .dpartments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav    
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top to .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

 // Select all animated links
 document.querySelectorAll('.animated-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('data-target'); // Get target section ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Add fade-out animation class to body
            document.body.classList.add('fade-out');

            // Smooth scroll to target element after animation
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Remove fade-out animation class
                document.body.classList.remove('fade-out');
            }, 500); // Match the CSS transition duration
        }
    });
});
//show mobile menu
const menuButton = document.querySelector('.trigger');
      closeButton = document.querySelector('.t-close');
      addclass = document.querySelector('.site');
menuButton.addEventListener('click' , function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click' , function() {
    addclass.classList.remove('showmenu')
})

//show sub menu on mobile 
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));
function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
};

//slider 
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
});
  


//Show Search 
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})


const  dptButton =  document.querySelector('.dpt-cat  .dpt-trigger'),
       dptClass = document.querySelector('.site');    
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})        


var productThumb = new Swiper ('.small-image' ,{
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            slidesPerView: 3,
        }
    }
});
var productBig = new Swiper ('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }

})

// Stock product bar width percentage 
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
    avaialble = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}

//show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');
divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains( 'show') ) {
            divPopup.classList.add('show' );
        }
    }, 250 )
})
//close by click outside
document.addEventListener('click', (e) => {
    const isClosest = e.target. closest (divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
})