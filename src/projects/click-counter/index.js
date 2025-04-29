import './styles.css';
import { createCounter } from './modules/counter.js';

export default {
    name: 'Click Counter',
    description: 'An interactive click counter with increment, decrement, and reset functionality',
};

document.addEventListener('DOMContentLoaded', () => {
    const counter = createCounter();
    const countDisplay = document.getElementById('count');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    function updateDisplay(newCount) {
        countDisplay.textContent = newCount;
        countDisplay.classList.add('count-change');
        setTimeout(() => countDisplay.classList.remove('count-change'), 300);
    }

    incrementBtn.addEventListener('click', () => {
        const newCount = counter.increment();
        updateDisplay(newCount);
    });

    decrementBtn.addEventListener('click', () => {
        const newCount = counter.decrement();
        updateDisplay(newCount);
    });

    resetBtn.addEventListener('click', () => {
        const newCount = counter.reset();
        updateDisplay(newCount);
    });
});