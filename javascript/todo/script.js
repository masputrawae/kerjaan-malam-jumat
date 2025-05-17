const ui = {
	tab: {
		btn: document.querySelectorAll("[data-tab-target]"),
		btnClass: "btn--active",
		tabClass: "tab--active",
	},
};

function tabTarget(tabId) {
	const tab = document.getElementById(tabId);
	if (tab) {
		tab.classList.add(ui.tab.tabClass);
		ui.tab.btn.classList.add(ui.tab.btnClass);
	}
}

function tab() {
	ui.tab.btn.forEach((button) => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab-target");
			tabTarget(targetTab);
		});
	});
}

tab();
