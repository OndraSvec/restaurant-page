import "../styles/menu.css";

export default function menuPage() {
  const container = document.createElement("div");
  container.classList.add("menu-container");

  const para = document.createElement("p");
  para.classList.add("menu-header");
  para.textContent = "Indulge in our tasteful menu.";

  const flexDiv = document.createElement("div");
  flexDiv.classList.add("flex-menu");

  const flexUp = document.createElement("div");
  const flexUpHeader = document.createElement("h3");
  flexUpHeader.textContent = "Breakfast";
  const flexUpItem1 = document.createElement("div");
  const fui1Dish = document.createElement("div");
  fui1Dish.textContent = "Oatmeal";
  const fui1Ingredients = document.createElement("div");
  fui1Ingredients.textContent =
    "Rolled Oats | Coconut Milk | Almond Butter | Maple Syrup | Vanilla | Cinnamon | Nuts | Banana | Blueberries";
  fui1Ingredients.classList.add("ingredients");
  [fui1Dish, fui1Ingredients].forEach((element) =>
    flexUpItem1.appendChild(element)
  );
  const flexUpItem2 = document.createElement("div");
  const fui2Dish = document.createElement("div");
  fui2Dish.textContent = "Avocado Toast";
  const fui2Ingredients = document.createElement("div");
  fui2Ingredients.textContent = "Bread | Avocado | Onions | Tomatoes";
  fui2Ingredients.classList.add("ingredients");
  [fui2Dish, fui2Ingredients].forEach((element) =>
    flexUpItem2.appendChild(element)
  );
  const flexUpItem3 = document.createElement("div");
  const fui3Dish = document.createElement("div");
  fui3Dish.textContent = "Breakfast Burrito";
  const fui3Ingredients = document.createElement("div");
  fui3Ingredients.textContent =
    "Wholegrain tortillas | Hash Browns | Black Beans | Red Kidney Beans | Cilantro | Onion | Avocado";
  fui3Ingredients.classList.add("ingredients");
  [fui3Dish, fui3Ingredients].forEach((element) =>
    flexUpItem3.appendChild(element)
  );
  [flexUpItem1, flexUpItem2, flexUpItem3].forEach((element) =>
    element.classList.add("dish")
  );
  [flexUpHeader, flexUpItem1, flexUpItem2, flexUpItem3].forEach((element) =>
    flexUp.appendChild(element)
  );

  const flexDown = document.createElement("div");
  const flexDownHeader = document.createElement("h3");
  flexDownHeader.textContent = "Main Course";
  const flexDownItem1 = document.createElement("div");
  const fdi1Dish = document.createElement("div");
  fdi1Dish.textContent = "Thai Red Curry";
  const fdi1Ingredients = document.createElement("div");
  fdi1Ingredients.textContent =
    "Olive Oil | Onions | Garlic | Ginger | Red Bell Pepper | Yellow Bell Pepper | Carrots | Broccoli | Cauliflower | Red Curry Paste | Coconut Milk | Kale | Tomatoes | Maple Syrup | Tamari | Lime | Cilantro | Brown Rice";
  fdi1Ingredients.classList.add("ingredients");
  [fdi1Dish, fdi1Ingredients].forEach((element) =>
    flexDownItem1.appendChild(element)
  );
  const flexDownItem2 = document.createElement("div");
  const fdi2Dish = document.createElement("div");
  fdi2Dish.textContent = "Hummus Pasta";
  const fdi2Ingredients = document.createElement("div");
  fdi2Ingredients.textContent =
    "Wholewheat Pasta | Hummus | Olive Oil | Onions | Garlic | Red Pepper Flakes | Lemon Juice | Sun Dried Tomatoes | ";
  fdi2Ingredients.classList.add("ingredients");
  [fdi2Dish, fdi2Ingredients].forEach((element) =>
    flexDownItem2.appendChild(element)
  );
  const flexDownItem3 = document.createElement("div");
  const fdi3Dish = document.createElement("div");
  fdi3Dish.textContent = "PB Udon Noodles";
  const fdi3Ingredients = document.createElement("div");
  fdi3Ingredients.textContent =
    "Worcester Sauce | Tamari | Mirin | Sesame Oil | Onions | Garlic | Ginger | Nutritional Yeast | Shittake Mushrooms | Broccoli | Pak Choi | Bell Pepper | Carrot | Udon Noodles | Sesame Seeds";
  fdi3Ingredients.classList.add("ingredients");
  [fdi3Dish, fdi3Ingredients].forEach((element) =>
    flexDownItem3.appendChild(element)
  );
  [flexDownItem1, flexDownItem2, flexDownItem3].forEach((element) =>
    element.classList.add("dish")
  );
  [flexDownHeader, flexDownItem1, flexDownItem2, flexDownItem3].forEach(
    (element) => flexDown.appendChild(element)
  );

  [flexUp, flexDown].forEach((element) => flexDiv.appendChild(element));

  container.appendChild(para);
  container.appendChild(flexDiv);
  return container;
}
