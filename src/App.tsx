import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Accordion} from "./components/accordion/accordion";
import {AccordionPanel} from "./components/accordion/accordion-panel";
import {AccordionTrigger} from "./components/accordion/accordion-trigger";
import {AccordionContent} from "./components/accordion/accordion-content";

const Acc = (props: any) => (
    <Accordion
        {...props}
    >
        <AccordionPanel>
            <AccordionTrigger>
                Item 1
            </AccordionTrigger>
            <AccordionContent onClick={() => console.log("content 1 click")}>
                <div>item 1 content</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum nisi saepe. Ea eveniet ipsam magni maiores necessitatibus quis quisquam recusandae sunt voluptas voluptatum? Alias, aliquid animi aut deleniti ea eius labore modi nemo porro quae saepe, voluptatem! Commodi doloremque error sint totam ut.
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionTrigger>
                Item 2
            </AccordionTrigger>
            <AccordionContent onClick={() => console.log("content 2 click")}>
                <div>item 2 content</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum nisi saepe. Ea eveniet ipsam magni maiores necessitatibus quis quisquam recusandae sunt voluptas voluptatum? Alias, aliquid animi aut deleniti ea eius labore modi nemo porro quae saepe, voluptatem! Commodi doloremque error sint totam ut.
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionTrigger>
                Item 3
            </AccordionTrigger>
            <AccordionContent onClick={() => console.log("content 3 click")}>
                <div>item 3 content</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum nisi saepe. Ea eveniet ipsam magni maiores necessitatibus quis quisquam recusandae sunt voluptas voluptatum? Alias, aliquid animi aut deleniti ea eius labore modi nemo porro quae saepe, voluptatem! Commodi doloremque error sint totam ut.
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionTrigger>
                Item 4
            </AccordionTrigger>
            <AccordionContent onClick={() => console.log("content 4 click")}>
                <div>item 4 content</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae harum nisi saepe. Ea eveniet ipsam magni maiores necessitatibus quis quisquam recusandae sunt voluptas voluptatum? Alias, aliquid animi aut deleniti ea eius labore modi nemo porro quae saepe, voluptatem! Commodi doloremque error sint totam ut.
                </div>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
            <AccordionTrigger>
                Item 5
            </AccordionTrigger>
            <AccordionContent onClick={() => console.log("content 5 click")}>
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
);

const App = () => {
    const [allowMultiple, setAllowMultiple] = React.useState(false);
    const [allowToggle, setAllowToggle] = React.useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <div>
                <button type="button" onClick={() => setAllowMultiple(!allowMultiple)}>Toggle allowMultiple</button>
                <button type="button" onClick={() => setAllowToggle(!allowToggle)}>Toggle allowToggle</button>
            </div>

            <div style={{marginTop: 50}}>
                <Acc
                    allowMultiple={allowMultiple}
                    allowToggle={allowToggle}
                />
            </div>
        </div>
    );
};

export default App;
