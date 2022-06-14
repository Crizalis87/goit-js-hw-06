const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  console.log(listItem.textContent);
  list.append(listItem);
  list.classList.add("item");
}
