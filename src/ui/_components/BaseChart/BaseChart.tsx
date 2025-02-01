import clsx from "clsx";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BaseChartProps } from "./BaseChart-props";

// STYLES CSS IMPORT 
import styles from "./styles/BaseChart.module.css"

const BaseChart = <T,>(props: BaseChartProps<T>) => {
  // DESTRUCTURING PROPS
  const { 
    data, 
    dataKey, 
    className, 
    tooltipLabel 
  } = props;

  // Tooltip Info Formatter
  const tooltipFormatter = (value: number) => {
    return [`${value.toFixed(2)}%`, tooltipLabel];
  };

  return (
    <div className={clsx(styles.baseChart_container, className)}>
      <ResponsiveContainer>
        <AreaChart
          className={styles.area_chart}
          // width={730}
          // height={250}
          data={data}
          // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" height={0} />
          <YAxis width={0} domain={[0, 100]} />
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          <Tooltip formatter={tooltipFormatter} />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1.2}
            fill="url(#colorUv)"
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BaseChart;
