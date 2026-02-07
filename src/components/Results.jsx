import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
    const data = calculateInvestmentResults(input);
    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map(yaerData => {
                    const totalInterestValue =
                        yaerData.valueEndOfYear -
                        yaerData.annualInvestment *
                        yaerData.year -
                        initialInvestment;
                    const totalAmountInvested = yaerData.valueEndOfYear - totalInterestValue;
                    return (
                        <tr key={yaerData.year}>
                            <td>{yaerData.year}</td>
                            <td>{formatter.format(yaerData.valueEndOfYear)}</td>
                            <td>{formatter.format(yaerData.interest)}</td>
                            <td>{formatter.format(totalInterestValue)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};