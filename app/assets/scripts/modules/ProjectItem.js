import $ from 'jquery';

class ProjectItem {
	constructor() {
		this.projectTitle = $(".project-item__item-title");
		this.projectDesc = $(".project-item__desc");
		this.events();
	}

	events() {
		this.projectTitle.click(this.toggleTheDesc.bind(this));
	}

	toggleTheDesc() {
		this.projectDesc.toggleClass("project-item__desc--is-visible");
	}
}

export default ProjectItem;

