// Seating chart data
const seatingChart = {
  "Nai Saetern": 7,
"David Hernandez": 7,
"Gabriel Hernandez": 7,
"Sunny Vue": 7,
"Nana Vue": 7,
"Cheyenne Vue": 7,
"Delilah Vue": 7,
"Jace Vue": 7,
"Ari Simphoukham": 7,
"Kao Chian Saetern": 9,
"Stephanie Lee": 9,
"Tyson Saetern": 9,
"Ellie Saetern": 9,
"Gina Kim": 9,
"Chio Saechao": 9,
"Kaosin Saelee": 9,
"Kristin Martin": 9,
"Koy Chian Lam": 8,
"Jacky Lam": 8,
"Kalani Lam": 8,
"Kaden Lam": 8,
"Alexandra Saetern": 8,
"Zioc Saetern": 8,
"Luna Saetern": 8,
"Isla Saetern": 8,
"Zoi Saetern": 11,
"Kimberly Le": 11,
"Ian Saetern": 11,
"Finn Saetern": 11,
"Jenny Tsu": 11,
"David Wurnstich": 11,
"Scott Thung": 11,
"Wendy Vang": 11,
"Lou Louang Saetern": 1,
"Cheng Kee Saetern": 1,
"Nai Kee Saetern": 1,
"Meuy Luang Saetern": 1,
"Choy Vang Saetern": 1,
"Saeng Ian Saephanh": 1,
"So Fou Saephanh": 1,
"Koy Chew Saetern": 3,
"San Chong Saetern": 3,
"Lai Fo Saetern": 3,
"Koy Lung Saetern": 3,
"San Kouang Saeteurn": 3,
"Nai Saechao": 3,
"Kao Tin Saetern": 3,
"Nai Pou Saetern": 3,
"Pa Kee Saetern": 6,
"Cheng Kwen Saechao": 6,
"Bella Saetern": 6,
"Chai Saetern": 6,
"Koy Saetern": 6,
"Lai Kee Saetern": 6,
"Farm Tha Saeteurn": 6,
"Kaisen Saeteurn": 6,
"Yian Villarreal": 10,
"Peter Villarreal": 10,
"JR Villarreal": 10,
"Mike Miller": 10,
"Tanya Miller": 10,
"Donovan Metcalf": 10,
"Julie Metcalf": 10,
"Karen Saeteurn": 10,
"Monica Proeung": 12,
"Praphan Saetern": 12,
"Hailey Saeteurn": 12,
"Paxton Saetern": 12,
"Sarom Doeuk": 12,
"Jesse Manibusan": 12,
"Virak Proeung": 12,
"Dany Proeung": 12,
"John Saelee": 12,
"Kao Veoi Saetern": 17,
"Mey Fin Saelee": 17,
"Meuy Hiang Saetern": 17,
"Drew Powell": 17,
"Kao Meuy Saetern": 17,
"Karen Thanavong": 17,
"Chieng Hiang Saetern": 17,
"Cheng Nai Saetern": 17,
"May Nai Saetern": 18,
"Daniel Bui": 18,
"Chanh Thong Saetern": 18,
"Regina Agulto": 18,
"Chan Meng Saetern": 18,
"Brenda Tran": 18,
"Bryan Saetern": 18,
"Armani Saetern": 18,
"Jay Ramos": 14,
"Diana Ramos": 14,
"Gina Chang": 14,
"Helen Nguyen": 14,
"Rich Fang": 14,
"Janette Fang": 14,
"Nick Osorio": 14,
"Lou Kee Saetern": 5,
"Khao Kittavong": 5,
"Susan Kittavong": 5,
"Carson Cheung": 5,
"Chang Kee Thung": 5,
"Nging Wa Saephanh": 5,
"Meuy Voei Saetern": 5,
"Sou Chan Saelee": 5,
"Vadim Dragnev": 4,
"Svetlana Dragnev": 4,
"Nelly Degtyarev": 4,
"Volva Degtyarev": 4,
"Filip Dragnev": 4,
"Lyuba Dragnev": 4,
"Yuriy Bratan": 2,
"Lydiya Bratan": 2,
"Zina Inje": 4,
"Vasili Inje": 4,
"Oleg Popozoglo": 2,
"Masha Popozoglo": 2,
"Vasili Kurdoglo": 2,
"Anna Kurdoglo": 2,
"Diana Padurets": 13,
"Paul Stefoglo": 13,
"Francisco Yee": 13,
"Carolina Yee": 13,
"Serge Kivirjik": 13,
"Daniel Bratan": 13,
"Alan Inje": 13,
"Corina Inje": 13,
"Jordan Cornellier": 15,
"Alexandra Tran": 16,
"Mckayla Glaves": 15,	
"Eric Khnotpanya": 16,
"Dr. Anneke Forrest": 15,	
"Tiffany Lee": 16,
"Antoinette Gigi G'rady": 15,	
"Lai Feuy Parker": 16,
"Dustin Deseo": 15,	
"Koy Chian Saechao": 16,
"Alexis Deseo": 15,	
"Justin Arbis": 16,
"Hau Ngo": 15,	
"Donna Nakashima": 16,
"Randy Rodas": 15,	
"Joe Murray": 16,
"Rudy Alfonso": 19,
"Valerie Alfonso": 19,
"Bryan Mclelland": 19,
"Cheri Mclelland": 19,
"Taylor Gregory": 19,
"Terri Gregory": 19,
"Mary Ann Manges": 19,
"Kurt Manges": 19,
"Victor Dragnev": 2,
"Larisa Dragnev": 2,
};

// Helper: get URL query param
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Autocomplete search function
function setupSearch(searchBarId, suggestionsId) {
  const searchBar = document.getElementById(searchBarId);
  const suggestionsList = document.getElementById(suggestionsId);
  const searchLine = document.getElementById("searchLine");

  if (!searchBar || !suggestionsList) return;

  searchBar.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    suggestionsList.innerHTML = "";
    suggestionsList.style.display = "none";
    if (searchLine) searchLine.style.display = "none";

    if (query.length < 3) return;

    const matches = Object.keys(seatingChart).filter(name =>
      name.toLowerCase().includes(query)
    );

    if (searchLine) searchLine.style.display = "block";

    if (matches.length > 0) {
      matches.forEach(guest => {
        const a = document.createElement("a");
        a.href = `table.html?name=${encodeURIComponent(guest)}`;
        a.textContent = guest;
        suggestionsList.appendChild(a);
      });
    } else {
      const noResult = document.createElement("div");
      noResult.textContent = "No matches found.";
      noResult.className = "no-results";
      suggestionsList.appendChild(noResult);
    }

    suggestionsList.style.display = "block";
  });
}

// Toggle search visibility on table.html
function setupExpandableSearch() {
  const toggleBtn = document.getElementById("toggleSearch");
  const searchBar = document.getElementById("searchBar");

  if (toggleBtn && searchBar) {
    toggleBtn.addEventListener("click", () => {
      if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
        searchBar.focus();
      } else {
        searchBar.style.display = "none";
      }
    });
  }
}

// Render guest table details (on table.html)
function showGuestDetails() {
  const guestName = getQueryParam("name");
  const greetingEl = document.getElementById("tableGreeting");
  const guestDetailsEl = document.getElementById("guestDetails");

  if (!guestName || !greetingEl || !guestDetailsEl) return;

  const tableNumber = seatingChart[guestName];

  if (tableNumber) {
    const guestsAtTable = Object.keys(seatingChart).filter(
      name => seatingChart[name] === tableNumber
    );

    greetingEl.textContent = `Welcome to Table ${tableNumber}, ${guestName}!`;

    const tableImg = `<img src="img/floorplan${tableNumber}.png" alt="Table ${tableNumber}" />`; // IMAGE GOES HERE - either upload images as floorplan#.png or remove the number
    const guestList = guestsAtTable.map(name => `<li>${name}</li>`).join("");

    guestDetailsEl.innerHTML = `
      ${tableImg}
      <h2 class="h1-other">Guests at Your Table</h2>
      <ul>${guestList}</ul>
    `;
  } else {
    greetingEl.textContent = "Guest not found";
    guestDetailsEl.textContent = "We couldn’t locate your table.";
  }
}

// Initialize search on both pages
document.addEventListener("DOMContentLoaded", () => {
  setupSearch("searchBar", "suggestions");
  setupExpandableSearch();
  showGuestDetails();
});
