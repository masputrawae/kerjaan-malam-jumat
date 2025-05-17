const ui = {
	modal: {
		btnOpen: document.querySelectorAll("[data-modal-target]"),
		btnClose: document.querySelectorAll("[data-modal-close]"),

		overlay: document.getElementById("modalOverlay"),
		item: ".modal__item",
		active: "modal--active",
	},
};

function openModal(modalId) {
	const modal = document.getElementById(modalId);
	if (modal) {
		ui.modal.overlay.classList.add(ui.modal.active);
		modal.classList.add(ui.modal.active);
	}
}

function closeModal(modal) {
	if (modal) {
		ui.modal.overlay.classList.remove(ui.modal.active);
		modal.classList.remove(ui.modal.active);
	}
}

function initModal() {
	ui.modal.btnOpen.forEach((btn) => {
		btn.addEventListener("click", () => {
			const targetId = btn.getAttribute("data-modal-target");
			openModal(targetId);
		});
	});

	ui.modal.btnClose.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const modal = e.target.closest(ui.modal.item);
			closeModal(modal);
		});
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			document.querySelectorAll(`.${ui.modal.active}`).forEach((modal) => {
				closeModal(modal);
			});
		}
	});

	ui.modal.overlay.addEventListener("click", (e) => {
		if (e.target === ui.modal.overlay) {
			document.querySelectorAll(`.${ui.modal.active}`).forEach((modal) => {
				closeModal(modal);
			});
		}
	});
}

initModal();
