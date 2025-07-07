document.addEventListener("DOMContentLoaded", () => {
  const messageBox = document.getElementById("message");
  const fallback = document.getElementById("fallback");
  const cancelButton = document.getElementById("cancel-redirect");
  const isRoot = location.pathname === '/' || location.pathname.endsWith('index.html');

  if (messageBox) {
    messageBox.classList.add("fade-in");
  }

  if (isRoot) {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.toLowerCase();

    let target = 'index-en.html';
    if (langCode.startsWith('ja')) {
      target = 'index-ja.html';
    } else if (langCode.startsWith('zh-cn') || langCode === 'zh') {
      target = 'index-zh-cn.html';
    } else if (
      langCode.startsWith('zh-tw') ||
      langCode.startsWith('zh-hk') ||
      langCode.startsWith('zh-mo')
    ) {
      target = 'index-zh-tw.html';
    }

    let redirectCancelled = false;

    // Cancel handler
    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
        redirectCancelled = true;
        document.querySelector(".spinner").style.display = "none";
        fallback.innerHTML = `
          Redirection cancelled.<br/>
          <a href="index-en.html">Click here to visit the English version.</a>
        `;
        fallback.style.display = "block";
      });
    }

    // Timeout fallback (8 seconds)
    const timeout = setTimeout(() => {
      if (!redirectCancelled && fallback) {
        document.querySelector(".spinner").style.display = "none";
        fallback.innerHTML = `
          Redirection timed out.<br/>
          <a href="index-en.html">Click here to visit the English version.</a>
        `;
        fallback.style.display = "block";
      }
    }, 8000); // 8 seconds

    // Try redirecting
    fetch(target, { method: 'HEAD' })
      .then(res => {
        if (res.ok && !redirectCancelled) {
          clearTimeout(timeout);
          window.location.href = target;
        } else {
          throw new Error('Target not found');
        }
      })
      .catch(() => {
        if (!redirectCancelled && fallback) {
          clearTimeout(timeout);
          document.querySelector(".spinner").style.display = "none";
          fallback.style.display = "block";
        }
      });
  }

  // Smooth scroll on localized pages
  const exploreButton = document.getElementById("explore-button");
  const worksSection = document.getElementById("works");

  if (exploreButton && worksSection) {
    exploreButton.addEventListener("click", (e) => {
      e.preventDefault();
      worksSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});

// Language switch helper
function switchLanguage(langPage) {
  window.location.href = langPage;
}


// Save selected language
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("language-select");

  // Load previous selection if available
  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang && select) {
    select.value = savedLang;
  }

  // Handle user change
  select?.addEventListener("change", () => {
    const selectedLang = select.value;
    localStorage.setItem("preferredLanguage", selectedLang);
    window.location.href = selectedLang;
  });
});
