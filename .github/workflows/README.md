# GitHub Actions CI/CD Setup

This project uses GitHub Actions for continuous integration and deployment. The workflows are configured to:
1. Run quality checks (linting, type checking, tests) on all pull requests
2. Deploy to Vercel only when all checks pass on the main branch

## Required Secrets

To enable deployment to Vercel, you need to set up the following secrets in your GitHub repository:

1. `VERCEL_TOKEN` - Your Vercel token for authentication
2. `VERCEL_ORG_ID` - Your Vercel organization ID
3. `VERCEL_PROJECT_ID` - Your Vercel project ID

### How to get these values:

1. **VERCEL_TOKEN**:
   - Go to https://vercel.com/account/tokens
   - Create a new token with the "Git" scope
   - Copy the token value

2. **VERCEL_ORG_ID**:
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Find the "Organization" section to get your org ID

3. **VERCEL_PROJECT_ID**:
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Find the "General" section to get your project ID

### Setting up the secrets in GitHub:

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Click on "Secrets and variables" in the left sidebar
4. Click "Actions" 
5. Click "New repository secret"
6. Add each of the three secrets with their respective values

## Workflows

1. **PR Quality Checks** (`ci.yml`) - Runs on pull requests to main branch
   - Linting
   - Type checking
   - Tests
   - Build validation

2. **Deploy to Vercel** (`deploy.yml`) - Runs on pushes to main branch
   - All quality checks
   - Deploys to Vercel only if all checks pass
   - Comments on commits with deployment status

The deployment will be automatically blocked if any of the quality checks fail.