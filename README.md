# AP CSA Java Labs

A build-free, GitHub Pages-ready AP Computer Science A lab about classes, objects, constructors, parameters and arguments, instance methods, and static methods. It uses only HTML, CSS, JavaScript, browser storage, and local JSON files.

## Student workflow

1. Open `index.html`, enter a name and Student ID, and select **Start Lab**.
2. Choose **Lab 1 · Fashion Java Lab** from the lab selection screen. **Lab 2 · Trail Pass Java Lab** practices string parsing, substring boundaries, concatenation, and safe random indices in four cumulative checkpoints.
3. Complete the selected lab’s checkpoints in order. Every challenge uses the same cumulative `Main.java`; changing challenges never replaces the code.
4. Use **Check Answer** for concept-focused structural feedback. A checkpoint counts toward the score only after every check passes (Lab 1: /4, Lab 2: /4).
5. Work auto-saves under `fashionLab_<StudentID>` for Lab 1 and `trailLab_<StudentID>` for Lab 2. **Logout** preserves it; entering the same ID restores it. Different IDs have independent work.
6. Select **Export Assignment** to download a lab-specific `FashionLab_StudentID_Student_Name.json` or `TrailLab_StudentID_Student_Name.json` and automatically add/update the submission in the Teacher Dashboard when it is opened in the same browser.

**Reset My Lab** permanently deletes only the signed-in student's saved code and progress after confirmation.

## Teacher workflow

1. Open `teacher.html` and enter the teacher password `88888888`. Assignments exported from the Student Lab in the same browser appear automatically.
2. For assignments from other browsers or devices, select or drag in one or many exported `.json` files.
3. Submissions are identified by both Student ID and lab; legacy exports are treated as Lab 1. Review the class table, then select a student to inspect progress, submission time, and final `Main.java`.

Files are parsed locally with browser APIs. Dashboard submissions are retained in local storage across refreshes and browser restarts until **Clear list** is confirmed. Nothing is uploaded to a server.

## Run Code and Check Answer

**Check Answer** works completely in the browser and does not execute Java. It checks the required constructs, including `Calculator.add()` and both `getPrice()` calls rather than accepting a hard-coded sum.

**Run Code** remains available for a Judge0-compatible API. Without an endpoint, it shows a friendly message and the rest of the lab continues to work. An endpoint can be entered under **Java Runner settings**. Do not embed private API keys in a public site; use a classroom-controlled runner or proxy with suitable CORS rules.

## Run locally

No installation or build is required. Open `index.html` directly, or serve the folder for browser testing:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` and `http://localhost:8000/teacher.html`.

## Deploy to GitHub Pages

All links are relative, so deployment works at a project path such as `username.github.io/fashion-java-lab/`.

### GitHub Actions (included)

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. The included workflow publishes the static repository on pushes to `main` (or run it manually).

### Deploy from a branch

Alternatively, choose **Deploy from a branch**, select the repository's default branch and `/ (root)`, then save. No build command or package installation is needed.

## Acceptance checklist

- Student profile and per-ID local storage
- One persistent `Main.java` across all four challenges
- Auto-save, refresh restore, logout/login restore, and confirmed reset
- Detailed structural checks and persistent score
- Read-only teacher-provided Java classes
- Optional Judge0-compatible Run Code
- JSON export and multi-file teacher import (including drag and drop)
- Relative assets suitable for GitHub Pages project sites

## Lab 2 · Trail Pass

Adapted from the supplied Unit 1 FRQ skills with a new park-kiosk scenario. Parse `trail:destination#zone` (for example `cedar:waterfall#north`) and generate full and initial-based trail passes, then print a random number from 1 through the trail name’s length. The four checkpoints cover delimiter positions, extraction and the full pass, an initial-based pass, and a simple length/Math.random task with a worked example. Chinese question translations appear in the left panel. Trail and destination names are nonempty. Existing five-checkpoint exports remain readable; saved student code and the first three checkpoints are preserved, while the changed fourth checkpoint must be checked again.

Check Answer provides structural feedback with the task’s named variables, not compilation or proof of correctness for arbitrary Java. Code, scores, reset, exports, and teacher review are independent for each lab. Optional Run Code submits only Main.java for Lab 2.
