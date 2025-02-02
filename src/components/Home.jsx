import leetcode from '../images/leetcode.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

export function Home() {
    return (
        <div className="container">
            <div className="row d-flex flex-row text-start pt-5">
                <h1 style={{color:'white'}}>Hi, I am Bhaskar Vilaparthi</h1>
            </div>
            <div className="row text-start">
                <h2 style={{color:'#00b4d8'}}>MERN Stack Developer</h2>
            </div>
            <div className="row text-start pt-3">
                <p className="col-6" style={{color:'white'}}>A results-driven IT professional with expertise in modern web development 
                    and data-driven solutions. Specializing in React, Redux, and the MERN stack, I build scalable and dynamic 
                    applications with a keen eye for performance optimization. Proficient in Python, SQL, and data visualization, 
                    I transform complex data into actionable insights. With a strong foundation in algorithms and 
                    competitive programming, I excel at solving complex problems efficiently. Currently pursuing a Masters 
                    in Information Technology, I am passionate about innovation, technology, and mentoring future professionals. </p>
            </div>
            <div className="row text-start pt-3">
                <h5 style={{color:'#6c757d'}}>MS in Information Technology</h5>
            </div>
            <div className="row text-start">
                <h5 style={{color:'#6c757d'}}>Email: Vilaparthibhaskar@gmail.com</h5>
            </div>
             <div className="row d-flex pt-4">
                    <div className="col-4 d-flex">
                        <a href="https://leetcode.com/u/vilaparthibhaskar/"><button style={{backgroundColor:'#1d2d44'}}><img src={leetcode} style={{height:'50px', width:'50px'}} alt='lc'></img></button></a>
                        <a href="https://www.linkedin.com/in/bhaskar-vilaparthi-27a32627b/"><button style={{backgroundColor:'#1d2d44'}}><img src={linkedin} style={{height:'50px', width:'50px'}} alt='lc'></img></button></a>
                        <a href="https://github.com/vilaparthibhaskar"><button style={{backgroundColor:'#1d2d44'}}><img src={github} style={{height:'50px', width:'50px'}} alt='lc'></img></button></a>
                    </div>
            </div>
        </div>
    );
}
