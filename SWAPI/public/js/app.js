let currec=0;
let totrec=0;
let pplarr=new Array();

$(document).ready(function()
{
    $.getJSON("https://swapi.co/api/planets/?format=json", function (data)
    {
	    totrec=data.results.length;
		for (let x of data.results) {
			localArray = new Array();
			localArray.push(x.name);
			localArray.push(x.rotation_period);
			console.log(x.rotation_period);
			localArray.push(x.orbital_period);
			localArray.push(x.diameter);
			localArray.push(x.climate);	
			pplarr.push(localArray);
		}
		shownext();
		$("#btnnext").attr("disabled",false);
		$("#btnnext").click(shownext);
	});
	$("#pname").html("Loading ...");
	$("#rotation_period").html("Loading ...");
	$("#orbital_period").html("Loading ...");
	$("#diameter").html("Loading ...");
	$("#climate").html("Loading ...");

});

function shownext()
{
	$("#reccount").html( " (" + (currec+1) + " of " + totrec + ")");
	$("#pname").html("Name:\t" + pplarr[currec][0]);
	$("#rotation_period").html("Rotation Period:\t" + pplarr[currec][1]);
	$("#orbital_period").html("Orbital Period:\t" + pplarr[currec][2]);
	$("#diameter").html("Diameter:\t" + pplarr[currec][3]);
	$("#climate").html("Climate:\t" + pplarr[currec][4]);

	currec++;
	if (totrec == currec)
	{
	    $("#btnnext").html("first");
	    currec=0;
	}
	else
	    $("#btnnext").html("next");
}

