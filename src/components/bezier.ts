import Point from "./point";

export default class Bezier {
    control1: Point;
    control2: Point;
    endPoint: Point;
    startPoint: Point;

    constructor(startPoint: Point, control1: Point, control2: Point, endPoint: Point) {

        this.control1 = control1;
        this.control2 = control2;
        this.endPoint = endPoint;
        this.startPoint = startPoint;
    }

    length() {
        const steps = 10;
        let length = 0;
        let i;
        let t;
        let cx;
        let cy;
        let px;
        let py;
        let xdiff;
        let ydiff;

        for (i = 0; i <= steps; i++) {
            t = i / steps;
            cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
            cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (i > 0) {
                xdiff = cx - (px as number);
                ydiff = cy - (py as number);
                length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            }
            px = cx;
            py = cy;
        }
        return length;
    }

    point(t: number, start: number, c1: number, c2: number, end: number) {
        return start * t * t * t
            + 3.0 * c1 * (1.0 - t) * t * t
            + 3.0 * c2 * (1.0 - t) * (1.0 - t) * t
            + end * (1.0 - t) * (1.0 - t) * (1.0 - t);

    }

}
