logearCliente = () => {
  window.location.href = "login.html";
};

logearAdmin = () => {
  window.location.href = "admin-login.html";
};

localStorage.clear();

document.getElementById("client").addEventListener("click", logearCliente);
document.getElementById("admin").addEventListener("click", logearAdmin);
