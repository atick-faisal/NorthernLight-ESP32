import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarPlot extends Component {

    // create the x-axis labels
    createlabels() {
		let len = this.props.values.length;
		let labels = [];
		for(let i = 0; i < len; i++) {
			labels[i] = this.props.time[i].substring(11, 16);
		}
		return labels;
	}

    getHeight() {
        if (this.props.height === undefined) {
            return 220
        }
        else {
            return this.props.height
        }
    }

    render() {
        // background colors for the bars
        let backgroundColor = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ];
        // border colors for the bars
        let borderColor = [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)'
        ];
        return(
            <div className="card">
                <h3>{this.props.title + ': ' + this.props.values[this.props.values.length - 1]}</h3>
                <div className="chart" height="600px">
                    <Bar data = {{
                        labels: this.createlabels(),
                        datasets: [
                        // uncomment this to get a line chart
                        // ---------------------------------------------//
                        // {
                        //     type: 'line',
                        //     label: 'null',
                        //     data: this.props.values,
                        //     borderColor: 'rgba(2, 136, 209, 0.5)',
                        //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        //     borderWidth: 2
                        // }, 
                        //-----------------------------------------------//
                        {
                            type: 'bar',
                            label: this.props.title,
                            data: this.props.values,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1
                        }
                    ]}}
                    height={this.getHeight()}
                    options = {{
                        responsive: true,
                        responsiveAnimationDuration: 400,
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{ 
                                gridLines: {
                                    display: false,
                                    color: "#666"
                                },
                                ticks: {
                                    fontColor: "#999"
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: false,
                                    color: "#666"
                                },
                                ticks: {
                                    min: 10,
                                    max: 100,
                                    fontColor: "#999"
                                    },
                            }],
                        }
                    }}/>
                </div>
            </div>
        )
    }
}

export default BarPlot;