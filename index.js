const namee = document.querySelector("#n");
const agee = document.querySelector("#age");
const userr = document.querySelector("#u");

function fsubmit(e) {
  e.preventDefault();

  if (namee.value == "" || agee.value == "") {
    extra.classList.add("errorr");
    extra.innerHTML = "please fill out your fields";
    setTimeout(() => extra.remove(), 2000);
  } else {
    // console.log(namee.value);
    // console.log(agee.value);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${namee.value} : ${agee.value}`));
    userr.appendChild(li);
  }
}
