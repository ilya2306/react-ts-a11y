import React from "react"
import cn from "classnames";

export interface IAccordionTriggerProps extends React.HTMLProps<HTMLDivElement> {
    tag?: string;
    testId?: string;
    expanded?: boolean;
    focused?: boolean;
}

export const AccordionTrigger: React.FC<IAccordionTriggerProps> = ({testId, focused, expanded, tag, children, className, ...props}) => {
    const buttonRef = React.createRef();

    React.useEffect(() => {
        if (focused) {
            // @ts-ignore
            buttonRef.current.focus();
        }
    }, [focused]);

    return (
        <h3>
            <button
                {...props as any}
                ref={buttonRef}
                aria-expanded={!!expanded}
                data-test-id={testId}
                className={cn({
                    "Accordion-trigger": true,
                    [className as string]: !!className
                })}
            >
                {children}
            </button>
        </h3>
    )
};

AccordionTrigger.defaultProps = {
    tag: "h3"
};
