const pass = document.getElementById("pass");
const cPass = document.getElementById("confirm-pass");

cPass.oninput = async function() {
  await new Promise(r => setTimeout(r, 700));

   if (pass.value == cPass.value ) {
    cPass.style.backgroundColor = "rgb(222,333,222)";
  } else cPass.style.backgroundColor = "rgb(222,33,222)";
};
