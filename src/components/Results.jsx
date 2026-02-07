import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ input }) {
    const data = calculateInvestmentResults(input);
    console.log(data);
    return (
        <p></p>
    );
};