document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todas as seções que queremos animar
    const sections = document.querySelectorAll('section');

    // Configurações do "Observador"
    const options = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% da seção estiver visível
    };

    // A função que será chamada quando uma seção entrar ou sair da tela
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.isIntersecting é 'true' se o elemento está na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                
                // Opcional: Para de observar o elemento depois que ele já apareceu
                // observer.unobserve(entry.target); 
            }
        });
    };

    // Cria o observador
    const observer = new IntersectionObserver(callback, options);

    // Manda o observador "assistir" cada uma das nossas seções
    sections.forEach(section => {
        observer.observe(section);
    });

});