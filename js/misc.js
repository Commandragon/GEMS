const output = (msg, clr) => {
  const txt = document.getElementById("console-output");
  txt.style.color = clr;
  txt.innerText = msg;
};

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
};

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/share?url=${url}`, "_blank");
};

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
};

// Other existing functions remain unchanged.
