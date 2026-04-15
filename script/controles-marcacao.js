// -----------EXERCICIO 0 -------------- 

const checkbox_el = document.querySelector('#visibilidade-das-marcacoes')

checkbox_el.addEventListener('click', editarMarcacao)


function editarMarcacao() {

    const body_el = document.querySelector('body')
    
    if (checkbox_el.checked) body_el.classList.add('.marcacoes-ocultas')
    else body_el.classList.remove('.marcacoes-ocultas')
    
}

// --------- EXERCÍCIO 2 ----------------


