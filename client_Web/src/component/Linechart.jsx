import { ResponsiveLine } from '@nivo/line'



const Linechart = ({data}) => (
     <ResponsiveLine
        data={data}
        margin={{ top: 80, right: 0, bottom: 30, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        lineWidth={7}
        enablePoints={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        isInteractive={false}
        enableCrosshair={false}
        useMesh={true}
        animate={false}
    />
)

export default Linechart