// @ts-check
// Module semiceu/l10n
// Looks at the lang attribute on the root element and uses it to manage the config.l10n object so
// that other parts of the system can localise their text
import { html } from "../core/import-maps.js";
import { l10n } from "../core/l10n.js";
export const name = "semiceu/l10n";
const additions = {
  en: {
    status_at_publication: html`This section describes the status of this
      document at the time of its publication. Other documents may supersede
      this document.`,
  },
  es: {
    status_at_publication: html`Esta sección describe el estado del presente
      documento al momento de su publicación. El presente documento puede ser
      remplazado por otros.`,
  },
  de: {
    status_at_publication: html`Dieser Abschnitt beschreibt den Status des
      Dokuments zum Zeitpunkt der Publikation. Neuere Dokumente können dieses
      Dokument obsolet machen.`,
  },
};

Object.keys(additions).forEach(key => {
  if (!l10n[key]) l10n[key] = {};
  Object.assign(l10n[key], additions[key]);
});
