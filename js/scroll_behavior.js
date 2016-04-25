function posY(tab_row) {
    var tab = tab_row.parentNode;
    var scrolled_pixels = tab.parentElement.parentElement.scrollTop;
    var pos = document.getElementById('main').offsetTop + tab_row.offsetTop - scrolled_pixels;
    return pos;
}

function is_upper_mid(tab_row) {
    var tab = tab_row.parentElement;
    var tab_visible_height = tab.parentElement.parentElement.offsetHeight;
    return posY(tab_row) < tab_visible_height / 2 ? true : false;
}

function handleScrollEvent() {
    if (document.body.scrollTop !== 0) {
        return handleMobileScroll();
    }
    var tab = document.getElementById('programm');
    var tab_scrolled_pixels = tab.parentElement.scrollTop;
    var cur = tab.parentElement.scrollTop;
    var visible_height = document.body.offsetHeight;
    var visible_middle = visible_height / 2;
    var l = 0, r = tab.rows.length, films = tab.rows;
    while (l != r - 1) {
        var m = Math.round((l + r) / 2);
        if (films[m].offsetTop > tab_scrolled_pixels + visible_middle) {
            r = m;
        } else {
            l = m;
        }
    }
    if (visible_height > 2000) {
        l = 0;
    }
    var last = films[l];
    changeCurDate(last.value);
}

function handleMobileScroll() {
    var tab = document.getElementById('programm');
    var tab_scrolled_pixels = document.body.scrollTop;
    var l = 0, r = tab.rows.length, films = tab.rows;
    while (l != r - 1) {
        var m = Math.round((l + r) / 2);
        if (films[m].offsetTop - 220 > tab_scrolled_pixels) {
            r = m;
        } else {
            l = m;
        }
    }
    var last = films[l];
    changeCurDate(last.value);
}

function changeCurDate(new_cur_date) {
    var dates = document.getElementById('dates').children;
    for (var i = 0; i < dates.length; i++) {
        dates[i].classList.remove('cur-date')
    }
    dates[new_cur_date - 18].classList.add('cur-date');
    document.getElementById('date-mobile').textContent = new_cur_date + ' апреля';
}

function changeDate() {
    var date = this.value;
    var tab = document.getElementById('programm');
    for (var i = 0; i < tab.rows.length; i++) {
        if (tab.rows[i].value === date.toString()) {
            scrollSlow(tab.parentElement, tab.rows[i].offsetTop);
            return;
        }
    }
}

function scrollSlow(element, final_scroll_top) {
    var cur = element.scrollTop;
    var dist = final_scroll_top - cur;
    var iter_count = 100;
    var iter_dist = dist / iter_count;
    var timer = 0;
    for (var i = 0; i < iter_count; i++) {
        setTimeout(function() {
            element.scrollTop += iter_dist;
        }, timer);
        timer += 10;
    }
}

function changeChannel() {
    load_programm(this.value);
    var chosen_channels = document.querySelectorAll('.chosen-channel');
    if (chosen_channels.length > 0) {
        chosen_channels[0].classList.remove('chosen-channel');
    }
    this.classList.add('chosen-channel');
}