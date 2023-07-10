import { Options } from 'highcharts';

export const oneLineBar: Options = {
  chart: {

    type: 'bar',
    height: 90,
    width:450

  },
  title: {
    text: '',
  },
  xAxis: {
    visible: false,
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    } as any,
    bar:{
      dataLabels: {
        enabled:true},
    }
  },

  series: [
    {
      type: 'bar',
      color: '#7558D8',
      data: [
        { y: 10, name: 'Label 1' },
      ],
    },
    {
      type: 'bar',
      color: '#AC9AED',
      data: [
        { y: 10, name: 'Label 1' },
      ],
    },
    {
      type: 'bar',
      color: '#E2DEF5',
      data: [
        { y: 10, name: 'Label 1' },
      ],
    },
  ],
};
