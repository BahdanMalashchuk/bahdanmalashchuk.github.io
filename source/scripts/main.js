const alertPlaceholder = document.getElementById('Call');

const alert = (message, type) => {
  // First, clear any existing alerts
  alertPlaceholder.innerHTML = '';

  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('CallBtn'); 
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Zavolejte na číslo: +420123456789', 'success')
  })
}

document.addEventListener("DOMContentLoaded", function () {
  let currentUrl = window.location.href;
  currentUrl = currentUrl.split(/[?#]/)[0]; 

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
      const linkPath = link.dataset.path;

      if (currentUrl === linkPath) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});


function toggleHeart(element) {
  var audio = new Audio('source/Files/Like.mp3');

  if (element.classList.contains('heart-gray')) {
      element.classList.remove('heart-gray');
      element.classList.add('pulse'); 
      audio.play();

      setTimeout(() => {
          element.classList.remove('pulse');
      }, 1800); // 0.6s * 3 = 1.8s
  } else {
      element.classList.add('heart-gray');
  }
}

function copyToClipboard(button) {
  navigator.clipboard.writeText(window.location.href)
    .then(() => {
      const alertBox = button.previousElementSibling;
      alertBox.style.display = 'block';
      setTimeout(() => {
        alertBox.style.display = 'none'; 
      }, 3000);
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#carouselExampleCaptions');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 30000
  });
});
