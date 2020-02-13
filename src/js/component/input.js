import React, { useState } from "react";

export function Input() {
	return (
		<div className="input-group my-5 py-5 sm-3">
			<input
				//value={todo}
				//onChange={e => setTodo(e.target.value)}
				//onKeyPress={e => {
				//	if (e.key === "Enter") {
				//		setList(list.concat(todo));
				//		setTodo("");
				//	}
				//}}
				type="text"
				className="form-control"
				placeholder="Enter number"
			/>
			<span class="input-group-text" id="basic-addon1">
				Deal this many cards
			</span>
		</div>
	);
}
