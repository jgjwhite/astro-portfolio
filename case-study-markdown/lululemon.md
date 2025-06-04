# Case Study Content Template

## Basic Page Information
- **Project ID**: `[ownright|lululemon|messenger|bulletins|tread]` (for NextPrevProject filtering)
- **Page Title**: [Project Name - Case Study Title]
- **Hero Image Desktop**: `/assets/case-studies/[project-id]/hero-desktop.webp` (16:9 or wider aspect ratio)
- **Hero Image Mobile**: `/assets/case-studies/[project-id]/hero-mobile.webp` (4:3 or taller aspect ratio)

---

## Content Sections (Use Components Below)

### 1. SplitText - Project Introduction
**Component**: `<SplitText>`
- **Title**: [Section title - e.g., "Overview"]
- **Subtitle**: [Optional subtitle in gray]
- **Content**: [Main introductory paragraph about the project]
- **Image Desktop** (optional): `/assets/case-studies/[project-id]/intro-desktop.webp`
- **Image Mobile** (optional): `/assets/case-studies/[project-id]/intro-mobile.webp`
- **Image Alt**: [Descriptive alt text]
- **Image Caption** (optional): [Caption text for context]

### 2. SplitText - Problem Statement  
**Component**: `<SplitText>`
- **Title**: [e.g., "The Challenge", "Problem"]
- **Subtitle**: [Optional context]
- **Content**: [Detailed problem description]

### 3. SubList - Project Details
**Component**: `<SubList>`
- **Title**: [e.g., "Project Details"]
- **Subtitle**: [Optional context]
- **Items**: 
  - **Duration**: [e.g., "6 months"]
  - **Team Size**: [e.g., "4 designers, 2 researchers"]
  - **Platform**: [e.g., "Web and Mobile"]
  - **Role**: [e.g., "Lead Product Designer"]
  - **Tools**: [e.g., "Figma, Principle, Miro"]

### 4. SplitText - Solution Overview
**Component**: `<SplitText>`
- **Title**: [e.g., "Our Approach", "Solution"]
- **Subtitle**: [Optional]
- **Content**: [High-level solution description]
- **Image Desktop** (optional): `/assets/case-studies/[project-id]/solution-desktop.webp`
- **Image Mobile** (optional): `/assets/case-studies/[project-id]/solution-mobile.webp`
- **Image Alt**: [Descriptive alt text]
- **Image Caption** (optional): [Solution context]

### 5. SplitWidthImages - Process/Design Exploration
**Component**: `<SplitWidthImages>`
- **Images**: 
  - **Image 1**: 
    - **Desktop**: `/assets/case-studies/[project-id]/process-1-desktop.webp`
    - **Mobile**: `/assets/case-studies/[project-id]/process-1-mobile.webp`
    - **Alt**: [Process step description]
    - **Caption**: [What this image shows]
  - **Image 2**: 
    - **Desktop**: `/assets/case-studies/[project-id]/process-2-desktop.webp`
    - **Mobile**: `/assets/case-studies/[project-id]/process-2-mobile.webp`
    - **Alt**: [Process step description]
    - **Caption**: [What this image shows]
  - [Add up to 4 images total]

### 6. VideoEmbed - Demo/Prototype (Optional)
**Component**: `<VideoEmbed>`
- **Video**: `/assets/case-studies/[project-id]/demo.mp4` (16:9 aspect ratio, H.264, under 10MB)
- **Poster**: `/assets/case-studies/[project-id]/demo-poster.webp`
- **Alt**: [Video description]
- **Caption**: [What the video demonstrates]
- **Autoplay**: `false` (set to `true` for background videos)
- **Muted**: `true`
- **Loop**: `false`

### 7. OutcomesGrid - Results/Metrics
**Component**: `<OutcomesGrid>`
- **Title**: [e.g., "Key Outcomes", "Results"]
- **Subtitle**: [Optional context]
- **Outcomes**: 
  - **Metric 1**: 
    - **Number**: [e.g., "1.2x", "60%", "32"]
    - **Caption**: [e.g., "Increase in efficiency"]
  - **Metric 2**: 
    - **Number**: [e.g., "85%"]
    - **Caption**: [e.g., "User satisfaction"]
  - [Add up to 4 metrics total]

### 8. SplitText - Learnings/Reflection
**Component**: `<SplitText>`
- **Title**: [e.g., "Key Learnings", "Reflection"]
- **Subtitle**: [Optional]
- **Content**: [What you learned, challenges overcome, next steps]

### 9. NextPrevProject - Navigation
**Component**: `<NextPrevProject>`
- **Current Project**: `[project-id]` (same as Project ID above)

---

## Image Specifications

### File Naming Convention:
- Hero: `hero-desktop.webp`, `hero-mobile.webp`
- Content: `[section-name]-desktop.webp`, `[section-name]-mobile.webp`
- Process: `process-[number]-desktop.webp`, `process-[number]-mobile.webp`

### Image Dimensions:
- **Desktop Images**: 1200px+ width, 16:9 or wider aspect ratio
- **Mobile Images**: 800px+ width, 4:3 or taller aspect ratio
- **Hero Images**: Desktop 1920x1080, Mobile 800x1000
- **Process Images**: Desktop 1200x675, Mobile 800x1000

### Technical Requirements:
- **Format**: WebP for best compression
- **Quality**: 80-90% quality setting
- **File Size**: Keep under 500KB per image when possible
- **Alt Text**: Always include descriptive alt text for accessibility

### Video Specifications:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Aspect Ratio**: 16:9
- **File Size**: Under 10MB
- **Compression**: High quality, optimized for web
- **Poster Image**: Same dimensions as video, WebP format

---

## Content Guidelines

### Writing Style:
- **Concise**: Keep paragraphs focused and readable
- **Story-driven**: Structure as problem → solution → outcome
- **Specific**: Include concrete details, metrics, and examples
- **Professional**: Maintain professional tone while being engaging

### Content Length:
- **Titles**: 2-8 words
- **Subtitles**: 4-12 words  
- **Content blocks**: 50-150 words (1-3 paragraphs)
- **Captions**: 10-25 words
- **Alt text**: 5-15 words, descriptive

### Metrics/Outcomes:
- Use specific numbers when possible
- Include context for what the metrics mean
- Focus on business impact and user value
- Limit to 2-4 key metrics to avoid overwhelming

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