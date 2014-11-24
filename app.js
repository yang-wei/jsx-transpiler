var render = function(component) {
	React.render(component, document.body);
};

var APP = React.createClass({
	render: function() {
		return (
			<div className="title">
				Hello !!!
			</div>
		);
	}
});

render(<APP />);