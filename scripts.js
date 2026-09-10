
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    function showSlide(index) {
      if (index >= slides.length) {
        currentSlide = 0;
      }
      else if (index < 0) {
        currentSlide = slides.length - 1;
      }
      else {
        currentSlide = index;
      }
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slides[currentSlide].classList.add("active");
    }

    function changeSlide(direction) {
      showSlide(currentSlide + direction);
    }

    function goToSlide(index) {
      showSlide(index);
    }

    setInterval(() => {
      changeSlide(1);
    }, 5000);


    
            function enviarEmail() {
            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Substitua pelo seu endereço do Gmail
            const destinatario = "juliana.ramos@pr.senac.br";
            const email = document.getElementById('email').value;
            const assunto = encodeURIComponent("Contact from the website of " + nome);
            const corpo = encodeURIComponent("Name: " + nome + "\nEmail: " + email  + "\n\nMessage:\n" + mensagem);
            
            // Abre o cliente de e-mail padrão ou o Gmail na Web
            window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
        }