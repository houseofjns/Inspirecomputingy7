HOUSE OF J&S COMPUTER TRAINING CENTER
INSPIRE COMPUTING INTERNATIONAL · YEAR 7
BILINGUAL LEARNING PORTAL + UNIT EXAMINATION SYSTEM

============================================================
1. OPEN THE PORTAL
============================================================

The website uses only HTML5, CSS3 and vanilla JavaScript. No paid
service, framework, account or external font is required.

LOCAL USE
1. Extract the ZIP file.
2. Open the House-of-JS-Computing-Portal folder.
3. Open index.html in a modern browser (Chrome, Edge, Firefox or Safari).
4. The study modules, glossary, workbook answer guide and quizzes work
   locally without an internet connection.

GITHUB PAGES
1. Upload the folder contents to a GitHub repository.
2. Enable GitHub Pages for the chosen branch and folder.
3. Open the Pages URL once while online. The service worker caches the
   core portal files for later offline access in supported browsers.

For service-worker installation, the site must be served from HTTPS or
localhost. Opening index.html directly from disk still works offline,
but service-worker caching is not available on the file:// protocol.

============================================================
2. BRAND LOGO
============================================================

The page uses the requested image path:
  assets/logo1.png

The approved House of J&S logo supplied by the user is installed at
assets/logo1.png and used on both the student login screen and portal
sidebar. The PNG can be replaced with a future brand revision while
keeping this same path.

============================================================
3. CONTENT SOURCES AND COVERAGE
============================================================

The course follows the six-unit sequence in the supplied Pearson
Inspire Computing International Year 7 Student Book:

Unit 1  Safe practice
Unit 2  Responsible practice
Unit 3  Connectivity and the internet
Unit 4  Internet protocol and binary
Unit 5  Programming Part 1
Unit 6  Programming Part 2

Lesson order and titles follow the Student Book contents. English study
notes are accompanied by Myanmar explanations written for this portal.
The Myanmar text is a companion teaching explanation, not a Pearson
published translation.

The supplied Workbook answer document has been extracted into
js/workbook-answers.js as lesson-indexed answer-key sections (55 lesson
sections in total). The Workbook answer guide preserves its question
numbers, accepted answer points, quiz answers and marking notes where
provided. Open the same-numbered question in the Workbook to pair its
prompt with the answer-key entry.

Important source limitation: the Student Book and Workbook PDFs are
scanned page images. The answer key is text-extractable, but the full
wording of every Workbook question was not reliably available as text.
This portal therefore does not claim to reproduce every scanned
question prompt verbatim. It keeps the supplied answer-key wording and
lesson/question numbering so teachers can verify the prompt in the
original Workbook. The study notes are based on the Student Book's
lesson sequence and the answer key's terminology and accepted points.

Each unit provides the 15 requested learning sections:
1. Unit Overview
2. Learning Objectives
3. Detailed Study Notes
4. Topic-by-Topic Explanations
5. Key Definitions
6. Important Examples
7. Tables & Diagrams
8. Step-by-Step Instructions
9. Practical Activities
10. Worked Examples / Workbook Answer Key
11. Important Exam Points
12. Unit Glossary
13. Unit Presentation PowerPoint Slide Outline
14. Knowledge Check Quiz
15. One-Hour Secure Unit Examination

The slide section is a presentation outline, not a generated .pptx file.

============================================================
4. UNIT EXAMINATION
============================================================

Each unit creates an independent 84-question, 100-mark paper:

Section A  30 multiple-choice questions       30 marks
Section B  20 fill-in-the-blank questions     20 marks
Section C  20 matching questions             20 marks
Section D  10 short-response questions        10 marks
Section E   4 essay questions                 20 marks
                                             ---------
Total       84 questions                     100 marks
Duration: 60 minutes
Pass threshold used by this portal: 50/100.

Portal login password: HJS2026
Students sign in with their name and the portal password. The login remains active for the current browser tab session; use Log out to end it. The portal password is checked locally in JavaScript and is not server authentication.

Exam start password: HJS2026
A student name is also required. The student name from the portal login is prefilled in the exam form; the exam password is still requested. Questions are shown one at a time.
Clicking Next Question locks the current response (including a blank
response) and moves forward. There is no back button or question list.
Answers and explanations are shown only after the exam is submitted.
The timer submits automatically at 00:00. Reaching the final question
and submitting the final response also submits the paper.

The answer review reports student response, correct/model answer,
marks awarded, section score and a bilingual explanation. Essays are
marked provisionally against five keywords/criteria and carry a
Teacher review recommended label.

============================================================
5. SECURITY AND PRIVACY LIMITATIONS — READ BEFORE USE
============================================================

This is an offline, client-side learning and practice system. It is
not a tamper-proof examination platform and must not be represented as
secure proctoring for high-stakes examinations.

The master password is stored in JavaScript and can be discovered by
someone who can inspect the website source. Student names and exam
results are stored only in the local browser storage on the device;
there is no server, central account database, encrypted result store,
or teacher-only server role. A student with technical access can alter
browser code, local storage or the page itself.

Fullscreen is requested when the student starts the exam from the
login form. Browsers require a user action to re-enter fullscreen after
it has been exited; a webpage cannot reliably force fullscreen back on
all devices. The portal displays a warning and disables Next until the
student uses the Return to fullscreen control where supported.

The beforeunload and history warnings can discourage accidental exit,
but a browser/device owner can still close the browser, disable scripts
or bypass client-side controls. For formal/high-stakes examinations,
use a managed exam platform with server-side authentication, secure
storage, proctoring policy and teacher access controls.

============================================================
6. LOCAL DATA
============================================================

Progress and exam history are stored in the browser's localStorage:
  hjsProgress
  hjsExamResults

They remain on that browser/device and are not synchronised. Clearing
browser data removes them. Do not use this portal to store sensitive
student records.

============================================================
7. FILE MAP
============================================================

index.html                      Main portal shell and student login screen
css/style.css                   Premium gold, navy and responsive UI
js/app.js                       Navigation, dashboard, modules, glossary
js/portal-auth.js               Student portal sign-in, session and logout
js/modules.js                   Six bilingual unit modules and term banks
js/workbook-answers.js          Lesson-indexed workbook answer key
js/quizzes.js                   Formative quiz engine
js/examinations.js              Timer, sequential exam and result review
assets/logo1.png                 Supplied House of J&S logo
assets/logo-fallback.svg        Fallback logo if logo1.png is unavailable
assets/images/                  Original learning diagrams
manifest.webmanifest            Install metadata
sw.js                           Offline cache for HTTPS/localhost

4. LOGIN DESIGN UPDATE

The student login now uses a single centered login panel on a dark navy
background. It displays the supplied House of J&S logo at the top, with
bilingual labels, large name and password fields, a prominent sign-in
button, password visibility control, and responsive desktop/mobile
layouts. The existing student session and exam hand-off logic remain
unchanged.

END OF README


VISUAL STUDY NOTES — EXPANDED YEAR 7 EDITION
================================================
The Detailed Study Notes now include lesson-specific visual teaching aids across all 55 lessons in Units 1–6. Visuals include process flows, comparison and worked-example tables, document/storyboard layouts, network diagrams, binary pixel grids, coordinate plots, charts, Python examples and algorithm/decision diagrams where relevant.

The visual content is implemented locally in:
- css/visual-study-notes.css
- js/visual-study-notes.js

No external image or chart service is required. The visuals are original teaching aids based on the uploaded Inspire Computing Year 7 Student Book topics. Examples with made-up values are labelled as supplementary or illustrative practice data. Python examples are concentrated in Programming Part 1 and Programming Part 2, where the textbook introduces Python and Scratch visual coding.

Open a Unit → Detailed Study Notes to see the visual aids inside each lesson. Open Tables & Diagrams to browse the complete visual library for that unit.

VISUAL CONTENT COUNT
- 55 of 55 textbook lessons have visual learning aids.
- 111 original visual blocks are included across Units 1–6.
- Visual forms include 47 tables, 35 process flows, 11 wireframe/layout diagrams, 3 decision diagrams, 2 comparison/scale graphs, 1 pixel grid, 2 coordinate-shape plots and 10 code examples.
- The Unit 5 and Unit 6 code examples use Python where this matches the Student Book's programming lessons. Other units use visual explanations rather than unrelated code.
