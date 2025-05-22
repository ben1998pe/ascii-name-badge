const inputText = document.getElementById("inputText");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const badgeOutput = document.getElementById("badgeOutput");

function generateBadge(text) {
  const padding = 2;
  const content = " ".repeat(padding) + text + " ".repeat(padding);
  const border = "+-" + "-".repeat(content.length) + "-+";
  const middle = "| " + content + " |";
  return `${border}\n${middle}\n${border}`;
}

generateBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text === "") {
    badgeOutput.textContent = "⚠️ Ingresa un texto válido.";
    return;
  }
  badgeOutput.textContent = generateBadge(text);
});

copyBtn.addEventListener("click", () => {
  const text = badgeOutput.textContent;
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Copiado al portapapeles");
    });
  }
});
