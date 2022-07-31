function resetData() {
  console.log("Data Cleared");
}

function greaterNum(a, b, c) {
  if (a > b && a > c) return console.log("a greater than b & c");
  if (b > a && b > c) return console.log("b greater than a & c");
  console.log("c greater than b & a");
}
function saveData() {
  const Name = document.getElementById("name").value;
  const Email = document.getElementById("email").value;
  const Phone = document.getElementById("phone").value;

  const Alert = confirm("Do you want to save data?");

  if (Alert == true) {
    localStorage.a = Name;
    localStorage.b = Email;
    localStorage.c = Phone;
    greaterNum();
  } else {
    alert("Could'nt Save Data");
  }
}
