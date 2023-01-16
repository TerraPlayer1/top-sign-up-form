const pass = document.querySelector("#pass");
const cPass = document.querySelector("#confirm-pass");
const pcError = document.querySelector("#pass-confirm-error");

cPass.oninput = async function() {
  await new Promise(r => setTimeout(r, 500));
  comparePass(pass,cPass)
};


pass.oninput = async function() {
  await new Promise(r => setTimeout(r, 500));
  comparePass(pass,cPass)
};

function comparePass(a, b) {
  if (b.value.length == 0) {
    return;
  };

  if (a.value !== b.value ) {
    pass.style.borderColor = "red"
    cPass.style.borderColor = "red"
    pcError.textContent = "Passwords do not match" 
  } else pass.style.borderColor = "", cPass.style.borderColor = "", pcError.textContent = "";
}
