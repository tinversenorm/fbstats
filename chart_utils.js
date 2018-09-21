var colorStarters = {
	red: 'rgba(255, 99, 132, ',
	blue: 'rgba(54, 162, 235, ',
	yellow: 'rgba(255, 206, 86, ',
	green: 'rgba(75, 192, 192, ',
	purple: 'rgba(153, 102, 255, ',
	orange: 'rgba(255, 159, 64, '
}

function genColors(alpha, len) {
	var colorStarterKeys = Object.keys(colorStarters);
	var colors = [];
	for (x = 0; x < len; x++) {
		colors.push(colorStarters[
			colorStarterKeys[x % colorStarters.length]] 
			+ alpha.toString() + ')');
	}
	return colors;
}

function genDataset(chartData) {
	return {
		label: '# of Votes',
		data: chartData.values,
		backgroundColor: genColors(0.2, chartData.labels.length),
		borderColor: genColors(1, chartData.labels.length),
		borderWidth: 1
	}
}

function defaultOptions() {
    return {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}