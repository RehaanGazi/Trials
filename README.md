# WDC Study Lab — Full Syllabus

An offline study website built from **all six uploaded Web Designing Concepts resources**, with **354 exam-style recall questions in 51 topic groups**. The question cards have intuitive model answers, optional code examples or memory hooks, and a **source file and page/slide citation on every card**.

## Start

**Easiest:** open the standalone `WDC_Study_Lab.html` file (provided separately) in Firefox, Chrome or another modern browser. No installation or internet is needed.

**Editable source:** keep `index.html`, `style.css`, `questions.js`, and `app.js` together in the same folder, then open `index.html`.

## Study modes

- **Study sessions:** choose a unit/topic, recall from memory, reveal the answer and grade yourself: Needs work / Got it / Mastered. Review weak questions, unseen questions, saved/bookmarked ones, or questions due for spaced review. Shuffle available.
- **Question bank:** search or expand all 354 questions. Open any item for practice. Each includes its source.
- **Mock theory paper:** choose a unit and question count, type your answers, compare with the model answer and score yourself. There is no unreliable automatic essay marking.
- **Focused mode:** reserved and clearly marked *not configured*. Add teacher-selected topics after those are provided; no paper topics have been guessed.

## Your progress

Progress is stored locally in this browser using `localStorage`. Each browser profile/device has separate progress. There is **no account, online sync or tracking**. Browser privacy settings or deleting site storage can erase it, and some browsers restrict storage for local `file://` pages. Use **Export progress** regularly. Use **Import progress** to restore from the JSON backup.

Study keyboard shortcuts when you are **not typing**: `Space` to reveal, `1` = Needs work, `2` = Got it, `3` = Mastered, left/right arrows for previous/next.

## Coverage and source boundaries

All teaching topics identified in the supplied documents are represented. The question bank covers Internet history, the WWW, URL and DNS diagrams, design principles, planning, HTML structure and forms, HTML5 input types (including the image table), Canvas, SVG, media and browser APIs, CSS selectors, styling, box model, gradients and 2D transforms, JavaScript output, functions, assignment operators (including the image table), arrays, objects, conditions and loops.

The **CSS “Tables and Forms”** heading explicitly says this content is covered in laboratory sessions; the attached PDF contains no theory details for it, so the corresponding question documents the limitation rather than inventing a lesson. A few source code samples have typos or obsolete syntax (such as `datetime` input and a JavaScript sign-check example); the study answers note this where relevant. The question wording is simplified while keeping topics traceable to the original pages/slides.

The source files themselves are not required for the website to run, and are not bundled.

## Future focused-mode update

Once the teacher provides important topics, map them against the `unit` and `topic` fields in `questions.js` (also exported as `questions.json`), then filter a new focused session and mock exam to those question IDs. Full Syllabus mode should remain unchanged.
