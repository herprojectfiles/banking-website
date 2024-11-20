// mortgage.js

$(document).ready(() => {
    $('#mortgage-form').on('submit', function (e) {
        e.preventDefault();

        // Retrieve inputs
        const loanAmount = parseFloat($('#loanAmount').val());
        const loanTerm = parseInt($('#loanTerm').val());
        const monthlyIncome = parseFloat($('#monthlyIncome').val());

        // Validation
        if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(monthlyIncome) || loanAmount <= 0 || loanTerm <= 0 || monthlyIncome <= 0) {
            alert('Please enter valid positive numbers for all fields.');
            return;
        }

        // Mortgage calculation
        const annualInterestRate = 0.045;
        const monthlyInterestRate = annualInterestRate / 12;
        const totalPayments = loanTerm * 12;
        const monthlyPayment = 
            (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
            (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

        // Eligibility check
        const incomeThreshold = monthlyIncome * 0.30;
        const isEligible = monthlyPayment <= incomeThreshold;

        // Display results
        $('#monthlyPayment').text(`Monthly Payment: £${monthlyPayment.toFixed(2)}`);
        $('#eligibility').text(isEligible 
            ? "Loan Approved: Payment is within your income threshold." 
            : "Loan Denied: Payment exceeds 30% of your income.");
        $('#expenseBreakdown').text(`Expense Breakdown: Income £${monthlyIncome.toFixed(2)} - Payment £${monthlyPayment.toFixed(2)} = Remaining £${(monthlyIncome - monthlyPayment).toFixed(2)}`);
    });
});
