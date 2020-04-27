var musicnote = {
    "syllableType": "",//高音、中音、低音、噪音"H":0,"M":1,"L":2,"X":3,小节线：S,终止线：T,附点:D
    "syllableName": "",//唱名1234567
    "syllableDuration": "",//音的长短
    "section": "",//小节线
    "termination": "",//终止线
    "syllableDot": "",//附点
    "syllableChangenote": "",//变化音升记号    ♯降记号   ♭还原记号
    "syllableTie": "" //延音线
}

var noteDuration = {
    "Wholenote": 4,
    "Twonote": 2,
    "Fournote": 1,
    "Eightnote": 0.5,
    "Sixteennote": 0.25,
    "Thirtytwonnote": 0.125
}
//唱名
let syllablenames = function (syllableType, syllableName, syllableDuration) {

    this.syllableType = syllableType;
    this.syllableName = syllableName;
    this.syllableDuration = syllableDuration;


}



