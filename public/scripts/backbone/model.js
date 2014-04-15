var AutocompleterAppModel = Backbone.Model.extend({});
var AutocompleterAppView = Backbone.View.extend({
	  render: function() {
		  console.log('render');
		 
		  $("#search-input").autocomplete({
	          source: function(request, response){ 
	        	  now.search(request, 10, function(err, results) {
	        		  response(results);
	        	  });
	          },
	          minLength: 3
	      });
	  },
	  initialize: function() {
		  this.render();
	  }
});