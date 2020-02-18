import React from "react";

import {AccordionTrigger, IAccordionTriggerProps} from "./accordion-trigger";

import {AccordionContent, IAccordionContentProps} from "./accordion-content";

type IAccordionPanelChildren = React.ReactElement<IAccordionTriggerProps> | React.ReactElement<IAccordionContentProps>;

interface IAccordionPanelProps {
    disabled?: boolean;
    expanded?: boolean;
    focused?: boolean;
    hidden?: boolean;
    id?: string;
    onTriggerClick?: (event: React.MouseEvent) => void;
    onTriggerKeyDown?: (event: React.KeyboardEvent) => void;
}

const getChildProps = (child: IAccordionPanelChildren, props: IAccordionPanelProps, id: string) => {
    if (child.type === AccordionTrigger) {
        return {
            "aria-controls": `${id}-content`,
            "aria-disabled": props.disabled,
            expanded: props.expanded,
            "id": `${id}-trigger`,
            onClick: props.onTriggerClick,
            onKeyDown: props.onTriggerKeyDown,
            focused: props.focused,
        }
    } else if (child.type === AccordionContent) {
        return {
            "aria-labelledby": `${id}-trigger`,
            "id": `${id}-content`,
            expanded: props.expanded,
            hidden: props.hidden,
        }
    }

    return child.props;
};


export const AccordionPanel: React.FC<IAccordionPanelProps & React.HTMLProps<HTMLDivElement>> = props => {
    const [id] = React.useState(props.id || Math.random().toString(32).substr(-10));

    return (
        <>
            {
                React.Children.map(props.children as IAccordionPanelChildren, (child: IAccordionPanelChildren) => (
                    React.cloneElement(child, getChildProps(child, props, id))
                ))
            }
        </>
    )
};

AccordionPanel.defaultProps = {
    expanded: false,
    hidden: true
};
