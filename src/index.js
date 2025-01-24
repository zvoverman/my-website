window.onload = function () {
  setTimeout(function () {
    activateAboutPage();
  }, 200);
};

function activateAboutPage() {
  var about = document.getElementById("about");
  var aboutDropdownContent = about.querySelector(".section-body");
  var aboutDropdownBtn = about.querySelector(".dropdown-btn");

  aboutDropdownContent.classList.add("visible");
  aboutDropdownBtn.textContent = "[ − ]";
  aboutDropdownBtn.classList.add("active");
}

function toggleDropdown(event) {
  var section = event.target.closest(".section-wrapper");
  var dropdownContent = section.querySelector(".section-body");
  var dropdownBtn = section.querySelector(".dropdown-btn");

  if (dropdownContent.classList.contains("visible")) {
    dropdownContent.classList.remove("visible");
    dropdownBtn.textContent = "[ + ]";
    dropdownBtn.classList.remove("active");
  } else {
    dropdownContent.classList.add("visible");
    dropdownBtn.textContent = "[ − ]";
    dropdownBtn.classList.add("active");
  }
}
