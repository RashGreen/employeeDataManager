//add database connection info:
// Initialize Firebase
var config = {
    apiKey: config.MY_KEY,
    authDomain: "timesheet-app-65e60.firebaseapp.com",
    databaseURL: "https://timesheet-app-65e60.firebaseio.com",
    projectId: "timesheet-app-65e60",
    storageBucket: "timesheet-app-65e60.appspot.com",
    messagingSenderId: "351431078153"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Initial Values

  var empName = "Chuck Norris";
  var empRole = "CBO";
  var empStartDate;
  var empMnthWorked = 0;
  var empMmnthRate = 0;
  var empTotlBilled = 0;



  //on click function

    $("#submit-btn").on("click", function(event){
        event.preventDefault();
        var employee = $("#employee-name").val().trim();
        var role = $("#employee-role").val().trim();
        var startDate = $("#employee-startDate").val().trim();
        var monthlyRate = parseInt($("#employee-MonthlyRate").val().trim());
        
         

        database.ref().push({
            employee: employee,
            role: role,
            monthsWorked: startDate,
            monthlyRate: monthlyRate,
            billedAmount: billedAmount,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
          });
    })
