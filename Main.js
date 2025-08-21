// main.js
import { postData } from "./js/api.js";

// === EVENT LISTENERS (DOM) === //
document.addEventListener("DOMContentLoaded", () => {
  // === BUY DATA FORM === //
  const buyForm = document.getElementById("purchaseForm");
  if (buyForm) {
    buyForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const phone = document.getElementById("phone").value;
      const plan = document.getElementById("plan").value;

      try {
        const result = await postData("buy-data", { phone, plan });
        const resultBox = document.getElementById("result");
        resultBox.innerHTML = `<p class="text-success">✅ Data saye: ${JSON.stringify(result)}</p>`;
      } catch (error) {
        const resultBox = document.getElementById("result");
        resultBox.innerHTML = `<p class="text-danger">❌ ${error.message}</p>`;
      }
    });
  }

  // === LOGIN FORM === //
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      try {
        const result = await postData("login", { email, password });
        console.log("Login success:", result);
        alert("✅ Login successful!");
      } catch (error) {
        alert("❌ Login failed: " + error.message);
      }
    });
  }

  // === SIGNUP FORM === //
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      try {
        const result = await postData("signup", { name, email, password });
        console.log("Signup success:", result);
        alert("✅ Signup successful!");
      } catch (error) {
        alert("❌ Signup failed: " + error.message);
      }
    });
  }

  // === RESET PASSWORD FORM === //
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
