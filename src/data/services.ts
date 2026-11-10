export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceTopic = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: readonly [string, string];
  description: string;
  icon: string;
  image: string;
  detail?: {
    heading: string;
    image: string;
    topics: readonly ServiceTopic[];
    faqs: readonly ServiceFaq[];
  };
};

export const services: readonly Service[] = [
  {
    slug: "business-valuations",
    title: ["Business", "Valuations"],
    description:
      "Evaluate business value, financial potential, and growth opportunities.",
    icon: "/i1.svg",
    image: "/s6.png",
    detail: {
      heading: "Business Valuations & Investor Readiness",
      image: "/Business Valuations & Investor Readiness.png",
      topics: [
        {
          title: "Business Review",
          description:
            "Every company has a distinctive set of strengths, weaknesses, market opportunities, and growth possibilities. The true positioning of any organization cannot be achieved by simply looking at the company's financial statements. In fact, one needs to evaluate operational performance, customer relationships, managerial capabilities, market positioning, and the drivers of profitability and organizational value.\n\nThrough structured business reviews, our professionals determine how the company is managed, how efficiently its resources are used, and whether current practices contribute towards achieving its objectives. Through financial performance, trends, budgets, management information systems and business process analysis, we are able to determine the value drivers, inefficiencies and areas of improvement within an organisation.\n\nWe also analyse how well the existing management system of the company is aligned with the aspirations of growth, which include role clarification, decision-making authority, reporting methods, and accountability. This analysis allows the business owners to learn more about the position of the organisation and what should be done immediately.",
        },
        {
          title: "Financial Modelling & Projections",
          description:
            "Financial projections help lay the groundwork for analysing business plans, estimating the finance required, and taking sound business decisions. Financial modelling helps in converting business targets into financial goals, which can then be measured and analysed by the management before investing in the expansion plans.\n\nAt CAPITAIRE, we build tailored financial models according to the company's past record, strategic planning, operational assumptions, sources of income, cost structure, capital expenditure, and working capital needs. The analysis considers issues such as profitability, cash flows, financing requirements, break-even time frame, and gains from various business situations.\n\nWe also use sensitivity analysis to examine the impact of changes in variables like sales, cost, margins, utilisation and others on the company's performance. By linking operations planning and financial forecasts, we help management evaluate options, identify funding gaps, set budgets, and adapt to changing circumstances.",
        },
        {
          title: "Business Valuation",
          description:
            "Business valuation entails much more than just coming up with a number. It consists of a comprehensive appreciation of the financial performance, earning capacity, competitive position, risk elements, and other aspects that affect the valuation of the company. An adequately backed-up valuation can form a useful basis for many other business decisions.\n\nThe experts assess the firms employing suitable valuation techniques, which include the income approach, market approach, and cost approach. The assessment includes the past performance of the business, future cash flow of the business, comparable companies or transactions, if any, the asset position of the firm, and other important aspects of the business.\n\nOur firm assists business owners in analysing factors affecting the value of their companies, locating ways through which value can be improved, and determining what impact certain decisions on investing or ownership will have. Be it about raising funds, making a transaction, restructuring ownership, or succession planning, we strive to create an open valuation process for business owners.",
        },
        {
          title: "Investor Presentations",
          description:
            "Getting investments is not only about convincing investors of the company's growth capacity but also providing them with enough knowledge about the business models, opportunities, positions, finances, capabilities, risks, and the use of capital.\n\nAt CAPITAIRE, we assist companies to create investor presentations which convey strategy, operating model, growth, financials, and investment case. We integrate relevant information about the company and finance in order to provide an integrated story with sound assumptions and objectives.\n\nAdditionally, our methodology looks into the expectations that the investors may have in relation to the governance, accounting and finance, the ownership structure, risk management, and scalability. Identifying information deficiencies and enhancing the communication of the business case allows organisations to be better prepared for conversations with potential investors and financiers.",
        },
      ],
      faqs: [
        { question: "Why is a business review important for a company?", answer: "A business review will assist in finding areas where there are operational weaknesses, financial performance weaknesses, management weaknesses, and areas of improvement for a company." },
        { question: "What does a business review typically include?", answer: "The business review looks into issues relating to finance, operations, customers, management, markets, and business value drivers." },
        { question: "What is financial modelling, and why does a business need it?", answer: "Financial modelling is the process where a company's plans are translated to financial forecasts, which enables the firm to know its financing needs and measure profitability." },
        { question: "How far ahead should a business prepare financial projections?", answer: "Businesses typically make financial projections for a period of three to five years, based on their goals and funding needs." },
        { question: "How is the value of a business calculated?", answer: "There are three approaches used in business valuation: income approach, market approach, and cost approach. Business valuation depends on financial performance, potential future earnings, assets, market environment, and risks." },
      ],
    },
  },
  {
    slug: "capital-structuring",
    title: ["Capital", "Structuring"],
    description:
      "Structure funding, ownership, incentives, and shareholder arrangements.",
    icon: "/briefcase-dollar.png",
    image: "/s2.png",
    detail: {
      heading: "Capital Structuring",
      image: "/Capital Structuring.png",
      topics: [
        {
          title: "Shareholder Agreements",
          description:
            "Ownership structure is a key requirement in ensuring that there is harmony between promoters, investors, and other shareholders as the business expands. The lack of clarity in defining rights and obligations can lead to conflicts between different shareholders, which may impact business continuity.\n\nWe support organisations to establish shareholding structures with regard to ownership, financing, governance, reserved powers, voting, restrictions on transfer, and exit strategies. We also support the process of identifying areas within the organization's current agreements that need improvement with respect to its organisational setup and objectives.\n\nOur solution is an approach that takes into account the interests of the promoters and other stakeholders, but at the same time enables the decision-making process to be transparent and the ownership structure to be stable. This allows companies to minimise the risk of preventable conflicts in advance.",
        },
        {
          title: "Capital Instruments",
          description:
            "Selecting an appropriate source of financing is an important strategy, which has far-reaching consequences on ownership, control, cash flows, and repayment of debt or dividend payments. Various means of finance have varying effects on finances and business, and it is essential to consider them with regard to the company's goals and financial ability.\n\nCAPITAIRE assists businesses in selecting appropriate financing choices, ranging from debt to equity, through conversion and otherwise, taking into account the needs of the firm in terms of its financial requirements, cash flows, capital structure, expectations of investors, and growth plans.\n\nThrough comparing various options, we make it possible for the owners of the business to comprehend the pros and cons of each financial tool used and to determine structures which will be in line with their long-term objectives. Our aim is to assist them in making funding decisions which will promote growth without losing balance.",
        },
        {
          title: "Sweat Equity for Promoters",
          description:
            "The role of promoters is that they devote considerable time and skills to develop a business, especially during the formative stages of development. Appreciation of such contributions may be critical once there are fresh capital infusions into the business.\n\nWe provide advice on evaluation and structuring of sweat equity transactions taking into account the form of investment, desired ownership structure, interest of current stockholders, as well as legal and regulatory aspects. This approach allows companies to understand how promoters' investments can be treated in the context of capital and ownership structure.\n\nWe also assess how these types of arrangements will impact future fund-raising, dilution of ownership, governance and alignment of stakeholders. In this way, we can assist companies to structure their arrangements in a manner that acknowledges contributions without sacrificing business needs.",
        },
        {
          title: "Employee Stock Ownership Plans (ESOPs)",
          description:
            "In addition to the strategy and capital of a business, there is another factor that determines the success of the enterprise. This factor is the recruitment of qualified personnel who are motivated to work hard and remain loyal to the organisation. This goal may be achieved by implementing ESOPs.\n\nCAPITAIRE will help your company to determine and design ESOP structures based on their corporate goals, ownership model, need for employee retention, and growth prospects. The consultation process takes into account considerations like eligibility, allocation, vesting, exercise, dilution, as well as legal and tax considerations.\n\nIn this regard, we assist the promoter in evaluating the potential role of ESOP in the engagement of the employees, succession planning, and the creation of a performance-driven culture. The ultimate aim is to create a structure that would be commercially viable for the company.",
        },
      ],
      faqs: [
        { question: "Why does a company require a shareholder agreement?", answer: "A shareholder agreement clarifies the rights and obligations of the shareholders, their voting powers, interests, and provisions for exits and helps avoid conflict situations." },
        { question: "What are the components of a shareholder agreement?", answer: "Some of the common elements of a shareholder agreement are shareholding, rights and obligations, reserved matters, transfer restrictions, dispute settlement clauses, dividend policy, and provisions for exit." },
        { question: "Which are the various capital instruments that a business can raise capital from?", answer: "Equity shares, preference shares, debentures, loans, and convertible capital instruments are some of the capital instruments from which businesses can raise money." },
        { question: "How do businesses decide whether to use debt or equity to raise funds?", answer: "Depending on the funding requirement, ability to repay the debt, cash flows, and the control promoters want to retain, businesses make the decision." },
        { question: "What is sweat equity, and what are its advantages for the promoters of businesses?", answer: "Sweat equity is where a promoter makes an input into the business that is not monetary in nature; it is compensated in an equity structure." },
      ],
    },
  },
  {
    slug: "entity-structuring",
    title: ["Entity", "Structuring"],
    description:
      "Optimise business structures for efficiency, compliance, and growth.",
    icon: "/setup-01.png",
    image: "/s3.png",
    detail: {
      heading: "Entity Structuring",
      image: "/Entitystructuring.png",
      topics: [
        {
          title: "Corporate Reorganisation",
          description:
            "As the organisation continues to venture into new markets, add more business lines, and even involve new investors, it is expected that the organisational legal structure would be complex. It is important to evaluate the complexity of the organisation periodically.\n\nWe will review existing business models, corporate structures, ownership structures, relationships between companies, and business aims to look for opportunities for any sort of streamlining or restructuring. We will take into account the commercial objectives of individual companies, financial flows, governance considerations, taxation concerns, and regulations.\n\nTaking this into account, recommendations will be provided in relation to possible restructuring options and the implications thereof for promoters, shareholders, and the business as a whole. The purpose here would be to develop an organisation structure that is easier to understand and manage.",
        },
        {
          title: "Business Transfer Advisory",
          description:
            "Businesses might want to move particular assets, units, business ventures, or even their operations due to a process of restructuring, strategic alliance, growth, or change in ownership. This entails careful evaluation of business considerations, valuation, tax implications, and many other issues.\n\nCAPITAIRE supports companies in analysing transfer alternatives and structuring deals in accordance with their desired business objective. Our advisory service takes into account factors such as the underlying assets/undertaking, related contractual arrangements, financial impact, stakeholders' concerns, and implementation requirements of the proposed deal.\n\nWe assist in the identification of relevant factors, evaluation of structuring options, and coordination of the finance and commercial elements of the advisory process. Through the examination of the broader impact of the proposed transaction, we hope to assist in protecting the business operations while effecting the desired change.",
        },
        {
          title: "Business & Entity Formation",
          description:
            "Choosing the proper business entity is a critical business decision that will impact various areas of business operations, including ownership, taxation, management, funding options, regulations and future growth. What may be the best choice for a new business may no longer be the case as the business grows.\n\nWe assist the promoters in selecting appropriate structures for their enterprises based on the model of their business, their ownership structure, operational needs, risk appetite, and plans for the future. The selection process takes into consideration ease of doing business, interests of the promoters, obligations, taxation, attractiveness to investors, and flexibility.\n\nWe also assist in assessing the suitability of the proposed structure for potential future funding, changes in ownership and good corporate governance. Through such assessments, we enable business owners to make informed decisions when selecting an appropriate business structure and laying down a solid business foundation.",
        },
      ],
      faqs: [
        { question: "Explain what corporate restructuring is. When do you need it?", answer: "Corporate Restructuring involves restructuring the entity structure, operations, and legalities to streamline operations, simplify management and resolve business issues for future growth." },
        { question: "What is business transfer? How is it made?", answer: "Business transfer involves transferring the business or venture, assets, or operations from one company to another via a properly structured transaction." },
        { question: "What is the best business structure to set up the company in India?", answer: "That depends on the form of ownership, liabilities, taxation, finance and regulation, apart from future growth considerations. There are Private Limited Companies, LLPs, Partnerships, and Sole Proprietorships." },
        { question: "What is Overseas Direct Investment (ODI)? How can an Indian company make ODI?", answer: "ODI allows qualifying Indian entities and individuals to make investments in foreign enterprises within the framework of the Overseas Investment Rules, FEMA Regulations and RBI reporting requirements." },
        { question: "What are the compliance requirements to raise ECB in India?", answer: "A Company should abide by applicable ECB conditions, recognised lending institution conditions, permissible end-use restrictions, limits, maturity requirements and RBI reporting requirements." },
      ],
    },
  },
  {
    slug: "cross-border-advisory",
    title: ["Cross-Border", "Advisory"],
    description:
      "Structure international investments, borrowings, holdings, and transfer pricing.",
    icon: "/user-switch.png",
    image: "/s4.png",
    detail: {
      heading: "Cross-Border Advisory",
      image: "/crossborderadvisory.png",
      topics: [
        {
          title: "International Holding Structures",
          description:
            "In order to conduct businesses successfully in a number of jurisdictions, the ownership structures should take into account the business objectives and at the same time, take into consideration the issues related to taxes, regulations, governance, and operations in an international setting.\n\nCAPITAIRE helps business owners to determine the right type of structure that would fit into the international holdings based on their operations, ownership, investment purposes, and future growth. Our analysis is done considering the business sense behind the proposed structure, tax provisions, accounting requirements, regulatory issues, and implications of cross-border investments.\n\nWe provide clients with assistance in choosing between different options and understanding their practical consequences. We emphasize commercially sound structures that will enable international business activities without breaching any regulations.",
        },
        {
          title: "Foreign Investment into India",
          description:
            "A foreign investment in India must be assessed in terms of the choice of route, form, ownership, price conditions, and relevant regulatory framework for the transaction. Choices made during structuring may affect investors' rights, governance, exit, taxation, and future fundraising.\n\nWe provide guidance to companies and investors with regard to investments in Indian companies, including selection of appropriate investment instruments, pricing norms, FEMA, as well as RBI and other regulations.\n\nAdditionally, our analysis includes an evaluation of the ramifications of the investment decision on the corporation and its investors through issues of dilution, governance, taxes, and exits. Through such analysis, we enable the stakeholders to get a good perspective of what their options are and create an effective structure for their investment.",
        },
        {
          title: "Outbound Investments",
          description:
            "When venturing into foreign markets, companies are required to look beyond just the business case. The selection of the country, type of investment, mode of ownership, source of funds, and operational framework is critical for considerations such as tax, compliance, and flexibility.\n\nWe at CAPITAIRE help corporations assess their outbound investment structures according to their growth strategy, market focus, ownership goals, and operational needs. We assess the appropriateness of jurisdiction, licensing, investment channels, taxes, reporting, and the operational aspects of establishing an international operation.\n\nOur advisory approach allows businesses to assess the various structural options, identify the associated risks, and plan for their international expansion. It seeks to ensure that the investment being made ties in well with the business objectives while complying with all relevant Indian and foreign regulations.",
        },
        {
          title: "Cross-Border Borrowings",
          description:
            "Foreign borrowing allows businesses to acquire capital from other sources; however, it involves factors such as ability to repay, foreign exchange risks, interest charges, financing terms, and compliance with regulations.\n\nWe help businesses evaluate appropriate structures for cross-border borrowing, taking into consideration the relevant ECB conditions, FEMA guidelines, and RBI regulations. The evaluation takes into account the purpose of the borrowing, the lender and borrower structures involved, the currencies and repayment periods involved, cost of funds, and the effects of the borrowing on the capital structure of the business.\n\nWe assist management in comprehending the regulatory environment and financial implications of various borrowing alternatives. With the assessment of funding needs relative to the ability to repay and regulatory requirements, we ensure that borrowing decisions are made on sound financial footing for the organisation.",
        },
        {
          title: "Transfer Pricing",
          description:
            "Appropriate pricing policy, documentation, and the compliance with any transfer pricing laws are necessary when conducting business internationally among related entities. Without an effective framework, problems such as tax liability, disagreements, and lack of transparency may arise.\n\nCAPITAIRE provides recommendations to businesses concerning the assessment of transactions between related parties as well as the establishment of transfer pricing policies taking into account the nature of transactions, the functions carried out, assets used, risks undertaken, and market environment.\n\nThe methodology involves taking into account relevant transfer pricing principles, documentation needs, intercompany dealings, and the business nature of the transaction. Our services assist clients in recognizing risks in transfer pricing as well as strengthening their transfer pricing process and intercompany policy to match their operating structure.",
        },
      ],
      faqs: [
        { question: "Why is a business review important for a company?", answer: "A business review will assist in finding areas where there are operational weaknesses, financial performance weaknesses, management weaknesses, and areas of improvement for a company." },
        { question: "What does a business review typically include?", answer: "The business review looks into issues relating to finance, operations, customers, management, markets, and business value drivers." },
        { question: "What is financial modelling, and why does a business need it?", answer: "Financial modelling is the process where a company's plans are translated to financial forecasts, which enables the firm to know its financing needs and measure profitability." },
        { question: "How far ahead should a business prepare financial projections?", answer: "Businesses typically make financial projections for a period of three to five years, based on their goals and funding needs." },
        { question: "How is the value of a business calculated?", answer: "There are three approaches used in business valuation: income approach, market approach, and cost approach. Business valuation depends on financial performance, potential future earnings, assets, market environment, and risks." },
      ],
    },
  },
  {
    slug: "business-governance",
    title: ["Business", "Governance"],
    description:
      "Strengthen governance, controls, accountability, and business performance.",
    icon: "/justice-scale-01.png",
    image: "/s5.png",
    detail: {
      heading: "Business Governance",
      image: "/businessgovernance.png",
      topics: [
        {
          title: "Internal Financial Controls",
          description:
            "Effective internal financial controls can ensure that an organisation has reliable financial records, protected assets, and risk management in place. As organisations evolve in size, there are certain informal ways of working and systems based on the individual's involvement which may not be sufficient anymore.\n\nCAPITAIRE provides assistance in assessing, designing, and implementing internal financial control frameworks based on organisations' needs, size, and processes. The methodology involves analysis of organisational processes such as purchasing, payment transactions, selling, receivables, inventory management, finance & accounts, human resources, payroll, and statutory compliance.\n\nThe methodology will help in identifying process inefficiencies, evaluating financial and operational risks, clarifying duties of persons involved, and developing appropriate controls. When required, CAPITAIRE can provide services related to the creation of the risk and control matrix, assessment of control design, exception identification and remediation. The goal is development of a process that increases accountability, minimises the possibility of making mistakes and losing revenue, improves the quality of accounting, and makes the organisation operate more disciplined.",
        },
        {
          title: "Governance Frameworks",
          description:
            "Good governance forms the framework by which decisions are made, duties are assigned, performance is monitored, and accountability is achieved. With increased size, the necessity for proper governance increases in order to ensure decisions are being made at the correct levels and are still in line with the business goals.\n\nWe assist organisations in evaluating their current governance structures and in developing a suitable framework, which will involve issues like management duties, reporting structure, delegation of authorities, approval systems, review meetings, and escalation procedures. In our evaluations, we take into consideration the importance of the promoters, the board, the management, and other functional heads in steering the operations of the business.\n\nWe also assist in finding any weaknesses in the organization's decision-making processes and whether there are overlapping of duties in the organisation, and where decisions are not well documented and monitored.",
        },
        {
          title: "Internal Control Reviews",
          description:
            "There are various dynamics that are associated with any particular business environment, and this necessitates the need for a process of internal control to change alongside the dynamics in question, leading to possible weaknesses in the processes of the organisation.\n\nCAPITAIRE reviews business processes and control systems for the presence of gaps in process design, deviations from policies, procedures, and best practices. This may include our review of transaction approvals, records, reconciliations, segregation of duties and controls, access levels, reporting systems and compliance-related processes.\n\nWe will assist management in understanding the cause of the gaps in the above cases based on the following: process design flaws, ambiguities of roles, insufficient documentation, technology constraints and improper execution. In accordance with these observations, we will suggest corrective action and necessary control measures that need to be taken.",
        },
        {
          title: "Performance Measurement",
          description:
            "Sustainable growth of any business requires proper understanding as to whether the company achieves its goals both strategically and operationally. Without proper performance measurement, management may face difficulties in detecting deviations, evaluating the impact of decision-making, and identifying the areas that need improvement.\n\nOur services cover the development of performance measurement mechanisms which will correlate strategic directions with their practical implementation in terms of relevant key performance indicators (KPIs), measurable targets, responsible persons for reporting, and performance review within the budget and business plan of an organisation.\n\nFinancial and non-financial indicators may include, but are not limited to, sales, profitability, cash flow, working capital management, resource management, efficiency, etc., depending on the nature of the company's business. Evaluation of the appropriateness of management information systems in the decision-making process is covered as well. Proper performance review mechanisms will enable you to make sound decisions regarding resource allocation and future growth.",
        },
      ],
      faqs: [
        { question: "Define internal financial controls and explain their importance for a business.", answer: "Internal financial controls are those processes and procedures that help achieve accurate financial reporting, safeguard the assets of the business, reduce financial risks and increase accountability." },
        { question: "List some of the elements that make up an internal financial control system.", answer: "The elements of an internal financial control system include approvals, separation of duties, financial reconciliations, access control, documentation, reporting and compliance." },
        { question: "Define corporate governance framework and explain why a company needs it.", answer: "A corporate governance framework is a set of policies and procedures that defines the direction, management and monitoring of business activities." },
        { question: "Explain how a company can improve its corporate governance.", answer: "A company can improve corporate governance by defining the responsibilities of management, setting up the approval process, improving the oversight of the board of directors, documenting the decisions and performing performance reviews." },
        { question: "Describe an internal control review and the elements involved.", answer: "The internal control review assesses processes, approvals, accounting records, reconciliations, and compliance of an entity in order to determine any weakness in controls and provide appropriate recommendations for improvement." },
        { question: "What is the frequency of conducting an internal control review?", answer: "Organisations should review their internal controls periodically or when there are any changes in business operations, structure, technology, and regulations." },
        { question: "What is performance measurement within business management?", answer: "Performance measurement in business management refers to assessing the results of a business in terms of finances and operations according to pre-established goals through measurable indicators such as sales, profits, cash flow, productivity, and efficiency." },
        { question: "What are key performance indicators, and how do they assist businesses?", answer: "Key performance indicators are measurable indicators that companies use to measure progress toward their business goals in order to evaluate performance." },
        { question: "What KPIs would you track for measuring the financial performance of a business?", answer: "Businesses commonly track revenue growth, gross profit margin, net profit margin, operating cash flow, working capital, receivables turnover, and return on investment, depending on their business model." },
      ],
    },
  },
  {
    slug: "succession-exit-advisory",
    title: ["Succession", "& Exit Advisory"],
    description:
      "Plan succession, transitions, continuity, and value-preserving exits.",
    icon: "/message-user-02.png",
    image: "/s1.png",
    detail: {
      heading: "Succession & Exit Advisory",
      image: "/succesion.png",
      topics: [
        {
          title: "Business Succession Planning",
          description:
            "A business that has been constructed through many years of effort needs to be geared up to survive without the presence of the founder. Absent proper planning, the change of ownership, the transfer of leadership and possible disputes between family members can make business continuity uncertain.\n\nCAPITAIRE assists in determining different alternatives and preparing for a business successor in an organised way, taking into account issues of ownership, leadership, governance and management duties and long-term business goals. Our methodology focuses on analysis of current ownership structure, dependency on certain individuals, readiness of succession candidates, decision-making process, and independence of business from its present leadership.\n\nAlso, we pay attention to the impact of the succession process on the value of the business, interests of its shareholders, expectations of family members and prospects for future investments.",
        },
        {
          title: "Ownership Transition",
          description:
            "Ownership transitions may happen due to family inheritance, change in shareholdings, investors' involvement or exit from the company, restructuring of promoters, and the transfer of ownership to new owners. In absence of proper planning, there is likely to be a risk related to control, valuation, governance, and the overall direction of the business.\n\nWe assist business owners in analysing and identifying the alternatives for ownership transitions and structuring ownership transition plans according to the commercial priorities of the business and the stakeholders involved. It will include consideration of the current shareholding structure, valuation aspects, ownership rights, governance, capital needs, and impact of various transfer structures.\n\nWe will assist in identifying transition risks, expectations of the stakeholders, and a plan to implement the transition.",
        },
        {
          title: "Business Continuity",
          description:
            "The resilience of an organisation increases when its processes, decision-making, and critical information are not all held by one person. Continuity involves having clear roles, processes, control mechanisms, and arrangements which will allow the business to cope with any disruption which may arise.\n\nCAPITAIRE works with businesses to understand how much they rely on promoters and key individuals and then determine the critical functions within the business. We look at who has the decision-making rights, how they report things, processes, delegation of responsibility, and if there are suitable persons to run critical processes.\n\nWe assist in establishing governance structures and continuity plans to ensure that organisations have operational continuity even in cases of leadership changes or other transitions. We aim to make sure that the business operates in a way that is consistent with its objectives.",
        },
        {
          title: "Exit Planning",
          description:
            "Exit is a critical strategic point that needs to be planned well in advance of any transaction. It does not matter whether the business owner plans to sell the company, attract a strategic investor, transfer ownership to the next generation or take some other path. Planning can affect the business value, transaction readiness and continuity of its operation.\n\nCAPITAIRE assists business owners to assess available exit options and plan for all the financial, operational, governance and ownership issues related to the transition. The process can include assessment of business performance, evaluation of value drivers, management and process readiness, ownership models and understanding of information needed by the potential investors/buyers.\n\nWe can also assist in identifying the areas which should be sorted out in advance of any transaction, such as financial reporting, internal controls, management dependency, governance and organisational structures. By creating an exit strategy roadmap, we assist business owners in planning for the future.",
        },
      ],
      faqs: [
        { question: "What is business succession planning, and why is it necessary?", answer: "Succession planning prepares an organisation for the transition and change in leadership and ownership in order to avoid future conflicts." },
        { question: "At what point in time should a business start planning for succession?", answer: "Succession planning must be done at a very early stage before the anticipated leadership change occurs." },
        { question: "Can you identify various methods for the ownership transfer?", answer: "Ownership transfer may be done via family succession, share transfers, selling to other external investors, management buying out and so forth." },
        { question: "How do businesses continue after founders exit their companies?", answer: "A business can minimise founder dependence through succession planning, delegation and other relevant procedures and mechanisms." },
        { question: "What is business exit planning and what exit solutions can be used?", answer: "This kind of planning prepares the business owner for the transition from the position of the owner via sale, strategic investments etc." },
        { question: "In what way can business valuation help in succession and exit planning?", answer: "Valuing a business helps the owner understand the value of the business and how the ownership transition can be conducted." },
      ],
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
