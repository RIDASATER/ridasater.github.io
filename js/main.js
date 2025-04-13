// Blog specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Code highlighting
    if (document.querySelector('pre code')) {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Here you would typically send the email to your backend
            alert(`Merci pour votre inscription! (${email})`);
            this.reset();
        });
    });

    // Comment form submission
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const comment = this.querySelector('textarea').value;
            
            // Create new comment element
            const commentsList = document.querySelector('.comments-list');
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.innerHTML = `
                <img src="images/profile-placeholder.jpg" alt="Commentateur">
                <div class="comment-content">
                    <h4>${name} <span>${new Date().toLocaleDateString()}</span></h4>
                    <p>${comment}</p>
                    <a href="#" class="reply">Répondre</a>
                </div>
            `;
            
            commentsList.appendChild(newComment);
            this.reset();
            
            // Scroll to new comment
            newComment.scrollIntoView({ behavior: 'smooth' });
        });
    }
});