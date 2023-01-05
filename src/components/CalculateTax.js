const CalculateTax = ({ tax, taxSubTotal, setTax, setTaxSubtotal, grandTotal, setGrandTotal }) => {
	const handleChange = (e) => {
		const value = e.target.value;

		switch (e.target.id) {
			case 'taxInput':
				setTax(value);
				break;
			case 'taxSubInput':
				setTaxSubtotal(value);
		}

		if (tax && taxSubTotal) {
			setGrandTotal((parseFloat(tax) + parseFloat(taxSubTotal)).toFixed(2));
		}
	};
	return (
		<form className="add-tax">
			<div className="">
				<h3>Tax</h3>
			</div>
			<div className="">
				<label htmlFor="taxSubInput">Total *</label>
				<input
					type="number"
					id="taxSubInput"
					className=""
					placeholder="$ XX.XX"
					value={taxSubTotal}
					onChange={handleChange}
				/>
			</div>
			<div className="">
				<label htmlFor="taxInput">Tax *</label>
				<input
					type="number"
					id="taxInput"
					className=""
					placeholder="$ XX.XX"
					value={tax}
					onChange={handleChange}
				/>
			</div>
			{grandTotal ? (
				<span className="">
					Grand Total: <b>${grandTotal}</b>
				</span>
			) : (
				<span className="">Not yet calculated. Fill Total and Tax above</span>
			)}
		</form>
	);
};

export default CalculateTax;
