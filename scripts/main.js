//Line Graph//
Highcharts.chart('container', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Estimated Economic Assitance for the Top 5 War Torn Countries'
  },
  subtitle: {
    text: 'Source: <a href = "https://explorer.usaid.gov/data">US Aid Gov</a>'
  },
  xAxis: {
    categories: ['1990', '2010', '2017'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Millions'
    },
    labels: {
      formatter: function() {
        return this.value / 1000;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: 'Millions'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  series: [{
    name: 'Afghanistan',
    data: [15.22, 4076.315, 1309.874]
  }, {
    name: 'Iraq',
    data: [0, 1022, 734.55]
  }, {
    name: 'Syria',
    data: [0, 22.39, 816.52]
  }, {
    name: 'Ukraine',
    data: [.13, 284.51, 256.43]
  }, {
    name: 'Yemen',
    data: [43.67, 108.75, 594.9]
  }]
});


//Bar Chart//
Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'US Foreign Aid Allocated by Top Sectors in 2017'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Afghanistan', 'Iraq', 'Syria', 'Ukraine', 'Yemen'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Money (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' million'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 300,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Conflict, Peace and Society',
        data: [4500, 3100, 43, 270, 4.8]
    }, {
        name: 'Government and Civil Society',
        data: [509, 95, 8.9, 61, 8.7]
    }, {
        name: 'Emergency Response',
        data: [145, 539, 834, 27, 617]
    }]
});
