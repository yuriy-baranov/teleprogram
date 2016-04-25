function load_programm(channel_number) {
    var tab = document.getElementById('programm');
    tab.innerHTML = '';
    var week_programm = channel_programm[channel_number];
    var days = week_programm.length;
    var cur_row = 0;
    for (var day = 0; day < 7; day++) {
        for (var j = 0; j < week_programm[day].programm.length; j++) {
            row = createRow(cur_row);
            film = week_programm[day].programm[j];
            row.cells[0].textContent = film.time;
            row.cells[1].textContent = film.name; 
            row.addEventListener('click', open);
            row.value = week_programm[day].date;
            cur_row++;
        }
    }
    
    function createRow(number) {
        var row = tab.insertRow(number);
        row.classList.add('film');
        for (var cell_number = 0; cell_number < 3; cell_number++) {
            row.insertCell(0);
        }
        row.cells[0].classList.add('time');
        row.cells[1].classList.add('film-name');
        row.cells[2].classList.add('read_more_sign');
        row.cells[2].innerHTML = '<div class="open"></div>';
        return row;
    }
    
}