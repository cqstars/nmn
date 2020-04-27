/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};

    /******/ 	// 网页包The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/            return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            exports: {},
            /******/            id: moduleId,
            /******/            loaded: false
            /******/
        };

        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ function (module, exports, __webpack_require__) {

        __webpack_require__(1);
        __webpack_require__(3);
        (function webpackMissingModule() {
            throw new Error("Cannot find module \"tb.js\"");
        }());


        /***/
    },
    /* 1 */
    /***/ function (module, exports, __webpack_require__) {

        "use strict";
        /// <reference path="defs/require.d.ts" />
        /// <reference path="./webeditor.ts" />
        var webeditor_1 = __webpack_require__(2);
        //import "JsonLexer"
        //import WebEditor = require("webeditor")
        /*var antlr4 = require('antlr4/index');
        var TodoLexer = require('generated-parser/todoLexer');
        var TodoParser = require('generated-parser/todoParser');
        document.getElementById("parse").addEventListener("click", function(){
            var input = document.getElementById("code").value;
            var chars = new antlr4.InputStream(input);
            var lexer = new TodoLexer.todoLexer(chars);
            var tokens  = new antlr4.CommonTokenStream(lexer);
            var parser = new TodoParser.todoParser(tokens);
            parser.buildParseTrees = true;
            var tree = parser.elements();
            console.log("Parsed: "+ tree);
            updateTree(tree, parser.ruleNames);
        });*/
        var updateHtml = function () {
            //document.querySelector("#content").innerHTML = window.editor.generateContentHtml();
            //document.querySelector("#lines").innerHTML = window.editor.generateLinesHtml();
            //var cursorPos = document.querySelector(".cursor-placeholder").position();
            //var delta = document.querySelector(".cursor-placeholder").height() / 4.0;
            //document.querySelector(".blinking-cursor").css({top: cursorPos.top, left: cursorPos.left - delta});
        };
       /* (function () {
             var editor = window.editor = new webeditor_1.Editor();
            updateHtml();
            document.keypress(function (e) {
                var c = String.fromCharCode(e.which);
                if (e.which == 13) {
                    c = "\n";
                }
                editor.type(c);
                updateHtml();
            });

        })();
*/
            // var findTexts = function(p) : Array<any>{
            //     var res =  [];
            //     for(var child=p.firstChild; child!==null; child=child.nextSibling) {
            //         if (child.nodeName == '#text') {
            //             res.push(child);
            //         }
            //         var childRes = findTexts(child);
            //         for (var i = 0; i < childRes.length; i++) {
            //             res.push(childRes[i]);
            //         }
            //     }
            //     return res;
            // };
            // $(document).click(function (e) {
            //    console.log("CLICK " + e.clientX + " " + e.clientY);
            //     var el = $("#content")[0];
            //     var texts = findTexts(el);
            //     console.log("TEXTS " + texts);
            //     texts.forEach(function(e, i, a) {
            //         console.log(e);
            //         var range = document.createRange();
            //         range.setStart(el, 0);
            //         range.setEnd(el, 1);
            //         var rects = range.getClientRects();
            //         for (var i = 0; i < rects.length; ++i) {
            //             var r = rects[i]
            //             console.log(" RECT " + r.left + " " + r.right);
            //         }
            //     });
            // });
            /*function findClickedWord(parentElt, x, y) {
                if (parentElt.nodeName !== '#text') {
                    console.log('didn\'t click on text node');
                    return null;
                }
                var range = document.createRange();
                var words = parentElt.textContent.split(' ');
                var start = 0;
                var end = 0;
                for (var i = 0; i < words.length; i++) {
                    var word = words[i];
                    end = start+word.length;
                    range.setStart(parentElt, start);
                    range.setEnd(parentElt, end);
                    // not getBoundingClientRect as word could wrap
                    var rects = range.getClientRects();
                    var clickedRect = isClickInRects(rects);
                    if (clickedRect) {
                        return [word, start, clickedRect];
                    }
                    start = end + 1;
                }

                function isClickInRects(rects) {
                    for (var i = 0; i < rects.length; ++i) {
                        var r = rects[i]
                        if (r.left<x && r.right>x && r.top<y && r.bottom>y) {
                            return r;
                        }
                    }
                    return false;
                }
                return null;
            }
            function onClick(e) {
                var elt = document.getElementById('info');
                var clicked = findClickedWord(e.target.childNodes[0], e.clientX, e.clientY);
                elt.innerHTML = 'Nothing Clicked';
                if (clicked) {
                    var word = clicked[0];
                    var start = clicked[1];
                    var r = clicked[2];
                    elt.innerHTML = 'Clicked: ('+r.top+','+r.left+') word:'+word+' at offset '+start;
                }
            }*/
            //document.addEventListener('click', onClick);



        /***/
    },
    /* 2 */
    /***/ function (module, exports) {

        /// <reference path="defs/jquery.d.ts" />
        "use strict";
        var Editor = (function () {
            function Editor(initialText, initialIndex) {
                if (initialText === void 0) {
                    initialText = "";
                }
                if (initialIndex === void 0) {
                    initialIndex = 0;
                }
                if (initialIndex > initialText.length) {
                    throw new Error("Invalid initial index");
                }
                this.caretIndex = initialIndex;
                this.text = initialText;
                this.nLines = (this.text.match(/\n/g) || []).length + 1;
            }

            Editor.prototype.textBeforeCaret = function () {
                if (this.caretIndex == 0) {
                    return "";
                }
                else {
                    return this.text.substring(0, this.caretIndex);
                }
            };
            Editor.prototype.textAfterCaret = function () {
                if (this.caretIndex == this.text.length) {
                    return "";
                }
                else {
                    return this.text.substring(this.caretIndex);
                }
            };
            Editor.prototype.currentLine = function () {
                return (this.textBeforeCaret().match(/\n/g) || []).length;
            };
            Editor.prototype.currentIndex = function () {
                return this.caretIndex;
            };
            Editor.prototype.numberOfLines = function () {
                return this.nLines;
            };
            Editor.prototype.currentColumn = function () {
                var i = this.textBeforeCaret().lastIndexOf("\n");
                if (i == -1) {
                    return this.caretIndex;
                }
                return this.caretIndex - i - 1;
            };
            Editor.prototype.numberOfColumnsForLine = function (line) {
                var lines = (this.text.match(/[^\r\n]+/g) || []);
                return lines[line].length;
            };
            Editor.prototype.goTo = function (line, column) {
                var newIndex = 0;
                if (line >= this.numberOfLines()) {
                    line = this.numberOfLines() - 1;
                }
                if (column > this.numberOfColumnsForLine(line)) {
                    column = this.numberOfColumnsForLine(line);
                }
                for (var i = 0; i < line; i++) {
                    newIndex = this.text.indexOf("\n", newIndex) + 1;
                }
                newIndex += column;
                this.caretIndex = newIndex;
            };
            Editor.prototype.toHtml = function (text) {
                return text.replace(/\n/g, "<br/>");
            };
            Editor.prototype.removeLine = function () {
                if (this.nLines == 0) {
                    return;
                }
                this.nLines--;
            };
            Editor.prototype.addLine = function () {
                this.nLines++;
            };
            Editor.prototype.generateContentHtml = function () {
                return this.toHtml(this.textBeforeCaret())
                    + "<span class='cursor-placeholder'>|</span>"
                    + this.toHtml(this.textAfterCaret());
            };
            Editor.prototype.generateLinesHtml = function () {
                var code = "";
                for (var i = 1; i <= this.nLines; i++) {
                    code += "<span>" + i + "</span><br/>";
                }
                return code;
            };
            Editor.prototype.type = function (c) {
                if (c == '\n') {
                    this.addLine();
                }
                this.text = this.textBeforeCaret() + c + this.textAfterCaret();
                this.caretIndex = this.caretIndex + 1;
            };
            Editor.prototype.deletePrevChar = function () {
                if (this.textBeforeCaret().length > 0) {
                    if (this.text[this.caretIndex - 1] == '\n') {
                        this.removeLine();
                    }
                    this.text = this.textBeforeCaret().substring(0, this.textBeforeCaret().length - 1) + this.textAfterCaret();
                    this.caretIndex--;
                    return true;
                }
                else {
                    return false;
                }
            };
            Editor.prototype.deleteNextChar = function () {
                if (this.textAfterCaret().length > 0) {
                    if (this.text[this.caretIndex + 1] == '\n') {
                        this.removeLine();
                    }
                    this.text = this.textBeforeCaret() + this.textAfterCaret().substr(1);
                    return true;
                }
                else {
                    return false;
                }
            };
            Editor.prototype.moveLeft = function () {
                if (this.caretIndex == 0) {
                    return false;
                }
                else {
                    this.caretIndex--;
                    return true;
                }
            };
            Editor.prototype.moveRight = function () {
                if (this.caretIndex == this.text.length) {
                    return false;
                }
                else {
                    this.caretIndex++;
                    return true;
                }
            };
            Editor.prototype.moveUp = function () {
                if (this.currentLine() == 0) {
                    return false;
                }
                else {
                    this.goTo(this.currentLine() - 1, this.currentColumn());
                    return true;
                }
            };
            Editor.prototype.moveDown = function () {
                if (this.currentLine() == (this.numberOfLines() - 1)) {
                    return false;
                }
                else {
                    this.goTo(this.currentLine() + 1, this.currentColumn());
                    return true;
                }
            };
            Editor.prototype.goToStartOfLine = function () {
                this.goTo(this.currentLine(), 0);
            };
            Editor.prototype.goToEndOfLine = function () {
                this.goTo(this.currentLine(), this.numberOfColumnsForLine(this.currentLine()));
            };
            return Editor;
        }());
        exports.Editor = Editor;


        /***/
    },
    /* 3 */
    /***/ function (module, exports, __webpack_require__) {




        /***/
    }
    /******/]);