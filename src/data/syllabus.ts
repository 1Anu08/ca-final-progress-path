/**
 * CA FINAL SYLLABUS DATA — the single source of truth.
 *
 * HOW TO EDIT:
 * - Add / rename / remove chapters inside the `sections` arrays below.
 * - A chapter with a `units` array is NOT trackable itself; its units are.
 * - A chapter without `units` is itself the trackable item.
 * - Paper 6 (IBS) has two components (Costing, Law) that each count 50%.
 * - Every other paper has exactly one (unnamed) component.
 *
 * IDs are derived from titles (see buildSyllabus), so renaming a chapter
 * resets only that chapter's saved progress.
 */

export type RawUnit = { title: string };
export type RawChapter = { title: string; units?: RawUnit[] };
export type RawSection = { title?: string; chapters: RawChapter[] };
export type RawComponent = { name?: string; sections: RawSection[] };

export type RawPaper = {
  key: string;
  number: number;
  name: string;
  short: string;
  group: "GROUP I" | "GROUP II";
  components: RawComponent[];
};

export const RAW_PAPERS: RawPaper[] = [
  {
    key: "fr",
    number: 1,
    name: "Financial Reporting",
    short: "FR",
    group: "GROUP I",
    components: [
      {
        sections: [
          {
            chapters: [
              { title: "Introduction to Indian Accounting Standards" },
              {
                title:
                  "Conceptual Framework for Financial Reporting under Indian Accounting Standards (Ind AS)",
              },
              {
                title: "Ind AS on Presentation of General Purpose Financial Statements",
                units: [
                  { title: "Ind AS 1 “Presentation of Financial Statements”" },
                  { title: "Ind AS 34 “Interim Financial Reporting”" },
                  { title: "Ind AS 7 “Statement of Cash Flows”" },
                ],
              },
              {
                title: "Ind AS on Measurement based on Accounting Policies",
                units: [
                  {
                    title:
                      "Ind AS 8 “Accounting Policies, Changes in Accounting Estimates and Errors”",
                  },
                  { title: "Ind AS 10 “Events after the Reporting Period”" },
                  { title: "Ind AS 113 “Fair Value Measurement”" },
                ],
              },
              {
                title: "Ind AS on Assets of the Financial Statements",
                units: [
                  { title: "Ind AS 2 “Inventories”" },
                  { title: "Ind AS 16 “Property, Plant and Equipment”" },
                  { title: "Ind AS 23 “Borrowing Costs”" },
                  { title: "Ind AS 36 “Impairment of Assets”" },
                  { title: "Ind AS 38 “Intangible Assets”" },
                  { title: "Ind AS 40 “Investment Property”" },
                  {
                    title:
                      "Ind AS 105 “Non-current Assets Held for Sale and Discontinued Operations”",
                  },
                  { title: "Ind AS 116 “Leases”" },
                ],
              },
              {
                title: "Ind AS on Liabilities of the Financial Statements",
                units: [
                  { title: "Ind AS 19 “Employee Benefits”" },
                  {
                    title:
                      "Ind AS 37 “Provisions, Contingent Liabilities and Contingent Assets”",
                  },
                ],
              },
              {
                title: "Ind AS on Items impacting the Financial Statements",
                units: [
                  { title: "Ind AS 12 “Income Taxes”" },
                  { title: "Ind AS 21 “The Effects of Changes in Foreign Exchange Rates”" },
                ],
              },
              {
                title: "Ind AS on Disclosures in the Financial Statements",
                units: [
                  { title: "Ind AS 24 “Related Party Disclosures”" },
                  { title: "Ind AS 33 “Earnings per Share”" },
                  { title: "Ind AS 108 “Operating Segments”" },
                ],
              },
              { title: "Ind AS 115 “Revenue from Contracts with Customers”" },
              {
                title: "Other Indian Accounting Standards",
                units: [
                  { title: "Ind AS 41 “Agriculture”" },
                  {
                    title:
                      "Ind AS 20 “Accounting for Government Grants and Disclosure of Government Assistance”",
                  },
                  { title: "Ind AS 102 “Share Based Payment”" },
                ],
              },
              {
                title: "Accounting and Reporting of Financial Instruments",
                units: [
                  { title: "Financial Instruments: Scope and Definitions" },
                  {
                    title:
                      "Classification and Measurement of Financial Assets and Financial Liabilities",
                  },
                  { title: "Financial Instruments: Equity and Financial Liabilities" },
                  { title: "Derivatives and Embedded Derivatives" },
                  { title: "Recognition and Derecognition of Financial Instruments" },
                  { title: "Hedge Accounting" },
                  { title: "Disclosures" },
                ],
              },
              { title: "Ind AS 103 “Business Combinations”" },
              {
                title: "Consolidated and Separate Financial Statements of Group Entities",
                units: [
                  { title: "Introduction to Consolidated and Separate Financial Statements" },
                  { title: "Important Definitions" },
                  { title: "Consolidated Financial Statements" },
                  { title: "Ind AS 110: Consolidation Procedure for Subsidiaries" },
                  { title: "Ind AS 111 “Joint Arrangements”" },
                  { title: "Ind AS 28 “Investments in Associates and Joint Ventures”" },
                  { title: "Ind AS 27 “Separate Financial Statements”" },
                  { title: "Disclosures" },
                ],
              },
              { title: "Ind AS 101 “First-time Adoption of Ind AS”" },
              { title: "Analysis of Financial Statements" },
              { title: "Professional and Ethical Duty of a Chartered Accountant" },
              { title: "Accounting and Technology" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "afm",
    number: 2,
    name: "Advanced Financial Management",
    short: "AFM",
    group: "GROUP I",
    components: [
      {
        sections: [
          {
            chapters: [
              { title: "Financial Policy and Corporate Strategy" },
              { title: "Risk Management" },
              { title: "Advanced Capital Budgeting Decisions" },
              { title: "Security Analysis" },
              { title: "Security Valuation" },
              { title: "Portfolio Management" },
              { title: "Securitization" },
              { title: "Mutual Funds" },
              { title: "Derivatives Analysis and Valuation" },
              { title: "Foreign Exchange Exposure and Risk Management" },
              { title: "International Financial Management" },
              { title: "Interest Rate Risk Management" },
              { title: "Business Valuation" },
              { title: "Mergers, Acquisitions and Corporate Restructuring" },
              { title: "Startup Finance" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "audit",
    number: 3,
    name: "Advanced Auditing, Assurance & Professional Ethics",
    short: "Audit",
    group: "GROUP I",
    components: [
      {
        sections: [
          {
            title: "MODULE 1",
            chapters: [
              { title: "Quality Control" },
              { title: "General Auditing Principles and Auditors Responsibilities" },
              { title: "Audit Planning, Strategy and Execution" },
              { title: "Materiality, Risk Assessment and Internal Control" },
              { title: "Audit Evidence" },
              { title: "Completion and Review" },
              { title: "Reporting" },
            ],
          },
          {
            title: "MODULE 2",
            chapters: [
              { title: "Specialised Areas" },
              { title: "Related Services" },
              { title: "Review of Financial Information" },
              { title: "Prospective Financial Information and Other Assurance Services" },
              { title: "Digital Auditing & Assurance" },
              { title: "Group Audits" },
              {
                title:
                  "Special Features of Audit of Banks & Non-Banking Financial Companies",
                units: [{ title: "Unit 1" }, { title: "Unit 2" }],
              },
            ],
          },
          {
            title: "MODULE 3",
            chapters: [
              { title: "Overview of Audit of Public Sector Undertakings" },
              { title: "Internal Audit" },
              { title: "Due Diligence, Investigation & Forensic Accounting" },
              {
                title:
                  "Sustainable Development Goals (SDG) & Environment, Social and Governance (ESG) Assurance",
              },
              { title: "Professional Ethics & Liabilities of Auditors" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "dt",
    number: 4,
    name: "Direct Tax Laws & International Taxation",
    short: "DT",
    group: "GROUP II",
    components: [
      {
        sections: [
          {
            title: "MODULE 1",
            chapters: [
              { title: "Basic Concepts" },
              { title: "Incomes which do not form part of Total Income" },
              { title: "Profits and Gains of Business or Profession" },
              { title: "Capital Gains" },
              { title: "Income from Other Sources" },
              { title: "Income of Other Persons included in Assessee’s Total Income" },
              { title: "Aggregation of Income, Set Off or Carry Forward of Losses" },
              { title: "Deductions from Gross Total Income" },
            ],
          },
          {
            title: "MODULE 2",
            chapters: [
              { title: "Assessment of Various Entities" },
              {
                title:
                  "Assessment of Trusts and Institutions, Political Parties and Other Special Entities",
              },
              { title: "Tax Planning, Tax Avoidance and Tax Evasion" },
              { title: "Taxation of Digital Transactions" },
            ],
          },
          {
            title: "MODULE 3",
            chapters: [
              { title: "Deduction, Collection and Recovery of Tax" },
              { title: "Income Tax Authorities" },
              { title: "Assessment Procedure" },
              { title: "Appeals and Revision" },
              { title: "Dispute Resolution" },
              { title: "Miscellaneous Provisions" },
              { title: "Provisions to Counteract Unethical Tax Practices" },
              { title: "Tax Audit and Ethical Compliances" },
              { title: "Questions Based on Significant Select Cases" },
            ],
          },
          {
            title: "MODULE 4",
            chapters: [
              { title: "Non Resident Taxation" },
              { title: "Double Taxation Relief" },
              { title: "Advance Rulings" },
              { title: "Transfer Pricing" },
              { title: "Fundamentals of BEPS" },
              { title: "Application and Interpretation of Tax Treaties" },
              { title: "Overview of Model Tax Conventions" },
              { title: "Latest Developments in International Taxation" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "idt",
    number: 5,
    name: "Indirect Tax Laws",
    short: "IDT",
    group: "GROUP II",
    components: [
      {
        sections: [
          {
            title: "PART I: GST — MODULE 1",
            chapters: [
              { title: "Supply under GST" },
              { title: "Charge of GST" },
              { title: "Place of Supply" },
              { title: "Exemptions from GST" },
              { title: "Time of Supply" },
              { title: "Value of Supply" },
            ],
          },
          {
            title: "PART I: GST — MODULE 2",
            chapters: [
              { title: "Input Tax Credit" },
              { title: "Registration" },
              { title: "Tax Invoice, Credit and Debit Notes" },
              { title: "Accounts and Records; E-way Bill" },
              { title: "Payment of Tax" },
              { title: "Electronic Commerce Transactions" },
              { title: "Returns" },
            ],
          },
          {
            title: "PART I: GST — MODULE 3",
            chapters: [
              { title: "Import and Export Under GST" },
              { title: "Refunds" },
              { title: "Job Work" },
              { title: "Assessment and Audit" },
              { title: "Inspection, Search, Seizure and Arrest" },
              { title: "Demands and Recovery" },
              { title: "Liability to Pay in Certain Cases" },
              { title: "Offences and Penalties and Ethical Aspects under GST" },
              { title: "Appeals and Revision" },
              { title: "Advance Ruling" },
              { title: "Miscellaneous Provisions" },
            ],
          },
          {
            title: "PART II: CUSTOMS & FTP — MODULE 4",
            chapters: [
              {
                title: "Levy of and Exemptions from Customs Duty",
                units: [
                  { title: "Unit I: Introduction to Customs Law" },
                  { title: "Unit II: Levy and Exemptions" },
                ],
              },
              { title: "Types of Duty" },
              { title: "Classification of Imported and Export Goods" },
              { title: "Valuation under the Customs Act, 1962" },
              { title: "Importation and Exportation of Goods" },
              { title: "Warehousing" },
              { title: "Refund" },
              {
                title: "Foreign Trade Policy",
                units: [
                  { title: "Unit I: Introduction to FTP" },
                  {
                    title:
                      "Unit II: Basic Concepts relating to Export Promotion Schemes under FTP",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "ibs",
    number: 6,
    name: "Integrated Business Solutions",
    short: "IBS",
    group: "GROUP II",
    components: [
      {
        name: "Costing",
        sections: [
          {
            title: "MODULE 1: STRATEGIC COST MANAGEMENT",
            chapters: [
              { title: "An Introduction to Strategic Cost Management" },
              { title: "Modern Business Environment" },
              { title: "Lean System and Innovation" },
              { title: "Specialist Cost Management Techniques" },
              { title: "Management of Cost Strategically for Emerging Business Models" },
              { title: "Strategic Revenue Management" },
              { title: "Strategic Profit Management" },
            ],
          },
          {
            title: "MODULE 2: STRATEGIC PERFORMANCE MANAGEMENT",
            chapters: [
              { title: "An Introduction to Strategic Performance Management" },
              { title: "Strategic Performance Measures in Private Sector" },
              {
                title:
                  "Strategic Performance Measures in the Non-for-Profit Organisations",
              },
              { title: "Preparation of Performance Reports" },
              { title: "Divisional Transfer Pricing" },
              { title: "Standard Costing" },
              { title: "Case Study" },
            ],
          },
        ],
      },
      {
        name: "Law",
        sections: [
          {
            title: "PART I: CORPORATE LAWS — MODULE 1 — SECTION A: COMPANY LAW",
            chapters: [
              { title: "Appointment and Qualification of Directors" },
              { title: "Appointment and Remuneration of Managerial Personnel" },
              { title: "Meetings of Board and Its Powers" },
              { title: "Inspection, Inquiry and Investigation" },
              { title: "Compromises, Arrangements and Amalgamations" },
              { title: "Prevention of Oppression and Mismanagement" },
              { title: "Winding Up" },
              { title: "Miscellaneous Provisions" },
              {
                title:
                  "Adjudication, Special Courts, National Company Law Tribunal & National Company Law Appellate Tribunal",
              },
              { title: "e-Filing" },
            ],
          },
          {
            title: "MODULE 2 — SECTION B: SECURITIES LAWS",
            chapters: [
              {
                title:
                  "SEBI Act, 1992, SEBI (LODR) Regulations, 2015, SEBI (ICDR) Regulations, 2018, SEBI (SAST) Regulations, 2011 and SEBI (PIT) Regulations, 2015",
              },
            ],
          },
          {
            title: "PART II: ECONOMIC LAWS",
            chapters: [
              { title: "The Foreign Exchange Management Act, 1999" },
              { title: "The Foreign Contribution Regulation Act, 2010" },
              { title: "The Insolvency and Bankruptcy Code, 2016" },
            ],
          },
        ],
      },
    ],
  },
];