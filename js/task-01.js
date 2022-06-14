const numCategory = document.querySelector("ul#categories");
const itemList = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemList.length}`);

itemList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
});
