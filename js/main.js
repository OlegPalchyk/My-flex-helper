;
'use strict';
var el_mas = document.getElementById("flex-block");
var flex_items = document.getElementsByClassName('flex-item');
var lastItem = document.getElementById("lastItem");
var oneEl = document.getElementById('test-item');

document.getElementById("add_item").addEventListener("click", addItem);
document.getElementById("dismiss_item").addEventListener("click", minusItem);

function addItem() {
    if (flex_items.length > 23) {
        document.getElementById('add_item').style.display = 'none';
    } else {
        var new_el = document.createElement('div');
        var count_flex_item = document.getElementsByClassName('flex-item').length - 1;
        new_el.classList.add("flex-item");
        new_el.innerHTML = new_el.innerHTML + 'Item ' + count_flex_item;
        el_mas.insertBefore(new_el, lastItem);
    }

}

function minusItem() {
    if (flex_items.length <= 24) {
        document.getElementById('add_item').style.display = 'inline-block';
        removeEl();

    } else {
        removeEl();
    }

}
function removeEl() {
    var deleted_element = flex_items[flex_items.length - 2];
    if (flex_items.length > 3) {
        el_mas.removeChild(deleted_element);
    }
}

function changeFlexWrap(flex_property, flex_value) {
    el_mas.style[flex_property] = flex_value;
}

function toggleChangeFlexItem(changingClass) {

    var elClassList = oneEl.classList;

    if (elClassList.contains(changingClass)) {
        elClassList.remove(changingClass);
    }
    else {
        elClassList.add(changingClass);
    }

}

