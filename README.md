# Vehicle Dynamics — Product Page

A single-page product/documentation site for the VehicleDynamics Unreal Engine plugin, built from the plugin's own documentation content. Pure HTML/CSS/JS, no build step, no external images.

## What's included

- Hero with product summary and platform/tech tags
- How it works (body + wheels)
- Subsystem reference table (suspension, tires, drivetrain, brakes, aero)
- Five-step workflow strip (install → prepare → place wheels → build → drive)
- Step-by-step detail sections, including a real folder structure, five mesh-prep rules, a wheel-placement diagram with hub coordinates, and the Blueprint/Python build step
- Worked SUV example with before/after stats
- Camera modes and full key binding reference
- Weather/tire-mark behavior section
- Performance troubleshooting table and console commands
- Tuning cheat sheet
- Technical specs and C++/Blueprint API reference
- Get-the-plugin call to action with repo/store/support links

## File structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Before you publish

Replace these placeholders with your real links:

| Placeholder | Where | Replace with |
|---|---|---|
| `https://github.com/` | nav/CTA/footer | your actual GitHub repo URL |
| `https://www.fab.com/` | CTA/footer | your actual Fab store listing URL |
| `your-email@example.com` | CTA section | your support email |

The rest of the content (specs, tables, parameters, key bindings, API methods) is drawn directly from the plugin documentation you provided — check it over, since it's real technical content that people may act on (build settings, console commands, tuning values).

## Deploy to GitHub Pages

1. Create a GitHub repository (this can be a project repo, e.g. `vehicledynamics-plugin`, or your `username.github.io` user site).
2. Upload `index.html`, `css/`, `js/`, and `README.md` to the root of the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, set branch to **main** and folder to **/ (root)**, then save.
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/` (or `https://YOUR_USERNAME.github.io/` if you used a `username.github.io` repo).

## Local preview

Just open `index.html` in a browser — no server needed.

## Customizing

- Colors, type, and spacing are CSS custom properties at the top of `css/style.css` under `:root`.
- Every section is a self-contained `<section>` in `index.html` with an `id` matching the nav links — reorder or edit sections independently.
