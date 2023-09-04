const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnlogin-popup')
const iconClose= document.querySelector('.icon-close')
const textToHide = document.getElementById("textToHide");

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click', ()=> {
    textToHide.style.display = "none";
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    textToHide.style.display = "";
});


    // Sticky Navbar
    (window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    

//     const firebaseConfig = {
//         apiKey: "AIzaSyDyOqMSDLg97Enn6-rKrQxTnAx1ptAl6Qo",
//         authDomain: "firedumpsite.firebaseapp.com",
//         databaseURL: "https://firedumpsite-default-rtdb.firebaseio.com",
//         projectId: "firedumpsite",
//         storageBucket: "firedumpsite.appspot.com",
//         messagingSenderId: "663704728863",
//         appId: "1:663704728863:web:52e04164b775984790ec2a",
//         measurementId: "G-6GDL6SHRP8"
//       };

//       // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics  = getAnalytics(app);

// //lets code
// var datab = firebase.database().ref('data');
// function UserRegister(){
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     firebase.auth().createUserWithEmailAndPassword(email.password).then(fuction(){

//     }).catch(function(error){
//         var errorcode = error.code;
//         var errormsg = error.message;

//     });
// }
//     const auth = firebase.auth();
//     function Signin(){
//         var email = document.getElementById('email').value;
//         var password = document.getElementById('password').value;
//         const promise = auth.signInWithEmailAndPassword(email.password)
//         promise.catch(e=> alert(e.msg));
//         window.open("https://www.google.com","_self");

//     }
        
// document.getElementById('form').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     var userinfo = datab.push();
//     userinfo.set({
//         name: getId('username'),
//         email: getId('email'),
//         password: getId('password')
//     });
//     alert("Successfully Sign Up");
//     console.log("sent");
//     document.getElementById('form').reset();
// });

// function getId(id){
//     return document.getElementById(id).value;
// }
