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
        };
		var content;
        this.updatePrice = function(item) {
			content = item;
            if (item != undefined) {
                this.detail.totalCost = item * this.detail.preCost;
            } else {
                this.detail.totalCost = 0;
            }

        }
		
		this.updatePerCost = function(item){
			 if (item != undefined) {
                this.detail.totalCost = item * content;
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
		 this.deleteEntry = function(index) {
            transport_list.splice(index, 1);
            localStorage.setItem('transport_DB', JSON.stringify(transport_list));
        }
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
		
		this.editPage = function(){
			$('#page_edit').fadeOut(200).hide(500);
			$('#page_edit').css('filter','grayscale(0)');
			$('#page_button').fadeIn(200).show(500);
			$('#transport').css('border','none');
			$('#commission').css('border','none');
			$('#transport').css('filter','grayscale(0)');
			$('#commission').css('filter','grayscale(0)');
			$('#page').css('filter','grayscale(0)');
				$('#transport').css('cursor','pointer');
				$('#commission').css('cursor','pointer');
				document.getElementById('transport').style.pointerEvents = 'auto';
				document.getElementById('commission').style.pointerEvents = 'auto';
				$('#page_button').prop('disabled',false);
				$('#page1').css('display','none');
		}
		
	});
})();
