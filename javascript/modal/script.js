const modalConfig = {
	buttons: document.querySelectorAll("[data-modal-target]"),
	overlay: document.getElementById("modalOverlay"),
	overlayActive: "overlay--active",

	modal: document.querySelectorAll(".modal"),
	modalActive: "modal--active",
};

function modalActive(params) {
	const idModal = document.getElementById(params);
	const overlay = modalConfig.overlay;

	if (idModal) {
		idModal.classList.toggle(modalConfig.modalActive);
		overlay.classList.toggle(modalConfig.overlayActive);
	}
}

function modalDeactive() {
	modalConfig.overlay.classList.remove(modalConfig.overlayActive);
	modalConfig.modal.forEach((e) => {
		e.classList.remove(modalConfig.modalActive);
	});
}

function initModal() {
	modalConfig.buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const targetElement = btn.getAttribute("data-modal-target");
			modalActive(targetElement);
		});
	});

	modalConfig.overlay.addEventListener("click", () => {
		modalDeactive();
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			modalDeactive();
		}
	});
}

initModal();
