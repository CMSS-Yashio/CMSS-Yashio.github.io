function frame(){
let param=getParam('src');
document.open();
document.body.write('<iframe src="'+param+'"></iframe> ");
document.close();
}