const fontSizeControl = document.getElementById('font-size-control');
        const text = document.getElementById('text');
        function updateFontSize() {
            text.style.fontSize = fontSizeControl.value + 'px';
        }
        fontSizeControl.addEventListener('input', updateFontSize);
        updateFontSize();