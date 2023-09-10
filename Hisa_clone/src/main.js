import '../styles/header.css';
import '../styles/style.css';
import '../styles/hero.css';
import '../styles/info.css';
import '../styles/accolades.css';
import '../styles/goodies.css';
import '../styles/howTo.css';
import '../styles/footer.css';

// Dark and Light mode toggle

const themeToggle = document.querySelectorAll('#theme-toggle');

// State
const theme = localStorage.getItem('theme');

// On mount
theme && document.body.classList.add(theme);

// Handlers
const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute();
        }
}

// Events
themeToggle.forEach(btn => {
    btn.addEventListener('click', handleThemeToggle);
}); 