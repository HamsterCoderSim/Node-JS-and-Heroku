// 评论系统
private renderGitment() {
	const el = <HTMLElement>document.querySelector('.gitment_id');
	const myTheme = {
		render(state, instance) {
			const container = document.createElement('div');
			container.lang = 'en-us';
			container.className = 'gitment-container gitment-root-container';
			container.appendChild(instance.renderEditor(state, instance));
			container.appendChild(instance, renderComments(state, instance));
			return container;
		}
	};
	
	const gitment = new Gitment({
		id: this.articleDetail._id;
		owner:'HamsterCoderSim',
		repo:'HamsterCoderSim.github.io',
		oauth: {
			client_id:'1c4831adc1089da8523c',
			client_secret:'f09eb05941ca14f7ac95a1e83ba8759850934868'
		},
		theme: myTheme
	});
	gitment.render(el);
}