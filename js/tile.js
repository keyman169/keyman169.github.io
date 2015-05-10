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