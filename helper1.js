/*
function init_ana(){
	$.ajaxSetup({async: false});
	let link = "https://data.cityofnewyork.us/resource/f7b6-v6v3.json";
	data = $.getJSON(link).responseJSON;
  console.log(data.length);
}
function exploringCharts(){
  init_ana();
 var chart = c3.generate({
    bindto: '#chartCanvas',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      type: 'pie'
    }
});
}*/

function card(hospital_data){
    let build = "";
    build += `<div class="card container">`
    build += `<h3>Hospital Name: ${hospital_data.facility_name}</h3>`;
    build += `<p>Borough: ${hospital_data.borough}</p>`;
    build += `<p>Address: ${hospital_data.facility_address}</p>`;
    build += `<p>Phone: ${hospital_data.phone}</p>`;
    build += `<p>Zip Code: ${hospital_data.zip_code}</p>`;
    build += `</div>`;
    return build;
  }
  
  function cards(){
    let build = ""
    for(let i=0; i<data.length;i++){
      build += card(data[i])
    }
    return build;
  }
  
  function get(id){
    return document.getElementById(id);
  }
  
  
  function displayChart( data, id, type ){
    c3.generate({
      bindto: '#' + id,
      data: {
        columns: data,
        type:type
      }
    });
  }
  
  /*
  function card(hospital_data){
    let build = "";
    build += `<div class="card container">`
    build += `<h3>Hospital Name: ${hospital_data.facility_name}</h3>`;
    build += `<p>Borough: ${hospital_data.borough}</p>`;
    build += `<p>Address: ${hospital_data.facility_address}</p>`;
    build += `<p>Phone: ${hospital_data.phone}</p>`;
    build += `<p>Zip Code: ${hospital_data.zip_code}</p>`;
    build += `</div>`;
    return build;
  }
  
  function cards(){
    let build = ""
    for(let i=0; i<data.length;i++){
      build += card(data[i])
    }
    return build;
  }
  
  function get(id){
    return document.getElementById(id);
  }
  
  function filter(data, key, value){
    let list = [];
    for(let i = 0; i < data.length; i++){
      let restaurant = data[i];
      if(restaurant[key] == value){
        list.push( restaurant );
      }
    }
    return list;
  }
  
  function displayChart( data, id, type ){
    let chart = c3.generate({
      bindto: '#' + id,
      data: {
        columns: data,
        type:type
      }
    });
  }*/
  //just trying things out 