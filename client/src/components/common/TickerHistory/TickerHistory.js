import './TickerHistory.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { testId } from 'constants/index';
import { transformChangeHistoryData } from 'helpers';

const TickerHistory = ({ data }) => (
        <div data-testid={testId.tickerHistory}>
            <LineChart
                width={800}
                height={400}
                data={transformChangeHistoryData(data)}
            >
                <Line type="monotone" dataKey="change" stroke="#8884d8" name="change" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis unit="$" />
                <Tooltip />
            </LineChart>
        </div>
);

export default TickerHistory;
