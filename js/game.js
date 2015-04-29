
function generateTile(exist){
    var tile = document.createElement("div");
    tile.innerHTML = "abc";
    return tile;
}

function generateGrid(map) {
    var table = document.getElementById("container");
    for (var j=0;j<map.height;j++){
        var tr = document.createElement('tr');
        for(var i=0;i<map.width;i++){
            var td = document.createElement('td');
            var exist = map.item[j*map.width  + i];
            td.appendChild(generateTile());
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

generateGrid(mapDate.simple);