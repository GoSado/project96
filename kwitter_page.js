//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDnkl-oO21Y8Bj1ikoUjXAE7Osy0YrFmvU",
    authDomain: "kwitter-b6947.firebaseapp.com",
    databaseURL: "https://kwitter-b6947-default-rtdb.firebaseio.com",
    projectId: "kwitter-b6947",
    storageBucket: "kwitter-b6947.appspot.com",
    messagingSenderId: "364743523889",
    appId: "1:364743523889:web:1f346c4306468d66969f10"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var room_name=localStorage.getItem("room_name");
  var username=localStorage.getItem("username");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
