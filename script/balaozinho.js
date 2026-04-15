const balaozinho_el = document.querySelector('#balaozinho')
const marcacoes_el = document.querySelectorAll('.marcacao');



marcacoes_el.forEach(marcacao => {
    marcacao.addEventListener('mouseover', (e) => {

        let triggeredEl = e.currentTarget;
        let title = triggeredEl.dataset.titulo;
        let body = triggeredEl.dataset.conteudo;
        let text_color = triggeredEl.dataset.cor


        balaozinho_el.innerHTML = `<h2>${title}</h2><p>${body}</p>`;

        // Estilos
        balaozinho_el.style.color = `${text_color}`
    

    });

    marcacao.addEventListener('mouseout', () => {

        balaozinho_el.innerHTML = '';

    });

    marcacao.addEventListener('mousemove', (e) => {

        balaozinho_el.style.left = `${e.pageX}px`;
        balaozinho_el.style.top = `${e.pageY}px`;
    });
});





