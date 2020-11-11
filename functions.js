function createListItemManual() {
  const input = document.querySelector('#texto-tarefa');
  if (input.value !== '') {
    const lista = document.querySelector('#lista-tarefas');
    const novaTarefa = document.createElement('li');

    novaTarefa.innerText = input.value;
    novaTarefa.addEventListener('click', () => {
      const selecteds = document.querySelectorAll('.selected');
      if (novaTarefa.classList.contains('selected')) {
        novaTarefa.classList.remove('selected');
      } else if (selecteds.length > 0) {
        selecteds[0].classList.remove('selected');
        novaTarefa.classList.add('selected');
      } else {
        novaTarefa.classList.add('selected');
      }
    });
    novaTarefa.addEventListener('dblclick', () => {
      novaTarefa.classList.toggle('completed');
    });
    lista.appendChild(novaTarefa);

    input.value = '';
  }
};

function createListItemAuto() {
    const lista = document.querySelector('#lista-tarefas');
    const novaTarefa = document.createElement('li');

    novaTarefa.addEventListener('click', () => {
      const selecteds = document.querySelectorAll('.selected');
      if (novaTarefa.classList.contains('selected')) {
        novaTarefa.classList.remove('selected');
      } else if (selecteds.length > 0) {
        selecteds[0].classList.remove('selected');
        novaTarefa.classList.add('selected');
      } else {
        novaTarefa.classList.add('selected');
      }
    });
    novaTarefa.addEventListener('dblclick', () => {
      novaTarefa.classList.toggle('completed');
    });
    lista.appendChild(novaTarefa);
};

function addSavedList() {
  const savedList = JSON.parse(localStorage.listaSalva);

  savedList.text.forEach((item, index) => {
    createListItemAuto();
    document.querySelectorAll('li')[index].innerText = item;
    if (savedList.completed[index] == true) {
      document.querySelectorAll('li')[index].classList.add('completed');
    }
  });
};