
function draw_line(x1, y1, x2, y2, arrow = true, id = null, onfalse = false){

    let midX = (x1 + x2) / 2;
    let midY = (y1 + y2) / 2;

    let line = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    line.setAttribute('class', 'line');
    line.setAttribute('d', "M " + x1 + " " + y1 + " L " + midX + " " + midY + " L " + x2 + " " + y2);
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '1px');

    if (arrow === true) {
        line.setAttribute('marker-mid', 'url(#arrow)');
    }
    if (id !== null) {
        line.setAttribute('id', id);
    }
    if (onfalse === true) {
        line.setAttribute('stroke-dasharray', "5,5");
    }
    
    $('svg').append(line);

    return line;
}