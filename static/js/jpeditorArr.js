var jpeditorAttr = {
    "width": 900,
    "height": 800,
    "fontsize": 30,
    "songname": "",
    "composing": "",
    "lyrics": "",
    "singer": "", "tonemark": "", "addtonemark": "",
    "singspeed": "", "timesignatur": "", "addtimesignature1": "", "ddtimesignature2": "",
    "cells": [],
    "grids": new Array(),
    "currentgrid": null,
    "isdisplaygrid": false,
    "nmnlist": new nmnList(),
    "currentsection": "",
    //songname歌名，composing作曲者，lyrics作词，singer演唱者，tonemark调号，addtonemark附加调号，timesignatur拍号，addtimesignature1附加拍号,sections小结
    "init": function () {
        //设置id=jp的div大小
        jpeditor.style.width = this.width + 'px';
        jpeditor.style.height = this.height + 'px';
        jpeditor.style.fontsize = this.fontsize + 'px';
        //svg画布设置
        jpsvg.setAttribute("width", this.width);
        jpsvg.setAttribute("height", this.height);
        jpsvg.setAttribute("viewBox", "0 0" + " " + this.width + " " + this.height);
        creatCell();
        //初始化grids,将grids换算成二维数组，同时初始化一个Cell对象，对应装入相应的网格grid
        this.grids.length = 0;
        for (var i = 0; i < this.height / this.fontsize; i++) {
            this.grids[i] = new Array();
            for (var j = 0; j < parseInt(this.width / this.fontsize); j++) {
                this.grids[i][j] = new Cell(i, j, j * this.fontsize, i * this.fontsize);
            }
        }
        creatLsyllableDefs();
        creatLsyHlableDefs();
    },
    "render": function () {
        for (var i = 0; i < this.grids.length; i++) {
            for (var j = 0; j < this.grids[i].length; j++) {
                console.log(this.nmnlist);
            }
        }
    }
};

function Cell(row, column, x, y) {
    this.row = row;
    this.column = column;
    this.x = x;
    this.y = y;
    this.musicnotation = {};
    jpeditorAttr.cells.push(this);
}

Cell.prototype.createCursor = function () {
    let pathCursor = createTag("path", {
        "d": "M" + accAdd(this.x, 2) + "," + accAdd(this.y, 2) + " v" + accSub(jpeditorAttr.fontsize, 4),
        "Tagname": "CurrentCursor",
        "stroke": "black"
    });
    let myanimation = createTag("animate", {
        "attributeName": "opacity",
        "from": 1,
        "to": 0.2,
        "begin": "0.2s",
        "dur": "0.8s",
        "repeatCount": "indefinite"
    });
    pathCursor.appendChild(myanimation);
    jpsvg.appendChild(pathCursor);
}
Cell.prototype.showCursor = function () {
    if (document.querySelectorAll("path[Tagname='CurrentCursor']").length > 0) {
        jpsvg.removeChild(document.querySelectorAll("path[Tagname='CurrentCursor']")[0]);
        this.createCursor();
    }
    else {
        this.createCursor();
    }
}
Cell.prototype.creatMusicnnotation = function () {

    console.log("行:" + this.row, "列:" + this.column);
    let index = accAdd(accMul(this.row, jpeditorAttr.grids[0].length), this.column);

    switch (this.musicnotation.syllableType) {
        case "L":
            let LsyllableL = creatDefsUse("#" + jpeditorAttr.currentgrid.musicnotation.syllableType + jpeditorAttr.currentgrid.musicnotation.syllableName, {
                "x": this.x,
                "y": this.y,
                "transform": "translate(0,50)",
                "tagname": this.row + "," + this.column
            });
            jpsvg.appendChild(LsyllableL);
            break;
        case "M":
            let LsyllableM = createTag("text", {
                "x": jpeditorAttr.currentgrid.x,
                "y": jpeditorAttr.currentgrid.y,
                "dx": 0,
                "dy": jpeditorAttr.fontsize,
                "stroke": "black",
                "font-size": accMul(jpeditorAttr.fontsize, 0.8),
                "font-family": "Verdana",
                "stroke-width": 0.1,
                "text-anchor": "start",
                "tagname": jpeditorAttr.currentgrid.row + "," + jpeditorAttr.currentgrid.column
            });
            LsyllableM.innerHTML = jpeditorAttr.currentgrid.musicnotation.syllableName;
            jpsvg.appendChild(LsyllableM);
            break;
        case "H":
            let LsyllableH = creatDefsUse("#" + jpeditorAttr.currentgrid.musicnotation.syllableType + jpeditorAttr.currentgrid.musicnotation.syllableName, {
                "x": jpeditorAttr.currentgrid.x,
                "y": jpeditorAttr.currentgrid.y,
                "transform": "translate(0,50)",
                "tagname": jpeditorAttr.currentgrid.row + "," + jpeditorAttr.currentgrid.column
            });
            jpsvg.appendChild(LsyllableH);
            break;

    }
}
//渲染单元格
Cell.prototype.rendergrid = function () {
    console.log("行:" + this.row, "列:" + this.column);
    let index = accAdd(accMul(this.row, jpeditorAttr.grids[0].length), this.column);
    switch (jpeditorAttr.nmnlist.getelement(index).syllableType) {
        case "L":
            let LsyllableL = creatDefsUse("#" + jpeditorAttr.nmnlist.getelement(index).syllableType + jpeditorAttr.nmnlist.getelement(index).syllableName, {
                "x": this.x,
                "y": this.y,
                "transform": "translate("+accDiv(jpeditorAttr.fontsize,4)+"," + accAdd(accDiv(jpeditorAttr.fontsize,6),accDiv(jpeditorAttr.fontsize, 2)) + ")",
                "tagname": this.row + "," + this.column
            });
            jpsvg.appendChild(LsyllableL);
            break;
        case "M":
            let LsyllableM = createTag("text", {
                "x": this.x,
                "y": this.y,
                "dx": accSub(jpeditorAttr.fontsize, accDiv(jpeditorAttr.fontsize, 2)),
                "dy": accSub(jpeditorAttr.fontsize, accDiv(jpeditorAttr.fontsize, 2)),
                "stroke": "black",
                "font-size": accMul(jpeditorAttr.fontsize, 0.6),
                "font-family": "Verdana",
                "stroke-width": 0.1,
                "text-anchor": "middle",
                "dominant-baseline": "middle",
                "tagname": this.row + "," + this.column
            });
            LsyllableM.innerHTML = jpeditorAttr.nmnlist.getelement(index).syllableName;
            jpsvg.appendChild(LsyllableM);
            break;
        case "H":
            let LsyllableH = creatDefsUse("#" + jpeditorAttr.nmnlist.getelement(index).syllableType + jpeditorAttr.nmnlist.getelement(index).syllableName, {
                "x": this.x,
                "y": this.y,
                "transform": "translate("+accDiv(jpeditorAttr.fontsize,4)+"," + accAdd(accDiv(jpeditorAttr.fontsize,6),accDiv(jpeditorAttr.fontsize, 2)) + ")",
                "tagname": this.row + "," + this.column
            });
            jpsvg.appendChild(LsyllableH);
            break;

    }
}
Cell.prototype.showMusicNotation = function () {
    let s = "*[tagname=\"" + jpeditorAttr.currentgrid.row + "," + jpeditorAttr.currentgrid.column + "\"]";//定义这个grid里面的tagname
    console.log(jpsvg.querySelectorAll(s));
    let s1 = "use[tagname=\"" + jpeditorAttr.currentgrid.row + "," + jpeditorAttr.currentgrid.column + "\"]";
    let s2 = "text[tagname=\"" + jpeditorAttr.currentgrid.row + "," + jpeditorAttr.currentgrid.column + "\"]";
    let u = jpsvg.querySelector(s1) || jpsvg.querySelector(s2);

    if (u) {
        u.remove();
        index = accAdd(accMul(jpeditorAttr.currentgrid.row, jpeditorAttr.grids[0].length), jpeditorAttr.currentgrid.column);
        jpeditorAttr.nmnlist.removeAt(index)
        this.rendergrid();
    }
    else {
        this.rendergrid();
    }
}
