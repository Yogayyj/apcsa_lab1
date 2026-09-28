# Fashion Item Java Lab

A build-free, GitHub Pages-ready AP Computer Science A lab about classes, objects, constructors, parameters and arguments, instance methods, and static methods. It uses only HTML, CSS, JavaScript, browser storage, and local JSON files.

## Student workflow

1. Open `index.html`, enter a name and Student ID, and select **Start Lab**.
2. Complete the four challenges in order. Every challenge uses the same cumulative `Main.java`; changing challenges never replaces the code.
3. Use **Check Answer** for concept-focused structural feedback. A challenge counts toward the score only after every check passes.
4. Work auto-saves under `fashionLab_<StudentID>`. **Logout** preserves it; entering the same ID restores it. Different IDs have independent work.
5. Select **Export Assignment** to download `FashionLab_StudentID_Student_Name.json` for the teacher.

**Reset My Lab** permanently deletes only the signed-in student's saved code and progress after confirmation.

## Teacher workflow

1. Ask students to submit their exported `.json` files.
2. Open `teacher.html` and select or drag in one or many files.
3. Review the class table, then select a student to inspect progress, submission time, and final `Main.java`.

Files are parsed locally with browser APIs. The dashboard does not upload or retain submissions.

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
