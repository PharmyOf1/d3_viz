// // set the dimensions and margins of the graph
//  $(document).ready(function() {
//
// var margin = {top: 20, right: 20, bottom: 30, left: 50},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;
//
// // parse the date / time
// var parseTime = d3.timeParse("%Y-%m-%d");
//
// // set the ranges
// var x = d3.scaleTime().range([0, width]);
// var y = d3.scaleLinear().range([height, 0]);
//
// // define the line
// var area = d3.area()
//     .x(function(d) { return x(d.date); })
//     .y1(function(d) { return y(d.close); });
//
// // append the svg obgect to the body of the page
// // appends a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var svg = d3.select(".area_chart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
// // Get the data
// d3.csv("{% static "data_file" %}", function(error, data) {
//   if (error) throw error;
//
//   // format the data
//   data.forEach(function(d) {
//       d.date = parseTime(d.date);
//       d.close = +d.close;
//   });
//
//   // Scale the range of the data
//   x.domain(d3.extent(data, function(d) { return d.date; }));
//   y.domain([0, d3.max(data, function(d) { return d.close; })]);
//   area.y0(y(0));
//
//   // Add the valueline path.
//   svg.append("path")
//       .data([data])
//       .attr("fill", "steelblue")
//       .attr("d", area);
//
//   // Add the X Axis
//   svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x));
//
//   // Add the Y Axis
//   svg.append("g")
//   .call(d3.axisLeft(y))
//   .append("text")
//     .attr("fill", "#000")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", "0.71em")
//     .attr("text-anchor", "end")
//     .text("Sales (CSE)");
//
// });
//
// });
