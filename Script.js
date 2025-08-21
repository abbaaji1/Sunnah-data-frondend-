document.getElementById("dataForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const network = document.getElementById("network").value;
  const plan = document.getElementById("plan").value;
  const phone = document.getElementById("phone").value;

  if (network && plan && phone) {
    // aika request zuwa backend
    fetch("https://sunnah-data-backend.onrender.com/api/buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        network,
        plan,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("result").innerText = "✅ " + (data.message || "Odarka ta tafi!");
      })
      .catch((err) => {
        document.getElementById("result").innerText =
          "❌ Matsala wajen aika request: " + err.message;
      });
  } else {
    document.getElementById("result").innerText = "❌ Don Allah cika duk bayanai.";
  }
});
