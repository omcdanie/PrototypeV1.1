import React from "react";

import "/imports/css/home/HomeSheet.css";

class Home extends React.Component {
    render() {
        return (
            <div id='home' className='grid'>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box one'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box two'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box three'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box four'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box five'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box six'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box seven'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box eight'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box nine'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box ten'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box eleven'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div className='flip-container' onTouchStart={ () => {this.classList.toggle('hover');}}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='module'><div className='box twelve'/></div>
                        </div>
                        <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
