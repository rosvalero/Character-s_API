const API = "https://jsonplaceholder.typicode.com/users";

const characters = async (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      charactersInfo(json);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const charactersInfo = (data) => {
  let html = "";

  data.forEach((charac) => {
    html += '<div class="card" style="width: 18rem;">';
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${charac.name}</h5>`;
    html += `<h6 class="card-subtitle mb-2 text-muted">${charac.email}</h6>`;
    html += `<p class="card-text">${charac.address.city}</p>`;
    html += `<a href="#" class="card-link">${charac.username}</a>`;
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("infoCharacters").innerHTML = html;
};

characters(API);
