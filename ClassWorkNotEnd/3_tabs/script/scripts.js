const tabBtn = document.querySelectorAll('.tab_nav_btn');
// console.log(tabBtn);

const tabsItems = document.querySelectorAll('.tab_item');

tabBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        // console.log('clicked');

        let currentBtn = item;
        let tabsId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabsId);

        console.log(tabsId);

        tabBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        });


        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});

document.querySelector('.tab_nav_btn').click();