# Accordion
An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.


Terms for understanding accordions include:

**Accordion Header:**  
Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.

**Accordion Panel:**  
Section of content associated with an accordion header.

In some accordions, there are additional elements that are always visible adjacent to the accordion header. For instance, a menubutton may accompany each accordion header to provide access to actions that apply to that section. And, in some cases, a snippet of the hidden content may also be visually persistent.


## Keyboard Interaction
- <kbd>Enter</kbd> or <kbd>Space</kbd>:
  - When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
  - When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.

- <kbd>Tab</kbd>: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page <kbd>Tab</kbd> sequence.
- <kbd>Shift + Tab</kbd>: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page <kbd>Tab</kbd> sequence.
- <kbd>Down Arrow</kbd> (Optional): If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
- <kbd>Up Arrow</kbd> (Optional): If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
- <kbd>Home</kbd> (Optional): When focus is on an accordion header, moves focus to the first accordion header.
- <kbd>End</kbd> (Optional): When focus is on an accordion header, moves focus to the last accordion header.
