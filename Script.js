document.addEventListener("DOMContentLoaded", () => {
  const API_BASE = "https://sunnah-data-backend.onrender.com/api";

  // ========== BUY DATA ==========
  const buyForm = document.getElementById("purchaseForm");
  if (buyForm) {
    buyForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const network = document.getElementById("network").value;
      const plan = document.getElementById("plan").value;
      const phone = document.getElementById("phone").value;
      const amount = document.getElementById("amount").value;

      const resultBox = document.getElementById("result");

      if (!network || !plan || !phone || !amount) {
        resultBox.innerText = "❌ Don Allah cika duk bayanai.";
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/buy`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ network, plan, phone, amount }),
        });

        const data = await res.json();
        resultBox.innerText = "✅ " + (data.message || "Odarka ta tafi!");
      } catch (err) {
        resultBox.innerText = "❌ Matsala wajen aika request: " + err.message;
      }
    });
  }

  // ========== SIGNUP ==========
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      try {
        const res = await fetch(`${API_BASE}/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("✅ Signup successful!");
          console.log("Signup:", data);
        } else {
          alert("❌ Signup failed: " + (data.message || "Ba a yi nasara ba."));
        }
      } catch (err) {
        alert("❌ Signup error: " + err.message);
      }
    });
  }

  // ========== LOGIN ==========
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      try {
        const res = await fetch(`${API_BASE}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("✅ Login successful!");
          console.log("Login:", data);
        } else {
          alert("❌ Login failed: " + (data.message || "Ba a yi nasara ba."));
        }
      } catch (err) {
        alert("❌ Login error: " + err.message);
      }
    });
  }
});
