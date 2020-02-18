import React from "react";
import cn from "classnames";

import "./styles/_accorion.css";

interface IAccordionProps {
    allowMultiple?: boolean;
    allowToggle?: boolean;
    testId?: string;
    expanded?: string[];
}

export const Accordion: React.FC<IAccordionProps & React.HTMLProps<HTMLDivElement>> = (props) => {
    const {
        allowMultiple,
        allowToggle,
        children,
        className,
        testId,
        onClick,
        onKeyDown,
        ...ownProps
    } = props;

    const [focused, setFocused] = React.useState(false);
    const [elementsIds, setElementsIds] = React.useState({});
    const [ids, setIds] = React.useState([] as string[]);
    const [expanded, setExpanded] = React.useState(props.expanded || []);

    // const rootRef = React.createRef<HTMLDivElement>();

    const handleTriggerKeyDown = (event: React.KeyboardEvent, id: string) => {
        console.log("handleKeyDown");
        const key = event.which.toString();

        const ctrlModifier = (event.ctrlKey && key.match(/33|34/));

        if (key.match(/38|40/) || ctrlModifier) {
            const index = ids.indexOf(id);
            const direction = (key.match(/34|40/)) ? 1 : -1;
            const length = ids.length;
            const newIndex = (index + length + direction) % length;

            // @ts-ignore
            setFocused(ids[newIndex]);

            event.preventDefault();
        } else if (key.match(/35|36/)) {
            switch (key) {
                case "36":
                    // @ts-ignore
                    setFocused(ids[0]);
                    break;
                case "35":
                    // @ts-ignore
                    setFocused(ids[ids.length - 1]);
                    break;
            }

            event.preventDefault();
        }
    };

    // const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    //     console.log("handleKeyDown");
    //     const target = event.target as HTMLDivElement;
    //     const key = event.which.toString();
    //
    //     // 33 = Page Up, 34 = Page Down
    //     const ctrlModifier = (event.ctrlKey && key.match(/33|34/));
    //
    //     // Is this coming from an accordion header?
    //     if (target.classList.contains("Accordion-trigger")) {
    //         // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
    //         // 38 = Up, 40 = Down
    //         if (key.match(/38|40/) || ctrlModifier) {
    //             const index = triggers.indexOf(target);
    //             const direction = (key.match(/34|40/)) ? 1 : -1;
    //             const length = triggers.length;
    //             const newIndex = (index + length + direction) % length;
    //
    //             triggers[newIndex].focus();
    //
    //             event.preventDefault();
    //         } else if (key.match(/35|36/)) {
    //             // 35 = End, 36 = Home keyboard operations
    //             switch (key) {
    //                 // Go to first accordion
    //                 case "36":
    //                     triggers[0].focus();
    //                     break;
    //                 // Go to last accordion
    //                 case "35":
    //                     triggers[triggers.length - 1].focus();
    //                     break;
    //             }
    //             event.preventDefault();
    //         }
    //     }
    //
    //     onKeyDown && onKeyDown(event);
    // };

    const handleFocus = React.useCallback(() => setFocused(true), []);

    const handleBlur = React.useCallback(() => setFocused(false), []);

    // Minor setup: will set disabled state, via aria-disabled, to an
    // expanded/ active accordion which is not allowed to be toggled close
    // if (!allowToggle) {
    //     // Get the first expanded/ active accordion
    //     const expanded = rootRef.current?.querySelector("[aria-expanded=\"true\"]");
    //
    //     // If an expanded/ active accordion is found, disable
    //     if (expanded) {
    //         expanded.setAttribute("aria-disabled", "true");
    //     }
    // }

    const handleTriggerClick = React.useCallback((id: string) => {
        const isExpanded = expanded.includes(id);
        let nextExpanded = new Set(expanded);
        let shouldUpdateExpanded = false;

        if (!allowMultiple && expanded.length && !isExpanded) {
            shouldUpdateExpanded = true;
            nextExpanded.delete(expanded[0]);
        }

        if (!isExpanded) {
            shouldUpdateExpanded = true;
            nextExpanded.add(id);
        } else if (allowToggle && isExpanded) {
            shouldUpdateExpanded = true;
            nextExpanded.delete(id);
        }

        if (shouldUpdateExpanded) {
            // @ts-ignore
            setExpanded([...nextExpanded])
        }
    }, []);

    const nextElementsIds: { [key: string]: React.ReactNode } = {};
    const nextIds: string[] = [];

    const extendedChildren = React.Children.map<React.ReactNode, React.ReactNode>(children, (child, index) => {
        if (!Object.values(elementsIds).includes(child)) {
            let id = (child as React.ReactElement).props.id || Math.random().toString(36).substr(-10);
            while (elementsIds.hasOwnProperty(id)) {
                id = Math.random().toString(36).substr(-10);
            }

            nextElementsIds[id] = child;
            nextIds.push(id);
        }

        // @ts-ignore
        const id: string = Object.keys({...elementsIds, ...nextElementsIds}).find(key => elementsIds[key] === child) || "";

        const isExpanded = expanded.includes(id);


        return React.cloneElement(child as React.ReactElement, {
            expanded: isExpanded,
            hidden: !isExpanded,
            disabled: !allowToggle && isExpanded,
            focused: id === String(focused),
            onTriggerClick: (event: React.MouseEvent) => {
                handleTriggerClick(id);
                event.preventDefault();
                (child as React.ReactElement).props.onClick && (child as React.ReactElement).props.onClick(event);
            },
            onTriggerKeyDown: (event: React.KeyboardEvent) => {
                handleTriggerKeyDown(event, id);
                (child as React.ReactElement).props.onKeyDown && (child as React.ReactElement).props.onKeyDown(event);
            }
        });
    });

    React.useEffect(() => {
        if (Object.keys(nextElementsIds).length) {
            setElementsIds({...elementsIds, ...nextElementsIds});
            console.log("nextIds", nextIds);
            setIds(nextIds);
        }
    }, [elementsIds, nextElementsIds, nextIds]);


    return (
        <div
            {...ownProps}
            className={cn({
                "Accordion": true,
                "Accordion--focused": focused,
                "focused": focused,
                [`${className}`]: !!className,
            })}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <div>
                allowMultiple: {Boolean(allowMultiple).toString()}&nbsp;&nbsp;&nbsp;
                allowToggle: {Boolean(allowToggle).toString()}
            </div>
            {extendedChildren}
        </div>
    )
};

