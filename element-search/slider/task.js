let sliderItem = Array.from(document.querySelectorAll('div img'));

sliderItem.forEach(item => item.onClick = function() {
    console.log(item);
});