# Hashtag Ash AI-First Personal Website

A Git-maintained personal brand platform for:

- AI evaluation and freelance project procurement
- Enterprise quality engineering and data-quality consulting
- Technical writing, tutorials and vlogging
- Carnatic music instruction
- High-school mathematics tutoring
- Chess coaching

## Why this replaces the current positioning

The existing public Hashtag Ash website presents the business primarily as a general software-testing and staffing firm. This repository changes the front-door narrative to a distinct expert-led brand while retaining the established `hashtagash.com` domain.

## Local setup

```bash
git clone <your-repository-url>
cd hashtagash-ai-portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize first

1. Replace the initials card in `app/page.tsx` with a professional portrait.
2. Update all copy in `content/site.ts`.
3. Update the contact email and LinkedIn URL.
4. Confirm GitHub repository links.
5. Add a Calendly or Google appointment link through `.env.local`.
6. Add real testimonials only after receiving permission.
7. Never publish confidential client data or proprietary screenshots.

## Recommended Git workflow

```bash
git checkout -b feature/add-ai-case-study
# edit files
git add .
git commit -m "Add AI evaluation case study"
git push -u origin feature/add-ai-case-study
```

Open a pull request, review the preview deployment, then merge into `main`.

## Deployment with Vercel

1. Create a private or public GitHub repository.
2. Push this project to GitHub.
3. Import the repository into Vercel.
4. Set the production branch to `main`.
5. Add `www.hashtagash.com` and `hashtagash.com` under Domains.
6. Update DNS records using the values provided by Vercel.
7. Keep the existing Wix site active until the new deployment is fully validated.

Every pull request receives a preview URL. Every merge to `main` updates production.

## Suggested content branches

- `content/outlier-music-evaluation`
- `content/healthcare-data-quality-case-study`
- `content/carnatic-beginner-program`
- `content/algebra-exam-prep`
- `content/chess-foundations`
- `feature/video-library`
- `feature/ask-ajay-ai`

## Monthly upkeep checklist

- Publish one technical case study.
- Publish two short videos.
- Add one teaching resource.
- Review all contact links.
- Verify analytics and lead sources.
- Update availability and featured services.
- Review dependencies and security alerts.
- Back up inquiries outside the website.

## Content roadmap

### Phase 1
Launch the landing page, consulting services, teaching services, GitHub portfolio and contact conversion paths.

### Phase 2
Add `/insights`, `/videos`, `/case-studies`, `/teaching`, `/resources` and individual service pages.

### Phase 3
Add an “Ask Ajay” assistant using curated, approved website content. Do not expose private resumes, client artifacts or personal information to the model.

### Phase 4
Add lead qualification, newsletter signup, lesson scheduling, downloadable guides and lightweight CRM integration.

## SEO themes

Primary:
- AI evaluator
- AI quality consultant
- enterprise quality engineering consultant
- test automation architect
- healthcare data quality consultant

Teaching:
- online Carnatic music teacher
- high-school mathematics tutor
- online chess coach
- math and chess enrichment

## License

Copyright Hashtag Ash LLC. All rights reserved unless explicitly changed.
