d3.csv("data/Suicides_in_India_2001-2012.csv", function(error, Suicides_in_India) {
  if (error) return console.error(error);
  console.log(Suicides_in_India);
   // Coerce data values to be numeric
   Suicides_in_India.forEach(function(d) {
    d3.keys(d).forEach(function(k){
      if(k != "Gender"){
        d[k] = +d[k]
      }
    })
  });
  
  // Filter out US total values
  Suicides_in_India = Suicides_in_India.filter(function(d){
    return d.Gender != "India-Total"
  })
  
  make_viz(Suicides_in_India);
});

function make_viz(data){
    var visualization = d3plus.viz()
        .container("#viz")
        .data(data)
        .type("tree_map")
        .id("Gender")
        .tooltip("Hi")
        .size("Total")
        .time("Year")
        .draw()
  }

// STATE, GENDER, AGE_GROUP, TYPE