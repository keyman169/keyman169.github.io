/**
 * Created by YanQ on 2015/4/28.
 */
function Grid() {

}

Grid.prototype.createTile = function (exist, i, j) {
    var tile = document.createElement("div");
    var classes = ["tile", i, j];
    tile.setAttribute("class", classes.join(" "));
    tile.setAttribute("id", classes.join("-"));
    tile.setAttribute("ondrop", "drop(event)");
    tile.setAttribute("ondragover", "allowDrop(event)");
    if (exist > 1) {
        var tileId = "img-" + i + "-" + j;
        tile.innerHTML = "<img src='public/image/tile.png' width='60' height = '60' draggable='true' ondragstart='drag(event)' id=" + tileId + "\/>";
    }
    return tile;
};

Grid.prototype.init = function (map) {
    var self = this;
    var table = document.getElementById("container");
    for (var j = 0; j < map.height; j++) {
        var tr = document.createElement('tr');
        for (var i = 0; i < map.width; i++) {
            var td = document.createElement('td');
            var exist = map.item[j * map.width + i];
            if (exist > 0) {
                td.appendChild(this.createTile(exist, i, j));
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};

function allowDrop(ev) {
    ev.preventDefault();
}

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

function getPosition(tileId) {
    var position = tileId.split('-');
    return {
        x: position[1],
        y: position[2]
    }
}
