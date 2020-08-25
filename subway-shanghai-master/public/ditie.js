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
            .attr("r", 5)
            .attr("fill", s.attr("stroke"))
            .style('opacity', 0.7);
    });

    g2.selectAll("image").each(function (d, i) {
        var s = d3.select(this);
        var cx = String(Number(s.attr("x")) + 8);
        var cy = String(Number(s.attr("y")) + 8);
        g2.append("circle").attr("sid", s.attr("dataid"))
            .attr("statid", s.attr("statid"))
            .attr("class", 't')
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("r", 5)
            .attr("fill", "#a1afc9")
            .style('opacity', 0.7);
        console.log(cx);
    });
}


function run() {
    $.ajax({
        url: "0401.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data)
        },
    })
}