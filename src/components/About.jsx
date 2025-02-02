import DP from '../images/dp.png'
import leetcode from '../images/leetcode.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

export function About(){
    return (
        <>
        <div className="container pt-2">
            <div className="row">
                <h1><span style={{color:'white'}}>About </span><span style={{color:'#0077b6'}} >Me</span></h1>
            </div>
            <div className="row py-4 align-items-center d-flex justify-content-center">
                <img src={DP} alt="My Image" style={{height:'250px', width:'270px'}} />
            </div>
            <div className="row">
                <h2 style={{color:'white'}} >Hi There! Glad to see you here</h2>
            </div>
            <div className="row" style={{color:'white'}}>
                <p>I am an IT professional with a strong passion for problem-solving, web development, and 
                    competitive programming. I have experience building applications using React, Redux, React Router, 
                    and the MEAN stack, integrating features like authentication, session management, and Google Maps API. 
                    Additionally, I have worked with machine learning models in supervised learning, implementing Decision Trees 
                    and Random Forest classifiers. I actively participate in LeetCode, ranking in the top 5%, and currently work 
                    as a Graduate Teaching Assistant, mentoring students and contributing to their academic success.</p>
            </div>
            <div className="row d-flex align-items-center justify-content-center pt-4">
            <div className="col-4 d-flex  align-items-center justify-content-center">
                <a href="https://leetcode.com/u/vilaparthibhaskar/"><button style={{backgroundColor:'#1d2d44'}}><img src={leetcode} style={{height:'50px', width:'50px'}} alt='lc'></img></button></a>
                <a href="https://www.linkedin.com/in/bhaskar-vilaparthi-27a32627b/"><button style={{backgroundColor:'#1d2d44'}}><img src={linkedin} style={{height:'50px', width:'50px'}} alt='lc'></img></button></a>
                <a href="https://github.com/vilaparthibhaskar"><button style={{backgroundColor:'#1d2d44'}}><img src={github} style={{height:'50px', width:'50px'}} alt='lc'></img></button></a>
            </div>
            </div>
        </div>
        </>
    )
}