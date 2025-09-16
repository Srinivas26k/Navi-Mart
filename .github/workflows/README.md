# GitHub Actions CI/CD Setup

This project uses GitHub Actions for continuous integration. The workflows are configured to:
1. Run quality checks (linting, type checking, tests) on all pull requests
2. Build and validate the project on pushes to the main branch

## Current Workflows

1. **PR Quality Checks** (`ci.yml`) - Runs on pull requests to main branch
   - Linting
   - Type checking
   - Tests
   - Build validation
   - Comments on PRs with failure details

2. **Build and Quality Checks** (`deploy.yml`) - Runs on pushes to main branch
   - All quality checks
   - Project build
   - Creates build artifacts that can be downloaded
   - Comments on commits with build status

## Deployment Options

The current setup focuses on quality assurance and building the project. When you're ready to deploy, you have several options:

### Option 1: Manual Deployment
- Download the build artifacts from the GitHub Actions workflow
- Deploy manually to your hosting provider of choice

### Option 2: GitHub Pages Deployment
- Modify the `deploy.yml` workflow to deploy to GitHub Pages
- Add the required configuration steps

### Option 3: Vercel Integration (When Ready)
To enable automatic deployment to Vercel:
1. Obtain your Vercel token, organization ID, and project ID
2. Add them as secrets in your GitHub repository
3. Uncomment the Vercel deployment steps in `deploy.yml`

### Option 4: Other Hosting Providers
You can modify the `deploy.yml` workflow to deploy to other platforms like:
- Netlify
- AWS S3/CloudFront
- Firebase Hosting
- Azure Static Web Apps

The quality checks will prevent any deployment (manual or automatic) when there are issues in the code, ensuring only validated builds are deployed.