const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories:", categories.length);

const items = document.querySelectorAll("li.item");
items.forEach((item) => {
    const heading = item.querySelector("h2").textContent;
    const itemLi = item.querySelectorAll("ul > li").length;

    console.log(`Category:  ${heading}`);
    console.log(`Elements:  ${itemLi}`);
});
