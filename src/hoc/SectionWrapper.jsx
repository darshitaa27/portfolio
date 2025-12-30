import React, { Component } from "react";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <section
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
                id={idName} // ID for scroll navigation
            >
                <span className='hash-span'>
                    &nbsp;
                </span>
                <Component />
            </section>
        );
    };

export default SectionWrapper;
