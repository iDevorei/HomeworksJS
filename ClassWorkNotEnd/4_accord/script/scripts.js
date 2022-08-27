const accord = document.querySelectorAll('.accord_item');

console.log(accord);

// Попробую через for of

for(item of accord) {
    item.addEventListener('click', function() {
        // console.log(this);
        this.classList.toggle('active');
    });
};