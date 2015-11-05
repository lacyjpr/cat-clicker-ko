var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel());