function posY(film_block) {
    var scrolled_pixels = document.getElementById('with-scroll-block').scrollTop;
    return document.getElementById('main').offsetTop + film_block.offsetTop - scrolled_pixels;
}

function is_upper_mid(film_block) {
    var visible_height = document.body.offsetHeight;
    return posY(film_block) < visible_height / 2 ? true : false;
}

function close_film_descr() {
    document.getElementById('pop-up-wind').classList.add('pop-up-wind-closed');
    document.getElementById('pop-up-wind-back').style.display = 'none';
}

function open_film_descr() {
    document.getElementById('pop-up-wind-back').style.display = 'block';
    var wind = document.getElementById('pop-up-wind');
    wind.classList.remove('pop-up-wind-closed');
    wind.childNodes[1].textContent = this.children[1].textContent;
    var chosen_film = this;
    if (is_upper_mid(chosen_film)) {
        wind.style.top = (posY(chosen_film) + chosen_film.offsetHeight) + 'px';
        wind.style.marginTop = 'unset';
    } else {
        wind.style.marginTop = '-' + wind.offsetHeight + 'px';
        wind.style.top = posY(chosen_film) + 'px';
    }
}

function openOrCloseChannels() {
    var channels_block = document.getElementById('channels-block');
    if (channels_block.dataset.status == 'opened') {
        channels_block.dataset.status = 'closed';
    }
    else {
        channels_block.dataset.status = 'opened';
    }
}