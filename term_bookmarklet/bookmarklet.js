javascript: (async () => {
  const allowedSites = {
    [atob("d3d3LmRlbHRhbWF0aC5jb20=")]: atob("ZGVsdGFtYXRo"),
    [atob("d3d3Lml4bC5jb20=")]: atob("aXhs"),
  };

  const currentHost = location.hostname;

  const matchedSite = Object.keys(allowedSites).find((site) =>
    currentHost.includes(site)
  );

  if (!matchedSite) {
    alert("Wrong site.");
    return;
  }

  if (window.term) {
    return alert("Term already loaded.");
  }

  window.term = {
    apiBase: "https://kenpott.github.io/term-test/",
    scriptName: `${allowedSites[matchedSite]}.js`,
  };

  let frame = document.createElement("iframe");
  if (matchedSite === atob("d3d3LmRlbHRhbWF0aC5jb20=")) {
    frame.src = "about:blank";
  } else if (matchedSite === atob("d3d3Lml4bC5jb20=")) {
    frame.src = "/dv3/" + Math.random().toString(36).slice(2);
  }
  frame.style.display = "none";
  frame.id = "TermContext";
  document.body.appendChild(frame);
  window.term.context = frame.contentWindow;
  window.term.fetch = window.kata.context.fetch.bind(window.term.context);

  let fetchInterval = setInterval(async () => {
    try {
      const response = await window.term.fetch(
        window.term.apiBase + window.term.scriptName + "?" + Date.now()
      );
      if (response.status === 200) {
        clearInterval(fetchInterval);
        const scriptText = await response.text();
        eval(scriptText);
      }
    } catch (e) {
      console.error("Fetch error:", e);
    }
  }, 1000);
})();

// Bookmarklet version:
javascript:(()=>{const e={[atob("d3d3LmRlbHRhbWF0aC5jb20=")]:atob("ZGVsdGFtYXRo"),[atob("d3d3Lml4bC5jb20=")]:atob("aXhs")},t=location.hostname,n=Object.keys(e).find((t=>location.hostname.includes(t)));if(!n)return void alert("Wrong site.");if(window.term)return alert("Term already loaded.");window.term={apiBase:"https://kenpott.github.io/term-test/",scriptName:e[n]+".js"};let o=document.createElement("iframe");o.src=n===atob("d3d3LmRlbHRhbWF0aC5jb20=")?"about:blank":"/dv3/"+Math.random().toString(36).slice(2),o.style.display="none",o.id="TermContext",document.body.appendChild(o),window.term.context=o.contentWindow,window.term.fetch=window.kata.context.fetch.bind(window.term.context);let r=setInterval((async()=>{try{const t=await window.term.fetch(window.term.apiBase+window.term.scriptName+"?"+Date.now());if(200===t.status){clearInterval(r);const e=await t.text();eval(e)}}catch(e){console.error("Fetch error:",e)}}),1e3)})();
