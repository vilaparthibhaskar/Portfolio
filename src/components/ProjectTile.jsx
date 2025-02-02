import PropTypes from 'prop-types';

export function ProjectTile({title, techStack, link, Description}){
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="row text-start">
                        <h3 style={{color:'#5fa8d3'}}>{title}</h3>
                    </div>
                    <div className="row text-start">
                        <h5 style={{color:'#caf0f8'}}>{techStack}</h5>
                    </div>
                    <div className="row text-start">
                        <p style={{color:'white'}}>{Description}</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                        <a className='pt-3 mt-3' href={link}>Click me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProjectTile.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired
};