document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');
    const modeBtn = document.getElementById('mode-btn');
    const body = document.body;

    // Theme Management
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateModeButton(savedTheme);

    modeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateModeButton(newTheme);
    });

    function updateModeButton(theme) {
        modeBtn.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    }

    function generateNumbers() {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        for (const number of sortedNumbers) {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number');
            numberDiv.textContent = number;
            lottoNumbersContainer.appendChild(numberDiv);
        }
    }

    generateBtn.addEventListener('click', generateNumbers);

    // Initial generation
    generateNumbers();
});
