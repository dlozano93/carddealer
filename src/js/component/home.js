import React, { useState } from "react";
import props from "prop-types";
export function Home() {
	const [list, setList] = useState([]);
	const cards = {
		suits: [1, 2, 3, 4],
		value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
	};
	const repeats = (suit, value, arr) => {
		return arr.find(e => e.suit === suit && e.value === value) === undefined
			? false
			: true;
	};
	const setSuit = num =>
		num === 1 ? "♠" : num === 2 ? "♥" : num === 3 ? "♣" : "♦";
	const setValue = num =>
		num === 1
			? "A"
			: num === 11
				? "J"
				: num === 12
					? "Q"
					: num === 13
						? "K"
						: num;
	const ran = range => Math.floor(Math.random() * range);
	function deal(q) {
		let arr = [];
		for (let i = 0; i < q; i++) {
			let suit = cards.suits[ran(4)];
			let value = cards.value[ran(13)];
			while (repeats(suit, value, arr)) {
				suit = cards.suits[ran(4)];
				value = cards.value[ran(13)];
			}
			arr.push({
				suit: setSuit(suit),
				value: setValue(value)
			});
		}
		setList(arr);
	}
	console.log(list);
	return (
		<div className="row">
			<div className="col-sm-2 bg-success" />
			<div className="col bg-danger justify-content-around text-center">
				{list.map((item, index) => {
					return (
						<div
							className="poker d-inline-block border bg-light p-1 rounded-sm my-5 py-5 px-5 mx-5"
							key={index}>
							<div
								className=" d-flex justify-content-between pb-5"
								key={item}>
								<span>{suit.props}</span>
								<span>{value.props}</span>
							</div>
							<div
								className="rotate align-self-end d-flex justify-content-between pt-5 "
								key={item}>
								<span>{suit.props}</span>
								<span>{value.props}</span>
							</div>
						</div>
					);
				})}
			</div>
			<div className="col-sm-2 bg-warning">
				<div className="input-group my-5 py-5 sm-3">
					<input
						onKeyPress={e => {
							if (e.key === "Enter") {
								deal(Number(e.target.value));
							}
						}}
						className="form-control"
						placeholder="Enter number"
					/>
					<span className="input-group-text" id="basic-addon1">
						Deal this many cards
					</span>
				</div>
			</div>
		</div>
	);
}
