
// script.js - génère 100 URLs Unsplash Source pour la recherche 'donkey' et affiche une image aléatoire+galerie.
// Unsplash Source (source.unsplash.com) permet des images sans clé API en utilisant des requêtes comme:
// https://source.unsplash.com/800x600/?donkey&sig=1
(() => {
  const COUNT = 100;
  const WIDTH = 1200;
  const HEIGHT = 800;
  const query = 'donkey';

  // Build array of unique image URLs by adding a sig param
  const images = Array.from({length: COUNT}, (_, i) => {
    const sig = i + 1;
    // Using the "featured" endpoint with size + query + sig to get different images
    return `https://source.unsplash.com/${WIDTH}x${HEIGHT}/?${encodeURIComponent(query)}&sig=${sig}`;
  });

  const randomImg = document.getElementById('randomImg');
  const newBtn = document.getElementById('newBtn');
  const gallery = document.getElementById('gallery');
  const credit = document.getElementById('credit');

  function setRandom() {
    const idx = Math.floor(Math.random() * images.length);
    const url = images[idx];
    // add a short loading state
    randomImg.src = '';
    randomImg.alt = 'Chargement...';
    randomImg.src = url;
    randomImg.alt = `Âne aléatoire #${idx+1}`;
    credit.innerHTML = 'Images fournies par <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash Source</a>. <em>(les licences varient — contactez l'auteur pour un usage commercial)</em>';
  }

  newBtn.addEventListener('click', setRandom);

  // build gallery (lazy-loaded images)
  images.forEach((u, i) => {
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = `Âne #${i+1}`;
    // Use a smaller size for thumbnails
    img.src = u.replace(`/1200x800/`, `/400x300/`);
    // clicking a thumbnail replaces the main image
    img.addEventListener('click', () => {
      randomImg.src = u;
      randomImg.alt = `Âne sélectionné #${i+1}`;
      window.scrollTo({top:0,behavior:'smooth'});
    });
    gallery.appendChild(img);
  });

  // show one on load
  setRandom();
})();
