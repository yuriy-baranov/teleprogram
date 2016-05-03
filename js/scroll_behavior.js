function handleScrollEvent() {
    if (document.body.offsetHeight > 2500) {
        return handleMobileScroll();
    }
    var scrolled_pixels = document.getElementById('with-scroll-block').scrollTop;
    var last = findFirstUnder(scrolled_pixels + document.body.offsetHeight / 2);
    changeCurDate(last.dataset.date);
}

function handleMobileScroll() {
    var scrolled_pixels = document.body.scrollTop;
    var last = findFirstUnder(scrolled_pixels + 220);
    changeCurDate(last.dataset.date);
}

function changeCurDate(new_date) {
    var dates = document.getElementById('dates').children;
    for (var i = 0; i < dates.length; i++) {
        dates[i].classList.remove('cur-date')
    }
    dates[new_date - 18].classList.add('cur-date');
    document.getElementById('date-mobile').textContent = new_date + ' апреля';
}

function changeDate() {
    var date = this.value;
    var tab = document.getElementById('program');
    for (var i = 0; i < tab.rows.length; i++) {
        if (tab.rows[i].dataset.date === date.toString()) {
            return scrollSlow(tab.parentElement, tab.rows[i].offsetTop);
        }
    }
}

function scrollSlow(element, final_scroll_top) {
    var cur = element.scrollTop,
        dist = final_scroll_top - cur,
        iter_count = 100,
        iter_dist = dist / iter_count,
        timer = 0;
    for (var i = 0; i < iter_count; i++) {
        setTimeout(function() { element.scrollTop += iter_dist; }, timer);
        timer += 10;
    }
}

function changeChannel() {
    load_program(this.value);
    var chosen_channels = document.querySelectorAll('.chosen-channel');
    if (chosen_channels.length > 0) {
        chosen_channels[0].classList.remove('chosen-channel');
    }
    this.classList.add('chosen-channel');
    setTimeout(openOrCloseChannels, 150);
    document.body.scrollTop = 0;
}

function findFirstUnder(height) {
    var tab = document.getElementById('program');
    var l = 0, r = tab.rows.length;
    var films = tab.rows;
    while (l != r - 1) {
        var m = Math.round((l + r) / 2);
        if (films[m].offsetTop > height) {
            r = m;
        } else {
            l = m;
        }
    }
    return films[l];
}