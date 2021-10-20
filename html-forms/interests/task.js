let inherests = document.querySelectorAll(".interests");

for (let item of inherests) {
    const closest = item.closest(".interest");
    if (closest) {
        const checkBox = closest.querySelector(".interest__check");
        checkBox.onclick = () => {
            if (checkBox.checked) {
                invert(closest, true);
            } else {
                invert(closest, false);
            };
        };
    };
};

function invert(element, checked) {
    let items = element.querySelectorAll(".interest__check");
    for (let i of items) {
        i.checked = checked;
    };
};