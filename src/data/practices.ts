// Practice-area pages. Text is copied from mc2b.com (Sept. 2026) unless a `draft` note says otherwise.
// `match` decides which lawyers appear on the page, based on the practice areas listed in their bios.

export type Section = { heading: string; body?: string[]; list?: string[] };
export type Practice = {
  slug: string;
  oldPaths: string[];
  title: string;
  summary: string;
  email?: string;
  match: RegExp;
  intro: string[];
  listIntro?: string[];
  sections: Section[];
  outro?: string[];
  draft?: string; // shown only in preview mode
};

export const practices: Practice[] = [
  {
    slug: 'business-litigation',
    oldPaths: ['/business-litigation'],
    title: 'Business Litigation',
    summary: 'Complex, high-stakes commercial disputes, handled by trial lawyers with a trial-oriented plan from day one.',
    email: 'businesslitigation@mc2b.com',
    match: /business|commercial|class action|antitrust/i,
    intro: [
      'MCBB’s business litigators are trial lawyers with broad experience in all types of complex, high-stakes commercial litigation matters. We engage in focused, thoughtful analysis and planning at the outset of complex business cases and aggressively pursue or defend such litigation with a trial-oriented approach. We litigate the most complex cases efficiently and move them forward with focus, achieving better results for our clients in a more time- and cost-effective manner. Many of our partners have extensive backgrounds in high-profile, big-firm commercial litigation and are nationally recognized for their skill and accomplishments in this field.',
      'MCBB’s business litigators represent clients ranging from Fortune 500 companies to closely held companies, start-ups, and individuals. MCBB has represented clients regionally, nationally, and internationally. We have the knowledge, experience, and resources to successfully pursue or defend all types and sizes of complex business matters. Our litigators are licensed in numerous jurisdictions and admitted to practice in various state and federal courts, from the state and federal trial court level up to the highest appellate courts, including the United States Supreme Court.',
    ],
    sections: [
      { heading: 'Products liability and toxic torts', body: ['MCBB defends and advises manufacturers and distributors of consumer, medical, industrial, and other products in tort cases involving claims of loss, injury, or property damage.'] },
      { heading: 'Class actions', body: ['We have extensive experience in complex class-action litigation. Although we have served as class counsel, we more typically defend businesses, including manufacturers and distributors of all types of consumer and industrial products, banks, financial institutions, and technology companies, in class actions relating to alleged violations of securities and antitrust laws, false advertising, defective products, and unfair business practices.'] },
      { heading: 'Antitrust and trade', body: ['MCBB has successfully defended antitrust claims for clients in a variety of industries, including healthcare, construction, and broadcasting, and its lawyers have experience defending allegations related to trade restraints, price discrimination, monopolization, and price fixing.'] },
      { heading: 'Governance disputes', body: ['Our lawyers represent corporations and other organizations, boards, and individuals in various governance-related disputes, including in litigation and internal investigations related to both civil and criminal liability arising from breaches of fiduciary duty, ultra vires claims, violations of articles of incorporation and other governing documents, regulatory violations, and disputes over voting and decision-making authority.'] },
      { heading: 'Securities litigation', body: ['MCBB’s lawyers have guided clients through some of the most complex securities-based disputes, including cases involving alleged violations of federal and state securities laws, class action shareholder suits, shareholder derivative actions, SEC investigations, disclosure and accounting obligations, insider trading policies and practices, and other complex securities issues.'] },
      { heading: 'Commercial disputes', body: ['We have achieved excellent results litigating all types of contracts and claims under the Uniform Commercial Code, including sales of products, businesses, securities, technology, property, services, and other goods.'] },
      { heading: 'Regulatory compliance', body: ['We handle regulatory matters and have successfully represented clients in internal investigations, administrative proceedings, and litigation relating to compliance with requirements imposed by the FDA, FTC, SEC, EPA, FCC, and other governmental entities.'] },
      { heading: 'Appeals', body: ['Our attorneys are elite advocates and include some of the best appellate lawyers in the region. We have extensive experience handling appeals related to numerous areas of the law and have successfully handled appeals before many state and regional appellate courts at both the state and federal level.'] },
      { heading: 'Business torts', body: ['We have successfully litigated complex cases arising from alleged improper conduct in business transactions, including fraud, negligent misrepresentation, interference with contractual or economic relations, unfair trade practices, and similar disputes.'] },
      { heading: 'Professional liability', body: ['MCBB’s litigators are experienced in defending accounting, legal, medical, and other professionals.'] },
      { heading: 'Environmental litigation', body: ['Our lawyers have handled many complex environmental disputes arising under both federal and state law, including matters relating to CERCLA, RCRA, NEPA, underground storage tanks, and clean air and water laws, as well as toxic tort litigation and disputes over insurance coverage for such claims.'] },
      { heading: 'Alternative dispute resolution', body: ['MCBB regularly represents clients in binding and non-binding arbitration, mediation, structured negotiation, and other forms of alternative dispute resolution relating to all types of business litigation. In addition, some of our partners are certified mediators and arbitrators and are regularly retained to handle complex disputes between parties to such proceedings.'] },
      { heading: 'Media, First Amendment, and advertising', body: ['We have successfully represented clients such as manufacturers, distributors, advertisers, and technology, news, and information providers in a variety of media- and advertising-related disputes, including claims related to false advertising, consumer protection, defamation, disparagement, invasion of privacy, copyright, and access disputes.'] },
    ],
  },
  {
    slug: 'government-defense',
    oldPaths: ['/government-defense'],
    title: 'Government Defense',
    summary: 'Defending cities, counties, agencies, officers, and public employees in civil-rights, land-use, employment, and other claims.',
    email: 'governmentdefense@mc2b.com',
    match: /government|municipal/i,
    intro: [
      'MCBB’s government defense practice group consists of highly respected attorneys with extensive experience representing cities, counties, municipalities, police officers, and other governmental agencies and employees in a variety of matters. Such matters include labor and employment, land use and zoning, breach of contract, personal injury, premises liability, constitutional torts, and water rights. Regardless of the type of claim at issue, MCBB has the experience to successfully represent governmental entities and their employees.',
    ],
    sections: [
      { heading: 'Civil rights litigation', body: ['Local governments and their employees often find themselves accused of violating an individual’s constitutional rights, and MCBB’s attorneys have the experience necessary to defend against such claims. Our attorneys have dealt with claims involving officer-involved use of force, discrimination, search and seizure, takings, retaliation, and more. We understand the nuances of constitutional litigation and the various defenses available to government agents, including qualified immunity, Monell, and other immunities. If a municipality, agency, or officer has been accused of unconstitutional conduct, MCBB can quickly and efficiently step in to provide a zealous defense.'] },
      { heading: 'Land use and zoning', body: ['MCBB’s land-use practice includes representing municipalities in disputes with developers over local zoning laws and their application, or against claims brought by residents who disagree with a municipality’s land-use decision. Our practice also includes working with local governments to lawfully acquire property needed for public projects through use of eminent domain and public-use takings.'] },
      { heading: 'Labor and employment', body: ['Like private employers, governmental entities may sometimes face claims of discrimination, sexual harassment, and other employment-related charges from current or former employees. But when the employer is a governmental entity, a complex set of laws and regulations come into play that do not apply to cases involving private employers. Such laws may include the United States and Utah Constitutions, the Governmental Immunity Act of Utah, 42 U.S.C. § 1983, Title IX, and numerous state and federal regulations. MCBB’s labor and employment practice is consistently recognized as one of the best in Utah, and we bring that same level of expertise to cases dealing with government employers. If a governmental entity finds itself facing employment-related claims, MCBB is ready to help.'] },
      { heading: 'Other litigation', body: ['If a government or its employees face claims for personal injury, breach of contract, premises liability, or anything else, MCBB has the experience and tools necessary to provide a successful defense.'] },
    ],
  },
  {
    slug: 'labor-employment',
    oldPaths: ['/labor-employment'],
    title: 'Labor & Employment',
    summary: 'Litigation, agency proceedings, and day-to-day counsel for employers from ten-person start-ups to national companies.',
    email: 'laborandemployment@mc2b.com',
    match: /labor|employment|erisa/i,
    intro: [
      'MCBB’s labor and employment practice is consistently recognized as one of the best and most respected in the State. Our attorneys are trusted by some of the region’s largest and most well-known employers. We provide legal representation and counsel to employers of every size and complexity, and from a diverse range of industries. Whether you are a local startup with ten employees or a national company with 10,000 employees, MCBB has the knowledge, experience and capability to successfully guide your company through any labor and employment law issue or dispute in an efficient and cost-effective manner.',
    ],
    sections: [
      { heading: 'Employment litigation and dispute resolution', body: ['MCBB’s attorneys are trial lawyers with a successful track record in jury trials, bench trials, and administrative hearings. Our litigation experience reaches all aspects of labor and employment-related litigation, including all categories of prohibited discrimination, sexual harassment, wage and hour issues, employee privacy, wrongful termination, employment-related tort claims, noncompetition agreements, trade secrets, and misappropriation of proprietary information. MCBB also has extensive experience in defending class action employment claims. We have successfully represented companies in defending and prosecuting employment-related claims in state and federal courts in Utah and across the U.S. When courtroom litigation is not in our clients’ best interests, we are experienced in pursuing alternative dispute resolution strategies, including arbitration and mediation.'] },
      { heading: 'Administrative charges and proceedings (EEOC, USDOL, UALD, OSHA, etc.)', body: ['MCBB regularly represents employers in matters before state and federal administrative agencies such as the Utah Labor Commission and all of its divisions, the Equal Employment Opportunity Commission, and the U.S. Department of Labor. We have experience with the unique procedural and legal issues involved in agency charges and proceedings. MCBB has dealt with governmental agencies in a variety of matters, both simple and complex. Oftentimes, the first legal claim asserted by a current or former employee is in the form of an administrative charge. If your company has been served with an administrative charge, we can quickly and efficiently staff the matter with experienced attorneys and work to immediately implement a strategy for a successful and cost-effective resolution.'] },
      { heading: 'Non-compete, non-solicitation and confidentiality agreements, and trade secrets', body: ['We have substantial experience in business disputes and litigation involving non-compete, non-solicitation, and confidentiality or nondisclosure agreements. MCBB attorneys have successfully represented companies seeking to prosecute such claims against ex-employees and their new employers, as well as companies seeking to defend against such claims when they hire a new key employee. Our experience in this area includes prosecuting and defending claims seeking temporary restraining orders and preliminary injunctions. MCBB also assists companies in drafting employment agreements, and providing advice and consultation on how to strengthen and interpret existing employment agreements.'] },
      { heading: 'Handbooks, company policies, and compliance', body: ['MCBB works with employers of all sizes in drafting, implementing, reviewing and improving company policies, manuals, and handbooks. We also assist companies in conducting compliance audits to ensure that company policies meet the latest federal and state employment laws and regulations. Our services range from review of particular policies to creation of a comprehensive policy handbook or system that is tailored to the unique needs of your company and employees.'] },
      { heading: 'HR and management training', body: ['MCBB provides employment law counseling, training and consultation to some of the Intermountain region’s most noteworthy employers. Our firm has an extensive library of seminar training materials focused on delivering practical information to HR managers, in-house legal counsel and supervisors in dealing with employment-related issues. Training topics cover virtually every area of the employer/employee relationship and are practically designed to help HR personnel and in-house counsel understand the law and manage the most difficult and heavily-regulated areas of employment law. MCBB’s attorneys keep abreast of the latest developments in labor and employment law, and they are regularly called upon to present to HR managers and other attorneys on these legal developments.'] },
      { heading: 'Executive agreements and matters', body: ['MCBB advises companies, officers and directors in a wide range of executive matters, including employment agreements, compensation and benefits agreements, and termination agreements. We have experience in drafting, reviewing, negotiating and litigating all types of agreements with company executives.'] },
      { heading: 'Employee benefits and ERISA', body: ['MCBB assists employers in connection with employee-benefit compliance matters such as the FMLA, COBRA and ERISA. MCBB has an outstanding litigation record in defending employers in disputes related to such matters.'] },
      {
        heading: 'Consulting and counseling on all areas of federal and state employment law',
        body: ['In addition to the areas described above, MCBB’s labor and employment expertise and capabilities include:'],
        list: [
          'Collective bargaining agreements', 'Disability law compliance', 'Discrimination and civil rights claims (all forms and categories)',
          'Drug and alcohol testing / policies', 'Fair Labor Standards Act (FLSA)', 'Family Medical Leave Act (FMLA)',
          'Genetic Information Nondiscrimination Act', 'Harassment and hostile work-environment claims', 'Labor-management relations / unions',
          'National Labor Relations Board representation', 'OSHA and workplace safety', 'Privacy, HIPAA and data security in the workplace',
          'Reductions-in-force', 'Retaliation claims', 'Unemployment claims and benefits', 'Wage-and-hour issues', 'Whistleblower claims',
          'Workers’ compensation', 'Wrongful termination / constructive discharge',
        ],
      },
      { heading: 'Non-traditional fee arrangements', body: ['MCBB clients may benefit from our flat-fee consultation arrangements, which allow unlimited access for consultations with MCBB attorneys regarding employment law issues for a reasonable fixed annual fee. This eliminates time-based billing.'] },
    ],
  },
  {
    slug: 'insurance-coverage',
    oldPaths: ['/insurance-coverage'],
    title: 'Insurance Coverage',
    summary: 'Representing policyholders, not insurers, to recover the defense and indemnity their policies promise.',
    email: 'insurancecoverage@mc2b.com',
    match: /insurance coverage/i,
    intro: [
      'Unlike many law firms who routinely represent insurance companies, MCBB’s insurance coverage representation is focused on MCBB’s clients: the insureds. MCBB assists its policyholder clients in maximizing available insurance, and reducing or eliminating loss to the client. MCBB has been successful in turning flat denials by insurers into substantial recoveries. MCBB has assisted businesses and individuals in obtaining tens of millions of dollars in “defense cost” payments reluctantly made by insurers to help defeat liability claims brought by third-party plaintiffs against MCBB’s clients.',
      'MCBB has successfully resolved insurance coverage under Commercial General Liability (“CGL”), Directors and Officers Liability (“D&O”), Professional Errors and Omissions Liability (“E&O”), Automobile, Umbrella, Excess, and a variety of other liability and first-party Property policies. MCBB has assisted its clients in obtaining insurance coverage for bodily injury, property damage, money damages from professional or director errors and omissions, construction defect liability, automobile liability, environmental liability, and many other liability and property claims.',
      'MCBB has also successfully prosecuted claims against insurers related to the improper or “bad faith” handling of claims, including “first-party” and “third-party” claims. MCBB’s policyholder clients include large corporations, small businesses, and individuals. Representative clients MCBB has assisted in successfully obtaining insurance recoveries include Intermountain Health Care, Management & Training Corporation, Sinclair Oil, United States Specialty Sports Association, and the United Methodist Church.',
    ],
    sections: [],
  },
  {
    slug: 'intellectual-property',
    oldPaths: ['/property'],
    title: 'Intellectual Property & Technology',
    summary: 'Patent, trademark, copyright, and trade-secret litigation, from the trial court to the Federal Circuit.',
    email: 'IPandtechnology@mc2b.com',
    match: /intellectual/i,
    intro: [
      'MCBB’s trial lawyers have extensive experience litigating the most complex types of intellectual property disputes, including in the areas of patent, copyright, and trademark infringement, trade secret and information misappropriation, unfair competition, manufacturing, distribution, and licensing disputes, cybersquatting and other Internet-related disputes, breaches of non-disclosure agreements, and other matters involving intellectual property rights. We have helped clients protect their intellectual property rights through litigation, and we have defended clients accused of infringing others’ intellectual property rights.',
      'Our intellectual property clients have ranged from large, international, publicly traded companies to technology start-up companies and individuals, and we have litigated cutting-edge technology disputes in numerous industries. Our intellectual property litigators have the legal and technical skill to understand the most complex technologies, develop and implement an effective and efficient litigation strategy, and present complex intellectual property matters to judges and juries in a manner that is understandable, thematic, and compelling. We have successfully litigated complex intellectual property disputes at all levels of state and appellate courts, including the United States Court of Appeals for the Federal Circuit.',
    ],
    sections: [
      { heading: 'Patent litigation', body: ['MCBB’s litigators have successfully pursued and defended claims arising from allegations of patent infringement in federal trial and appellate courts, including in the United States Court of Appeals for the Federal Circuit. We have achieved favorable results for clients in numerous technology-based industries, including software and computers, medical products and devices, biotechnology, pharmaceutical, consumer products, and others.'] },
      { heading: 'Trademark litigation', body: ['We have significant experience litigating trademark infringement matters and have both assisted clients whose names, brands, and logos have been misused or misappropriated and defended clients accused of infringing others’ protected marks.'] },
      { heading: 'Copyright litigation', body: ['Our litigators have represented clients in disputes involving copyrighted material in some of the most cutting-edge and complex industries, and have both assisted clients in protecting their rights under the copyright laws and defended claims of copyright infringement.'] },
      { heading: 'Trade secrets and information misappropriation', body: ['Our trial lawyers have extensive experience pursuing and defending claims related to the misappropriation of trade secrets and other forms of protected, sensitive information, and have been involved in some of the most high-profile cases that have advanced this rapidly developing area of the law. We most commonly represent companies focused on protecting their trade secrets and other sensitive information or that are defending against allegations of misappropriation, but we have also represented individuals in these same kinds of disputes.'] },
      { heading: 'Unfair competition', body: ['We have significant experience litigating matters involving allegedly unfair competitive practices, whether arising under contract or under state or federal statutes such as the Lanham Act and similar state statutes. We have successfully litigated both individual claims and class actions involving such allegations.'] },
      { heading: 'Contract-based intellectual property disputes', body: ['MCBB’s lawyers regularly represent both companies and individuals in disputes arising from alleged breaches of contractual obligations regarding intellectual property and other protected information, including obligations related to confidentiality, non-disclosure, non-competition, non-solicitation, non-disparagement, and other contractual obligations.'] },
    ],
  },
  {
    slug: 'real-estate-construction',
    oldPaths: ['/real-estate-construction'],
    title: 'Real Estate & Construction',
    summary: 'Construction, lien, bond, title, lease, and land-use disputes for owners, developers, builders, contractors, and lenders.',
    email: 'realestateandconstruction@mc2b.com',
    match: /construction|real estate/i,
    intro: [
      'MCBB represents property owners, developers, builders, construction contractors and creditors in all areas pertaining to real estate, including the following:',
    ],
    sections: [
      {
        heading: '',
        list: [
          'Purchase and sale of commercial real estate', 'Construction disputes', 'Encumbrances',
          'Lease negotiation, including commercial lease litigation', 'Title disputes', 'Environmental issues',
          'Surety bond claims', 'Foreclosure of security interests', 'Disputes arising out of public and private construction projects',
        ],
      },
    ],
    outro: [
      'In the course of our representation of these clients, we have successfully litigated a variety of real estate and construction matters including boundary-by-acquiescence, adverse possession, quiet title, partition of tenancy in common claims, performance bond disputes, and defense and prosecution of mechanics’ liens. We also advise clients in the areas of takings, land use matters, administrative planning and zoning disputes, and other real estate claims involving local, state or federal authorities.',
    ],
  },
  {
    slug: 'bankruptcy-restructuring',
    oldPaths: [],
    title: 'Bankruptcy',
    summary: 'Litigation in bankruptcy court for debtors, creditors, trustees, and other parties in interest.',
    match: /bankruptcy/i,
    intro: [
      'MCBB represents debtors, creditors, trustees, and other parties in interest in bankruptcy proceedings in the United States Bankruptcy Court for the District of Utah, the United States District Court for the District of Utah, and the Tenth Circuit.',
    ],
    sections: [
      {
        heading: 'Areas of focus',
        list: [
          'Counsel to bankruptcy trustees',
          'Adversary proceedings, including preference and fraudulent-transfer actions',
          'Chapter 11 disputes',
          'Claims objections and priority disputes',
          'Relief from stay',
          'Dischargeability litigation',
          'Bankruptcy appeals',
        ],
      },
    ],
    draft: 'New page, not on the current site. Trevor Lee, Brett Gilmore, and Austin Sabin list Bankruptcy in their bios. The “Areas of focus” list is a starting draft: keep only what the firm actually handles.',
  },
  {
    slug: 'appellate',
    oldPaths: ['/apellate-law', '/appellate-law'],
    title: 'Appellate',
    summary: 'Appeals in the Tenth Circuit, other federal courts of appeals, and the Utah appellate courts, including cases tried by other counsel.',
    email: 'appeals@mc2b.com',
    match: /appell|appeals/i,
    intro: [
      'MCBB’s appellate practice includes extensive experience in appeals of all types, including in federal appellate courts, state appellate courts, and administrative appeals. MCBB’s appellate lawyers appear frequently before the Tenth Circuit, as well as various other federal courts of appeal, and we have successfully argued numerous appeals before the Utah Court of Appeals and the Utah Supreme Court.',
      'Our clients in these appeals range from large publicly traded corporations to technology startups to individuals. MCBB is well-equipped to represent clients on appeal in cases we have handled in lower courts. In addition, we are prepared to handle appeals where clients have been represented by other counsel in lower courts.',
      'MCBB is fortunate to have several attorneys who previously served as law clerks to appellate courts, including at the Utah Court of Appeals, the Utah Supreme Court, and federal circuit courts. MCBB’s experience and skill in appellate practice uniquely positions the firm to successfully handle appeals of all types.',
    ],
    sections: [],
  },
];
