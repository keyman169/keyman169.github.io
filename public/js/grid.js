/**
 * Created by YanQ on 2015/4/28.
 */
function Grid() {

}

Grid.prototype.createTile = function (exist, i, j) {
    var tile = document.createElement("div");
    if (exist > 1) {
        tile.setAttribute("class", "tile");
    } else {
        tile.setAttribute("class", "none");
    }
    return tile;
};

Grid.prototype.init = function (map) {
    var self = this;
    var table = document.querySelector(".grid-container");
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


function getPosition(tileId) {
    var position = tileId.split('-');
    return {
        x: position[1],
        y: position[2]
    }
}
