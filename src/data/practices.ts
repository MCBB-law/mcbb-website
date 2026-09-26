// Practice-area content. Text carried over from mc2b.com (Sept. 2026) unless marked DRAFT.
// `oldPath` is the Squarespace URL; netlify.toml redirects it to the new page.

export type Section = { heading: string; body?: string[]; list?: string[] };
export type Practice = {
  slug: string;
  oldPath?: string;
  title: string;
  summary: string;
  email?: string;
  intro: string[];
  sections: Section[];
  draft?: string; // shown as a review note at the top of the page
};

export const practices: Practice[] = [
  {
    slug: 'business-litigation',
    oldPath: '/business-litigation',
    title: 'Business Litigation',
    summary:
      'Complex, high-stakes commercial disputes, handled by trial lawyers with a trial-oriented plan from day one.',
    email: 'businesslitigation@mc2b.com',
    intro: [
      "MCBB's business litigators are trial lawyers with broad experience in all types of complex, high-stakes commercial litigation matters. We engage in focused, thoughtful analysis and planning at the outset of complex business cases and aggressively pursue or defend such litigation with a trial-oriented approach. We litigate the most complex cases efficiently and move them forward with focus, achieving better results for our clients in a more time- and cost-effective manner. Many of our partners have extensive backgrounds in high-profile, big-firm commercial litigation and are nationally recognized for their skill and accomplishments in this field.",
      "MCBB's business litigators represent clients ranging from Fortune 500 companies to closely held companies, start-ups, and individuals. MCBB has represented clients regionally, nationally, and internationally. Our litigators are licensed in numerous jurisdictions and admitted to practice in state and federal courts, from the trial level up to the highest appellate courts, including the United States Supreme Court.",
    ],
    sections: [
      {
        heading: 'Areas of focus',
        list: [
          'Products liability',
          'Securities',
          'Antitrust and unfair competition',
          'Class actions',
          'Contract and business-tort disputes',
          'Shareholder, partnership, and LLC disputes',
          'Environmental',
          'Professional liability',
          'Alternative dispute resolution',
          'Media, First Amendment, and advertising',
        ],
      },
    ],
    draft:
      'The current page has about a dozen sub-sections (Products Liability through Media, First Amendment & Advertising). The list above is a placeholder until the full text is copied over.',
  },
  {
    slug: 'government-defense',
    oldPath: '/government-defense',
    title: 'Government Defense',
    summary:
      'Defending cities, counties, agencies, officers, and public employees in civil-rights, land-use, employment, and other claims.',
    email: 'governmentdefense@mc2b.com',
    intro: [
      "MCBB's government defense practice group consists of highly respected attorneys with extensive experience representing cities, counties, municipalities, police officers, and other governmental agencies and employees in a variety of matters. Such matters include labor and employment, land use and zoning, breach of contract, personal injury, premises liability, constitutional torts, and water rights. Regardless of the type of claim at issue, MCBB has the experience to represent governmental entities and their employees.",
    ],
    sections: [
      {
        heading: 'Civil rights litigation',
        body: [
          "Local governments and their employees often find themselves accused of violating an individual's constitutional rights, and MCBB's attorneys have the experience necessary to defend against such claims. Our attorneys have handled claims involving officer-involved use of force, discrimination, search and seizure, takings, retaliation, and more. We understand the nuances of constitutional litigation and the defenses available to government agents, including qualified immunity, Monell, and other immunities. If a municipality, agency, or officer has been accused of unconstitutional conduct, MCBB can quickly and efficiently step in to provide a zealous defense.",
        ],
      },
      {
        heading: 'Land use and zoning',
        body: [
          "MCBB's land-use practice includes representing municipalities in disputes with developers over local zoning laws and their application, or against claims brought by residents who disagree with a municipality's land-use decision. Our practice also includes working with local governments to lawfully acquire property needed for public projects through eminent domain and public-use takings.",
        ],
      },
      {
        heading: 'Labor and employment',
        body: [
          "Like private employers, governmental entities sometimes face claims of discrimination, harassment, and other employment-related charges from current or former employees. But when the employer is a governmental entity, a complex set of laws comes into play that does not apply to private employers, including the United States and Utah Constitutions, the Governmental Immunity Act of Utah, 42 U.S.C. § 1983, and numerous state and federal regulations. MCBB's labor and employment practice is consistently recognized as one of the best in Utah, and we bring that same expertise to cases involving government employers.",
        ],
      },
      {
        heading: 'Other litigation',
        body: [
          'If a government or its employees face claims for personal injury, breach of contract, premises liability, or anything else, MCBB has the experience and tools necessary to provide a successful defense.',
        ],
      },
    ],
  },
  {
    slug: 'labor-employment',
    oldPath: '/labor-employment',
    title: 'Labor & Employment',
    summary:
      'Litigation, agency proceedings, and day-to-day counsel for employers from ten-person start-ups to national companies.',
    email: 'laborandemployment@mc2b.com',
    intro: [
      "MCBB's labor and employment practice is consistently recognized as one of the best and most respected in the state. Our attorneys are trusted by some of the region's largest and best-known employers. We represent and counsel employers of every size and complexity, from a diverse range of industries. Whether you are a local start-up with ten employees or a national company with 10,000, MCBB has the knowledge and experience to guide your company through any labor and employment issue or dispute efficiently and cost-effectively.",
    ],
    sections: [
      {
        heading: 'Employment litigation and dispute resolution',
        body: [
          "MCBB's attorneys are trial lawyers with a successful track record in jury trials, bench trials, and administrative hearings. Our experience reaches all aspects of employment litigation, including every category of prohibited discrimination, sexual harassment, wage and hour issues, employee privacy, wrongful termination, employment-related torts, noncompetition agreements, trade secrets, and misappropriation of proprietary information. MCBB also has extensive experience defending class-action employment claims. When courtroom litigation is not in a client's best interest, we pursue arbitration, mediation, and other alternatives.",
        ],
      },
      {
        heading: 'Administrative charges and proceedings',
        body: [
          'MCBB regularly represents employers before state and federal agencies such as the Utah Labor Commission and its divisions, the Equal Employment Opportunity Commission, the U.S. Department of Labor, and OSHA. Often the first claim an employee asserts is an administrative charge. If your company has been served with one, we can quickly staff the matter with experienced attorneys and put a strategy in place for a successful, cost-effective resolution.',
        ],
      },
      {
        heading: 'Non-competes, non-solicitation, confidentiality, and trade secrets',
        body: [
          'We have substantial experience in disputes involving non-compete, non-solicitation, and confidentiality agreements, both for companies enforcing them against former employees and their new employers and for companies defending claims after hiring a key employee. That includes seeking and opposing temporary restraining orders and preliminary injunctions. We also draft employment agreements and advise on strengthening and interpreting existing ones.',
        ],
      },
      {
        heading: 'Handbooks, policies, and compliance',
        body: [
          'MCBB helps employers of all sizes draft, implement, review, and improve company policies, manuals, and handbooks, and conducts compliance audits to make sure policies meet current federal and state law.',
        ],
      },
      {
        heading: 'HR and management training',
        body: [
          "MCBB provides employment-law counseling, training, and consultation to some of the Intermountain region's most noteworthy employers. Training covers virtually every area of the employer-employee relationship and is designed to help HR personnel, supervisors, and in-house counsel manage the most heavily regulated areas of employment law.",
        ],
      },
      {
        heading: 'Executive agreements',
        body: [
          'We advise companies, officers, and directors on employment, compensation and benefits, and termination agreements, and we draft, negotiate, and litigate all types of executive agreements.',
        ],
      },
      {
        heading: 'Employee benefits and ERISA',
        body: [
          'MCBB assists employers with benefit-compliance matters under the FMLA, COBRA, and ERISA, and has an outstanding record defending employers in related disputes.',
        ],
      },
      {
        heading: 'Counseling on federal and state employment law',
        list: [
          'Collective bargaining agreements',
          'Disability law compliance',
          'Discrimination and civil rights claims',
          'Drug and alcohol testing and policies',
          'Fair Labor Standards Act (FLSA)',
          'Family and Medical Leave Act (FMLA)',
          'Genetic Information Nondiscrimination Act',
          'Harassment and hostile work-environment claims',
          'Labor-management relations and unions',
          'National Labor Relations Board representation',
          'OSHA and workplace safety',
          'Privacy, HIPAA, and data security in the workplace',
          'Reductions in force',
          'Retaliation claims',
          'Unemployment claims and benefits',
          'Wage-and-hour issues',
          'Whistleblower claims',
          "Workers' compensation",
          'Wrongful termination and constructive discharge',
        ],
      },
      {
        heading: 'Flat-fee counseling',
        body: [
          'Clients may choose a flat-fee consultation arrangement that allows unlimited consultations with MCBB attorneys on employment-law issues for a fixed annual fee, with no hourly billing.',
        ],
      },
    ],
  },
  {
    slug: 'insurance-coverage',
    oldPath: '/insurance-coverage',
    title: 'Insurance Coverage',
    summary:
      'Representing policyholders to recover what their insurance promised, from coverage analysis through litigation.',
    intro: [
      'MCBB represents policyholders in disputes with their insurers, from early coverage analysis and claim presentation through litigation and trial. Our goal is recovery: getting clients the defense and indemnity their policies promise.',
    ],
    sections: [],
    draft: 'Placeholder text. Copy the full Insurance Coverage page over before launch, and confirm the practice email address.',
  },
  {
    slug: 'intellectual-property',
    oldPath: '/property',
    title: 'Intellectual Property & Technology',
    summary: 'Patent, copyright, trademark, and trade-secret litigation and counseling.',
    intro: [
      'MCBB litigates and counsels clients on patents, copyrights, trademarks, and trade secrets, including one of the largest jury verdicts in Utah history: a $37.05 million award for the inventor of a spine-surgery device.',
    ],
    sections: [],
    draft: 'Placeholder text. Copy the full IP & Technology page over before launch. The old URL (/property) redirects here.',
  },
  {
    slug: 'real-estate-construction',
    oldPath: '/real-estate-construction',
    title: 'Real Estate & Construction',
    summary: 'Construction defect, lien, contract, title, and property disputes, plus transactional support.',
    intro: [
      'MCBB represents owners, developers, contractors, lenders, and homeowners in real estate and construction disputes, including construction defects, mechanics’ liens, payment and contract claims, title and boundary disputes, and HOA matters, and it supports clients on related transactions.',
    ],
    sections: [],
    draft: 'Placeholder text. Copy the full Real Estate & Construction page over before launch.',
  },
  {
    slug: 'bankruptcy-restructuring',
    title: 'Bankruptcy & Restructuring',
    summary: 'Litigation in bankruptcy court for creditors, trustees, debtors, and other parties in interest.',
    intro: [
      'MCBB litigates in the United States Bankruptcy Court for the District of Utah, the District of Utah, and the Tenth Circuit. We represent creditors, trustees, debtors, and other parties in adversary proceedings, contested matters, and appeals.',
    ],
    sections: [
      {
        heading: 'Areas of focus',
        list: [
          'Adversary proceedings, including preference and fraudulent-transfer actions',
          'Chapter 11 disputes',
          'Claims objections and priority disputes',
          'Relief from stay',
          'Dischargeability litigation',
          'Bankruptcy appeals',
        ],
      },
    ],
    draft: 'New page, not on the current site. Draft copy for partner review.',
  },
  {
    slug: 'appellate',
    oldPath: '/apellate-law',
    title: 'Appellate',
    summary: 'Appeals and original proceedings in the Utah appellate courts, the Tenth Circuit, and beyond.',
    intro: [
      'MCBB handles appeals in the Utah Court of Appeals, the Utah Supreme Court, the Tenth Circuit, and other federal courts of appeals, and it works with trial teams to preserve issues for appeal.',
    ],
    sections: [],
    draft: 'Placeholder text. Copy the full Appellate page over before launch. The misspelled old URL (/apellate-law) redirects here.',
  },
];
