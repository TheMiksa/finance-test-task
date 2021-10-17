import './TickerHistory.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const TickerHistory = ({ data }) => {
    const newData = data.map((el, index) => ({ name: index, uv: +el.change }));
    return <div>
        <LineChart width={800} height={400} data={newData}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" name="$" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </div>
};

export default TickerHistory;
