document.getElementById('turnoverForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numEntradas = parseFloat(document.getElementById('numEntradas').value);
    const numSaidas = parseFloat(document.getElementById('numSaidas').value);
    const numFuncionarios = parseFloat(document.getElementById('numFuncionarios').value);
    
    if (isNaN(numEntradas) || isNaN(numSaidas) || isNaN(numFuncionarios) || numFuncionarios === 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
    const turnover = ((numEntradas + numSaidas) / (2 * numFuncionarios)) * 100;
    document.getElementById('result').textContent = `A taxa de turnover é ${turnover.toFixed(2)}%`;
});

const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
});
