import { EducationTile } from "./Educationtile"

export function Education(){
    return (
        <>
        <div className="container">
            <div className="row">
                <h1><span style={{color:'white'}}>My</span> <span style={{color:'#5fa8d3'}}>Journey</span></h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4 style={{color:'white'}}>Education</h4>
                </div>
                <div className="col-6">
                    <h4 style={{color:'white'}}>Experience</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-5 container">
                    <div className="row pt-2">
                        <EducationTile year1={2023} year2={2025} title={'Master Degree Kennesaw State University'}>Currently pursuing a Master’s in Information 
                            Technology with a focus on software development, data analytics, and cloud computing. Gaining 
                            hands-on experience in full-stack development, machine learning models, and database management 
                            while working on industry-relevant projects. Passionate about leveraging technology to build scalable 
                            and efficient solutions.</EducationTile>
                    </div>
                    <div className="row pt-4">
                        <EducationTile year1={2017} year2={2021} title={'BTech SRKR India'}>
                        Developed expertise in mechanical design, applied mathematics, and problem-solving while exploring 
                        computational methods and programming. This foundation enhanced my transition into software development, 
                        algorithms, and machine learning.
                        </EducationTile>
                    </div>
                </div>
                <div className="col-5 container">
                <div className="row pt-2">
                        <EducationTile year1={2024} year2={2025} title={'Graduate Teaching Assistant'}>
                        Delivered lectures on advanced DSA topics (dynamic programming, graph algorithms) and provided individualized 
                        tutoring, enhancing students algorithm design, complexity analysis, and coding efficiency. Contribute to 
                        increasing the overall success rate of students and assisted in debugging and optimizing student 
                        code for improved performance in real-world scenarios. 
                        </EducationTile>
                    </div>
                    <div className="row pt-4">
                        <EducationTile year1={2022} year2={2023} title={'Web Developer (Tata Consultacy Services)'}>
                        Developed custom workflows, responsive web designs, data models to meet the business requirements and 
                        validated to achieve project goals. Developed custom UI components using React JS and Bootstrap. 
                        Created custom search views, asset views, and dashboards improving the 
                        user experience and productivity. Expertise in creating user validation forms and using the RESTful 
                        services for sending the data to the server. 
                        </EducationTile>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}