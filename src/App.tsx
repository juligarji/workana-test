import { useCallback, useState } from "react";
import "./App.css";
import { UseEffectComponent } from "./components/useEffect";
import { useCounter } from "./hooks/useCounter";

function App() {
	const { counter, plusCounter, resetCounter } = useCounter();
	const [showMessage, setShowMessage] = useState<boolean>(true);

	const callBackFunction = useCallback(() => {
		setShowMessage(true);
		setTimeout(() => {
			setShowMessage(false);
		}, 600);
	}, []);

	return (
		<div>
			<p>
				<h2> {counter} </h2>
				<button disabled={showMessage} onClick={plusCounter}>
					Add 1 to Counter
				</button>
				<button disabled={showMessage} onClick={resetCounter}>
					Reset Counter
				</button>
				{showMessage && <p className="alert-message"> Wow counter just changed </p>}
			</p>
			<UseEffectComponent callback={callBackFunction} dependencies={counter} />
		</div>
	);
}

export default App;
