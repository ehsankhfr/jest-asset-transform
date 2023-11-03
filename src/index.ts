import * as path from "path";
import { camelcase } from "./utils";

const Transform = {
  process(src: string, filename: string) {
    const assetFilename = JSON.stringify(path.basename(filename));
    if (filename.match(/\.svg$/)) {
      const pascalCaseFilename = camelcase(path.parse(filename).name);
      const componentName = `Svg${pascalCaseFilename}`;
      return {
        code: `const React = require('react');
          module.exports = function ${componentName}(props) {
            return React.createElement(
              'svg',
              Object.assign({}, props, {'data-file-name': ${componentName}.name})
            );
          };`,
      };
    }

    return {
      code: `module.exports = ${assetFilename};`,
    };
  },
};

export default Transform;
