// script.js
document.getElementById('encryptBtn').addEventListener('click', () => {
    clearAlert(); // Limpiar el mensaje de alerta anterior
    const inputText = document.getElementById('inputText').value;
    if (isValidInput(inputText)) {
        const encryptedText = encrypt(inputText);
        const outputDiv = document.getElementById('outputText');
        outputDiv.innerHTML = `<p>${encryptedText}</p>`;
        document.querySelector('#outputText img').style.display = 'none'; // Ocultar imagen
    } else {
        showAlert("Por favor, introduce solo letras minúsculas sin acentos ni caracteres especiales.");
        const outputDiv = document.getElementById('outputText');
        outputDiv.innerHTML = '<img src="tu-imagen-placeholder.jpg" alt="Placeholder Image"><p>Ningún mensaje fue encontrado</p>';
    }
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    clearAlert(); // Limpiar el mensaje de alerta anterior
    const inputText = document.getElementById('inputText').value;
    if (isValidInput(inputText)) {
        const decryptedText = decrypt(inputText);
        const outputDiv = document.getElementById('outputText');
        outputDiv.innerHTML = `<p>${decryptedText}</p>`;
        document.querySelector('#outputText img').style.display = 'none'; // Ocultar imagen
    } else {
        showAlert("Por favor, introduce solo letras minúsculas sin acentos ni caracteres especiales.");
        const outputDiv = document.getElementById('outputText');
        outputDiv.innerHTML = '<img src="tu-imagen-placeholder.jpg" alt="Placeholder Image"><p>Ningún mensaje fue encontrado</p>';
    }
});

document.getElementById('copyBtn').addEventListener('click', () => {
    clearAlert(); // Limpiar el mensaje de alerta anterior
    const outputDiv = document.getElementById('outputText');
    const range = document.createRange();
    range.selectNode(outputDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    showAlert("Texto copiado al portapapeles", "success");
});

function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function isValidInput(text) {
    return /^[a-z\s]*$/.test(text); // Solo permite letras minúsculas y espacios
}

function showAlert(message, type) {
    const alertDiv = document.getElementById('alertMessage');
    alertDiv.textContent = message;
    if (type === 'success') {
        alertDiv.style.color = '#2ecc71'; // Verde
    } else {
        alertDiv.style.color = '#e74c3c'; // Rojo
    }
}

function clearAlert() {
    const alertDiv = document.getElementById('alertMessage');
    alertDiv.textContent = '';
}
