;(
	function() {
		
		var lpm = {
			
			mouseX: 0,
			mouseY: 0,
			item_width: 200,
			
			setAction: function(id, ctx) {
				id.addEventListener("contextmenu", function(event) {
					event.preventDefault();
					lpm.mouseX = event.clientX;
					lpm.mouseY = event.clientY;
					
					lpm.clearPopups();
					lpm.createPopup.call(this, ctx, lpm.mouseX, lpm.mouseY);
				});
			},
			
			createPopup: function(items, x_coord, y_coord) {
				var main_menu_list = document.createElement("ul");
				
				items.forEach(function(item) {
					
				});
			}
			
		}
		
		window.$pm = lpm;
	}
)();
