let data, output;
function init_ana(){
	$.ajaxSetup({async: false});
	let link = "https://data.cityofnewyork.us/resource/f7b6-v6v3.json";
	data = $.getJSON(link).responseJSON;
  console.log(data);
}

let subdata;
/*
function displayPolarAreaChart(data, outputId){
	c3.generate({
		bindto: `#${outputId}`,
		data: {
			columns: data, 
			type: 'donut',
		},
		donut: {
			title: 'Polar Area Chart'
		}
	});
}

function displayAreaChart(data, outputId){
	c3.generate({
		bindto: `#${outputId}`,
		data: {
			columns: data, 
			type: 'area',
		},
		area: {
			zerobased: false,
		}
	});
}

	function displayLineChart(data, outputId){
		c3.generate({
        bindto: `#${outputId}`,
        data: {
            columns: data,
            type: 'line',
        }
    });
	}
*/
function filterByBorough(){
	let br = 0, bx = 0, mn = 0, qn = 0, si = 0;

  for(let i=0;i<data.length; i++){
		let hospital = data[i];
		let borough = hospital.borough;
    
	 // let boro = data[i];
  	if (borough == "Bronx"){
  		  bx++;
  		} else if(borough == "Brooklyn"){
  			br++;
  		} else if (borough == "Manhattan"){
  			mn++;
  		}else if (borough == "Queens"){
  			qn++;
  		} else if(borough == "Staten Island"){
  			si++;
  		}
  }

  let chartData = [
  ["Bronx hospitals", bx],
  ["Brooklyn hospitals", br],
  ["Manhattan hospitals", mn],
  ["Queens hospitals", qn],
  ["Staten Island hospitals", si]
  ];

  let chartType = get("chartType").value;
  displayChart(chartData, "output", chartType);
	
	 let b = "bar", p = "pie", d = "donut", pa = "polar_area", a = "area", l = "line";
	 if(chartType == b){
	 	get("chart_type_display").innerHTML = "oompa loompa"
	 }else if(chartType == p){
	 	get("chart_type_display").innerHTML = "doompa dee doop"
	 }
	 else if(chartType == d){
	 	get("chart_type_display").innerHTML = "oompa loompa "
	 }
	 else if(chartType == pa){
	 	get("chart_type_display").innerHTML = "doompa dee dee"
	 }
	 else if(chartType == a){
	 	get("chart_type_display").innerHTML = "doompa dee dee"
	 }
	else if(chartType == l){
		get("chart_type_display").innerHTML = "werty"
	}
	
	
}
function chartByOtherStats(type){
  let council_district = ["Council District", ];
  let community_board = ["Community Board", ];
  let census_tract = ["Census Tract", ];

  for(let i=0; i<data.length;i++){
    council_district.push(parseInt(data[i].council_district));
    community_board.push(parseInt(data[i].community_board));
    census_tract.push(parseInt(data[i].census_tract));
  }

  let myData = [];
  console.log(myData);
  if(get('cdID').checked == true){
    myData.push(council_district);
    displayChart(myData, "output2", type);
  }
  if(get('cbID').checked == true){
    myData.push(community_board);
    displayChart(myData, "output2", type);
  }
  if(get('ctID').checked == true){
    myData.push(census_tract);
    displayChart(myData, "output2", type);
  }
}

/*function chartByOtherStats(type){
  let council_district = ["Council District", ];
  let community_board = ["Community Board", ];
  let census_tract = ["Census Tract", ];

  for(let i=0; i<data.length;i++){
    council_district.push(parseInt(data[i].council_district));
    community_board.push(parseInt(data[i].community_board));
    census_tract.push(parseInt(data[i].census_tract));
  }

  let myData = [];
  console.log(myData);
  if(get('cdID').checked == true){
    myData.push(council_district);
    displayChart(myData, "output2", type);
  }
  if(get('cbID').checked == true){
    myData.push(community_board);
    displayChart(myData, "output2", type);
  }
  if(get('ctID').checked == true){
    myData.push(census_tract);
    displayChart(myData, "output2", type);
  }
}*/
