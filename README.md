# WDC Study Lab — Full Syllabus + Teacher Focus Mode (v2)

An offline study website built from **all six uploaded Web Designing Concepts resources**, with **354 exam-style recall questions in 51 topic groups**. The question cards have intuitive model answers, optional code examples or memory hooks, and a **source file and page/slide citation on every card**.

## Start

**Easiest:** open the standalone `WDC_Study_Lab.html` file (provided separately) in Firefox, Chrome or another modern browser. No installation or internet is needed.

**Editable source:** keep `index.html`, `style.css`, `questions.js`, `focused.js`, and `app.js` together in the same folder, then open `index.html`.

## Study modes

- **Study sessions:** choose a unit/topic, recall from memory, reveal the answer and grade yourself: Needs work / Got it / Mastered. Review weak questions, unseen questions, saved/bookmarked ones, or questions due for spaced review. Shuffle available.
- **Question bank:** search or expand all 354 questions. Open any item for practice. Each includes its source.
- **Mock theory paper:** choose a unit and question count, type your answers, compare with the model answer and score yourself. There is no unreliable automatic essay marking.
- **Focused mode (READY):** 184 targeted questions in 20 topic groups from the two photographed teacher-focus pages: 123 original syllabus questions plus 61 extra exam-style exercises. Switch between CSS, JavaScript, HTML, or individual focus topics, filter to theory or code/output, view a CSS box-model diagram, and create focused-only mock papers. See `FOCUSED_COVERAGE.md` for the interpretation and two unclear handwritten lines.

## Your progress

Progress is stored locally in this browser using `localStorage`. Each browser profile/device has separate progress. There is **no account, online sync or tracking**. Browser privacy settings or deleting site storage can erase it, and some browsers restrict storage for local `file://` pages. Use **Export progress** regularly. Use **Import progress** to restore from the JSON backup.

Study and focused-mode keyboard shortcuts when you are **not typing**: `Space` to reveal, `1` = Needs work, `2` = Got it, `3` = Mastered, left/right arrows for previous/next.

## Coverage and source boundaries

All teaching topics identified in the supplied documents are represented. The question bank covers Internet history, the WWW, URL and DNS diagrams, design principles, planning, HTML structure and forms, HTML5 input types (including the image table), Canvas, SVG, media and browser APIs, CSS selectors, styling, box model, gradients and 2D transforms, JavaScript output, functions, assignment operators (including the image table), arrays, objects, conditions and loops.

The **CSS “Tables and Forms”** heading explicitly says this content is covered in laboratory sessions; the attached PDF contains no theory details for it, so the corresponding question documents the limitation rather than inventing a lesson. A few source code samples have typos or obsolete syntax (such as `datetime` input and a JavaScript sign-check example); the study answers note this where relevant. The question wording is simplified while keeping topics traceable to the original pages/slides.

The source files themselves are not required for the website to run, and are not bundled.

## Editing the teacher focus

The focus metadata is in `focused.js` (with a readable duplicate in `focused.json`). To change the selection by hand, update `focused.js` and reload the site. The script `create_focus.py` is the current source generator for the focus dataset. Run `build_standalone.py` to rebuild the single-file distribution after edits.

The two photographed pages are *possible paper preparation topics*, not a guarantee that these will be the only exam questions. The site flags ambiguous handwriting and keeps the full study bank intact.
