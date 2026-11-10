const lightModeButton = document.getElementById('light-mode-button');

lightModeButton.addEventListener('click', () => {
    const rootStyle = document.documentElement.style;
    const currentScheme = rootStyle.colorScheme;
    if (currentScheme == null)
        window.matchMedia('(prefers-color-scheme: dark)').matches ? currentScheme = 'dark' : currentScheme = 'light';

    if (currentScheme === 'dark')
        rootStyle.colorScheme = 'light';
    else
        rootStyle.colorScheme = 'dark';
});