$(document).ready(function() {
	// Lab 1
	//amarillo es solo una clase css con backgroung-color: "yellow"
	//$("li.status").addClass('amarillo');
	$("li.status").css("background-color", "yellow");
	// Lab 2
	$("#toggleButton").css("background-color", "yellow");
	// Lab 3

	// Lab 4
	$("#dialogo").dialog({
        width: 100,
        height: 100,
        show: "scale",
        hide: "scale",
        resizable: "false",
        position: "center",
        modal: "true"
    });
	$("#boton").on('click', function() {
		$("#dialog").dialog("open");
	});
});
// Lab 5
