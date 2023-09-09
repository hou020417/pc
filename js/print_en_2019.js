function doPrint(){
  var str = '<!DOCTYPE html><html><head>';
  str += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
  str += '<title>鏁欒偛閮ㄥ绫嶅湪绾块獙璇佹姤鍛奯涓浗楂樼瓑鏁欒偛瀛︾敓淇℃伅缃戯紙瀛︿俊缃戯級</title>';
  str += '<link href="/static/home/css/xlReport-2018.css?v=20190318" rel="stylesheet">';
  str +='</head>';
  str +='<body onload="window.print()">'+document.getElementById("resultTable").innerHTML + '</body></html>';
  w = window.open("", "", "");
  w.document.write(str);
  w.document.close();
}