import PropTypes from 'prop-types';

export function EducationTile({children, year1, year2, title}){
    return (
        <div className="container rounded" style={{border:'2px solid #0077b6'}}>
            <div className="row text-start">
                <h5 className='ps-3 pt-2' style={{color:'#5fa8d3'}}><div style={{backgroundColor:'#5fa8d3', height:'9px', width:'9px', display: "inline-block"}}></div>  {year1} - {year2}</h5>
            </div>
            <div className="row text-start" style={{color:'white'}}>
                <h4>{title}</h4>
            </div>
            <div className="row">
                <p style={{color:'white', textAlign:'left'}}>{children}</p>
            </div>
        </div>
    )
}

EducationTile.propTypes = {
    children: PropTypes.string.isRequired,
    year1: PropTypes.number.isRequired,
    year2: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};