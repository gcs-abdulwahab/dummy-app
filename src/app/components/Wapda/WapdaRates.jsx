const WapdaRates = ( ) => {


    const unitRate = [
        {
            unit: 100,
            rate: 10,
        },
        {
            unit: 200,
            rate: 20,
        },
        {
            unit: 300,
            rate: 30,
        },
        {
            unit: 400,
            rate: 40,
        },
        {
            unit: 500,
            rate: 50,
        },
        {
            unit: 600,
            rate: 60,
        },
    ];

    
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
