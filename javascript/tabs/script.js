const tabsConfig = {
	buttons: document.querySelectorAll("[data-tab-target]"),
	tabs: document.querySelectorAll(".tab"),
	buttonActive: "button--active",
	tabActive: "tab--active",
};

function tabAction(params) {
	const idTab = document.getElementById(params);
	const btnTab = document.querySelector(`[data-tab-target="${params}"]`);

	const removeActive = (el, elClass) => {
		el.forEach((e) => {
			e.classList.remove(elClass);
		});
	};
	if (idTab && btnTab) {
		removeActive(tabsConfig.buttons, tabsConfig.buttonActive);
		removeActive(tabsConfig.tabs, tabsConfig.tabActive);

		btnTab.classList.add(tabsConfig.buttonActive);
		idTab.classList.add(tabsConfig.tabActive);
	}
}

function initTab() {
	tabsConfig.buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const targetElement = btn.getAttribute("data-tab-target");
			tabAction(targetElement);
		});
	});
}

initTab();
