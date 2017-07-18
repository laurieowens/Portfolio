
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
      console.log(name);
      if (email!=""&&message!=""&&name!=""){
      dataRef.ref().push({
          name: name,
          email: email,
          message: message,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      $('#contact-form').trigger("reset");


      return alert("Thank you! I will return your message shortly.")
      //return false;
      //alert("Thank you! I will return your message shortly.")
      }else{
      alert('Please fill out form completely');
      }

  });

  $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});


