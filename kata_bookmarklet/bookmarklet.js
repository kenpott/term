javascript:(async () => {
  if (!location.hostname.includes(atob("d3d3LmRlbHRhbWF0aC5jb20="))) {
    return alert("Wrong site.");
  }

  if (window.kata) {
    return alert("Kata already loaded.");
  }

  window.kata = {
    api: "" // domain for api requests
  };

  let frame = document.createElement("iframe");
  frame.src = "/dv3/" + Math.random().toString(36).slice(2);
  frame.style.display = "none";
  frame.id = "KataContext";
  document.body.appendChild(frame);
  window.kata.context = frame.contentWindow;
  window.kata.fetch = window.kata.context.fetch.bind(window.kata.context);

  let fetchInterval = setInterval(async () => {
    await window.kata.fetch(window.kata.api + "kata.js?" + Date.now())
      .then(async response => {
        if (response.status === 200) {
          clearInterval(fetchInterval);
          eval(await response.text());
        }
      });
  }, 1000);
})();
