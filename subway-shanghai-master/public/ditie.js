function createAllcirlce() {
    var gs = document.getElementsByTagName('g');
    gs[2].id = "g2";
    var g2 = d3.select("#g2");
    console.log("asd");
    g2.selectAll("circle").each(function (d, i) {
        var s = d3.select(this);
        g2.append("circle").attr("sid", s.attr("id"))
            .attr("statid", s.attr("statid"))
            .attr("class", 't')
            .attr("cx", s.attr("cx"))
            .attr("cy", s.attr("cy"))
            .attr("r", 10)
            .attr("fill", s.attr("stroke"))
            .style('opacity', 0.7);
    });
}