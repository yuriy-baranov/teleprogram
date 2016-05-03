function main() {
    var dates_block = document.getElementById('dates');
    var dates = '';
    for (var date = 18; date < 25; date++) {
        dates += `<li class='date' value=${date}> ${date} апреля </li>`
    }
    dates_block.innerHTML = dates;
    dates_block.children[0].classList.add('cur-date');
    load_program(0);
    var channels = document.getElementsByClassName('channel');
    for (var i = 0; i < channels.length; i++) {
        channels[i].value = i;
        channels[i].addEventListener('click', changeChannel);
    }
    window.addEventListener('scroll', handleScrollEvent);
    document.getElementById('with-scroll-block').addEventListener('scroll', handleScrollEvent);
    document.getElementById('pop-up-wind-back').addEventListener('click', close_film_descr);
}

document.body.onload = main;
document.addEventListener('click', function(event) {
    var elem = event.target;
    if (elem.id == 'close-btn') {
        return close_film_descr();
    }
    if (elem.parentElement.classList.contains('film')) {
        return open_film_descr.bind(elem.parentElement)();
    }
    if (elem.classList.contains('date')) {
        return changeDate.bind(elem)();
    }
});