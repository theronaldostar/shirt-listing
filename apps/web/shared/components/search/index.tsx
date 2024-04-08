import type { ChangeEvent } from "react";

import { MagnifyingGlass } from "shared/assets/icon";

type SearchProps = {
	buttonText?: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
	placeholder?: string;
};

type ChangeProps = ChangeEvent<HTMLInputElement>;

const Search = (props: SearchProps) => {
	const { buttonText, onChange, onSubmit, placeholder } = props;

	const handleChange = ({ target }: ChangeProps) => {
		const { value } = target;
		onChange?.(value);
	};

	return (
		<div className="flex gap-2">
			<div className="bg-tertiary dark:bg-dark-tertiary flex w-full items-center gap-2 rounded-lg px-2 py-1">
				<MagnifyingGlass />
				<input
					className="w-full bg-transparent text-slate-900 outline-none dark:text-slate-200"
					onChange={handleChange}
					placeholder={placeholder ?? "Search..."}
					type="text"
				/>
			</div>

			<button
				className="flex items-center gap-2 rounded-lg bg-blue-600 px-2.5 text-sm font-medium text-white transition hover:bg-blue-800 active:scale-90"
				onClick={onSubmit}>
				{buttonText ?? "Search"}
			</button>
		</div>
	);
};

export { Search, type SearchProps };
