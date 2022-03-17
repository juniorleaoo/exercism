// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }
}

export class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(size) {
        const height = this.calculateDimension(size.height, this.screenSize.height, this.position.y)
        const width = this.calculateDimension(size.width, this.screenSize.width, this.position.x)
        this.size.resize(width, height);
    }

    calculateDimension(newSizeDimension, screenSizeDimension, axis) {
        if (newSizeDimension > 0) {
            return newSizeDimension > screenSizeDimension
                ? screenSizeDimension - axis
                : newSizeDimension;
        }

        return 1;
    }

    move(position) {
        const x = this.calculateAxis(position.x, this.size.width, this.screenSize.width);
        const y = this.calculateAxis(position.y, this.size.height, this.screenSize.height);
        this.position.move(x, y);
    }

    calculateAxis(newAxis, sizeDimension, screenSizeDimension) {
        let result = 0;

        if (newAxis < 0) {
            return result;
        }
        
        const isWindowWontStayOutOfBounds = sizeDimension + newAxis < screenSizeDimension;
        const isWindowWillStayOutOfBounds = screenSizeDimension - newAxis < sizeDimension;

        if (isWindowWontStayOutOfBounds) {
            result = newAxis;
        } else if (isWindowWillStayOutOfBounds) {
            result = screenSizeDimension - sizeDimension;
        }

        return result;
    }
}

export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}