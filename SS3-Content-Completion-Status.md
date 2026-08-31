# SS3 Content Completion Status

**Status: COMPLETE** — all 62 catalogued SS3 subjects across the five categories below
have real, sourced content live in the database. No unresolved subjects remain.

Tracks curriculum sourcing progress for SS3 across the five subject categories used by
the `nerdc-curriculum-sourcer` agent. "Live" means real NERDC/WAEC-sourced content has
been imported into the database; "unresolved" means the agent searched but found no
usable real source and refused to fabricate content.

## Compulsory Core

- **4 live, no target set**

## Science & Mathematics

- **9 live, no target set**

## Humanities & Arts

- **13 live, no target set**
- Arabic and Home Management, previously unresolved, were resolved on a second sourcing
  pass: Arabic (SS3, First Term, 12 topics) via SchemeofWork.com's Federal SS3 page;
  Home Management (SS3, First Term + Second Term weeks 1-5, 17 topics) via
  SchemeofWork.com's Federal SS3 page.

## Business & Commercial

- **3 live, no target set**

## Vocational & Trade — COMPLETE

- **33 live, 33/33 — no unresolved subjects**
- Scope note: the strict WAEC vocational/trade list runs 34/35 subjects; this project's
  33-subject bucket includes Insurance and Solar Photovoltaic Installation, which are
  **not** part of the strict WAEC trade list, so the two counts are not directly
  comparable.
- Shorthand, Stenography, and Keyboarding were removed from the tracked SS3 catalogue
  (2026-08-31) after a second sourcing pass confirmed none is a real standalone SS3
  subject: Shorthand's only real WAEC document is exam-format/dictation-mechanics text
  with no teachable topic breakdown; Stenography has no standalone WAEC syllabus (WAEC's
  "Stenography" exam bundles Shorthand + Word Processing rather than naming a separate
  subject); Keyboarding exists only as a JSS-level sub-topic within Business
  Studies/Information Technology schemes (e.g. Delta State JSS2, Lagos/Osun JSS1
  Information Technology — see `backend/scripts/curriculum-data/jss1-business-studies.js`),
  never as its own SS3 subject with a scheme of work. Checked and confirmed empty for all
  three: schemeofwork.com (Federal/Lagos/Osun), syllabus.ng, ecolebooks.com, the NERDC
  portal (nerdc.gov.ng), WAEC's own syllabus documents (waecsyllabus.com/waeconline.org.ng),
  Lagos/Osun/Kano/Kaduna state ministry sites, and teacher-resource sites (passnownow,
  mycsn-style aggregators). They were never real entries in the tracked catalogue and
  their removal corrects the catalogue size rather than reducing coverage.

## Open scope question

The NESRI (National Education Sector Renewal Initiative) curriculum reform's exact
subject scope is still politically unsettled, per a Senate report — the vocational/trade
subject list above should be treated as provisional pending that resolution.
