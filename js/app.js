var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.nicknames = ko.observableArray(['Tabitha', 'Mrs. T', 'T-Money'])



	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		if (clicks < 10) {
			return 'newborn';
		} else if (clicks >= 10 && clicks < 20){
			return 'kitten';
		} else {
			return 'adult';
		}
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());