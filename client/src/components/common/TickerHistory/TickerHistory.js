import './TickerHistory.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const TickerHistory = ({ data }) => {
    const newData = data.map(element => ({ name: '', change: +element.change }));
    return <div>
        <LineChart width={800} height={400} data={newData}>
            <Line type="monotone" dataKey="change" stroke="#8884d8" name="change" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis unit="$" />
            <Tooltip />
        </LineChart>
    </div>
};

export default TickerHistory;
