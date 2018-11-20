;(
	function() {
		
		var lpm = {		
		
			bindPopup: function(target) {
				
				if (typeof target === "string") {
					var target_list = document.querySelectorAll(target);
					target_list.forEach(function(item) {
						lpm.setAction(item);
					});
				}
				else {
					throw new Error("bind_popup: element with current target is not found");
				}
				
			},
			
			setAction: function(id) {
				id.addEventListener("contextmenu", function(event) {
					event.preventDefault();
					console.log("context menu!");
				});
			}
		}
		
		window.$pm = lpm;
	}
)();
