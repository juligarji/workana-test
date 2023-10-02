import { useCallback, useState } from "react";

const useCounter = () => {
	const [counter, setCounter] = useState<number>(0);

	const plusCounter = useCallback(() => {
		setCounter((counter) => counter + 1);
	}, []);
	const resetCounter = useCallback(() => {
		setCounter(0);
	}, []);

	return {
		counter,
		plusCounter,
		resetCounter,
	};
};

export default useCounter;
