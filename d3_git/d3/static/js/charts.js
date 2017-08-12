var MyD3Vis = React.createClass({

    render: function() {
      return (
        <div>
          <svg width={this.props.width}
               height={this.props.height}
               ref="container">
          </svg>
        </div>
      );
    },

    componentDidMount: function() {
      this.container = d3.select(ReactDOM.findDOMNode(this.refs.container));

      this.shouldComponentUpdate(this.props);

      this.interval = setInterval(function (){
        console.log("D3 graphic active at " + new Date());
      }, 1000);
    },

    shouldComponentUpdate() {
      this.renderCircles();
      this.renderLines();
    },

    renderCircles: function (){
      var circles = this.container
        .selectAll("circle")
          .data(this.props.data);
      circles.exit().remove();
      circles
        .enter().append("circle")
          .attr("r", 50)
        .merge(circles)
          .transition().duration(800)
          .attr("cx", function (d){ return d.x; })
          .attr("cy", function (d){ return d.y; });
    },

    renderLines: function (){
      var {width, height} = this.props;
      var lines = this.container.selectAll("line").data([
        {x1: 0, y1: 0, x2: width, y2: height},
        {x1: 0, y1: height, x2: width, y2: 0}
      ]);
      lines.enter()
        .append("line")
          .style("stroke-width", 50)
          .style("stroke-opacity", 0.4)
          .style("stroke", "black")
        .merge(lines)
          .attr("x1", function (d) { return d.x1; })
          .attr("y1", function (d) { return d.y1; })
          .attr("x2", function (d) { return d.x2; })
          .attr("y2", function (d) { return d.y2; });
    },
    componentWillUnmount: function (){
      clearInterval(this.interval);
    }
  });

  var width = 200,
      height = 200,
      data = [
        { x: 50, y: 50 },
        { x: 100, y: 100 }
      ],
      show = true;

  function render(){

    var chartDiv = document.getElementById("chart");

    width = chartDiv.clientWidth;
    height = chartDiv.clientHeight;

    if(show){
      ReactDOM.render(
        <MyD3Vis width={width} height={height} data={data} />,
        chartDiv
      );
    } else {
      ReactDOM.render(
        <h1>Press any key to show graphic.</h1>,
        chartDiv
      );
    }

  }

  render();

  setInterval(function (){
    data[0].x = Math.round(Date.now() / 50 % width);
    data[0].y = Math.round(Date.now() / 10 % height);
    data[1].x = Math.round(Date.now() / 60 % width);
    data[1].y = Math.round(Date.now() / 70 % height);
    render();
  }, 1000);

  window.addEventListener("resize", render);

  window.addEventListener("keyup", function(){
    show = !show;
    render();
  });
