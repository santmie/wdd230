const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const main_h1 = document.querySelector("main h1");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main_h1.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main_h1.style.color = "#172A3A";
		modeButton.textContent = "🌙";
	}
});
