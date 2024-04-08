"use client";
import { useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

import { InputNumber, Notfound, type ShirtCardProps } from "shared/components";
import { blur } from "shared/assets";

const Shirt = () => {
	const { id } = useParams();

	const [state, setState] = useState({
		key: 0,
		data: {} as ShirtCardProps,
	});

	useLayoutEffect(() => {
		handleFetch();
		// eslint-disable-next-line
	}, []);

	const handleFetch = () => {
		const url = `http://localhost:4000/shirts/${id}`;
		axios.get(url).then(({ data }) => setState(prev => ({ ...prev, data })));
	};

	const handleChange = (key: number) => setState(prev => ({ ...prev, key }));

	return state?.data?.id >= 1 ? (
		<section className="flex w-full justify-center">
			<div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
				<div className="flex flex-col items-center gap-4">
					<Image
						alt={state.data.title ?? ""}
						className="rounded-xl"
						width={500}
						height={500}
						placeholder="blur"
						priority
						blurDataURL={blur}
						src={state.data.details?.[state.key].img}
					/>
					<div className="flex justify-center gap-2">
						{state?.data.details?.map(({ img }, key) => (
							<Image
								alt={state?.data.title ?? ""}
								className={`${state.key === key ? "border-primary" : "border-transparent"} cursor-pointer rounded-md border-4`}
								key={key}
								width={60}
								height={60}
								priority
								onClick={() => handleChange(key)}
								placeholder="blur"
								blurDataURL={blur}
								src={img}
							/>
						))}
					</div>
				</div>

				<div className="max-w-120 flex w-4/5 flex-col gap-4 max-md:p-4">
					<div className="flex flex-col gap-2">
						<label className="text-3xl font-bold">{state.data.title}</label>
						<label className="text-xl font-bold">
							{Number(state.data?.price)?.toLocaleString("en-US", { style: "currency", currency: "USD" })}
						</label>
						<label className="text-sm">Description</label>
						<label className="text-sm">{state.data.description}</label>
					</div>

					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							{state.data.details?.map(({ hex }, key) => (
								<button
									key={key}
									onClick={() => handleChange(key)}
									className={`${state.key === key ? "border-primary" : "border-transparent"} h-8 w-8 rounded-full border-4 shadow-xl`}
									style={{ backgroundColor: hex }}
								/>
							))}
						</div>

						<div className="flex flex-wrap gap-2">
							{state.data.details?.[state.key]?.sizes?.map((text, i) => (
								<label className="bg-tertiary dark:bg-dark-tertiary cursor-pointer rounded px-2 font-semibold" key={i}>
									{text}
								</label>
							))}
						</div>

						<InputNumber title="Choose quantity" onChange={value => console.log(value)} />
					</div>

					<div className="flex items-center gap-x-4 font-semibold">
						<button className="rounded-md border border-pink-600 px-5 py-2 text-pink-600 transition hover:bg-pink-600 hover:text-white active:scale-90">
							Favorites
						</button>
						<button className="rounded-md border border-purple-600 px-5 py-2 text-purple-600 transition hover:bg-purple-600 hover:text-white active:scale-90">
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</section>
	) : (
		<Notfound />
	);
};

export default Shirt;
