"use strict";
import {Fusen} from './fusen.js';
import {sample_data} from './sample_data.js';

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


function Fusens_old(){
  return (<>
  	<Fusen
      x="100"
      y="100"
      text="「付箋を共有して共同編集」は技術的にはできるけど重視してない"
    />
    <Fusen x="100" y="200" text="付箋を共有して共同編集" />
    <Fusen x="100" y="300" text="付箋を共有" />
    <Fusen x="100" y="400" text="付箋" />
</>
);
}

function Fusens(){
  return sample_data.map((obj) => <Fusen x={obj.x} y={obj.y} text={obj.text} />);
}

ReactDOM.render(
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="#eee" />
    <Fusens />    
  </svg>,
  document.getElementById("canvas")
);


console.log("OK");
