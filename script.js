const fontImageInput = document.getElementById('fontImageInput');
const preview = document.getElementById('preview');
const loading = document.getElementById('loading');
const suggestions = document.getElementById('suggestions');

const sampleFontSuggestions = [
  { name: "Montserrat", url: "https://fonts.google.com/specimen/Montserrat" },
  { name: "Lato", url: "https://fonts.google.com/specimen/Lato" },
  { name: "Raleway", url: "https://fonts.google.com/specimen/Raleway" },
  { name: "Poppins", url: "https://fonts.google.com/specimen/Poppins" },
  { name: "Playfair Display", url: "https://fonts.google.com/specimen/Playfair+Display" }
];

fontImageInput.addEventListener('change', () => {
  const file = fontImageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.hidden = false;
      loading.hidden = false;
      suggestions.innerHTML = '';

      setTimeout(() => {
        loading.hidden = true;
        showSuggestions();
      }, 1500);
    }
    reader.readAsDataURL(file);
  }
});

function showSuggestions() {
  suggestions.innerHTML = '<h2>Similar Free Fonts</h2>';
  sampleFontSuggestions.forEach(font => {
    const div = document.createElement('div');
    div.className = 'font-item';
    div.innerHTML = `<strong>${font.name}</strong><br><a href="${font.url}" target="_blank">View on Google Fonts</a>`;
    suggestions.appendChild(div);
  });
}
