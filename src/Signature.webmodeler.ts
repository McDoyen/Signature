import { Component, createElement } from "react";

import { SignatureCanvas } from "./components/Signature";
import { SignatureContainerProps } from "./components/SignatureContainer";

declare function require(name: string): string;

// type VisibilityMap = {
//     [P in keyof SignatureContainerProps]: boolean;
// };

// tslint:disable-next-line class-name
export class preview extends Component<SignatureContainerProps, {}> {
	render() {
		return createElement(SignatureCanvas, {
			dataUrl: this.props.dataUrl,
			gridBorder: this.props.gridBorder,
			gridColor: this.props.gridColor,
			gridx: this.props.gridx,
			gridy: this.props.gridy,
			height: this.props.height,
			imageSource: "",
			maxWidth: this.props.maxWidth,
			minWidth: this.props.minWidth,
			penColor: this.props.penColor,
			responsive: this.props.responsive,
			responsiveRatio: this.props.responsiveRatio,
			showGrid: this.props.showGrid,
			timeOut: this.props.timeOut,
			velocityFilterWeight: this.props.velocityFilterWeight,
			width: this.props.width
		});
	}
}

export function getPreviewCss() {
	return require("./ui/Signature.css");
}

// export function getVisibleProperties(valueMap: SignatureContainerProps, visibilityMap: VisibilityMap) {
//     if (valueMap. === "doNothing") {
//         visibilityMap.microflow = false;
//         visibilityMap.page = false;
//     } else if (valueMap.onClickEvent === "callMicroflow") {
//         visibilityMap.microflow = true;
//         visibilityMap.page = false;
//     } else if (valueMap.onClickEvent === "showPage") {
//         visibilityMap.microflow = false;
//         visibilityMap.page = true;
//     }

//     return visibilityMap;
// }
