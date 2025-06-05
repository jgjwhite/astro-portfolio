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


### 4. SplitText - Research
**Component**: `<SplitText>`
- **Title**: Research
- **Content**: Our team structured our research into 3 iterative sprints. We started broad with a generative, low-fidelity sprint, and then used insights from each sprint to persevere, pivot or park key features of each of the concepts. In total, our research included 50 participants, primarily via methods like user interviews, surveys and in-person wizard of oz testing.
- **Image Desktop** : `/assets/case-studies/lululemon/lululemon-profiles-desktop.webp`
- **Image Mobile** : `/assets/case-studies/lululemon/lululemon-profiles-mobile.webp`
- **Image Alt**: Concept explorations for personalized sweat profile pages


### 5. SplitWidthImages - Research II
**Component**: `<SplitWidthImages>`
- **Images**: 
  - **Image 1**: 
    - **Desktop**: `/assets/case-studies/lululemon/lululemon-research-desktop.webp`
    - **Mobile**: `/assets/case-studies/lululemon/lululemon-research-mobile.webp`
    - **Alt**: Images from in-person research round
    - **Caption**: Shots from our in-person research round.
  - **Image 2**: 
    - **Desktop**: `/assets/case-studies/lululemon/lululemon-survey-desktop.webp`
    - **Mobile**: `/assets/case-studies/lululemon/lululemon-survey-mobile.webp`
    - **Alt**: Survey results graph
    - **Caption**: Excerpt from an early survey of the concept spaces.



### 4. SplitText - Impact
**Component**: `<SplitText>`
- **Title**: Outcomes
- **Subtitle**: Beta testing in key markets
- **Content**: Our Wanderwell prototype was built and shipped as a beta test to major U.S. markets, including Miami and New York. The success metric we used for the beta test was to benchmark Wanderwell against the current “Classes” feature in the lululemon app, which guest's interacted with ~2-5% of the time. If we could show that Wanderwell was being engaged with significantly more often than Classes, then lululemon would consider replacing it with Wanderwell.
- **Image Desktop** : `/assets/case-studies/lululemon/lululemon-align-desktop.webp`
- **Image Mobile** : `/assets/case-studies/lululemon/lululemon-align-mobile.webp`
- **Image Alt**: Concept explorations for personalized sweat profile pages

### 5. MultiFullWidthImages - Full-Width Image Series
**Component**: `<MultiFullWidthImages>`
- **Images**: Array of 1-5 image objects:
 - **Image 1**:
   - **Desktop**: `/assets/case-studies/lululemon/lululemon-pulse-check-desktop.webp`
   - **Mobile**: `/assets/case-studies/lululemon/lululemon-pulse-check-mobile.webp`
   - **Alt**: Daily pulse interaction
   - **Caption**: We secured a patent for the daily pulse interaction, which was designed to engage guests and collect data on their preferences.
 - **Image 2** 
   - **Desktop**: `/assets/case-studies/lululemon/lululemon-categories-desktop.webp`
   - **Mobile**: `/assets/case-studies/lululemon/lululemon-categories-mobile.webp`
   - **Alt**: Wanderwell curated categories
   - **Caption**: Personalized categories, curated by lululemon ambassadors, was scoped in for the beta test.



### 9. NextPrevProject - Navigation
**Component**: `<NextPrevProject>`
- **Current Project**: `lululemon` (same as Project ID above)


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




