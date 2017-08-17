$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Cases: 2666,
        }, {
            period: '2010 Q2',
            Cases: 2778,
        }, {
            period: '2010 Q3',
            Cases: 4912,
        }, {
            period: '2010 Q4',
            Cases: 3767,
        }, {
            period: '2011 Q1',
            Cases: 6810,
        }, {
            period: '2011 Q2',
            Cases: 5670,
        }, {
            period: '2011 Q3',
            Cases: 4820,
        }, {
            period: '2011 Q4',
            Cases: 15073,
        }, {
            period: '2012 Q1',
            Cases: 10687,
        }, {
            period: '2012 Q2',
            Cases: 8432,
        }],
        xkey: 'period',
        ykeys: ['Cases'],
        labels: ['Cases'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         y: '2006',
    //         a: 100,
    //         b: 90
    //     }, {
    //         y: '2007',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2008',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2009',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2010',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2011',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2012',
    //         a: 100,
    //         b: 90
    //     }],
    //     xkey: 'y',
    //     ykeys: ['a', 'b'],
    //     labels: ['Series A', 'Series B'],
    //     hideHover: 'auto',
    //     resize: true
    // });

});
