const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
    const titleCategory = item.querySelector('h2').innerText;
    console.log(`Category: ${titleCategory}`);
    const elemCategory = item.querySelectorAll('li').length;
    console.log(`Elements: ${elemCategory}`);
});