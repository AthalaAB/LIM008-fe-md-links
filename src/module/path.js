const path = require('path');

export const pathToBeAbsolute = (pathEvaluate) => {
    return path.isAbsolute(pathEvaluate) 
}

export const relativeToAbsolute = (pathRelative) => {
    return path.resolve(pathRelative)
}
