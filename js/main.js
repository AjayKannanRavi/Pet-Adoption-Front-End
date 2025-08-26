const pets = [
  {
    id: "1",
    name: "Bella",
    breed: "French Bulldog",
    age: "10 years",
    image: "images/dog1.png",
    description: "Friendly and playful, loves to fetch"
  },
  {
    id: "2",
    name: "Milo",
    breed: "Labrador Retriever",
    age: "12 years",
    image: "images/dog2.png",
    description: "Curious and energetic, loves to explore"
  },
  {
    id: "3",
    name: "Luna",
    breed: "Golden Retriever",
    age: "14 years",
    image: "images/dog3.png",
    description: "Loyal and intelligent, enjoys outdoor activities."
  },
  {
    id: "4",
    name: "Whiskers",
    breed: "German Shepherd",
    age: "13 years",
    image: "images/dog4.png",
    description: "Calm and affectionate, loves to purr"
  }
];

function loadPets() {
  const container = document.getElementById("pet-list");

  pets.forEach(pet => {
    const card = document.createElement("div");
    card.classList.add("pet-card");

    card.innerHTML = `
      <a href="pet-details.html?id=${pet.id}">
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <div class="breed-age">${pet.breed} — ${pet.age}</div>
        <p>${pet.description}</p>
      </a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadPets);
