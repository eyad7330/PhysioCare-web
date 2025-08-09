document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Hide form and show confirmation
  document.getElementById("bookingForm").style.display = "none";
  document.getElementById("confirmationMessage").classList.remove("hidden");

  // (اختياري) تقدر تبعت داتا على واتساب هنا
});
