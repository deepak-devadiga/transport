(function() {
    var app = angular.module('myApp', []);
	var transport_list = (JSON.parse(localStorage.getItem('transport_DB')) === null) ? [] : JSON.parse(localStorage.getItem('transport_DB'));
    app.controller('LoginController', function() {
        console.log("Login Controller Initialized");
        this.detail = {};
        this.addLogin = function() {
            console.log("Inside Add Login Function");
            console.log(this.detail);
        };
    });
    app.controller('TransportDetails', function($scope) {
        console.log("Transport Details Initialized");
        this.detail = {};
		
        this.addTransDetails = function() {
			transport_list.push(this.detail);
			localStorage.setItem('transport_DB', JSON.stringify(transport_list));
			this.detail = {};
			this.detail.preCost = 250;
        };
        this.detail.preCost = 250;
		
		
		
        this.updatePrice = function(item) {
            if (item != undefined) {
                this.detail.totalCost = item * this.detail.preCost;
            } else {
                this.detail.totalCost = 0;
            }

        }
    });
	
	
	
	 app.controller('TransportList', function() {
		 console.log("Transport List Initialized");
        this.trans_lists = transport_list;
        console.log(this.trans_list);
    });
})();
