const INDEX = [
  { id:'sample', title:'Ejemplo: Viaje a Otro Mundo', author:'Autor', category:'Light Novels', cover:'' },
  { id:'otra', title:'Otra Novela', author:'Autora', category:'Web Novels', cover:'' }
];

function render(list){
  const root = document.getElementById('lists');
  root.innerHTML = '';
  list.forEach(n=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<h3>${n.title}</h3><div class="meta">${n.author} · ${n.category}</div>
      <div style="margin-top:8px"><a href="reader.html?novel=${n.id}&chapter=1">Leer</a> · <a href="novels/${n.id}/meta.json" download>Descargar meta</a></div>`;
    root.appendChild(el);
  });
}

document.getElementById('search').addEventListener('input', e=>{
  const q = e.target.value.toLowerCase();
  render(INDEX.filter(i=> (i.title + ' ' + i.author + ' ' + i.category).toLowerCase().includes(q)));
});

render(INDEX);