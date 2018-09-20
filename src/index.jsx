"use strict";
import {Fusen, handleMouseMove} from './fusen.jsx';

const e = React.createElement;
var regroup = {};

function initialize_firestore(){
    firebase.initializeApp({
	    apiKey: 'AIzaSyB0wAxxeLeHr4udunpln5jCYpGpFGn7D00',
		authDomain: 'regroup-d4932.firebase.com',
		projectId: 'regroup-d4932'
		});

    // Initialize Cloud Firestore through Firebase
    regroup.db = firebase.firestore();
}

function create_data(){
    var data = [{"text":"これは何か","when":"2013-09-13T01:07:07.908Z","id":0,"x":24,"y":8}, {"text":"付箋共有","when":"2013-09-13T01:07:50.788Z","id":1,"x":1413,"y":783}, {"text":"できるけど","when":"2013-09-13T01:07:53.234Z","id":2,"x":1413,"y":794}, {"text":"目指さない","when":"2013-09-13T01:07:55.684Z","id":3,"x":1410,"y":794}, {"text":"紙の付箋で出来る","when":"2013-09-13T01:08:20.603Z","id":4,"x":154,"y":438}, {"text":"思考の整理の支援","when":"2013-09-13T01:09:07.401Z","id":5,"x":40,"y":92}, {"text":"思考の断片をまず書き出す","when":"2013-09-13T01:09:33.992Z","id":6,"x":60,"y":175}, {"text":"KJ法","when":"2013-09-13T01:09:43.310Z","id":7,"x":66,"y":517}, {"text":"100枚前後の付箋を一覧","when":"2013-09-13T01:10:48.233Z","id":8,"x":973,"y":712}, {"text":"書いたものを見ながら考える","when":"2013-09-13T01:11:04.069Z","id":9,"x":84,"y":260}, {"text":"紙ではなぜダメ？","when":"2013-09-13T01:11:21.013Z","id":10,"x":449,"y":264}, {"text":"いつ書いたか","when":"2013-09-13T01:12:11.254Z","id":11,"x":491,"y":183}, {"text":"前後に何を考えていたか","when":"2013-09-13T01:12:17.880Z","id":12,"x":754,"y":367}, {"text":"「本Xを読みながら」","when":"2013-09-13T01:12:33.616Z","id":13,"x":737,"y":456}, {"text":"文脈が失われる","when":"2013-09-13T01:12:49.860Z","id":14,"x":313,"y":415}, {"text":"紙に負けている点","when":"2013-09-13T01:13:16.665Z","id":15,"x":704,"y":692}, {"text":"一覧性","when":"2013-09-13T01:13:22.169Z","id":16,"x":837,"y":720}, {"text":"再利用性","when":"2013-09-13T01:14:56.310Z","id":17,"x":568,"y":500}, {"text":"遠隔地共有","when":"2013-09-13T01:15:16.350Z","id":18,"x":497,"y":602}, {"text":"重視しない","when":"2013-09-13T01:15:56.475Z","id":19,"x":1415,"y":791}, {"text":"ギリギリ","when":"2013-09-13T01:16:05.651Z","id":20,"x":1105,"y":720}, {"text":"紙は痛む","when":"2013-09-13T01:16:23.530Z","id":21,"x":1391,"y":786}, {"text":"紙は傷む","when":"2013-09-13T01:16:36.322Z","id":22,"x":353,"y":601}, {"text":"目指すもの","when":"2013-09-13T01:16:56.633Z","id":23,"x":866,"y":116}, {"text":"アイデア書き出しをもっと楽に","when":"2013-09-13T01:17:11.274Z","id":24,"x":1426,"y":799}, {"text":"書いたものが蓄積され再利用される","when":"2013-09-13T01:17:41.919Z","id":25,"x":1130,"y":193}, {"text":"書き出しをもっと楽に","when":"2013-09-13T01:17:53.136Z","id":26,"x":1002,"y":98}, {"text":"再利用をもっと楽に","when":"2013-09-13T01:17:59.765Z","id":27,"x":1003,"y":177}, {"text":"人間の思考の断片を蓄積","when":"2013-09-13T01:19:35.619Z","id":28,"x":1227,"y":242}, {"text":"たまったら有効活用できそう","when":"2013-09-13T01:19:55.509Z","id":29,"x":1246,"y":306}, {"text":"一覧性を高めるためには付箋のサイズは均一であるべき","when":"2013-09-13T01:20:29.132Z","id":30,"x":1094,"y":651}, {"text":"出力されたものを再度脳に取り込むことを楽に(未着手)","when":"2013-09-13T01:21:04.170Z","id":31,"x":864,"y":202}, {"text":"過去に作られた付箋の束から「今必要なもの」を選ぶことを楽に","when":"2013-09-13T01:21:33.232Z","id":32,"x":1042,"y":261}, {"text":"moveするとオリジナルが壊れる","when":"2013-09-13T01:21:54.641Z","id":33,"x":701,"y":546}, {"text":"copy(書き写し)は面倒","when":"2013-09-13T01:22:11.344Z","id":34,"x":829,"y":552}, {"text":"電子的付箋ならcopy簡単","when":"2013-09-13T01:22:22.959Z","id":35,"x":966,"y":533}, {"text":"「付箋を共有して共同編集」は技術的にはできるけど重視してない","when":"2013-09-13T01:23:57.810Z","id":36,"x":172,"y":18}, {"text":"付箋","when":"2018-08-22T11:46:43.400Z","id":37,"x":652,"y":73}];

    regroup.db.collection("maps").doc("test").set({
	    title: "test",
	    fusens: [],
		arrows: [],
		groups: [],
		})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	    })
	.catch(function(error) {
		console.error("Error adding document: ", error);
	    });
}



ReactDOM.render(
  <svg width="1440" height="960" onMouseMove={handleMouseMove}>
    <rect width="1440" height="960" fill="#eee" />
    <Fusen
      x="100"
      y="100"
      text="「付箋を共有して共同編集」は技術的にはできるけど重視してない"
    />
    <Fusen x="100" y="200" text="付箋を共有して共同編集" />
    <Fusen x="100" y="300" text="付箋を共有" />
    <Fusen x="100" y="400" text="付箋" />
  </svg>,
  document.getElementById("canvas")
);

console.log("OK");
