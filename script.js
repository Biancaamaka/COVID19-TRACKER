 let countries=[]
 
 
 
 $.ajax({
    url:"https://api.covid19api.com/summary",
    type:"get",
    dataType: "json",

    success: function(response){
      countries= response.Countries;
      updateTables(countries)
      console.log(response)
    },
    error: function(error){
      console.log(error)
    },
    always: function(){}
})

updateTables=(countries)=> {
    for(country of countries){
        let newrow="<tr><td>"+country.Country+"</td><td>"+country.TotalConfirmed+"</td><td>"+country.TotalRecovered+"</td><td>"+country.TotalDeaths+"</td></tr>"
        $("#tablebody").append(newrow);
    }
    $("#covidtable").DataTable();
}