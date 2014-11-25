/* React v0.12.1 */
(function(window) {

'use strict';

var render = function(component) {
	React.render(component, document.body);
};

var APP = React.createClass({
	getInitialState: function() {
		return {
			input: '<div>Hello JSX !</div>',
			output: '',
			error: ''
		}
	},
	sync: function(e) {
		var code = e.target.value;
		try {
			this.setState({
				output: JSXTransformer.transform(code).code,
				error: ''
			})
		} catch(error) {
			console.log(error.message);
			this.setState({
				error: error.message
			});
		}
	},
  componentDidMount: function() {
   this.setState({
    output: JSXTransformer.transform(this.state.input).code
   }) 
  },
	render: function() {
		return (
			<div className="main-container">
				<div className="pure-g">
						<div className="pure-u-1-2">
							<textarea defaultValue={this.state.input} onChange={this.sync}></textarea>
						</div>
						<div className="pure-u-1-2 code-output">
							<pre>{this.state.output}</pre>
						</div>
				</div>
				<div className="pure-g">
					<div className="pure-u-1 alert-msg">
						<p>&nbsp;{this.state.error}</p>
					</div>
				</div>
			</div>
		);
	}
});

render(<APP />);

})(window, undefined);
