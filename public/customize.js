$(document).ready(function () {
  function ImageSwitcher(choices, i) {
    i = Math.floor(Math.random() * choices.length);

    this.Next = function () {
      hide_current_image();
      show_next_image();
    };

    var hide_current_image = function () {
      if (choices) {
        choices[i].style.visibility = "hidden";
        i += 1;
      }
    };
    var show_next_image = function () {
      if (choices) {
        if (i == choices.length) {
          i = 0;
        }
        choices[i].style.visibility = "visible";
      }
    };
  }

  function ColorSwitcher(choices, i) {
    i = 0;

    this.Next = function () {
      change_img_src();
    };

    var change_img_src = function () {
      if (choices) {
        i += 1;
        if (i == choices.length) {
          i = 0;
        }
        document.getElementById(
          "hair1"
        ).src = "https://raw.githubusercontent.com/soph1e-mart1n/startup/main/public/assets/Hair1"
          .concat(choices[i])
          .concat(".png");
        document.getElementById(
          "hair2"
        ).src = "https://raw.githubusercontent.com/soph1e-mart1n/startup/main/public/assets/Hair2"
          .concat(choices[i])
          .concat(".png");
        document.getElementById(
          "hair3"
        ).src = "https://raw.githubusercontent.com/soph1e-mart1n/startup/main/public/assets/Hair3"
          .concat(choices[i])
          .concat(".png");
        document.getElementById(
          "hair4"
        ).src = "https://raw.githubusercontent.com/soph1e-mart1n/startup/main/public/assets/Hair4"
          .concat(choices[i])
          .concat(".png");
        document.getElementById(
          "hair5"
        ).src = "https://raw.githubusercontent.com/soph1e-mart1n/startup/main/public/assets/Hair5"
          .concat(choices[i])
          .concat(".png");
      }
    };
  }

  var socket;

  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === 'girlySubmit') {
        displayMsg('player', msg.from, `updated their girly!`);
      }
    };
  }

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event));
  }

  function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  function saveOutfit() {
    var hair = $("hairs_obj:visible");
    var skin = $("skin:visible");
    var face = $("faces:visible");
    var top = $("tops:visible");
    var pant = $("pants:visible");
    var shoe = $("shoes:visible");

  }

  var pants = $(".pant");
  var shirts = $(".shirt");
  var shoes = $(".shoe");
  var skins = $(".character");
  var faces = $(".face");
  var hairs = $(".hair");
  var colors = ["Blonde", "Blue", "Brown", "DarkBrown", "LightBrown", "Red"];

  var shirt_picker = new ImageSwitcher(shirts);
  document.getElementById("shirt_button").onclick = function () {
    shirt_picker.Next();
  };

  var pants_picker = new ImageSwitcher(pants);
  document.getElementById("pant_button").onclick = function () {
    pants_picker.Next();
  };

  var shoes_picker = new ImageSwitcher(shoes);
  document.getElementById("shoes_button").onclick = function () {
    shoes_picker.Next();
  };

  var skin_picker = new ImageSwitcher(skins);
  document.getElementById("skin_button").onclick = function () {
    skin_picker.Next();
  };

  var face_picker = new ImageSwitcher(faces);
  document.getElementById("face_button").onclick = function () {
    face_picker.Next();
  };

  var hairs_picker = new ImageSwitcher(hairs);
  document.getElementById("hair_button").onclick = function () {
    hairs_picker.Next();
  };

  var colors_picker = new ColorSwitcher(colors);
  document.getElementById("hairs_obj").onclick = function () {
    colors_picker.Next();
  };

  const playerNameEl = document.querySelector('.player-name');
  playerNameEl.textContent = getPlayerName();
  configureWebSocket();

  document.getElementById("submit_button").onclick = function () {
    saveOutfit();
    broadcastEvent(getPlayerName(), 'girlySubmit', {});
  }
  
  pants_picker.Next();
  shirt_picker.Next();
  shoes_picker.Next();
  skin_picker.Next();
  face_picker.Next();
  hairs_picker.Next();
});  