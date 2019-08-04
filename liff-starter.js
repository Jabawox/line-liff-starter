window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

    //sendmsg
    function sendmsg(){
      var FN = document.getElementById("Fname").value;
      var EM = document.getElementById("Uemail").value;

      liff.getProfile().then(function (profile) {
        liff.sendMessages([{
            type: 'text',
            text: "Name : " + FN + '\n' +
                  "E-mail : " + EM + '\n' +
                  "Uid : " + profile.userId
            //text: FN + " , " + EN + " , " + UserX
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
  };
