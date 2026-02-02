// Helix Infrastructure Consultants - Frontend interactions
// Designed to be easily portable into a React/SPA architecture.

(function () {
  "use strict";

  /**
   * Global navigation toggle (mobile)
   */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("nav--open");
    });

    // Close nav when clicking a link (mobile)
    nav.addEventListener("click", function (event) {
      var target = event.target;
      if (target && target.closest("a")) {
        nav.classList.remove("nav--open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /**
   * WhatsApp click-to-chat helper
   * This remains purely frontend – the number/text can be adjusted or
   * sourced from configuration when migrated to a backend/CMS.
   */
  var whatsappButtons = document.querySelectorAll("[data-whatsapp-chat]");

  if (whatsappButtons.length) {
    whatsappButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var phone = btn.getAttribute("data-whatsapp-phone") || "918885028100";
        var message =
          btn.getAttribute("data-whatsapp-message") ||
          "Hi Helix team, I’d like to discuss an infrastructure / real estate requirement.";

        var url =
          "https://wa.me/" +
          encodeURIComponent(phone) +
          "?text=" +
          encodeURIComponent(message);

        window.open(url, "_blank", "noopener");
      });
    });
  }

  /**
   * Contact form handling (frontend-only)
   * NOTE: This does NOT submit anywhere yet – backend endpoint is required.
   * We provide a hook-friendly structure for future integration.
   */
  var contactForm = document.querySelector("[data-contact-form]");

  if (contactForm) {
    var statusNode = contactForm.querySelector("[data-form-status]");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (statusNode) {
        statusNode.textContent =
          "Form submitted (frontend only). Connect this form to your backend endpoint to start receiving enquiries.";
      }

      // Example for future integration:
      // 1. Read reCAPTCHA token via grecaptcha.execute()
      // 2. POST to your backend (Node/Express) endpoint
      // 3. Handle success/error states & reset form if needed
    });
  }
})();

