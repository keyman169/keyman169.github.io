/**
 * Created by YanQ on 2015/4/28.
 */
function Tile(position){
    this.x = position.x;
    this.y = position.y;
    this.previousPosition = null;
}

Tile.prototype.savePosition = function () {
    this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
    this.x = position.x;
    this.y = position.y;
};

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var source = document.getElementById(data).parentNode;
    var sourcePosition = getPosition(source.id);
    var targetPosition = getPosition(ev.target.id);
    if ((Math.abs(sourcePosition.x - targetPosition.x) == 2) && sourcePosition.y === targetPosition.y){
        var ids = ev.target.id.split('-');
        ids[1] = (~~sourcePosition.x + ~~targetPosition.x)/2;
        var middle = document.getElementById(ids.join("-"));
        if(middle.hasChildNodes()){
            ev.target.appendChild(document.getElementById(data));
            middle.innerHTML = '';
        }
    } else if ((Math.abs(sourcePosition.y - targetPosition.y) == 2) && sourcePosition.x === targetPosition.x) {
        var ids = ev.target.id.split('-');
        ids[2] = (~~sourcePosition.y + ~~targetPosition.y)/2;
        var middle = document.getElementById(ids.join("-"));
        if(middle.hasChildNodes()){
            ev.target.appendChild(document.getElementById(data));
            middle.innerHTML = '';
        }
    }
}