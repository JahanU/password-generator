
const outputLabel = document.getElementById("outputLabel");
const resetButton = document.getElementById("reset");
const copyButton = document.getElementById("copy");

outputLabel.textContent = generatePassword();
resetButton.addEventListener("click", generatePassword);
resetButton.addEventListener("click", copyToClipboard);

function generatePassword() {
    const LENGTH = 20;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < LENGTH; i++) 
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    
    console.log(password)
    outputLabel.textContent = password;
    return password;
}

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(outputLabel.textContent);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}