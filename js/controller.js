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
		if(this.detail.box > 0){
			this.cartoon = true;
		}
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
		
		this.disable = function(item, e){
			if(item >0  && e == 1){
				this.disable_cartoon = true;
			}else if(item > 0 && e == 2){
				this.disable_box = true;
			}
		}
		
		
    });
	
	
	
	 app.controller('TransportList', function() {
		 console.log("Transport List Initialized");
        this.trans_lists = transport_list;
        console.log(this.trans_list);
    });
	
	
	app.controller('ModuleSelect', function(){
		console.log("Module Select Initialized");
		this.selectMod = function(opt){
			$('#transport').removeClass('active1');
			$('#commission').removeClass('active1');
			if(opt == 1){
				$('#transport').addClass('active1');
			}else{
				$('#commission').addClass('active1');
			}
		}
		this.nextPage = function(){
			$('#transport').css('filter','grayscale(100%)');
			$('#commission').css('filter','grayscale(100%)');
			$('#page').css('filter','grayscale(100%)');
				$('#transport').css('cursor','default');
				$('#commission').css('cursor','default');
				document.getElementById('transport').style.pointerEvents = 'none';
				document.getElementById('commission').style.pointerEvents = 'none';
				$('#page_button').prop('disabled',true);
				$('#page1').fadeIn(1000).show();
				
		}
		
	});
})();
