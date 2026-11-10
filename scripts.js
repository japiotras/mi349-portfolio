window.onload = () => {
    ScrollReveal().reveal('.site', {delay: 250});
}

const lightModeButton = document.getElementById('light-mode-button');

lightModeButton.addEventListener('click', () => {
    const rootStyle = document.documentElement.style;
    let currentScheme = rootStyle.colorScheme;
    if (!currentScheme)
        currentScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (currentScheme === 'dark')
        rootStyle.colorScheme = 'light';
    else
        rootStyle.colorScheme = 'dark';
});