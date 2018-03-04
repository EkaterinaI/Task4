function changeBack(){
 	var chooseColor = document.getElementById("color");
	document.body.style.backgroundColor=chooseColor.options[chooseColor.selectedIndex].value;
}

var font = document.getElementById('chooseFont');
var elem = document.getElementsByTagName('p');

function chooseFontSizeBtn() {
	if (font.value < 25 & font.value > 7 ) {
		for (var i = 0; i < elem.length; i++) {
			elem[i].style.fontSize = font.value + 'px'
		}
	}
}

function chooseFontStyle() {
	var listValue = document.getElementById("changeFont");
    for (var i = 0; i < elem.length; i++) {
		elem[i].style.fontFamily = listValue.options[listValue.selectedIndex].text;
	}
}


let menu = document.getElementsByClassName('sideBar')[0];
let nav = document.getElementsByClassName('nav-icon1')[0];
function toggleMenu() {
  if (menu.className === "sideBar") {
    menu.className += " openBar";
    nav.className += " open";
  } else {
    menu.className = "sideBar";
    nav.className = "nav-icon1";
  }
}

var deleteBtn = document.getElementById('deleteLast');
let lastP = document.getElementsByClassName('openP')[0];
deleteBtn.addEventListener('click', deleteLast);

function deleteLast() {
	if (lastP.className === "openP") {
    lastP.className += " close";
    deleteBtn.value = "Add";
  } else {
   lastP.className = "openP";
    deleteBtn.value = "Delete";
  }

}


 function acc() {
    var element = document.getElementById("accPage");
    if(!element){	document.getElementById("sideBar").style.display = "none";} else {	document.getElementById("sideBar").style.display = "block";}
 };
 setTimeout(acc, 1000);
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     document.getElementById("user_div").style.display = "block";
//     document.getElementById("login_div").style.display = "none";
//     document.getElementById("register_div").style.display = "none";
//    	document.getElementById("sideBar").style.display = "block";
   	 	
//     var user = firebase.auth().currentUser;

//     if(user != null){
//       var email_id = user.email;
//       document.getElementById("user_match").innerHTML = "Добро пожаловать, " + email_id;
//     }

//   } else {
//     document.getElementById("user_div").style.display = "none";
//     document.getElementById("login_div").style.display = "block";
//     document.getElementById("register_div").style.display = "block";
//     document.getElementById("sideBar").style.display = "none";
//   }
// });

// function register() {
//   var newUserEmail = document.getElementById("register_login").value;
//   var newUserPass = document.getElementById("register_password").value;
//   firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPass).catch(function(error) {

//     var errorCode = error.code;
//     var errorMessage = error.message;

//     window.alert("Error : " + errorMessage);

//   });
// }
// function login(){

//   var userEmail = document.getElementById("auth_login").value;
//   var userPass = document.getElementById("auth_password").value;

//   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     window.alert("Error : " + errorMessage);
//   });

// }

// function logout(){
//   firebase.auth().signOut();
// }
