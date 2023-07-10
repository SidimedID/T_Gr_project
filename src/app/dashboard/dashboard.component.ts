import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faMessage, faUsers,faUser, faHome, faSignOut, faHouseLock, faBan, faSchoolCircleCheck, faPersonChalkboard, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'angular-highcharts';
import { oneLineBar } from './oneBarChart';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faMessage = faMessage;
  faUsers = faUsers;
  faHouseLock = faHouseLock;
  faBan = faBan;
  faSchoolCircleCheck = faSchoolCircleCheck;
  faPersonChalkboard = faPersonChalkboard;
  faPersonWalkingLuggage = faPersonWalkingLuggage;
  faSignOut = faSignOut;
  faUser = faUser ;
  faHome = faHome; 

  donchart = new Chart({
    chart: {
      type: 'pie',
      height: 300,
      width: 300,
    },
    colors: [ '#BBACEF','#E2DEF7','#715DC6'],
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    title: {
      text: ''
    },
    subtitle: {

      verticalAlign: 'middle',
    floating: true,
    text: '5,824,213',
    style: {
      fontWeight: '900',
      fontSize: 20,
      color:'#1E2838'
    }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '75%',
        dataLabels: {
          enabled:false},
        showInLegend: false
      }
    },
    series: [
      {
        type: "pie",
        color: '#393479',
        opacity: 1,
        data: [30, 10,60],
      },
    ],
    credits: {
      enabled: false
    }
  });


  bar = new Chart(oneLineBar)


  chart = new Chart({
    chart: {
      styledMode: false,
      backgroundColor:'transparent',
      type: 'spline',
      height: 325,
      plotShadow:false,
    },
    title: {
      text: '',
      style: {
      color: '#67748E',
      fontWeight:'500'
      }
    },
    xAxis: {
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
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Performance'
      }
    },
    defs:{
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [
          {
            tagName: 'stop',
            offset: 0
          },
          {
            tagName: 'stop',
            offset:0
          }
        ]

      }
    } as any,
    series: [
      { name: '',
        marker: {
        enabled: false
      },
        type: "areaspline",
        color: '#603BAF',
        opacity: 0.5,
        data: [2, 60, 55, 70, 20, 40, 35, 60, 100, 70, 100, 256],
        showInLegend: false,
      },
    ],
    credits: {
      enabled: false
    }
  });

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver) {}

}
