;(
	function() {
		
		var lpm = {
			
			mouseX: 0,
			mouseY: 0,
		
			bindPopup: function(target) {
				
				if (typeof target === "string") { // target: selector
					var target_list = document.querySelectorAll(target);
					target_list.forEach(function(item) {
						lpm.setAction(item);
					});
				}
				else if ("length" in target) { // target: array of DOM-elements
					target.forEach(function(item) {
						lpm.setAction(item);
					});
				}
				else { // target: single DOM-element
					try {
						lpm.setAction(target);
					}
					catch (err) { // target: other object
						throw new Error("bind_popup: element with current target is not found");
					}
				}
				
			},
			
			setAction: function(id) {
				id.addEventListener("contextmenu", function(event) {
					event.preventDefault();
					lpm.mouseX = event.clientX;
					lpm.mouseY = event.clientY;
					console.log("mouse_x = " + lpm.mouseX);
					console.log("mouse_y = " + lpm.mouseY);
					console.log("context menu!");
					lpm.createPopup.call(id, {
						items: [
							"Item 1",
							"Item 2",
							"Item 3"
						]
					});
				});
			},
			
			createPopup: function(obj) {
				
				lpm.clearPopups();
				console.log(this.tagName);
				var main_menu_list = document.createElement("ul");
				
				obj.items.forEach(function(item) {
					let menu_item	=	document.createElement("li");
					menu_item.innerText	=	item;
					main_menu_list.appendChild(menu_item);
				});
				
				main_menu_list.setAttribute("id", "popup-menu-list");
				this.parentElement.insertBefore(main_menu_list, this);
				main_menu_list.style.left = lpm.mouseX + "px";
				main_menu_list.style.top = lpm.mouseY + "px";
				
				console.log(main_menu_list.parentElement.tagName);
			},
			
			clearPopups: function() {
				var current_popup_menu = document.getElementById("popup-menu-list");
				if (current_popup_menu) {
					current_popup_menu.remove();
				}
			}
		}
		
		window.onclick = function(event) {
			//if (event.button)
			lpm.clearPopups();
		}
		
		window.$pm = lpm;
	}
)();
