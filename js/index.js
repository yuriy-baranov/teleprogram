function main() {
    load_programm(0);
    var dates = document.getElementById('dates');
    for (var date = 18; date < 25; date++) {
        var li = document.createElement('li');
        li.textContent = date + ' апреля';
        li.classList.add('date');
        li.value = date;
        li.onclick = changeDate;
        dates.appendChild(li);
    }
    dates.children[0].classList.add('cur-date');
    var channels = document.getElementsByClassName('channel');
    for (var i = 0; i < channels.length; i++) {
        channels[i].value = i;
        channels[i].addEventListener('click', changeChannel);
    }
    document.getElementById('with-scroll-block').onscroll = handleScrollEvent;
    document.body.onscroll = handleScrollEvent;
}

document.body.onload = main;