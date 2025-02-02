import PropTypes from 'prop-types';

export function Bar({ name, percentage }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between" style={{color:'white', paddingLeft:'2vw', paddingRight:'2vw'}}>
                    <h5 className="text-start">{name}</h5>
                    <h5 className="text-end">{percentage}%</h5>
                </div>
            </div>
            <div className="row">
                <div className="rounded" style={{border:'3px solid #0077b6', width: '90%', maxWidth: '500px', height: '3vh', paddingTop: '0.5vh', paddingLeft: '0.5vw', paddingBottom: '0.3vh' }}>
                    <div className="rounded" style={{ width: `${percentage}%`, height: '80%', backgroundColor: '#48bfe3' }}>
                    </div>
                </div>
            </div>
        </div>
    );
}


Bar.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};