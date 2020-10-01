let params = (new URL(document.location)).searchParams;
let fn = params.get('rel');
let dir = "./";
let path = dir + fn;
let domel;
if(fn == null){
domel = "ファイルが指定されていません。";
}else{
domel = "" + path + "" width="600" height="400"></iframe>"
}
let node = document.getElementById("disp");
node.innerHTML = domel;
