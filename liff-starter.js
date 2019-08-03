<head>
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
            <button id="Scriptbutton">Script</button>
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


<form action="https://script.google.com/macros/s/AKfycbw-Zz9rNyK3TTxOieNmvj1Rt8BRz7h4Op4gkrJo_pXfNYUid8l7/exec" method="post">
  
    <div id="liffdata">
        <h2>LIFF Data</h2>
        <table border="1">
            <tr>
                <th>language</th>
                <td id="languagefield"></td>
            </tr>
            <tr>
                <th>context.viewType</th>
                <td id="viewtypefield"></td>
            </tr>
            <tr>
                <th>context.userId</th>
                <td id="useridfield"></td>
            </tr>
            <tr>
                <th>context.utouId</th>
                <td id="utouidfield"></td>
            </tr>
            <tr>
                <th>context.roomId</th>
                <td id="roomidfield"></td>
            </tr>
            <tr>
                <th>context.groupId</th>
                <td id="groupidfield"></td>
            </tr>
        </table>
    </div>

      <div>
        <label for="say">name</label>
        <input name="say" id="say">
      </div>
      <div>
        <label for="to">email</label>
        <input name="to" id="to" >
      </div>
      <div class="button">
      <button type="submit">Send your message</button>
    </div>
    
  </form>


    <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
    <script src="liff-starter.js"></script>


</body>
