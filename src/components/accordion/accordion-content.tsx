import React from "react";
import cn from "classnames";
import {CSSTransition} from "react-transition-group";

export interface IAccordionContentProps {
    expanded?: boolean;
    hidden?: boolean;
    id?: string;
    testId?: string;
}

export const AccordionContent: React.FC<IAccordionContentProps & React.HTMLProps<HTMLDivElement>> = ({expanded, hidden, children, className, testId, ...props}) => (
    <CSSTransition
        in={!hidden}
        timeout={200}
        classNames={"Accordion-content"}
        unmountOnExit
    >
        <div
            {...props}
            className={cn({
                "Accordion-content": true,
                [className as string]: !!className,
            })}
            data-test-id={testId}
            role="region"
        >
            <h2>Expanded: {`${Boolean(expanded)}`}</h2>
            {children}
        </div>
    </CSSTransition>
);
