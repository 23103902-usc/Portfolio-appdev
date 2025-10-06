
function updateDateTime() {
  const dateTimeEl = document.getElementById('date-time');
  if (!dateTimeEl) return;

  const now = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  };
  dateTimeEl.textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();

document.addEventListener("DOMContentLoaded", () => {
  const wantedList = document.getElementById("wanted-list");
  const missingList = document.getElementById("missing-list");

  function createCard(user) {
    const div = document.createElement("div");
    div.className = "person-card";
    div.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.location.city}, ${user.location.country}</p>
    `;
    return div;
  }

  fetch("https://randomuser.me/api/?results=6")
    .then(res => res.json())
    .then(data => {
      data.results.slice(0, 3).forEach(user => wantedList.appendChild(createCard(user)));
      data.results.slice(3).forEach(user => missingList.appendChild(createCard(user)));
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recruitment-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

  
    alert('Your application has been successfully submitted!');

    
    form.reset();
  });
});

