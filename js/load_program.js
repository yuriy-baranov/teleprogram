function load_program(channel_number) {
    var films_block = document.getElementById('program');
    var week_program = channel_program[channel_number];
    var films = '';
    for (var day = 0; day < 7; day++) {
        var day_data = week_program[day];
        for (var j = 0; j < day_data.program.length; j++) {
            film = day_data.program[j];
            films += renderFilmRow(film.time, film.name, day_data.date);
        }
    }
    films_block.innerHTML = '';
    films_block.scrollTop = 0;
    films_block.innerHTML = films;
}

function renderFilmRow(time, film_name, date) {
    return `<tr class='film' data-date='${date}'>
        <td class='time'>
            ${time}
        </td>
        <td class='film-name'>
            ${film_name}
        </td>
        <td class='read-more-cell'>
            <div class='open-circle'></div>
        </td>
    </tr>`
}