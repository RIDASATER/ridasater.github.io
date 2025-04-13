// Project Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
            
            // Re-trigger animations for visible items
            setTimeout(() => {
                ScrollReveal().sync();
            }, 300);
        });
    });

    // Project Modal
    const projectModals = document.querySelectorAll('.project-modal');
    const modalTriggers = document.querySelectorAll('.project-card');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    modalTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function() {
            projectModals[index].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.project-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', function(event) {
        projectModals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});