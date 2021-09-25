let tabs = Array.from(document.querySelectorAll('.tab'));
let tabsContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        tabs.forEach(item => item.classList.remove('tab_active'));
        tabsContent.forEach(item => item.classList.remove('tab__content_active'));
        tabs[i].classList.add('tab_active');
        tabsContent[i].classList.add('tab__content_active');
    });   
};