if (document.querySelector(".popup")) {
  const button1 = document.querySelector(".button1");
  const circle1 = document.querySelector(".circle1");
  const button2 = document.querySelector(".button2");
  const circle2 = document.querySelector(".circle2");
  const button3 = document.querySelector(".button3");
  const circle3 = document.querySelector(".circle3");
  const button4 = document.querySelector(".button4");
  const circle4 = document.querySelector(".circle4");
  let button1On = false;
  let button2On = false;
  let button3On = false;
  let button4On = false;

  function invert() {
    alert("hi");
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    });
  }

  button1.addEventListener("click", () => {
    if (!button1On) {
      button1On = true;
      button1.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
      circle1.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
      chrome.tabs.executeScript({
        file: 'appOn.js'
      })

    } else {
      button1On = false;
      button1.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
      circle1.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
      chrome.tabs.executeScript({
        file: 'appOff.js'
      })
    }
  })

  button2.addEventListener("click", () => {
    if (!button2On) {
      button2On = true;
      button2.style.animation = "transformToBlue 1s ease-in-out 0s forwards";
      circle2.style.animation = "moveCircleRight 1s ease-in-out 0s forwards";
      chrome.tabs.executeScript({
        code: 'document.body.style.fontWeight = "bold";'
      })

    } else {
      button2On = false;
      button2.style.animation = "transformToYellow 1s ease-in-out 0s forwards";
      circle2.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards";
      chrome.tabs.executeScript({
        code: 'document.body.style.fontWeight = "";' 
      })
    }
  })

  button3.addEventListener("click", () => {
    if (!button3On) {
      button3On = true;
      button3.style.animation = "transformToBlue 1s ease-in-out 0s forwards";
      circle3.style.animation = "moveCircleRight 1s ease-in-out 0s forwards";
      chrome.tabs.executeScript({
        code: 'document.body.style.fontSize = "120%";'
      })

    } else {
      button3On = false;
      button3.style.animation = "transformToYellow 1s ease-in-out 0s forwards";
      circle3.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards";
      chrome.tabs.executeScript({
        code: 'document.body.style.fontSize = "100%";'
      })
    }
  })

   button4.addEventListener("click", () => {
    if (!button4On) {
      button4On = true;
      button4.style.animation = "transformToBlue 1s ease-in-out 0s forwards";
      circle4.style.animation = "moveCircleRight 1s ease-in-out 0s forwards";
      chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "Arial";'
      })

    } else {
      button4On = false;
      button4.style.animation = "transformToYellow 1s ease-in-out 0s forwards";
      circle4.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards";
      chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "";'
      })
    }
  })

  chrome.tabs.executeScript({
    code: `
      document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('appOn', function(event) {
          console.log('appOn');
        });
        document.addEventListener('appOff', function(event) {
          console.log('appOff');
        });
      });
    `,
  });
}
 