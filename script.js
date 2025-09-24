document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona los elementos HTML necesarios
    const mainTestimonial = document.getElementById('main-testimonial');
    const thumbsContainer = document.querySelector('.testimonial-thumbs');
    const thumbs = document.querySelectorAll('.thumb');

    // 2. Define los datos de cada testimonio
    const testimonialsData = {
        jose: {
            image: '/img/josegonzales.jpg',
            quote: '"Isael is a fantastic designer. He understood our needs quickly, delivered clean UI, and was a pleasure to collaborate with."',
            name: 'Jose González,',
            role: 'Product Manager'
        },
        ramon: {
            image: '/img/ramon.jpg',
            quote: '"Working with Isael was an amazing experience. His attention to detail and creative solutions are outstanding."',
            name: 'Ramón Zubia,',
            role: 'CEO at Innovate Corp'
        },
        abraham: {
            image: '/img/abraham1.jpg',
            quote: '"Isael is a true professional. He delivered a project that exceeded our expectations and his communication was excellent."',
            name: 'Abraham Ramírez,',
            role: 'Lead Developer'
        }
    };

    // 3. Agrega un "event listener" al contenedor de miniaturas
    thumbsContainer.addEventListener('click', (e) => {
        // Encuentra la miniatura en la que se hizo clic
        const thumb = e.target.closest('.thumb');

        if (thumb) {
            // Elimina la clase 'active' de todas las miniaturas
            thumbs.forEach(t => t.classList.remove('active'));
            
            // Agrega la clase 'active' a la miniatura seleccionada
            thumb.classList.add('active');

            // Obtiene el ID del testimonio y sus datos
            const id = thumb.getAttribute('data-id');
            const data = testimonialsData[id];

            // 4. Actualiza el contenido de la tarjeta principal
            mainTestimonial.querySelector('.card-image-wrapper img').src = data.image;
            mainTestimonial.querySelector('.card-image-wrapper img').alt = data.name;
            mainTestimonial.querySelector('.card-content p').textContent = data.quote;
            mainTestimonial.querySelector('.author-info h4').textContent = data.name;
            mainTestimonial.querySelector('.author-info span').textContent = data.role;
        }
    });
});