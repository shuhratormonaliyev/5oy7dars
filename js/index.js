function saveData() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
  
    const userData = {
      name: name,
      surname: surname,
      age: age
    };
  
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Saqlandi!");
  
    displayData(); 
  }
  
  function displayData() {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      document.getElementById("nameInfo").textContent = "Ismi: " + storedData.name;
      document.getElementById("surnameInfo").textContent = "Familyasi: " + storedData.surname;
      document.getElementById("ageInfo").textContent = "Yoshi: " + storedData.age;
    }
  }
  
  
  window.onload = function() {
    displayData(); 
  }
  