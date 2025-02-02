import { ProjectTile } from "./ProjectTile"

export function Projects(){
    return (
        <div className="container">
            <div className="row">
                <h1><span style={{color:'white'}}>My</span> <span style={{color:'#5fa8d3'}}>Projects</span></h1>
            </div>
            <div className="row border my-3 rounded">
                <ProjectTile 
                    title={'sudoku'} 
                    Description={'Sudoku Challenge is a full-stack web application with a unique theme that enhances the user experience. Users can sign up, log in, and solve Sudoku puzzles at Easy, Medium, and Hard levels, with a progress circle tracking their completed puzzles. Built with React, Redux, Express.js, Node.js, and MongoDB, the app offers a smooth interface and engaging design.'} 
                    techStack={'React, React-router, Redux, MongoDB, Node.js, Express.js'} 
                    link={'https://github.com/vilaparthibhaskar/Sudoku.git'}>
                </ProjectTile>
            </div>
            <div className="row border rounded my-3">
                <ProjectTile 
                    title={'Yelp Calm'} 
                    Description={'YelpCalm is a full-stack web application for discovering and reviewing campgrounds. Users can browse, add, and review campgrounds, with authentication and session management for a personalized experience. Built with MongoDB, Express.js, Node.js, and EJS, it features a dynamic UI, RESTful APIs, and efficient database management for seamless interactions.'}
                    techStack={'EJS, MongoDB, Node.js, Express.js'} 
                    link={'https://github.com/vilaparthibhaskar/Yelpcalm.git'} >
                </ProjectTile>
            </div>
            <div className="row border rounded my-3">
                <ProjectTile 
                    title={'React Quiz App'}
                    Description={'React Quiz App is a React-based quiz application featuring 10-question quizzes with a timer for each question and a final score display. Designed with an appealing UI, it provides a smooth and engaging user experience. The app is fully built with React, ensuring fast performance and interactive gameplay.'} 
                    techStack={'React, ContextAPI, Bootstrap'} 
                    link={'https://quizappreactbasics.netlify.app/'}>
                </ProjectTile>
            </div>
            <div className="row border rounded my-3">
                <ProjectTile 
                    title={'Income Prediction Model'}
                    Description={'Built a predictive model on the Adult dataset to classify income levels using machine learning algorithms. Leveraged ensemble learning techniques such as Bagging, Random Forest, and Gradient Boosting to enhance model accuracy and robustness. Implemented hyperparameter tuning and grid search to optimize performance, improving classification precision and reliability'}
                    techStack={'Sckit Numpy Pandas Supervised Learning '} 
                    link={'https://github.com/vilaparthibhaskar/IT7103.git'}>
                </ProjectTile>
            </div>
            <div className="row">
                <h3 style={{color:'white'}}>More Projects at <a href="https://github.com/vilaparthibhaskar">GitHub</a></h3>
            </div>
        </div>
    )
}