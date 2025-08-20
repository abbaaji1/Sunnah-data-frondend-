// main.js

// === API FUNCTIONS === //
async function buyData(phone, plan) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

    let response = await fetch("https://backend-vtu-api.com/buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, plan }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error("❌ Matsala daga server");
    }

    let data = await response.json();
    return { success: true, data };

  } catch (error) {
    console.error("Buy Data Error:", error);
    return { success: false, message: error.message || "⚠️ Matsala wajen haɗin internet" };
  }
}

// === EVENT LISTENERS (DOM) === //
document.addEventListener("DOMContentLoaded", () => {
  // Example: Handle buy data form
  const buyForm = document.getElementById("buyForm");
  if (buyForm) {
    buyForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const phone = document.getElementById("phone").value;
      const plan = document.getElementById("plan").value;

      let result = await buyData(phone, plan);

      const resultBox = document.getElementById("resultBox");
      if (result.success) {
        resultBox.innerHTML = `<p class="text-success">✅ Data saye: ${JSON.stringify(result.data)}</p>`;
      } else {
        resultBox.innerHTML = `<p class="text-danger">${result.message}</p>`;
      }
    });
  }

  // Example: Handle reset password
  const resetForm = document.getElementById("resetForm");
  if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const errorMsg = document.getElementById("errorMsg");

      if (newPassword !== confirmPassword) {
        e.preventDefault();
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
        alert("✅ Password successfully reset!");
      }
    });
  }
});
