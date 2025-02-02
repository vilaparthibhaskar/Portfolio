import { Bar } from "./Bar"

export function Skills(){
    return (
        <div className="container">
            <div className="row">
                <h1><span style={{color:'white'}}>My</span> <span style={{color:'#5fa8d3'}}>Skills</span></h1>
            </div>
            <div className="row">
                <div className="col-6 container">
                    <div className="row text-start pb-4 ps-5 pt-3">
                        <h3 style={{color:'white'}}>Coding Skills</h3>
                    </div>    
                    <div className="container rounded col-11" style={{padding:'0px', border:'3px solid #0077b6'}}>
                    <div className="row ps-4 pt-3">
                        <Bar name="Python" percentage={80}></Bar>
                    </div>
                    <div className="row pt-4 ps-4">
                        <Bar name="JavaScript" percentage={70}></Bar>
                    </div>
                    <div className="row pt-4 ps-4">
                        <Bar name="Java" percentage={75}></Bar>
                    </div>
                    <div className="row pt-4 ps-4">
                        <Bar name="HTML" percentage={90}></Bar>
                    </div>
                    <div className="row pt-4 ps-4 pb-4">
                        <Bar name="CSS" percentage={80}></Bar>
                    </div>
                    </div>
                </div>
                <div className="col-6 container">
                    <div className="row">
                    <div className="row text-start pb-4 ps-5 pt-3">
                        <h3 style={{color:'white'}}>Proffesional Skills</h3>
                    </div>    
                    <div className="container rounded col-11" style={{padding:'0px', border:'3px solid #0077b6'}}>
                    <div className="row ps-4 pt-3">
                        <Bar name="React" percentage={85}></Bar>
                    </div>
                    <div className="row pt-4 ps-4">
                        <Bar name="Redux React Router" percentage={80}></Bar>
                    </div>
                    <div className="row pt-4 ps-4">
                        <Bar name="Node.js" percentage={75}></Bar>
                    </div>
                    <div className="row pt-4 ps-4">
                        <Bar name="Data Analytics" percentage={70}></Bar>
                    </div>
                    <div className="row pt-4 ps-4 pb-4">
                        <Bar name="Supervised Learning" percentage={70}></Bar>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}