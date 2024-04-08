import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { blur } from "shared/assets";

type ShirtCardProps = {
	id: number;
	title: string;
	description: string;
	price: number;
	sex?: string;
	details: {
		color: string;
		img: string;
		hex: string;
		sizes: string[];
	}[];
};

const ShirtCard = (props: ShirtCardProps) => {
	const { title, description, price, details } = props;

	const { push } = useRouter();

	const [state, setState] = useState(0);

	const handleClick = () => push(`/shirt/${props.id}`);

	return (
		<section className="max-md:w-94p bg-secondary dark:bg-dark-secondary h-110 flex w-60 flex-col justify-between gap-4 rounded-2xl p-2">
			<header className="flex justify-center">
				<Image
					alt=""
					blurDataURL={blur}
					className="cursor-pointer rounded-xl"
					width={220}
					height={220}
					onClick={handleClick}
					placeholder="blur"
					priority
					src={props.details[state].img}
				/>
			</header>

			<main className="flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<label className="cursor-pointer truncate text-lg font-semibold" onClick={handleClick} title={title}>
						{title}
					</label>
					<label className="bg-tertiary dark:bg-dark-tertiary rounded-full px-2 text-sm font-semibold">
						{Number(price).toLocaleString("en-US", { style: "currency", currency: "USD" })}
					</label>
				</div>

				<label className="truncate" title={description}>
					{description}
				</label>

				<div className="flex flex-wrap gap-1">
					{details[state].sizes.map((item, i) => (
						<label className="bg-tertiary dark:bg-dark-tertiary cursor-pointer rounded px-2 font-semibold" key={i}>
							{item}
						</label>
					))}
				</div>
			</main>

			<footer className="flex flex-col gap-1">
				<label>
					Color: <label className="font-semibold">{details[state].color}</label>
				</label>
				<div className="flex gap-2">
					{details.map(({ color, hex }, i) => (
						<div
							key={i}
							className={`${state === i ? "border-slate-200" : "border-transparent"} h-6 w-6 cursor-pointer rounded-full border-2`}
							title={color}
							onClick={() => setState(i)}
							style={{ backgroundColor: hex }}
						/>
					))}
				</div>
			</footer>
		</section>
	);
};

export { ShirtCard, type ShirtCardProps };
