import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Design, StarsCanvas } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-black relative z-0'>
                    <Navbar />
                    <Hero />
                    <StarsCanvas />
                </div>
                <About />
                <Tech />
                <Works />
                <Design />
                <Experience />
                <div className='relative z-0'>
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
