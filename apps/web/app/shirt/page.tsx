"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { Filter, Notfound, ShirtCard, type ShirtCardProps, type FiltersProps } from "shared/components";

type StateProps = ShirtCardProps[];

const Shirts = () => {
	const [search, setSearch] = useState({} as FiltersProps);

	const [state, setState] = useState<StateProps>([]);

	useEffect(() => {
		handleFetch();
		// eslint-disable-next-line
	}, [search]);

	const handleFetch = () => {
		const $ = Object.entries(search).filter(([, value]) => value);
		const params = new URLSearchParams($ as string | string[][]).toString();
		const url = `http://localhost:4000/shirts?${params ?? ""}`;
		axios.get(url).then(({ data }) => setState(data));
	};

	return (
		<article className="flex size-full flex-col gap-4 py-4">
			<Filter onFilter={data => setSearch(data)} />
			<section className="flex flex-1 flex-wrap justify-center gap-2 overflow-y-auto">
				{state.length >= 1 ? state?.map(item => <ShirtCard key={item.id} {...item} />) : <Notfound />}
			</section>
		</article>
	);
};

export default Shirts;
