  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyD4epD9MrhBlD5dqh3wgH5OTRj1cTdQDKM",
      authDomain: "trainschedule-fad72.firebaseapp.com",
      databaseURL: "https://trainschedule-fad72.firebaseio.com",
      storageBucket: "trainschedule-fad72.appspot.com",
      messagingSenderId: "753612370157"
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
      dataRef.ref().push({
          name: name,
          email: email,
          message: message,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      $('#myForm').trigger("reset");
      return false;
  });
  // append data for html
  // dataRef.ref().on("child_added", function(childSnapshot) {
  //     var trainName = childSnapshot.val().trainName;
  //     var trainDest = childSnapshot.val().trainDest;
  //     var firstTrainX = childSnapshot.val().firstTrainX;
  //     var trainFreq = childSnapshot.val().trainFreq;
  //     var firstTrainXconvert = moment(firstTrainX, "hh:mm").subtract(1, "years");
  //     var firstToNowTX = moment().diff(moment(firstTrainXconvert), "minutes");
  //     var tRemainder = firstToNowTX % trainFreq;
  //     var minsAway = trainFreq - tRemainder;
  //     var trainArrival = moment().add(minsAway, "minutes");
  //     $("#trainInfo").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + moment(trainArrival).format("hh:mm") + "</td><td>" + minsAway + "</td></tr>");
  // });
