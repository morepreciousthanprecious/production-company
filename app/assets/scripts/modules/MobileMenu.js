import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".primary-nav");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("primary-nav--is-visible");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}

}

export default MobileMenu;