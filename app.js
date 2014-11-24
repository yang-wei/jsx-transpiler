var render = function(component) {
	React.render(component, document.body);
};

var APP = React.createClass({
	getInitialState: function() {
		return {
			input: '',
			output: '',
			error: ''
		}
	},
	sync: function(e) {
		var code = e.target.value;
		try {
			this.setState({
				output: code,
				error: ''
			});
		} catch(error) {
			this.setState({
				error: error.message
			});
		}
	},
	render: function() {
		return (
			<div className="pure-g">
				<div className="pure-u-1-2">
					<textarea defaultValue={this.state.input} onChange={this.sync}></textarea>
				</div>
				<div className="pure-u-1-2">
					<pre>{this.state.output}</pre>
				</div>
			</div>	
		);
	}
});

render(<APP />);