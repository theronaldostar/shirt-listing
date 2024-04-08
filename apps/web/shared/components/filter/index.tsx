import { useState, type ChangeEvent } from "react";

import { InputRadio, Search } from "shared/components";

type FiltersProps = {
	price_lte: number;
	q: string;
	sex: string;
};

type FilterProps = {
	onFilter: (data: FiltersProps) => void;
};

const Filter = (props: FilterProps) => {
	const { onFilter } = props;

	const [filter, setFilter] = useState<FiltersProps>({
		price_lte: 0,
		q: "",
		sex: "",
	});

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFilter(prev => ({ ...prev, [name]: value }));
	};

	return (
		<header className="flex w-full items-center justify-center overflow-hidden">
			<nav className="max-sm:w-94p max-w-120 bg-secondary dark:bg-dark-secondary flex w-full flex-col gap-2 rounded-md p-2">
				<Search onChange={value => setFilter(prev => ({ ...prev, q: value }))} onSubmit={() => onFilter(filter)} />

				<div className="flex flex-wrap items-center gap-2">
					<InputRadio
						itens={[
							{ title: "All", value: "" },
							{ title: "Men", value: "male" },
							{ title: "Women", value: "female" },
						]}
						onChange={value => setFilter(prev => ({ ...prev, sex: value }))}
					/>

					<div className="flex flex-col">
						<label className="cursor-pointer text-sm font-semibold leading-none">
							Price: {Number(filter.price_lte).toLocaleString("en-US", { style: "currency", currency: "USD" })}
						</label>
						<input name="price_lte" min={0} max={1000} onChange={handleChange} type="range" value={filter.price_lte} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export { Filter, type FilterProps, type FiltersProps };
