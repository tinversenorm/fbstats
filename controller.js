var app = new Vue({
	el: '#app',
    data: {
        labels: [],
        values: []
    },
	methods: {
		createBarChart: function(chartId, chartData) {
			var ctx = document.getElementById(chartId).getContext('2d');
			var myChart = new Chart(ctx, {
		    	type: 'bar',
		    	data: {
		        	labels: chartData.labels,
		        	datasets: [genDataset(chartData)]
		    	},
			    options: defaultOptions
			});
		},
        topPosters: function(groupId) {
            let self = this;
            FB.api("/" + groupId + "/feed",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                    }
                }
            );
        }
    },
    mounted() {
        let self = this;
        init_fb_api();
        document.onreadystatechange = () => { 
            if (document.readyState == "complete") { 
                // run code here
                self.createBarChart("myChart", {
                    labels: self.labels,
                    values: self.values
                });
            } 
        }
    },
});