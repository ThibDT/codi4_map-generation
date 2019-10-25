var width = 20;
var height = 10;
var map = [];

for(let i=0; i<height; i++) {
    map.push([]);
    for(let j=0; j<width; j++) {
        if(i == 0 || i == height-1 || j == 0 || j == width-1) {
            map[i].push({
                texture: "brick0.png",
                decoration: "",
            })
        } else {
            var rand = Math.floor(Math.random() * 100);
            map[i].push({
                texture: "grass0.png",
                decoration: ""
            })
            if(rand > 90) {
                map[i][j].decoration = "bush1.png"
            }
        }
    }
}

function render() {
    var mapEl = $("#map");
    for(let i=0; i<map.length; i++) {
        var row = $('<div class="row">');
        mapEl.append(row);
        for(let j=0; j<map[i].length; j++) {
            var div = $('<div>');
            if(map[i][j].decoration != "") {
                var ground = $("<div>");
                var decoration = $("<div>");
                decoration.css('background-image', "url('assets/" + map[i][j].decoration + "')");
                ground.css('background-image', "url('assets/" + map[i][j].texture + "')");
                div.append(ground);
                div.append(decoration);
            } else {
                div.css('background-image', "url('assets/" + map[i][j].texture + "')");
            }
            row.append(div);
        }
    }
}

render();