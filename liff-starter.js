<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LIFF Starter</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="buttongroup">
        <div class="buttonrow">
            <button id="openwindowbutton">Open Window</button>
            <button id="closewindowbutton">Close Window</button>
        </div>
        <div class="buttonrow">
            <button id="getaccesstoken">Get Access Token</button>
            <button id="getprofilebutton">Get Profile</button>
            <button id="sendmessagebutton">Send Message</button>
        </div>
    </div>

    <div id="accesstokendata">
        <h2>Access Token</h2>
        <a href="#" onclick="toggleAccessToken()">Close Access Token</a>
        <table border="1">
            <tr>
                <th>accessToken</th>
                <td id="accesstokenfield"></td>
            </tr>
        </table>
    </div>

    <div id="profileinfo">
        <h2>Profile</h2>
        <a href="#" onclick="toggleProfileData()">Close Profile</a>
        <div id="profilepicturediv">
        </div>
        <table border="1">
            <tr>
                <th>userId</th>
                <td id="useridprofilefield"></td>
            </tr>
            <tr>
                <th>displayName</th>
                <td id="displaynamefield"></td>
            </tr>
            <tr>
                <th>statusMessage</th>
                <td id="statusmessagefield"></td>
            </tr>
        </table>
    </div>


    <div id="liffdata">
        <h2>LIFF Data</h2>
        <table border="1">
            <tr>

                <td id="languagefield"></td>
            </tr>
            <tr>

                <td id="viewtypefield"></td>
            </tr>
            <tr>

                <td id="useridfield"></td>
            </tr>
            <tr>

                <td id="utouidfield"></td>
            </tr>
            <tr>

                <td id="roomidfield"></td>
            </tr>
            <tr>

                <td id="groupidfield"></td>
            </tr>
        </table>
    </div>


  <form action="https://script.google.com/macros/s/AKfycbw-Zz9rNyK3TTxOieNmvj1Rt8BRz7h4Op4gkrJo_pXfNYUid8l7/exec" method="post">

      <div>
        <label for="Fullname">name</label>
        <input type="text" name="Fullname" required>
      </div>
      <div>
        <label for="email">email</label>
        <input type="email" name="email" required>
        <input type="hidden" id="userid99v" name="IDD" value="userid99v">
      </div>

      <div class="button">
      <button type="submit">Send your message</button>
    </div>

  </form>


    <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
    <script src="liff-starter.js"></script>


</body>
