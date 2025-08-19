document.getElementById("dataForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const network = document.getElementById("network").value;
  const plan = document.getElementById("plan").value;
  const phone = document.getElementById("phone").value;

  if (network && plan && phone) {
    document.getElementById("result").innerText =
      `✅ Odarka ta tafi!\nNetwork: ${network.toUpperCase()}\nPlan: ${plan}\nLambar waya: ${phone}`;
    
    // A nan zaka iya aika request zuwa backend API dinka
    // fetch("https://your-backend-api.com/order", { ... })
  } else {
    document.getElementById("result").innerText = "❌ Don Allah cika duk bayanai.";
  }
});
