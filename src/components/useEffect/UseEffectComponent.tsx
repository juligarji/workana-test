import { Component } from "react";

type Props = {
	callback: Function;
	dependencies: any;
};

class UseEffectComponent extends Component<Props> {
	componentDidMount() {
		this.props.callback();
	}

	componentDidUpdate(prevProps: any) {
		// Comparing last props with new ones, just like useEffect after the update
		if (JSON.stringify(this.props.dependencies) !== JSON.stringify(prevProps.dependencies)) {
			this.props.callback();
		}
	}

	render() {
		return null;
	}
}

export default UseEffectComponent;
