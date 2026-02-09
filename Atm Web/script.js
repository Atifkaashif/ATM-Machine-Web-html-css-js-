// ATM logic in JS

let balance = 50000;
const correctPin = "1234";
let attempts = 0;
const maxAttempts = 3;

// Helper function to show messages
function showMessage(msg) {
    const messages = document.getElementById("messages");
    messages.textContent = msg;
}

// PIN verification
function verifyPin() {
    const pinInput = document.getElementById("pin").value;
    if (pinInput === correctPin) {
        showMessage("PIN verified successfully!");
        document.getElementById("pin-screen").style.display = "none";
        document.getElementById("menu-screen").style.display = "block";
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            showMessage("Too many incorrect attempts! Access denied.");
            document.getElementById("pin-screen").querySelector("button").disabled = true;
        } else {
            showMessage(`Incorrect PIN! ${maxAttempts - attempts} attempts remaining.`);
        }
    }
}

// Show ATM screens
function backToMenu() {
    document.getElementById("withdraw-screen").style.display = "none";
    document.getElementById("deposit-screen").style.display = "none";
    document.getElementById("menu-screen").style.display = "block";
}

// Check balance
function checkBalance() {
    showMessage(`Your current balance is: Rs ${balance}`);
}

// Withdraw money
function showWithdraw() {
    document.getElementById("menu-screen").style.display = "none";
    document.getElementById("withdraw-screen").style.display = "block";
}

function withdrawMoney() {
    let amount = document.getElementById("withdraw-amount").value;
    amount = parseInt(amount);
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            showMessage(`Withdrawn Rs ${amount}. Remaining Balance: Rs ${balance}`);
        } else {
            showMessage("Insufficient balance!");
        }
    } else {
        showMessage("Enter a valid amount!");
    }
}

// Deposit money
function showDeposit() {
    document.getElementById("menu-screen").style.display = "none";
    document.getElementById("deposit-screen").style.display = "block";
}

function depositMoney() {
    let amount = document.getElementById("deposit-amount").value;
    amount = parseInt(amount);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        showMessage(`Deposited Rs ${amount}. New Balance: Rs ${balance}`);
    } else {
        showMessage("Enter a valid amount!");
    }
}

// Exit ATM
function exitATM() {
    showMessage("Thank you for using the ATM. Goodbye!");
    document.getElementById("menu-screen").style.display = "none";
}
