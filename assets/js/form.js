document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  // Get form data
  var formData = new FormData(this);

  // Convert formData to JSON
  var jsonData = {};
  formData.forEach(function (value, key) {
    jsonData[key] = value;
  });

  console.log(jsonData);

  var formData = new FormData(this);
  
  // Display form data in console
  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  
  // Clear form fields
  this.reset();


  // Make API call
  fetch("https://telzonmarketing-in.onrender.com/api/landing/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Handle API response
      document.getElementById("response").innerText = data.message;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});
