// Function to toggle the dropdown
function toggleDropdown(event) {
  // Get the closest parent section to the clicked dropdown button
  var section = event.target.closest(".section-wrapper");
  var dropdownContent = section.querySelector(".section-body");
  var dropdownBtn = section.querySelector(".dropdown-btn");

  // Toggle visibility of the section body
  if (
    dropdownContent.style.display === "none" ||
    dropdownContent.style.display === ""
  ) {
    dropdownContent.style.display = "block";
    dropdownBtn.textContent = "[-]"; // Change the button text to [-]
    dropdownBtn.classList.add("active");
  } else {
    dropdownContent.style.display = "none";
    dropdownBtn.textContent = "[+]"; // Change the button text to [+]
    dropdownBtn.classList.remove("active");
  }
}
