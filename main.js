var submenu_move = [
	{
		caption	:	"To folder...",
		icon		:	null,
		action	:	function() {
			alert("Move to selected folder");
		}
	},
	{
		caption	:	"To cloud",
		icon		:	null,
		action	:	function() {
			alert("Move to my cloud");
		}
	}
];

var main_context_menu = [
	{
		caption	:	"Create new item...",
		icon		:	null,
		action	:	function() {
			alert("create new item");
		}
	},
	{
		caption	:	"Delete item",
		icon		:	null,
		action	:	function() {
			alert("delete item");
		}
	},
	{
		caption: "Move item to...",
		submenu: submenu_move,
	},
	"Rename item"
];

$pm.addContextMenu(".popup", main_context_menu);
