import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, } from "chart.js"
import {Line,Doughnut} from 'react-chartjs-2'

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,ArcElement,CategoryScale,
)

 export const LineChart=({dataArray=[]})=> {
   const labels=getLastYearMonth();
   const options={
    responsive:true,
    plugins:{
        legend:{
            position:"bottom"
        },
        title:{
            display:true,text:"Yearly Views"
        }
    }
   };

   const Data={
    labels,
    datasets:[
        {
        label:"Views",
        data:dataArray,
        borderColor:'rgba(107,70,193,0.5)',
        backgroundColor:'#6b46c1'
        }
    ]
   }
  return <Line options={options} data={Data} />  
}


export const DoughnutChart=({users,views})=>{
       const Data={
        labels:['views','users'],
        datasets:[
            {
            label:"Count",
            data:[views,users],
            borderColor:['rgba(214,43,129)','rgba(62,12,171)'],
            backgroundColor:['rgba(214,43,129,0.3)','rgba(62,12,171,0.3)'],
            borderWidth:1,
            }
        ]
       }
       return <Doughnut  data={Data} />
    }


    function getLastYearMonth(){
        const labels=[];

        const months=[
            'January','Fenruary','March','April','May','June',
            'July','August','September','October','November','Decenber'
        ]

        const currentMonth=new Date().getMonth();
        const remain=11-currentMonth;

        for(let i=currentMonth;i<months.length;i--){
            const element=months[i];
            labels.unshift(element);
            if(i===0) break;
        }
        for(let i=11;i>currentMonth;i--){
            if(i===currentMonth) break;
            const element=months[i];
            labels.unshift(element);
            
        }
        return labels;
    }

