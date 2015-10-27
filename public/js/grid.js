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
        var tr = table.insertRow(j);
        for (var i = 0; i < map.width; i++) {
            var td = tr.insertCell(i);
            var exist = map.item[j * map.width + i];
            if (exist > 0) {
                td.appendChild(this.createTile(exist, i, j));
            }
        }
    }
};

function allowDrop(ev) {
    ev.preventDefault();
}



function getPosition(tileId) {
    var position = tileId.split('-');
    return {
        x: position[1],
        y: position[2]
    }
}
