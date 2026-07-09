/* Light / dark theme toggle — academicpages-compatible behavior */
(function () {
  function browserPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function determineComputedTheme() {
    var themeSetting = localStorage.getItem("theme");
    if (themeSetting !== "dark" && themeSetting !== "light" && themeSetting !== "system") {
      themeSetting = "system";
    }
    if (themeSetting !== "system") {
      return themeSetting;
    }
    return browserPrefersDark() ? "dark" : "light";
  }

  function setTheme(theme) {
    var useTheme = theme || localStorage.getItem("theme");
    if (useTheme !== "dark" && useTheme !== "light") {
      useTheme = determineComputedTheme();
    }

    var icon = document.getElementById("theme-icon");
    if (useTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (icon) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }
  }

  function toggleTheme(event) {
    if (event) {
      event.preventDefault();
    }
    var current = document.documentElement.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTheme();

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (!localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      });
    }
  });

  // Expose for debugging / future hooks
  window.__siteTheme = {
    setTheme: setTheme,
    toggleTheme: toggleTheme,
    determineComputedTheme: determineComputedTheme
  };
})();
