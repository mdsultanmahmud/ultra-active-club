import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How does react works?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What are the ifferences between props and state in react?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div>
                                <h3>Props</h3>
                                <p> <strong>are immutable :</strong> which lets React do fast reference checks </p>
                                <p><strong>are used to pass data down from your view-controller: </strong> your top level component</p>
                                <p><strong>have better performance:</strong> use this to pass data to child components</p>
                            </div>
                            <div>
                                <h3>State</h3>
                                <p><strong>should be managed in your view-controller:
                                </strong>your top level component
                                </p>
                                <p>is mutable</p>
                                <p>has worse performance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Works of useEffect except data loading!
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Running on state change: validating input field</p>
                            <p>Running on state change: live filtering</p>
                            <p>Running on state change: trigger animation on new array value</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;