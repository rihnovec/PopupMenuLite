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
					let menu_item	=	document.createElement("li");
					menu_item.innerText	=	item.caption;
					
					if (item.action === undefined && item.submenu != undefined) {
						menu_item.addEventListener("mouseover", function() {
							/* creating submenu */
							lpm.createPopup.call(this, item.submenu, this.clientWidth, this.offsetY);
						});
						
						menu_item.addEventListener("mouseout", function() {
							/* creating submenu */
							var ul_id = document.querySelector("ul");
							console.log("tagname = " + ul_id.tagName);
							this.empty();
							lpm.createPopup.call(this, item.submenu, this.clientWidth, this.offsetY);
						});
					}
					else {
						if (typeof item.action == "function") {
							menu_item.addEventListener("click", item.action);
						}
					}
					
					main_menu_list.appendChild(menu_item);
				});
				
				main_menu_list.setAttribute("id", "popup-menu-list");
				this.parentElement.insertBefore(main_menu_list, this);
				main_menu_list.style.left = x_coord + "px";
				main_menu_list.style.top = y_coord + "px";

				main_menu_list.addEventListener("contextmenu", function(event) {
					event.preventDefault();
				});

				console.log(main_menu_list.parentElement.tagName);
			},
			
			clearPopups: function() {
				var current_popup_menu = document.getElementById("popup-menu-list");
				if (current_popup_menu) {
					current_popup_menu.remove();
				}
			},
			
		}
		
		window.$pm = lpm;
	}
)();
