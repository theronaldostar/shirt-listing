import { useState } from "react";

import { Less, Plus } from "shared/assets/icon";

type InputNumberProps = {
	title?: string;
	placeholder?: string;
	onChange?: (value: number) => void;
};

const InputNumber = (props: InputNumberProps) => {
	const { onChange = () => null, placeholder, title } = props;

	const [state, setState] = useState(0);

	return (
		<div className="flex flex-col gap-1">
			{title && <label className="block text-sm font-medium text-gray-900 dark:text-white">{title}:</label>}
			<div className="relative flex items-center">
				<button
					type="button"
					id="decrement-button"
					onClick={() => setState(prev => prev - 1)}
					data-input-counter-decrement="counter-input"
					className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
					<Less />
				</button>
				<input
					type="text"
					id="counter-input"
					data-input-counter
					className="max-w-[2.5rem] flex-shrink-0 border-0 bg-transparent text-center text-sm font-normal text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
					placeholder={placeholder}
					onChange={({ target: { value } }) => {
						setState(Number(value));
						onChange(state);
					}}
					required
					value={state}
				/>
				<button
					type="button"
					id="increment-button"
					onClick={() => setState(prev => prev + 1)}
					data-input-counter-increment="counter-input"
					className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
					<Plus />
				</button>
			</div>
		</div>
	);
};

export { InputNumber };
