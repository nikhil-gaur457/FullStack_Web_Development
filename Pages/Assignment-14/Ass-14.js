var click = 0;

function onClick() {
    click += 1;
    document.getElementById("click").innerHTML = click;
};

function inClick() {
    if (!click) {
        click = 0;
    } else {
        click -= 1;
        document.getElementById("click").innerHTML = click;
    }

}