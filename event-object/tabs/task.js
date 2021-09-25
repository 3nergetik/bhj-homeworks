let tabs = Array.from(document.querySelectorAll('.tab'));
let tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((item,index) => {
    item.addEventListener('click', function() {
        tabs.forEach(item => item.classList.remove('tab_active'));
        item.classList.add('tab_active');
        tabsContent.forEach(item => item.classList.remove('tab__content_active'));
        tabsContent[index].classList.add('tab__content_active');
    });
});