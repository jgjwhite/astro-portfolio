# Case Study Content Template

## Basic Page Information
- **Project ID**: `lululemon` (for NextPrevProject filtering)
- **Page Title**: lululemon Wanderwell
- **Hero Image Desktop**: `/assets/case-studies/lululemon/lululemon-hero-desktop.webp` 
- **Hero Image Mobile**: `/assets/case-studies/lululemon/lululemon-hero-mobile.webp` 
- **Hero Title**: Project Context
- **Hero Content**: In lululemon’s earliest stores, they often had physical cork boards in their stores that guests would use to post events and sign up to events. lululemon Wanderwell is a visionary concept that functions as a guest’s digitized, personalized community wellness events cork board.  I worked across both my Thoughtworks product team and lululemon’s Digital and Omni Futures team in developing the concept. 

---

## Content Sections (Use Components Below)

### 1. SubList - Project Details
**Component**: `<SubList>`
- **Title**: Role &amp; Timeline
- **Items**: 
  - **Duration**: Fall, 2023
  - **Team Size**: 1 PM, 1 Researcher and 2 Engineers
  - **Role**: Product design and strategy


### 2. SplitText - Business context
**Component**: `<SplitText>`
- **Title**: Business problem
- **Subtitle**: Engaging between purchases
- **Content**: The business outcome we were focused on was how to increase a guest’s lifetime value. Guest’s would often use the lululemon app to purchase products, and in-between purchases they wouldn't engage with the app whatsoever. lululemon wanted to explore opportunities to re-engage guests in between their purchases.


### 3. SplitText - Engagement objective
**Component**: `<SplitText>`
- **Title**: Concept Validation
- **Content**: Our team’s goal was to take a handful of concept spaces that lululemon had garnered signal around through past studies, e.g., “a secret, exclusive lululemon club,” and “a map of wellness activities in your area,” and arrive at one, validated concept prototype that we could then beta test in key markets.
- **Image Desktop** : `/assets/case-studies/lululemon/lululemon-sketches-desktop.webp`
- **Image Mobile** : `/assets/case-studies/lululemon/lululemon-sketches-mobile.webp`
- **Image Alt**: Early sketches used as visual stimuli during research





---

## Implementation Checklist

- [ ] Create folder: `/public/assets/case-studies/[project-id]/`
- [ ] Export all images in desktop and mobile versions
- [ ] Optimize images (WebP format, appropriate file sizes)
- [ ] Write all content sections following the template
- [ ] Create case study page: `/src/pages/[project-id].astro`
- [ ] Import all required components
- [ ] Set correct `currentProject` prop for NextPrevProject
- [ ] Test responsive behavior on all screen sizes
- [ ] Update homepage thumbnail link to point to new case study
- [ ] Verify all images load correctly
- [ ] Check that filtering works in NextPrevProject component