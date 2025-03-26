document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "user@example.com" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password!");
    }
});
