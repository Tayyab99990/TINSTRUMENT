// // product decider
// document.addEventListener('DOMContentLoaded', function(){
//   const buttons = document.querySelectorAll('.nav-link');
//   const products = document.querySelectorAll('.products');

//   if (products.length > 0) {
//     products[0].style.display = 'block';
//   } else {
//     console.error('No products found!');
//   }

//   buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       products.forEach((product) => {
//         product.style.display = 'none';
//       });
//       if (products[index]) {
//         products[index].style.display = 'block';
//       } else {
//         console.error(`No product found at index ${index}!`);
//       }
//     });
//   });
// });





// product
const buttons = document.querySelectorAll('.nav-link');
const productSections = document.querySelectorAll('.products30');

// Show only p1 by default
productSections.forEach((section, index) => {
  if (index === 0) {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    let correspondingSectionId;

    switch (filter) {
      case 'best-seller':
        correspondingSectionId = 'p1';
        break;
      case 'on-sale':
        correspondingSectionId = 'p2';
        break;
      case 'new-arrival':
        correspondingSectionId = 'p3';
        break;
      case 'popular':
        correspondingSectionId = 'p4';
        break;
      default:
        console.error(`Unknown filter: ${filter}`);
        return;
    }

    productSections.forEach((section) => {
      section.style.display = 'none';
    });

    const correspondingSection = document.getElementById(correspondingSectionId);
    correspondingSection.style.display = 'block';
  });
});
// show less more
function toggleRows() {
  const extraRows = document.querySelectorAll('.extra-row');
  const button = document.getElementById('toggle-btn');
  
  extraRows.forEach(row => {
      if (row.style.display === 'table-row') {
          row.style.display = 'none';
      } else {
          row.style.display = 'table-row';
      }
  });

  if (button.textContent === 'Show More') {
      button.textContent = 'Show Less';
  } else {
      button.textContent = 'Show More';
  }
}

// imagechanger
function changeImage(event, src) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById("main-image30").src = src;
}

document.addEventListener('DOMContentLoaded', () => {
  let navButtons = document.querySelectorAll('.nav-link');

  navButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove 'active' class from all buttons
          navButtons.forEach(btn => btn.classList.remove('active'));

          // Add 'active' class to the clicked button
          this.classList.add('active');

          let filter = this.getAttribute('data-filter');
          handleNavClick(filter);
      });
  });
});

function handleNavClick(filter) {
  console.log(`Button clicked: ${filter}`);
  // Add logic here to filter slider items based on the filter
  // For example, you could show/hide slider items based on a class or data attribute
}






// // 
// // 
// // 
// let nextBtn = document.querySelector('.next')
// let prevBtn = document.querySelector('.prev')

// let slider = document.querySelector('.slider')
// let sliderList = slider.querySelector('.slider .list')
// let thumbnail = document.querySelector('.slider .thumbnail')
// let thumbnailItems = thumbnail.querySelectorAll('.item')

// thumbnail.appendChild(thumbnailItems[0])

// // Function for next button 
// nextBtn.onclick = function() {
//     moveSlider('next')
// }


// // Function for prev button 
// prevBtn.onclick = function() {
//     moveSlider('prev')
// }


// function moveSlider(direction) {
//     let sliderItems = sliderList.querySelectorAll('.item')
//     let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
//     if(direction === 'next'){
//         sliderList.appendChild(sliderItems[0])
//         thumbnail.appendChild(thumbnailItems[0])
//         slider.classList.add('next')
//     } else {
//         sliderList.prepend(sliderItems[sliderItems.length - 1])
//         thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
//         slider.classList.add('prev')
//     }


//     slider.addEventListener('animationend', function() {
//         if(direction === 'next'){
//             slider.classList.remove('next')
//         } else {
//             slider.classList.remove('prev')
//         }
//     }, {once: true}) // Remove the event listener after it's triggered once
// }




// // menu
// 'use strict';

// document.addEventListener('DOMContentLoaded', function () {

//   // Modal variables
//   const modal = document.querySelector('[data-modal]');
//   const modalCloseBtn = document.querySelector('[data-modal-close]');
//   const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

//   // Modal function
//   const modalCloseFunc = function () {
//     modal.classList.add('closed');
//   };

//   // Modal event listeners
//   modalCloseOverlay.addEventListener('click', modalCloseFunc);
//   modalCloseBtn.addEventListener('click', modalCloseFunc);

//   // Notification toast variables
//   const notificationToast = document.querySelector('[data-toast]');
//   const toastCloseBtn = document.querySelector('[data-toast-close]');

//   // Notification toast event listener
//   toastCloseBtn.addEventListener('click', function () {
//     notificationToast.classList.add('closed');
//   });

//   // Mobile menu variables
//   const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
//   const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
//   const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
//   const overlay = document.querySelector('[data-overlay]');

//   // Mobile menu function
//   const closeMobileMenu = function () {
//     mobileMenus.forEach(menu => menu.classList.remove('active'));
//     overlay.classList.remove('active');
//   };

//   // Mobile menu event listeners
//   mobileMenuOpenBtns.forEach((btn, index) => {
//     btn.addEventListener('click', function () {
//       mobileMenus[index].classList.add('active');
//       overlay.classList.add('active');
//     });
//   });

//   mobileMenuCloseBtns.forEach((btn, index) => {
//     btn.addEventListener('click', closeMobileMenu);
//   });

//   overlay.addEventListener('click', closeMobileMenu);

//   // Accordion variables
//   const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
//   const accordions = document.querySelectorAll('[data-accordion]');

//   // Accordion event listeners
//   accordionBtns.forEach((btn) => {
//     btn.addEventListener('click', function () {
//       const accordion = this.nextElementSibling;

//       accordions.forEach((item) => {
//         if (item !== accordion && item.classList.contains('active')) {
//           item.classList.remove('active');
//           item.previousElementSibling.classList.remove('active');
//         }
//       });

//       accordion.classList.toggle('active');
//       this.classList.toggle('active');
//     });
//   });

// });
