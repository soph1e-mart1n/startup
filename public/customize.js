$(document).ready(function () {
  async function loadCoins() {
    let coins = 0;
    try {
      // Get the latest coins from the service
      const response = await fetch('/api/coins');
      coins = await response.json();

      // Save the coins in case we go offline in the future
      localStorage.setItem('coins', JSON.stringify(coins));
    } catch {
      // If there was an error then just use the last saved coins
      const coinsText = localStorage.getItem('coins');
      if (coinsText) {
        coins = JSON.parse(coinsText);
      }
    }

    displayCoins(coins);
  }

  function displayCoins(coins) {
    const el = document.querySelector('#coins');

    if(coins) {
      el.textContent = coins.coin;
    }
    else {
      el.textContent = 0;
    }
  }

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

  pants_picker.Next();
  shirt_picker.Next();
  shoes_picker.Next();
  skin_picker.Next();
  face_picker.Next();
  hairs_picker.Next();
});  