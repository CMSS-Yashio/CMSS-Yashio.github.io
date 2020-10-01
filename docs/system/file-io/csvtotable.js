function csvtotable(){

let file = document.getElementById('file');
let result = document.getElementById('result');
 
// File APIに対応しているか確認
if(window.File && window.FileReader && window.FileList && window.Blob) {
    function loadLocalCsv(e) {
        // ファイル情報を取得
        let fileData = e.target.files[0];
        console.log(fileData); // 取得した内容の確認用
 
        // CSVファイル以外は処理を止める
        if(!fileData.name.match('.csv$')) {
            alert('CSVファイルを選択してください');
            return;
        }
 
        // FileReaderオブジェクトを使ってファイル読み込み
        let reader = new FileReader();
        // ファイル読み込みに成功したときの処理
        reader.onload = function() {
            let cols = reader.result.split('\n');
            let data = [];
            for (let i = 0; i < cols.length; i++) {
                data[i] = cols[i].split(',');
            }
            let insert = createTable(data);
            result.appendChild(insert);
        }
        // ファイル読み込みを実行
        reader.readAsText(fileData);
    }
    file.addEventListener('change', loadLocalCsv, false);
 
} else {
    file.style.display = 'none';
    result.innerHTML = 'File APIに対応したブラウザでご確認ください';
}
}
 
function createTable(data) {
    let table = document.createElement('table');
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < data[i].length; j++) {
            let td = document.createElement('td');
            td.innerText = data[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}