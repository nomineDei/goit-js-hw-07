
const itemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemList.length}`);

const elemList = document.querySelectorAll('ul > li');
elemList.forEach((item) => {
    const title = item.querySelector('h2');
    const subList = item.querySelector('ul');

    if (title && subList) {
        const result = subList.querySelectorAll('li');
        console.log(`Category: ${title.textContent}`);
        console.log(`Elements: ${result.length}`);
    }
    
})