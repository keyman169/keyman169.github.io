/**
 * Created by YanQ on 2015/4/28.
 */
function Grid(){

}

Grid.prototype.createTile = function(exist,i,j){
    var tile = document.createElement("div");
    var classes = ["tile"];
    tile.setAttribute("class", classes.join(" "));
    tile.setAttribute("ondrop","drop(event)");
    tile.setAttribute("ondragover","allowDrop(event)");
    if(exist>1){
        var tileId = "img-" + i + "-" + j;
        tile.innerHTML ="<img src='image/tile.png' width='60' height = '60' draggable='true' ondragstart='drag(event)' id=" + tileId+ "\/>";
    }
    return tile;
};

Grid.prototype.init  = function (map) {
    var self = this;
    var table = document.getElementById("container");
    for (var j=0;j<map.height;j++){
        var tr = document.createElement('tr');
        for(var i=0;i<map.width;i++){
            var td = document.createElement('td');
            var exist = map.item[j*map.width  + i];
            if(exist>0){
                td.appendChild(this.createTile(exist,i,j));
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
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
