import { shallow } from "enzyme";
import { createElement } from "react";

import { SignatureCanvas, SignatureProps } from "../Signature";
import * as classNames from "classnames";

describe("Signature", () => {
	const renderSignature = (props: SignatureProps) => shallow(createElement(SignatureCanvas, props));
	const signatureProps: SignatureProps = {
		dataUrl: "",
		maxWidth: 0.5,
		minWidth: 0,
		imageSource: "",
		gridx: 1,
		gridy: 1,
		height: 1,
		gridBorder: 1,
		className: "signature-unset"
	};

	it("renders the structure correctly when signature is unset", () => {
		const sign = renderSignature(signatureProps);
		expect(sign).toBeElement(
			createElement("div", {
				className: classNames("widget-Signature signature-unset")
			},
				createElement("canvas", {
					gridx: signatureProps.gridx,
					gridy: signatureProps.gridy,
					height: signatureProps.height,
					style: {
						border: "1px solid",
						display: "block"
					}
				}),
				createElement("img", {
					src: "",
					style: {
						border: "",
						display: "",
						opacity: 0.5
					}
				}),
				createElement("button", {})
			)
		);
	});

	it("renders the structure correctly when signature is set", () => {
		//
	});
});
