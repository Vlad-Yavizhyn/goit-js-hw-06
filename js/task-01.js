const NumCat = document.querySelectorAll('li.item');
console.log(`Number of categories: ${NumCat.length}`);

const CatEl = document.querySelectorAll('li.item');
CatEl.forEach(CatEl => {
    console.log(`Category: ${CatEl.firstElementChild.textContent}`)
    console.log(`Elements: ${CatEl.lastElementChild.children.length}`)
});
