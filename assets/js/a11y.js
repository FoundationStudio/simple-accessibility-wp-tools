/* Accessibility
--------------------------------------------- */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const a11yData =
      JSON.parse(localStorage.getItem("sat-a11y-preferences")) || {};
    let currentFontSizeIndex = a11yData["font-size"] || -1;

    const fontSizes = Array.from(
      { length: 9 },
      (_, i) => `a11y-resize-font-${120 + i * 10}`
    );

    // Apply stored preferences on load
    if (a11yData) {
      Object.keys(a11yData).forEach((key) => {
        if (a11yData[key] === true || key === "font-size") {
          if (key === "font-size") {
            applyFontSize(a11yData[key]);
            currentFontSizeIndex = a11yData["font-size"];
          } else {
            document.body.classList.add("a11y-" + key);
          }
        }
      });
    }

    function init() {
      const menuItems = document.querySelectorAll(".menu-item.a11y-item > a");
      if (!menuItems.length) return;

      // Set initial state of resize buttons
      const decreaseButton = document.querySelector(
        "[data-action='resize-minus']"
      );
      const increaseButton = document.querySelector(
        "[data-action='resize-plus']"
      );

      if (decreaseButton && currentFontSizeIndex <= 0) {
        decreaseButton.classList.add("disabled");
      }

      if (increaseButton && currentFontSizeIndex >= fontSizes.length - 1) {
        increaseButton.classList.add("disabled");
      }

      if (a11yData) {
        Object.keys(a11yData).forEach((key) => {
          if (a11yData[key] === true || key === "font-size") {
            if (key === "font-size") {
              applyFontSize(a11yData[key]);
              if (currentFontSizeIndex > -1) {
                if (increaseButton) {
                  increaseButton.classList.add("active");
                }
                if (decreaseButton) {
                  decreaseButton.classList.remove("disabled");
                }
              }
            } else {
              const element = document.querySelector(`[data-action='${key}']`);
              if (element) element.classList.add("active");
            }
          }
        });
      }

      menuItems.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          toggleOption(link);
        });
      });
    }

    // Update local storage
    function updateLocalStorage(option, value) {
      if (option === "reset") {
        localStorage.removeItem("sat-a11y-preferences");
      } else {
        a11yData[option] = value;
        localStorage.setItem("sat-a11y-preferences", JSON.stringify(a11yData));
      }
    }

    // Apply font size from fontSizes array
    function applyFontSize(index) {
      document.body.classList.remove(...fontSizes);
      if (index >= 0 && index < fontSizes.length) {
        document.body.classList.add(fontSizes[index]);
      }

      // Update resize buttons state
      const decreaseButton = document.querySelector(
        "[data-action='resize-minus']"
      );
      const increaseButton = document.querySelector(
        "[data-action='resize-plus']"
      );

      if (decreaseButton) {
        if (index <= 0) {
          decreaseButton.classList.add("disabled");
        } else {
          decreaseButton.classList.remove("disabled");
        }
      }

      if (increaseButton) {
        if (index >= fontSizes.length - 1) {
          increaseButton.classList.add("disabled");
        } else {
          increaseButton.classList.remove("disabled");
        }
      }
    }

    // Toggle option
    const toggleOption = (el) => {
      const action = el.getAttribute("data-action");
      const decreaseButton = document.querySelector(
        "[data-action='resize-minus']"
      );
      const increaseButton = document.querySelector(
        "[data-action='resize-plus']"
      );

      if (
        action !== "reset" &&
        action !== "resize-plus" &&
        action !== "resize-minus"
      ) {
        el.classList.toggle("active");
      }

      if (action === "grayscale") {
        document.body.classList.toggle("a11y-grayscale");
        document.body.classList.remove("a11y-high-contrast");
        document
          .querySelector("[data-action='high-contrast']")
          .classList.remove("active");
        updateLocalStorage(
          "grayscale",
          document.body.classList.contains("a11y-grayscale")
        );
        updateLocalStorage("high-contrast", false);
      } else if (action === "high-contrast") {
        document.body.classList.toggle("a11y-high-contrast");
        document.body.classList.remove("a11y-grayscale");
        document
          .querySelector("[data-action='grayscale']")
          .classList.remove("active");
        updateLocalStorage(
          "high-contrast",
          document.body.classList.contains("a11y-high-contrast")
        );
        updateLocalStorage("grayscale", false);
      } else if (action === "links-underline") {
        document.body.classList.toggle("a11y-links-underline");
        updateLocalStorage(
          "links-underline",
          document.body.classList.contains("a11y-links-underline")
        );
      } else if (action === "readable-font") {
        document.body.classList.toggle("a11y-readable-font");
        updateLocalStorage(
          "readable-font",
          document.body.classList.contains("a11y-readable-font")
        );
      } else if (action === "resize-plus") {
        if (currentFontSizeIndex < fontSizes.length - 1) {
          currentFontSizeIndex++;
          applyFontSize(currentFontSizeIndex);
          updateLocalStorage("font-size", currentFontSizeIndex);
          if (currentFontSizeIndex > -1) {
            el.classList.add("active");
            if (decreaseButton) {
              decreaseButton.classList.remove("disabled");
            }
          }
          // Add disabled class when reaching maximum
          if (currentFontSizeIndex === fontSizes.length - 1) {
            el.classList.add("disabled");
          }
        }
      } else if (action === "resize-minus") {
        if (currentFontSizeIndex > 0) {
          currentFontSizeIndex--;
          applyFontSize(currentFontSizeIndex);
          updateLocalStorage("font-size", currentFontSizeIndex);

          // Remove disabled from increase button when decreasing
          if (increaseButton) {
            increaseButton.classList.remove("disabled");
          }

          if (currentFontSizeIndex === 0) {
            if (decreaseButton) {
              decreaseButton.classList.add("disabled");
            }
            if (increaseButton) {
              increaseButton.classList.remove("active");
            }
          }
        } else {
          if (increaseButton) {
            increaseButton.classList.remove("active");
            increaseButton.classList.remove("disabled");
          }
          document.body.classList.remove(...fontSizes);
          currentFontSizeIndex = -1;
          updateLocalStorage("font-size", currentFontSizeIndex);
          if (decreaseButton) {
            decreaseButton.classList.add("disabled");
          }
        }
      } else if (action === "reset") {
        document.body.classList.remove(
          "a11y-grayscale",
          "a11y-high-contrast",
          "a11y-links-underline",
          "a11y-readable-font"
        );
        document.body.classList.remove(...fontSizes);
        currentFontSizeIndex = -1;
        document
          .querySelectorAll(".menu-item.a11y-item > a")
          .forEach((item) => {
            item.classList.remove("active");
          });
        if (decreaseButton) {
          decreaseButton.classList.add("disabled");
        }
        if (increaseButton) {
          increaseButton.classList.remove("disabled");
        }
        updateLocalStorage("reset");
      }
    };

    init();
  });
})();
