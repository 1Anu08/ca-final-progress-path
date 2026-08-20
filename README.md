# CA Final Path

Build a responsive web application called:

CA FINAL STUDY TRACKER

This is a personal CA Final first-study progress tracker.

IMPORTANT:

- This is VERSION 1.

- Keep the application simple and focused.

- DO NOT add revision tracking, RTP, MTP, PYQs, mock tests, study streaks, timers, calendars, notifications, targets, leaderboards, gamification, or other productivity features.

- The purpose of Version 1 is ONLY to track completion of the FIRST STUDY of each paper.

- I want the source code to remain clean and editable because I will later use the GitHub repository and potentially other AI coding tools to modify the application.

- Do not create unnecessary backend complexity.

- The user's progress/checkmarks must persist when the app is closed and reopened.

==================================================

1. TECHNOLOGY / CODE

==================================================

Create a modern responsive web application with clean, well-structured source code.

Use a technology stack that is easy to continue modifying through GitHub and AI coding tools.

The application should be fully functional, not just a visual mockup.

Store study progress persistently. For Version 1, local browser persistence such as localStorage is sufficient unless a better simple solution is required.

Do not require a paid service or paid API.

Keep all syllabus data in a clean, easily editable data structure/file so that I can modify chapters later without having to rewrite the UI logic.

==================================================

2. OVERALL APP STRUCTURE

==================================================

The CA Final syllabus has 6 papers:

GROUP I

1. Financial Reporting

2. Advanced Financial Management

3. Advanced Auditing, Assurance & Professional Ethics

GROUP II

4. Direct Tax Laws & International Taxation

5. Indirect Tax Laws

6. Integrated Business Solutions

IBS contains two separate components:

- Costing

- Law

Costing and Law are NOT separate additional papers for the overall six-paper calculation.

They are the two components that together make up Paper 6 — Integrated Business Solutions.

==================================================

3. OVERALL PROGRESS CALCULATION

==================================================

The large overall progress indicator on the main dashboard must give EQUAL WEIGHT to all six papers.

Formula:

Overall Progress =

(FR % + AFM % + Audit % + DT % + IDT % + IBS %) / 6

Do NOT calculate overall progress based on the total number of chapters across all papers.

Each paper represents exactly 1/6 of the overall CA Final progress.

For IBS:

IBS % = (Costing % + Law %) / 2

Therefore:

- Costing = 50% of IBS

- Law = 50% of IBS

- IBS itself = 1/6 of the overall CA Final progress.

==================================================

4. TRACKING LOGIC

==================================================

Every trackable chapter/unit has exactly TWO completion items:

[ ] Videos Watched

[ ] Questions Practiced

A trackable item is considered COMPLETE only when BOTH are checked.

When an item is checked:

- show a square checked checkbox

- apply a strikethrough to the completed text

- do NOT change the colour of the card

Example:

☑ ~~Videos Watched~~

☐ Questions Practiced

When both are completed:

☑ ~~Videos Watched~~

☑ ~~Questions Practiced~~

The progress percentage must update immediately.

Every checkbox must be reversible by clicking it again.

==================================================

5. CHAPTER / UNIT RULE

==================================================

This is extremely important.

IF a chapter contains units:

- The UNITS are the actual trackable items.

- The chapter itself is NOT independently trackable.

- The chapter acts as a header/container.

- The chapter automatically becomes 100% complete when all its units are complete.

IF a chapter does NOT contain units:

- The chapter itself is the trackable item.

- It has the Videos Watched and Questions Practiced checkboxes.

Do not create duplicate tracking for a chapter and its units.

Example:

Chapter 5 — Ind AS on Assets

Unit 1

Unit 2

Unit 3

...

Unit 8

The progress of Chapter 5 is calculated from its units.

If 4/8 units are complete:

Chapter 5 = 50%

If 8/8 units are complete:

Chapter 5 = 100% / Complete

==================================================

6. MAIN DASHBOARD DESIGN

==================================================

At the top center:

CA FINAL STUDY TRACKER

Below it, display a large overall progress indicator.

The overall progress indicator should be visually prominent:

- thick rounded outer structure

- bold accent colour

- percentage displayed prominently

- smooth progress animation

- not a thin generic loading bar

Below the overall progress indicator, show:

GROUP I

Then three clickable paper cards in a row on desktop.

1. FINANCIAL REPORTING

2. ADVANCED FINANCIAL MANAGEMENT

3. ADVANCED AUDITING

Then:

GROUP II

Three clickable paper cards in a row:

4. DIRECT TAX LAWS & INTERNATIONAL TAXATION

5. INDIRECT TAX LAWS

6. INTEGRATED BUSINESS SOLUTIONS

Desktop:

- 3 cards per row

Mobile:

- 1 card per row

Tablet:

- adapt responsively.

Do NOT show the chapters directly on the main dashboard.

==================================================

7. PAPER CARDS

==================================================

The front of each paper card should be visually clean.

Example:

FINANCIAL REPORTING

◔ 47%

The card should primarily show:

- paper name

- circular/small progress indicator

- percentage

Do not put a long chapter list inside the front of the card.

Cards should have:

- smooth hover effect

- subtle elevation/lift

- smooth transitions

- rounded corners

- visually interesting but not excessive styling

==================================================

8. CARD FLIP INTERACTION

==================================================

When a paper card is clicked, it should smoothly flip.

Front:

FINANCIAL REPORTING

◔ 47%

Back:

FINANCIAL REPORTING

47%

12 / 26 completed

[ Continue Studying → ]

The flip animation should be smooth and polished.

Do not make the animation excessive or slow.

Clicking "Continue Studying" opens the detailed paper study view.

==================================================

9. PAPER STUDY VIEW

==================================================

When entering a paper, display:

- Paper title

- Paper progress

- Relevant module/section headings

- Chapter cards

Do NOT display the entire syllabus as a plain vertical text list.

Use CHAPTER CARDS.

Example:

MODULE 1

┌──────────────────────┐

│ Chapter 1            │

│ Introduction...      │

│                      │

│             ◔ 100%   │

└──────────────────────┘

┌──────────────────────┐

│ Chapter 2            │

│ Conceptual...        │

│                      │

│             ◔ 50%    │

└──────────────────────┘

Use a responsive card grid.

If a chapter contains units, clicking the chapter card should reveal/expand the units.

If a chapter does not contain units, clicking the chapter card should open its two tracking checkboxes.

==================================================

10. UNIT DISPLAY

==================================================

For chapters with units:

Example:

Chapter 5 — Ind AS on Assets

◔ 62%

Clicking the chapter reveals:

Unit 1 — Ind AS 2

◔ 100%

Unit 2 — Ind AS 16

◔ 50%

Unit 3 — Ind AS 23

◔ 0%

etc.

Units should be clickable.

Clicking a unit reveals:

[ ] Videos Watched

[ ] Questions Practiced

The unit's circular progress should reflect:

- 0% = neither completed

- 50% = one completed

- 100% = both completed

For chapters without units:

Click chapter → directly show:

[ ] Videos Watched

[ ] Questions Practiced

==================================================

11. CHAPTER PROGRESS

==================================================

Every chapter card should show a small circular/pie-style progress indicator beside the percentage.

Examples:

◔ 0%

◔ 50%

◔ 100%

This is preferable to a conventional horizontal progress bar at chapter level.

For a chapter containing units, calculate chapter progress based on completed units.

For a chapter without units, calculate chapter progress based on its two checkboxes.

A chapter with all trackable items complete should clearly display:

100%

COMPLETE

But do NOT change the entire card's colour.

==================================================

12. PAPER PROGRESS

==================================================

Paper progress must be calculated from the underlying trackable items.

For a paper with:

- chapters without units

- chapters containing units

count the actual trackable items.

For example:

- Chapter without units = 1 trackable item

- Chapter with 8 units = 8 trackable items

The paper percentage is:

completed trackable items / total trackable items × 100

Do not count a parent chapter separately if it contains units.

==================================================

13. DESIGN / VISUAL STYLE

==================================================

The design should feel:

- modern

- bold

- clean

- academic

- slightly playful

- polished

- NOT like a generic corporate dashboard

- NOT childish

- NOT overly gamified

Use LIGHT MODE ONLY for Version 1.

Do not implement dark mode yet.

Avoid a basic plain white background.

Use this colour palette:

Deep Red:

#BD4444

Sage Green:

#677E61

Blue:

#3368A0

Cream:

#F1DEC4

Use the colours thoughtfully.

Do NOT colour-code cards according to completion status.

Do NOT make completed cards green or incomplete cards red.

The colours are part of the visual identity, not status indicators.

Use the deep red prominently in the main dashboard/hero area.

Use cream-toned surfaces/cards and restrained use of sage green and blue.

The interface should still have sufficient contrast and readability.

==================================================

14. TYPOGRAPHY

==================================================

Primary font:

Bricolage Grotesque

Use it for:

- main title

- paper titles

- chapter headings

- important UI elements

- large percentages

Use Roboto Mono selectively for:

- percentages

- numerical counts

- small status indicators

- progress values

Do not use Roboto Mono for all body text.

==================================================

15. MAIN TITLE ANIMATION

==================================================

The title:

CA FINAL STUDY TRACKER

should have a subtle wave animation on initial application load.

Each letter should sequentially move slightly up and down to create a wave effect.

Important:

- animation happens ONLY once when the application initially opens

- it should not continuously loop

- it should not replay every time the dashboard is revisited

- keep it around 1–1.5 seconds

- make it smooth and polished

==================================================

16. OTHER ANIMATIONS

==================================================

Use smooth animations for:

- paper card hover

- paper card flip

- expanding chapters

- opening units

- progress updates

- page transitions where appropriate

Avoid excessive animations.

The main personality of the application should come from:

1. title wave animation

2. card flip animation

3. smooth progress transitions

==================================================

17. CHECKBOX DESIGN

==================================================

Use square checkboxes.

When unchecked:

☐ Videos Watched

When checked:

☑ ~~Videos Watched~~

The text must receive a clean strikethrough when completed.

Do NOT colour the whole card based on completion.

The checkbox should have a polished custom appearance consistent with the colour palette.

==================================================

18. IBS STRUCTURE

==================================================

Paper 6 is:

INTEGRATED BUSINESS SOLUTIONS

It contains exactly TWO components:

COSTING

LAW

The IBS card on the main dashboard should show the combined IBS percentage.

Inside IBS, display two clearly separate sections/cards:

COSTING

◔ XX%

LAW

◔ XX%

Costing and Law should be individually clickable and trackable.

IBS percentage:

(Costing % + Law %) / 2

==================================================

19. SYLLABUS DATA

==================================================

Use the following exact syllabus structure.

IMPORTANT:

- Preserve the hierarchy.

- Preserve the chapter names.

- Do not invent chapters.

- Do not omit chapters.

- Initial Pages must NOT be trackable.

- Do not include Initial Pages in progress calculations.

- Do not create tracking for Initial Pages.

- Where units are explicitly provided, units are the trackable items.

- Where no units are provided, the chapter is the trackable item.

--------------------------------------------------

PAPER 1 — FINANCIAL REPORTING

--------------------------------------------------

Chapter 1: Introduction to Indian Accounting Standards

Chapter 2: Conceptual Framework for Financial Reporting under Indian Accounting Standards (Ind AS)

Chapter 3: Ind AS on Presentation of General Purpose Financial Statements

- Unit 1: Ind AS 1 “Presentation of Financial Statements”

- Unit 2: Ind AS 34 “Interim Financial Reporting”

- Unit 3: Ind AS 7 “Statement of Cash Flows”

Chapter 4: Ind AS on Measurement based on Accounting Policies

- Unit 1: Ind AS 8 “Accounting Policies, Changes in Accounting Estimates and Errors”

- Unit 2: Ind AS 10 “Events after the Reporting Period”

- Unit 3: Ind AS 113 “Fair Value Measurement”

Chapter 5: Ind AS on Assets of the Financial Statements

- Unit 1: Ind AS 2 “Inventories”

- Unit 2: Ind AS 16 “Property, Plant and Equipment”

- Unit 3: Ind AS 23 “Borrowing Costs”

- Unit 4: Ind AS 36 “Impairment of Assets”

- Unit 5: Ind AS 38 “Intangible Assets”

- Unit 6: Ind AS 40 “Investment Property”

- Unit 7: Ind AS 105 “Non-current Assets Held for Sale and Discontinued Operations”

- Unit 8: Ind AS 116 “Leases”

Chapter 6: Ind AS on Liabilities of the Financial Statements

- Unit 1: Ind AS 19 “Employee Benefits”

- Unit 2: Ind AS 37 “Provisions, Contingent Liabilities and Contingent Assets”

Chapter 7: Ind AS on Items impacting the Financial Statements

- Unit 1: Ind AS 12 “Income Taxes”

- Unit 2: Ind AS 21 “The Effects of Changes in Foreign Exchange Rates”

Chapter 8: Ind AS on Disclosures in the Financial Statements

- Unit 1: Ind AS 24 “Related Party Disclosures”

- Unit 2: Ind AS 33 “Earnings per Share”

- Unit 3: Ind AS 108 “Operating Segments”

Chapter 9: Ind AS 115 “Revenue from Contracts with Customers”

Chapter 10: Other Indian Accounting Standards

- Unit 1: Ind AS 41 “Agriculture”

- Unit 2: Ind AS 20 “Accounting for Government Grants and Disclosure of Government Assistance”

- Unit 3: Ind AS 102 “Share Based Payment”

Chapter 11: Accounting and Reporting of Financial Instruments

- Unit 1: Financial Instruments: Scope and Definitions

- Unit 2: Classification and Measurement of Financial Assets and Financial Liabilities

- Unit 3: Financial Instruments: Equity and Financial Liabilities

- Unit 4: Derivatives and Embedded Derivatives

- Unit 5: Recognition and Derecognition of Financial Instruments

- Unit 6: Hedge Accounting

- Unit 7: Disclosures

Chapter 12: Ind AS 103 “Business Combinations”

Chapter 13: Consolidated and Separate Financial Statements of Group Entities

- Unit 1: Introduction to Consolidated and Separate Financial Statements

- Unit 2: Important Definitions

- Unit 3: Consolidated Financial Statements

- Unit 4: Ind AS 110: Consolidation Procedure for Subsidiaries

- Unit 5: Ind AS 111 “Joint Arrangements”

- Unit 6: Ind AS 28 “Investments in Associates and Joint Ventures”

- Unit 7: Ind AS 27 “Separate Financial Statements”

- Unit 8: Disclosures

Chapter 14: Ind AS 101 “First-time Adoption of Ind AS”

Chapter 15: Analysis of Financial Statements

Chapter 16: Professional and Ethical Duty of a Chartered Accountant

Chapter 17: Accounting and Technology

--------------------------------------------------

PAPER 2 — ADVANCED FINANCIAL MANAGEMENT

--------------------------------------------------

Chapter 1: Financial Policy and Corporate Strategy

Chapter 2: Risk Management

Chapter 3: Advanced Capital Budgeting Decisions

Chapter 4: Security Analysis

Chapter 5: Security Valuation

Chapter 6: Portfolio Management

Chapter 7: Securitization

Chapter 8: Mutual Funds

Chapter 9: Derivatives Analysis and Valuation

Chapter 10: Foreign Exchange Exposure and Risk Management

Chapter 11: International Financial Management

Chapter 12: Interest Rate Risk Management

Chapter 13: Business Valuation

Chapter 14: Mergers, Acquisitions and Corporate Restructuring

Chapter 15: Startup Finance

--------------------------------------------------

PAPER 3 — ADVANCED AUDITING, ASSURANCE & PROFESSIONAL ETHICS

--------------------------------------------------

MODULE 1

Chapter 1: Quality Control

Chapter 2: General Auditing Principles and Auditors Responsibilities

Chapter 3: Audit Planning, Strategy and Execution

Chapter 4: Materiality, Risk Assessment and Internal Control

Chapter 5: Audit Evidence

Chapter 6: Completion and Review

Chapter 7: Reporting

MODULE 2

Chapter 8: Specialised Areas

Chapter 9: Related Services

Chapter 10: Review of Financial Information

Chapter 11: Prospective Financial Information and Other Assurance Services

Chapter 12: Digital Auditing & Assurance

Chapter 13: Group Audits

Chapter 14: Special Features of Audit of Banks & Non-Banking Financial Companies

- Unit 1

- Unit 2

MODULE 3

Chapter 15: Overview of Audit of Public Sector Undertakings

Chapter 16: Internal Audit

Chapter 17: Due Diligence, Investigation & Forensic Accounting

Chapter 18: Sustainable Development Goals (SDG) & Environment, Social and Governance (ESG) Assurance

Chapter 19: Professional Ethics & Liabilities of Auditors

EXCLUDE ALL INITIAL PAGES.

--------------------------------------------------

PAPER 4 — DIRECT TAX LAWS & INTERNATIONAL TAXATION

--------------------------------------------------

MODULE 1

Chapter 1: Basic Concepts

Chapter 2: Incomes which do not form part of Total Income

Chapter 3: Profits and Gains of Business or Profession

Chapter 4: Capital Gains

Chapter 5: Income from Other Sources

Chapter 6: Income of Other Persons included in Assessee’s Total Income

Chapter 7: Aggregation of Income, Set Off or Carry Forward of Losses

Chapter 8: Deductions from Gross Total Income

MODULE 2

Chapter 9: Assessment of Various Entities

Chapter 10: Assessment of Trusts and Institutions, Political Parties and Other Special Entities

Chapter 11: Tax Planning, Tax Avoidance and Tax Evasion

Chapter 12: Taxation of Digital Transactions

MODULE 3

Chapter 13: Deduction, Collection and Recovery of Tax

Chapter 14: Income Tax Authorities

Chapter 15: Assessment Procedure

Chapter 16: Appeals and Revision

Chapter 17: Dispute Resolution

Chapter 18: Miscellaneous Provisions

Chapter 19: Provisions to Counteract Unethical Tax Practices

Chapter 20: Tax Audit and Ethical Compliances

Additional trackable item:

Questions Based on Significant Select Cases

MODULE 4

Chapter 21: Non Resident Taxation

Chapter 22: Double Taxation Relief

Chapter 23: Advance Rulings

Chapter 24: Transfer Pricing

Chapter 25: Fundamentals of BEPS

Chapter 26: Application and Interpretation of Tax Treaties

Chapter 27: Overview of Model Tax Conventions

Chapter 28: Latest Developments in International Taxation

EXCLUDE:

- Initial Pages

- Annexure

Questions Based on Significant Select Cases IS INCLUDED as a trackable item.

--------------------------------------------------

PAPER 5 — INDIRECT TAX LAWS

--------------------------------------------------

PART I: GST

MODULE 1

Chapter 1: Supply under GST

Chapter 2: Charge of GST

Chapter 3: Place of Supply

Chapter 4: Exemptions from GST

Chapter 5: Time of Supply

Chapter 6: Value of Supply

MODULE 2

Chapter 7: Input Tax Credit

Chapter 8: Registration

Chapter 9: Tax Invoice, Credit and Debit Notes

Chapter 10: Accounts and Records; E-way Bill

Chapter 11: Payment of Tax

Chapter 12: Electronic Commerce Transactions

Chapter 13: Returns

MODULE 3

Chapter 14: Import and Export Under GST

Chapter 15: Refunds

Chapter 16: Job Work

Chapter 17: Assessment and Audit

Chapter 18: Inspection, Search, Seizure and Arrest

Chapter 19: Demands and Recovery

Chapter 20: Liability to Pay in Certain Cases

Chapter 21: Offences and Penalties and Ethical Aspects under GST

Chapter 22: Appeals and Revision

Chapter 23: Advance Ruling

Chapter 24: Miscellaneous Provisions

PART II: CUSTOMS & FTP

MODULE 4

Chapter 1: Levy of and Exemptions from Customs Duty

- Unit I: Introduction to Customs Law

- Unit II: Levy and Exemptions

Chapter 2: Types of Duty

Chapter 3: Classification of Imported and Export Goods

Chapter 4: Valuation under the Customs Act, 1962

Chapter 5: Importation and Exportation of Goods

Chapter 6: Warehousing

Chapter 7: Refund

Chapter 8: Foreign Trade Policy

- Unit I: Introduction to FTP

- Unit II: Basic Concepts relating to Export Promotion Schemes under FTP

EXCLUDE ALL INITIAL PAGES.

--------------------------------------------------

PAPER 6 — INTEGRATED BUSINESS SOLUTIONS

--------------------------------------------------

IBS contains TWO components:

A. COSTING

B. LAW

Do not create additional SPOM categories.

--------------------------------------------------

IBS — COSTING

--------------------------------------------------

SET B: Strategic Cost & Performance Management

MODULE 1: STRATEGIC COST MANAGEMENT

Chapter 1: An Introduction to Strategic Cost Management

Chapter 2: Modern Business Environment

Chapter 3: Lean System and Innovation

Chapter 4: Specialist Cost Management Techniques

Chapter 5: Management of Cost Strategically for Emerging Business Models

Chapter 6: Strategic Revenue Management

Chapter 7: Strategic Profit Management

MODULE 2: STRATEGIC PERFORMANCE MANAGEMENT

Chapter 8: An Introduction to Strategic Performance Management

Chapter 9: Strategic Performance Measures in Private Sector

Chapter 10: Strategic Performance Measures in the Non-for-Profit Organisations

Chapter 11: Preparation of Performance Reports

Chapter 12: Divisional Transfer Pricing

Chapter 13: Standard Costing

Chapter 14: Case Study

EXCLUDE INITIAL PAGES.

Costing has 14 trackable items.

--------------------------------------------------

IBS — LAW

--------------------------------------------------

PART I: CORPORATE LAWS

MODULE 1

SECTION A: COMPANY LAW

Chapter 1: Appointment and Qualification of Directors

Chapter 2: Appointment and Remuneration of Managerial Personnel

Chapter 3: Meetings of Board and Its Powers

Chapter 4: Inspection, Inquiry and Investigation

Chapter 5: Compromises, Arrangements and Amalgamations

Chapter 6: Prevention of Oppression and Mismanagement

Chapter 7: Winding Up

Chapter 8: Miscellaneous Provisions

Chapter 9: Adjudication, Special Courts, National Company Law Tribunal & National Company Law Appellate Tribunal

Chapter 10: e-Filing

MODULE 2

SECTION B: SECURITIES LAWS

Chapter 1: SEBI Act, 1992, SEBI (LODR) Regulations, 2015, SEBI (ICDR) Regulations, 2018, SEBI (SAST) Regulations, 2011 and SEBI (PIT) Regulations, 2015

PART II: ECONOMIC LAWS

Chapter 1: The Foreign Exchange Management Act, 1999

Chapter 2: The Foreign Contribution Regulation Act, 2010

Chapter 3: The Insolvency and Bankruptcy Code, 2016

EXCLUDE INITIAL PAGES.

Law has 14 trackable items.

==================================================

20. RESPONSIVE DESIGN

==================================================

Desktop:

- 3 paper cards per row

- chapter cards in a responsive grid, preferably 2–3 per row depending on available width

- generous spacing

- centered dashboard content with a reasonable maximum width

Mobile:

- one paper card per row

- one chapter card per row where appropriate

- units displayed in a clean vertical structure

- controls should remain easy to tap

- no horizontal scrolling

The application must work well on both desktop and mobile browsers.

==================================================

21. IMPORTANT UX PRINCIPLES

==================================================

The app should feel easy to use every day.

A user should be able to:

1. Open the app.

2. Immediately see overall progress.

3. See all six papers.

4. Click a paper.

5. See its progress.

6. Enter the paper.

7. See chapter cards.

8. Open a chapter.

9. Check Videos Watched and Questions Practiced.

10. See progress update immediately.

Do not make the user navigate through unnecessary screens.

==================================================

22. DO NOT ADD YET

==================================================

Do NOT add:

- revisions

- revision 1/2/3

- PYQs

- RTP

- MTP

- mock exams

- study hours

- timers

- streaks

- daily targets

- calendars

- reminders

- notifications

- login systems unless technically required

- social features

- leaderboard

- badges

- points

- XP

- study material links

- PDF links

- analytics dashboards

- unnecessary charts

This is deliberately a SIMPLE FIRST-STUDY TRACKER.

I will modify the source code later to add additional study stages/features.

==================================================

23. SOURCE CODE / GITHUB

==================================================

Keep the source code clean, modular and easy to understand.

Separate:

- syllabus data

- progress calculation logic

- UI components

- styling

- state/persistence logic

Do not hard-code chapter names directly into dozens of UI components.

I have already created a GitHub account and repository.

Make the project suitable for connecting/pushing to my GitHub repository.

The final code should be fully editable so that I can later take the source code and ask another AI coding tool to modify it.

==================================================

24. FINAL QUALITY REQUIREMENT

==================================================

Do not create a generic template dashboard.

The final application should visually feel like a purpose-built CA Final study tracker.

Prioritize:

- clean hierarchy

- bold visual identity

- excellent typography

- smooth animations

- simple interaction

- accurate progress calculations

- responsive design

- easy future modification

Before considering the build complete, verify that:

- all six papers exist

- all syllabus items are present

- Initial Pages are excluded

- FR units are handled as units, not duplicate chapter items

- Audit Chapter 14 has two units

- IDT Customs Chapter 1 has two units

- IDT FTP Chapter 8 has two units

- DT Significant Select Cases is included

- IBS contains only Costing and Law

- Costing has 14 trackable items

- Law has 14 trackable items

- overall progress gives equal weight to all six papers

- IBS gives equal weight to Costing and Law

- checkboxes persist

- completed text receives strikethrough

- cards do not change colour based on completion status

- paper cards flip when clicked

- the title wave animation plays only once on initial load

- mobile layout displays one card per row

- desktop layout displays three paper cards per row

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ec0a8300-bbe1-49a4-ac16-d0fc9785424b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
