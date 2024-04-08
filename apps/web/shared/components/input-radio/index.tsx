import { useState } from "react";

type InputRadioProps = {
	itens: { title: string; value: string }[];
	onChange: (value: string) => void;
};

const InputRadio = (props: InputRadioProps) => {
	const { itens, onChange } = props;

	const [state, setState] = useState(0);

	return (
		<div className="bg-tertiary dark:bg-dark-tertiary flex flex-wrap items-center justify-around gap-2 rounded-lg p-2">
			{itens.map(({ title, value }, i) => (
				<div className="flex items-center gap-1" key={i}>
					<input
						id={title}
						onClick={() => setState(i)}
						onChange={() => onChange(value)}
						type="radio"
						value={value}
						name={title}
						className="h-4 w-4 cursor-pointer"
						checked={state === i}
					/>
					<label className="leading-md cursor-pointer text-sm leading-none" htmlFor={title}>
						{title}
					</label>
				</div>
			))}
		</div>
	);
};

export { InputRadio, type InputRadioProps };
