<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.2.0/chart.min.js"></script>
// ファイルを読み込んで散布図を表示する部分のコードを追加します
// 散布図を作成
const ctx = document.getElementById('scatterChart');

const myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [ // x, yのデータを入力
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 4 },
                { x: 4, y: 5 }
            ],
        }],
    },
    options: {
        // グラフの設定（必要に応じてカスタマイズ）
    },
});
