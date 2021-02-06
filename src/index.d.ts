declare module "@freyrthorv/react-snapshot";

import {
	ReactInstance,
	Component,
	ComponentState,
	ReactElement,
	SFCElement,
	CElement,
	DOMAttributes,
	DOMElement,
	ReactNode,
	ReactPortal,
} from "react";

export const render: Renderer;

export interface Render {
	// Deprecated(render): The return value is deprecated.
	// In future releases the render function's return type will be void.

	<T extends Element>(
		element: DOMElement<DOMAttributes<T>, T>,
		container: Element | null,
		callback?: () => void,
	): T;

	(
		element: Array<DOMElement<DOMAttributes<any>, any>>,
		container: Element | null,
		callback?: () => void,
	): Element;

	(
		element: SFCElement<any> | Array<SFCElement<any>>,
		container: Element | null,
		callback?: () => void,
	): void;

	<P, T extends Component<P, ComponentState>>(
		element: CElement<P, T>,
		container: Element | null,
		callback?: () => void,
	): T;

	(
		element: Array<CElement<any, Component<any, ComponentState>>>,
		container: Element | null,
		callback?: () => void,
	): Component<any, ComponentState>;

	<P>(element: ReactElement<P>, container: Element | null, callback?: () => void):
		| Component<P, ComponentState>
		| Element
		| void;

	(element: ReactElement[], container: Element | null, callback?: () => void):
		| Component<any, ComponentState>
		| Element
		| void;
}
