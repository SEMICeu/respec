// @ts-check
/**
 * Sets the defaults for SEMICEU specs
 */
export const name = "semiceu/defaults";
import { coreDefaults } from "../core/defaults.js";
import linter from "../core/linter.js";
import { rule as privsecSectionRule } from "../core/linter-rules/privsec-section.js";
import { rule as wptTestsExist } from "../core/linter-rules/wpt-tests-exist.js";

linter.register(privsecSectionRule, wptTestsExist);

const semiceuLogo = {
  src: "https://semiceu.github.io/respec-style/logos/SEMICEU.png",
  alt: "SEMIC",
//  height: 48,
  height: 72,
  width: 72,
  url: "https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic",
};

const semiceuDefaults = {
  lint: {
    "privsec-section": true,
    "wpt-tests-exist": false,
  },
  doJsonLd: false,
  license: "cc-by",
  logos: [],
  xref: true,
};

export function run(conf) {
  // assign the defaults
  const lint =
    conf.lint === false
      ? false
      : {
          ...coreDefaults.lint,
          ...semiceuDefaults.lint,
          ...conf.lint,
        };

  if (conf.specStatus && conf.specStatus.toLowerCase() !== "unofficial") {
    semiceuDefaults.logos.push(semiceuLogo);
  }
  Object.assign(conf, {
    ...coreDefaults,
    ...semiceuDefaults,
    ...conf,
    lint,
  });
}
