var initialCats = [
        {
            clickCount : 0,
            name : 'Muffy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            nicknames: ['Muff', 'Muffster', 'Mufity-Muff']
        },
        {
            clickCount : 0,
            name : 'Buffy',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            nicknames: ['Buffy The Slayer', 'Buff', 'Buffster']
        },
        {
            clickCount : 0,
            name : 'Luffy',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            nicknames: ['Luffy The Layer', 'Luff', 'Luffster']
        },
        {
            clickCount : 0,
            name : 'Huffy',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            nicknames: ['Huffy The Huffer', 'Huff', 'Huffster']
        },
        {
            clickCount : 0,
            name : 'Dusty',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            nicknames: ['Dust', 'Dusteroni', 'Duster']
        }
    ]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

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
}


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
};

ko.applyBindings(new ViewModel());