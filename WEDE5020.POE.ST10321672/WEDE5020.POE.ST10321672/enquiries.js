document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect inputs
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value;
  const details = document.getElementById("message").value.trim();
  const responseBox = document.getElementById("response");

  // Basic validation
  if (name === "" || email === "" || type === "") {
    alert("Please fill in all required fields.");
    return;
  }

  let message = "";

  // Generate custom response
  if (type === "services") {
    message = `
      Hi ${name},<br><br>
      Thank you for enquiring about our <strong>services</strong>.<br>
      Our service packages start from <strong>R499</strong> depending on your needs.<br>
      We will contact you shortly at <strong>${email}</strong> with more details.
    `;
  }

  if (type === "products") {
    message = `
      Hi ${name},<br><br>
      Thank you for your interest in our <strong>products</strong>.<br>
      Most products are currently <strong>in stock</strong> and pricing starts from <strong>R99</strong>.<br>
      We will follow up via <strong>${email}</strong>.
    `;
  }

  if (type === "sponsor") {
    message = `
      Hi ${name},<br><br>
      We're excited that you are interested in becoming a <strong>sponsor</strong>!<br>
      Sponsorship opportunities are available from <strong>R2500</strong> depending on the level.<br>
      We'll be in touch at <strong>${email}</strong> to discuss options.
    `;
  }

  // Show result
  responseBox.innerHTML = message;
  responseBox.classList.remove("hidden");
});
