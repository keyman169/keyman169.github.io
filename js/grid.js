/**
 * Created by YanQ on 2015/4/28.
 */
function Grid(){

}

Grid.prototype.createTile = function(exist){
    var tile = document.createElement("div");
    var classes = ["grid"];
    tile.setAttribute("class", classes.join(" "));
    if(exist>1){
        tile.innerHTML = "<img src='image/tile.png' width='60' height = '60' draggable='true' >";
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
                td.appendChild(this.createTile(exist));
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
