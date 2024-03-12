import { unitRate } from "./unitRate";
const WapdaRates = () => {
    
	return (
		<div className="container w-56 bg-red-400">
			{unitRate.map((rate, index) => {
				return (
					<div key={index} className="flex justify-between">
						<p>{rate.unit}</p>
						<p>{rate.rate}</p>
					</div>
				);
			})}
		</div>
	);
};

export default WapdaRates;
