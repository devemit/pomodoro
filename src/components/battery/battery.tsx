import './baterry-styles.css';
export const Battery = ({ percentFull }: { percentFull: any }) => {
    return (
        <div className='battery'>
            <div className='battery-fill' style={{ height: `${percentFull}%` }}></div>
            <div className='battery-terminal'></div>
        </div>
    );
};
