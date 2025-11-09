function $(selector) {
  return document.querySelector(selector);
}

if (window.Typed) {
  new Typed('#typed-target', {
    strings: [
      "Software Engineer",
      "Frontend developer",
      "Web Designer"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  });
}

var menuToggleButton = $('#menuToggle');
var mainMenu = $('#main-menu');

if (menuToggleButton && mainMenu) {
  menuToggleButton.addEventListener('click', function () {
    var isExpanded = menuToggleButton.getAttribute('aria-expanded') === 'true';

    menuToggleButton.setAttribute('aria-expanded', String(!isExpanded));

    if (isExpanded) {
      mainMenu.style.display = '';
    } else {
      mainMenu.style.display = 'flex';
      mainMenu.style.flexDirection = 'column';
      mainMenu.style.position = 'absolute';
      mainMenu.style.right = '24px';
      mainMenu.style.top = '64px';
      mainMenu.style.background = 'white';
      mainMenu.style.padding = '12px';
      mainMenu.style.borderRadius = '10px';
      mainMenu.style.boxShadow = '0 10px 30px rgba(20,30,60,0.12)';
    }
  });
}
var sections = document.querySelectorAll('main section');
var navLinks = document.querySelectorAll('.navlink');

function onScroll() {
  var scrollTop = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 120; 
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');

    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      var selector = '.navlink[href="#' + sectionId + '"]';
      var activeLink = document.querySelector(selector);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll();

var menuLinks = document.querySelectorAll('#main-menu a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (window.innerWidth <= 768 && mainMenu && menuToggleButton) {
      mainMenu.style.display = 'none';
      menuToggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});

var contactForm = document.querySelector('form[action="https://api.web3forms.com/submit"]');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
  
  });
}

