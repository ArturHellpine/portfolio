import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";

const App = () => {
    return (
        <div className='overflow-x-hidden text-neutral-200 antialiased selection:bg-purple-500 selection:text-neutral-900'>
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                </div>
            </div>
                <div className='container mx-auto px-8'>
                    <Navbar />
                    <Hero />
                    <Experience />
                    <Projects />
                    <Contacts />
                </div>
        </div>
    );
};

export default App;
