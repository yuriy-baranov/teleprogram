function close_film_descr() {
    var wind = document.getElementById('pop-up-wind');
    wind.classList.add('pop-up-wind-closed');
}

function open(event) {
    event.preventDefault();
    var wind = document.getElementById('pop-up-wind');
    wind.classList.remove('pop-up-wind-closed');
    wind.style.visibility = 'visible';
    wind.style.opacity = '1';
    wind.childNodes[1].textContent = this.childNodes[1].textContent;
    var crow = this;
    if (is_upper_mid(crow)) {
        console.log('u');
        wind.style.top = posY(crow) + crow.offsetHeight + 'px';
        wind.style.marginTop = 'unset';
    } else {
        console.log('d');
        wind.style.marginTop = '-' + wind.offsetHeight + 'px';
        wind.style.top = posY(crow) + 'px';
    }
}

var channel_block_visible = 0;

function open_chose_channel_block() {
    if (channel_block_visible) {
        return close_chose_channel_block();
    }
    var channel_div = document.getElementById('channels-block');
    channel_div.dataset.opened = 'true';
    channel_block_visible = 1;
}

function close_chose_channel_block() {
    var channel_div = document.getElementById('channels-block');
    channel_div.dataset.opened = 'false';
    channel_block_visible = 0;
}
