// Selecciona los botones
const playButtons = document.querySelectorAll('.play');
const addButtons = document.querySelectorAll('.add');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const closeBtn = document.querySelector('.popup .close');

// Función para abrir popup
function openPopup(item, action) {
  popupTitle.textContent = `${item.dataset.title} (${action})`;
  popupDesc.textContent = item.dataset.desc || "Descripción no disponible.";
  popup.style.display = 'flex';
}

// Botones Reproducir
playButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const item = e.target.closest('.item');
    openPopup(item, 'Reproducir');
  });
});

// Botones Mi lista
addButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const item = e.target.closest('.item');
    openPopup(item, 'Mi lista');
  });
});

// Cerrar popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Cerrar al hacer click fuera del contenido
popup.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});
