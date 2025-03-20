document.addEventListener('DOMContentLoaded', () => {
	// Get all filter buttons
	const filterButtons = document.querySelectorAll('.filter-btn');
  
	// Add event listener to each button
	filterButtons.forEach((button) => {
	  button.addEventListener('click', (e) => {
		const filterValue = button.dataset.filter;
		const products = document.querySelectorAll('.product30');
  
		// Hide all products
		products.forEach((product) => {
		  product.style.display = 'none';
		});
  
		// Show only products that match the filter value
		if (filterValue === 'all') {
		  products.forEach((product) => {
			product.style.display = 'block';
		  });
		} else {
		  products.forEach((product) => {
			if (product.id.toLowerCase().includes(filterValue.toLowerCase())) {
			  product.style.display = 'block';
			}
		  });
		}
	  });
	});
  });

// buttob left right
document.addEventListener('DOMContentLoaded', function () {
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const filters = document.querySelector('.filters');
    const filterBtns = document.querySelectorAll('.filter-btn');
	let currentIndex = 0;
const buttonsPerPage = 6;
const totalPages = Math.ceil(filterBtns.length / buttonsPerPage);

function updateButtons() {
    // Show all buttons
    filterBtns.forEach((btn) => {
        btn.style.display = 'block';
    });
    
    // Hide buttons that are not on the current page
    const start = currentIndex * buttonsPerPage;
    const end = start + buttonsPerPage;
    for (let i = 0; i < filterBtns.length; i++) {
        if (i < start || i >= end) {
            filterBtns[i].style.display = 'none';
        }
    }
    
    // Update button visibility
    if (currentIndex > 1) {
        leftBtn.style.display = 'block';
    } else {
        leftBtn.style.display = 'none';
    }
    
    if (currentIndex < totalPages - 1) {
        rightBtn.style.display = 'block';
    } else {
        rightBtn.style.display = 'none';
    }
}
// Initial state
// Show the initial 6 buttons
for (let i = 0; i < buttonsPerPage; i++) {
    filterBtns[i].style.display = 'block';
}

// Hide the left button initially
leftBtn.style.display = 'none';

// Show the right button initially
if (totalPages > 0) {
    rightBtn.style.display = 'block';
}

// Right arrow button click event
rightBtn.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
});

// Left arrow button click event
leftBtn.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
});
	

    // Show initial six buttons
    for (let i = 0; i < buttonsPerPage; i++) {
        filterBtns[i].style.display = 'block';
    }
    
    leftBtn.style.display = 'none';
    rightBtn.style.display = 'block';
    
	leftBtn.addEventListener('click', function () {
		if (currentIndex > 0) {
			currentIndex--;
			updateButtons();
		} else {
			// If we're already at the first page, do nothing
			// updateButtons();
			return;
		}
	});
    
    rightBtn.addEventListener('click', function () {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateButtons();
        }
    });
});















// btn color
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});
