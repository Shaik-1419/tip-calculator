document.getElementById('calculateBtn').addEventListener('click', calculateTip);

function calculateTip() {
    
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        alert("Please enter valid values for both bill amount and tip percentage.");
        return;
    }

    
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    
    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}
