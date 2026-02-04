function showLove() {
  const text = "You make my world brighter every day. I’m so lucky to have you. Will you be my Valentine? 💖";
  let i = 0;
  const speed = 50;
  document.getElementById("message").innerHTML = "";

  const typing = setInterval(() => {
    if (i < text.length) {
      document.getElementById("message").innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}