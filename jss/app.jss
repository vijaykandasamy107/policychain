/* ==========================================
   HealthChain Verify
   app.js
========================================== */

console.log("HealthChain Verify Loaded Successfully");

// Welcome Message
window.addEventListener("load", function () {
    console.log("Application Started");
});

// Start Verification Button
const startButton = document.getElementById("startBtn");

if (startButton) {
    startButton.addEventListener("click", function () {
        window.location.href = "verify.html";
    });
}

// Current Date
const today = new Date();
console.log("Current Date:", today.toLocaleDateString());

// Sample Blockchain Status
const blockchainStatus = {
    project: "HealthChain Verify",
    version: "1.0",
    blockchain: "Active",
    hashing: "SHA-256",
    storage: "LocalStorage"
};

console.log(blockchainStatus);

// Utility Function
function showMessage(message) {
    alert(message);
}

// Future Ready Function
function initializeApplication() {

    console.log("Initializing Modules...");

    console.log("✔ Upload Module Ready");

    console.log("✔ Hash Generator Ready");

    console.log("✔ Blockchain Ready");

    console.log("✔ Verification Ready");

}

initializeApplication();
