
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD--mB6xrPTqxVjrSeZwXbm751kmVUmOmQ",
    authDomain: "contactmeinfo-30b0d.firebaseapp.com",
    databaseURL: "https://contactmeinfo-30b0d.firebaseio.com",
    projectId: "contactmeinfo-30b0d",
    storageBucket: "contactmeinfo-30b0d.appspot.com",
    messagingSenderId: "978601821793"
  };

  firebase.initializeApp(config);
  //create variable to reference database
  var dataRef = firebase.database();
  //set initial values for table
  var name = "";
  var email = "";
  var message = "";

  //capture button click
  $("#submit-data").on("click", function(eventObject) {
      eventObject.preventDefault();
      name = $("#name").val().trim();
      email = $("#email").val().trim();
      message= $("#message").val();
      If ($("#name").not(""))&& ($("#email").not("")) && ($("#message").not("")) {
      dataRef.ref().push({
          name: name,
          email: email,
          message: message,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      $('#contact-form').trigger("reset");
      return false;
}else{
  console.log('no data!');
}

  });

   if ($("#frm01").is(':hidden')) {
      $("#frm01").show("slide", { direction: "down" }, 1000);
    } else {
      $("#frm01").hide(1000);

