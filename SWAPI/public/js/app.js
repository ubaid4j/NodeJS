let currec=0;
let totrec=0;
let pplarr=new Array();

$(document).ready(function()
{
    $.getJSON("https://swapi.co/api/people/?format=json&page=2", function (data)
    {
	    totrec=data.results.length;
		for (let x of data.results) {
			pplarr.push(x.name);
		}
		shownext();
		$("#btnnext").attr("disabled",false);
		$("#btnnext").click(shownext);
	});
	$("#pname").html("Loading ...");
});

function shownext()
{
	$("#reccount").html( " (" + (currec+1) + " of " + totrec + ")");
	$("#pname").html(pplarr[currec]);
	currec++;
	if (totrec == currec)
	{
	    $("#btnnext").html("first");
	    currec=0;
	}
	else
	    $("#btnnext").html("next");
}

