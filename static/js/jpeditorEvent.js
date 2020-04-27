//编辑器键盘事件-----键盘上下左右键
function jpeditorOnkeyDown(e) {

    var e = e || window.event;  //标准化事件处理
    var s = e.type + " " + e.keyCode;  //获取键盘事件类型和按下的值
    var target = e.target || e.srcElement;
    let row = jpeditorAttr.currentgrid.row;
    let col = jpeditorAttr.currentgrid.column;
    switch (e.keyCode) {  // 获取当前按下键盘键的编码
        case 37 :  // 按下左箭头键，向左移动
            if (col > 0) {
                col -= 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else if (col === 0) {
                row -= 1;
                col = jpeditorAttr.grids[row].length - 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[0][0];
            }

            jpeditorAttr.currentgrid.showCursor();

            break;
        case 39 :  // 按下右箭头键，向右移动一个
            if (col < jpeditorAttr.grids[row].length) {
                col += 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                if (col === jpeditorAttr.grids[row].length) {
                    row += 1;
                    col = 0;
                    jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                }

            }
            jpeditorAttr.currentgrid.showCursor();
            break;
        case 38 :  // 按下上箭头键，向上移动5个像素
            if (row === 0) {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else {
                row -= 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            jpeditorAttr.currentgrid.showCursor();
            break;
        case 40 :  // 按下下箭头键，向下移动5个像素
            if (row === jpeditorAttr.grids.length - 1) {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];

            }
            else {
                row += 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }

            jpeditorAttr.currentgrid.showCursor();
            break;
        case 72:
            console.log(e.keyCode);
            switch (e.keyCode) {
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                    musicnote.syllableType = "H";
                    musicnote.syllableName = keyencode[e.keyCode];
                    jpeditorAttr.currentgrid.musicnotation = musicnote;
                    jpeditorAttr.currentgrid.showMusicNotation();
                    if (col < jpeditorAttr.grids[row].length) {
                        col += 1;
                        jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                        if (col === jpeditorAttr.grids[row].length) {
                            row += 1;
                            col = 0;
                            jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                        }
                    }
                    jpeditorAttr.currentgrid.showCursor();

                    break;
            }
            break;


        case 8://bakspace删除键
            if (col > 0) {
                col -= 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else if (col === 0) {
                row -= 1;
                col = jpeditorAttr.grids[row].length - 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[0][0];
            }
            jpeditorAttr.currentgrid.showCursor();
        /*   case 17:
               console.log(e.keyCode);
               let u = creatDefsUse("#icondizhi", {});
               jpsvg.appendChild(u);*/
        default:

            //console.log(keyencode[e.keyCode]);
            //console.log(row, col);


            // jpsvg.appendChild(txt);
            break;
    }
    return false
}

//编辑器按钮监控事件插入光标
jpeditor.addEventListener("click", function (evt) {
    if (jpeditorAttr.nmnlist.getHead() === null) {
        jpeditorAttr.grids[0][0].showCursor();
        jpeditorAttr.currentgrid = jpeditorAttr.grids[0][0];
    }
    else {
        var evt = event || window.event;//事件兼容性写法
        //console.log(jpeditorAttr.grids)
        //jpeditorcursor.clientY = evt.clientY;
        //jpeditorcursor.clientX = evt.clientX;
        let k = Math.round(accDiv(accSub(evt.pageX, jpeditor.offsetLeft), jpeditorAttr.fontsize));//计算k是column值
        let j = Math.round(accDiv(accSub(evt.pageY, jpeditor.offsetTop), jpeditorAttr.fontsize));//计算j是row值
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (jpeditorAttr.nmnlist.getelement(j * jpeditorAttr.grids[k].length + k)) {
            jpeditorAttr.grids[j][k].showCursor();
            jpeditorAttr.currentgrid = jpeditorAttr.grids[j][k];
            console.log("在点击元素上面:",j,k);
        }
        else {
            console.log("jpeditorAttr.grids[0].length"+jpeditorAttr.grids[0].length);
            console.log("jpeditorAttr.nmnlist.length"+jpeditorAttr.nmnlist.length);
            let k1 =jpeditorAttr.nmnlist.length%jpeditorAttr.grids[0].length;
            let j1=Math.floor(accDiv(jpeditorAttr.nmnlist.length,jpeditorAttr.grids[0].length));
            jpeditorAttr.currentgrid = jpeditorAttr.grids[j1][k1];
            jpeditorAttr.currentgrid.showCursor();
             console.log("在乱点直接放后面:",j1,k1);
        }
        /* console.log(scrollTop);
       console.log("clientx:" + evt.clientX + ",pagex:" + evt.pageX + ",clientY:" + evt.clientY + ",pageY:" + evt.pageY);
        console.log("offsetWidth:" + jpeditor.offsetWidth + ",offsetHeight:" + jpeditor.offsetHeight);
        console.log("ClientWidth:" + jpeditor.clientWidth + ",clientHeight:" + jpeditor.clientHeight);
        console.log("光标位置row:" + (evt.clientX - jpeditor.offsetLeft) + ',光标位置column:' + (evt.clientY - jpeditor.offsetTop));
        console.log("evt.clientX:" + evt.clientX + ",jpeditor.offsetLeft:" + jpeditor.offsetLeft + ",clientWidth:" + document.documentElement.clientWidth);
        console.log("evt.clientY :" + evt.clientY + ",jpeditor.offsetTop:" + jpeditor.offsetTop + ",clientHeight:" + document.documentElement.clientHeight);*/
        // console.log(jpeditorAttr.grids[j][k]);

        /*let alto = CreatDefsUse("#alto6", {
            "x": jpeditorAttr.grids[j][k].x,
            "y": jpeditorAttr.grids[j][k].y
        });

        jpsvg.appendChild(alto);*/


    }
}, false);

//组合键监控键盘事件
let keyCodeArry = [];
jpeditor.onkeydown = function (ev) {
    var oEvent = ev || event;
    keyCode = oEvent.keyCode;
    keyCodeArry = addKeyCodeArry(keyCode, keyCodeArry);

}
jpeditor.onkeyup = function (ev) {
    var oEvent = ev || event;
    keyCode = oEvent.keyCode;
    keyeventhandle();
    keyCodeArry = deletKeyCodeArry(keyCode, keyCodeArry);

}

function addKeyCodeArry(num, arr) {
    var check = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            check = 1;
        }
    }
    if (check == 0) {
        arr.push(num);
    }
    return arr;
}

function deletKeyCodeArry(num, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function keyeventhandle() {
    let row = jpeditorAttr.currentgrid.row;
    let col = jpeditorAttr.currentgrid.column;

    switch (keyCodeArry[0]) {  // 获取当前按下键盘键的编码
        case 37 :  // 按下左箭头键，向左移动
            if (col > 0) {
                col -= 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else if (col === 0) {
                row -= 1;
                col = jpeditorAttr.grids[row].length - 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[0][0];
            }

            jpeditorAttr.currentgrid.showCursor();

            break;
        case 39 :  // 按下右箭头键，向右移动一个
            if (col < jpeditorAttr.grids[row].length) {
                col += 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                if (col === jpeditorAttr.grids[row].length) {
                    row += 1;
                    col = 0;
                    jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                }
            }
            jpeditorAttr.currentgrid.showCursor();
            break;
        case 38 :  // 按下上箭头键，向上移动5个像素
            if (row === 0) {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else {
                row -= 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            jpeditorAttr.currentgrid.showCursor();
            break;
        case 40 :  // 按下下箭头键，向下移动5个像素
            if (row === jpeditorAttr.grids.length - 1) {
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            else {
                row += 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
            }
            jpeditorAttr.currentgrid.showCursor();
            break;
        case 72://按下了H键，后判断数字键
            if (keyCodeArry[1]) {
                musicnote.syllableType = "H";
                musicnote.syllableName = keyencode[keyCodeArry[1]];
                jpeditorAttr.currentgrid.musicnotation = musicnote;
                let s = new syllablenames("H", keyencode[keyCodeArry[1]], null);
                jpeditorAttr.nmnlist.append(s);
                jpeditorAttr.currentgrid.showMusicNotation();
                if (col < jpeditorAttr.grids[row].length) {
                    col += 1;
                    jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                    if (col === jpeditorAttr.grids[row].length) {
                        row += 1;
                        col = 0;
                        jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                    }
                }
                jpeditorAttr.currentgrid.showCursor();
            }
            break;

        case 76://按下了l键,然后数字键
            if (keyCodeArry[1]) {
                musicnote.syllableType = "L";
                musicnote.syllableName = keyencode[keyCodeArry[1]];
                jpeditorAttr.currentgrid.musicnotation = musicnote;
                let s = new syllablenames("L", keyencode[keyCodeArry[1]], null);
                jpeditorAttr.nmnlist.append(s);
                jpeditorAttr.currentgrid.showMusicNotation();
//将光标推后一个显示
                if (col < jpeditorAttr.grids[row].length) {
                    col += 1;
                    jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                    if (col === jpeditorAttr.grids[row].length) {
                        row += 1;
                        col = 0;
                        jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                    }
                }
                jpeditorAttr.currentgrid.showCursor();
            }
            break;

        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105://直接数字键
            musicnote.syllableType = "M";
            musicnote.syllableName = keyencode[keyCodeArry[0]];
            jpeditorAttr.currentgrid.musicnotation = musicnote;
            let s = new syllablenames("M", keyencode[keyCodeArry[0]], null);
            jpeditorAttr.nmnlist.append(s);
            jpeditorAttr.currentgrid.showMusicNotation();//渲染s里面的svg,同时删除已经存在的svg
            if (col < jpeditorAttr.grids[row].length) {
                col += 1;
                jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                if (col === jpeditorAttr.grids[row].length) {
                    row += 1;
                    col = 0;
                    jpeditorAttr.currentgrid = jpeditorAttr.grids[row][col];
                }
            }
            jpeditorAttr.currentgrid.showCursor();
            break;
        case 16://左边Shift键
            if (keyCodeArry[1] === 220) {
                console.log(keyCodeArry);
                console.log(jpeditorAttr.currentgrid.musicnotation);
            }
            break;
        case 13://回车键
            console.log("its enter");
            console.log("目前的选定格row,column：",jpeditorAttr.currentgrid.row,jpeditorAttr.currentgrid.column);
            let newrow=parseInt(jpeditorAttr.currentgrid.row+1,10);
           // let newcolumn=jpeditorAttr.currentgrid.column;
            jpeditorAttr.currentgrid=jpeditorAttr.grids[newrow][0];
            jpeditorAttr.currentgrid.showCursor();
            break;

        default:

            //console.log(keyencode[e.keyCode]);
            //console.log(row, col);


            // jpsvg.appendChild(txt);
            break;
    }


}