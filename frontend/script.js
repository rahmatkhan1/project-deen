function loadQuran() {
  fetch("/api/quran")
    .then(res => res.json())
    .then(data => {
      let content = document.getElementById("content");
      content.innerHTML = "<h2>Quran Surahs</h2><ul>";
      data.forEach(surah => {
        content.innerHTML += `<li>${surah.surah} (${surah.ayahs} Ayahs)</li>`;
      });
      content.innerHTML += "</ul>";
    });
}

function loadDuas() {
  fetch("/api/duas")
    .then(res => res.json())
    .then(data => {
      let content = document.getElementById("content");
      content.innerHTML = "<h2>Duas</h2><ul>";
      data.forEach(dua => {
        content.innerHTML += `<li>${dua}</li>`;
      });
      content.innerHTML += "</ul>";
    });
}
