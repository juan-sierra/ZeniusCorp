import CEO from "../images/team/ceo.jpg";
import AD1 from "../images/team/advisor1.jpg";
import AD2 from "../images/team/advisor2.jpg";
import DOE from "../images/clients-logos/DOE.png";
import DLA from "../images/clients-logos/dla.png";
import IRS from "../images/clients-logos/irs.png";
import JSP from "../images/clients-logos/JSP.jpg";
import FMAE from "../images/clients-logos/fannie-mae.png";
import DMDC from "../images/clients-logos/dmdc.png";
import SAM from "../images/clients-logos/samhsa.png";
import USPTO from "../images/clients-logos/US_PTO.png";
import PGCIMG from "../images/clients-logos/PGC.png";

export const data = {
  clients: [
    {
      title: "Department of Education",
      description:
        "Providing business analysis and SME support for Grants Management System and Enterprise Data Warehouse",
      img: `${DOE}`
    },
    {
      title: "Defense Logistics Agency",
      description:
        "Providing Project Management, Enterprise Architecture, Technology Advisory, and Application Portfolio Management services",
      img: `${DLA}`
    },
    {
      title: "Internal Revenue Service",
      description:
        "Providing Systems Development and Integrations Support services to deliver a modern tax processing system at IRS",
      img: `${IRS}`
    },
    {
      title: "Joint Service Provider",
      description: "Providing Enterprise Configuration Management services",
      img: `${JSP}`
    },
    {
      title: "Fannie Mae",
      description: "Providing Java UI and Server Development Services",
      img: `${FMAE}`
    },
    {
      title: "Defense manpower data center",
      description:
        "Providing Project Management, Enterprise Architecture, Technology Advisory, and Application Portfolio Management services",
      img: `${DMDC}`
    },
    {
      title: "Samhsa",
      description: "Providing Cybersecurity services",
      img: `${SAM}`
    },
    {
      title: "Us patent and trademark office",
      description: "Providing Oracle Data Modeling services",
      img: `${USPTO}`
    },
    {
      title: "Prince george county maryland",
      description: "Providing SAP Solutions",
      img: `${PGCIMG}`
    }
  ],
  about: [
    {
      description:
        "Zenius represents over 20 years of expertise developing and providing Grants Management systems and solutions, IT Assessment and Optimization systems and services, Financial Management systems and consulting, and Higher Education domain support and expertise.",
      team: [
        {
          name: "Prasanna Amitabh",
          title: "CEO",
          description:
            "Prasanna brings more than 18 years of experience developing and supervising complex information technology (IT) programs, rolling out e-Business solutions while overseeing multi-million-dollar budgets. He is hands-on, a solution-oriented technology leader, skilled in reducing service costs and delivering projects on time and within budget for commercial clients and government agencies. He has documented success in turning around underperforming programs, is a patent-holder for “Customer Relationship Management System with Compliance Tracking Capabilities” program, and a multiple service-excellence award-winner.Prior to founding Zenius, Prasanna worked as Associate Partner at IBM, leading technologically and strategically complex programs for many government agencies. Prasanna has a Bachelor’s degree in Electronics and Telecommunications Engineering from National Institute of Technology, Durgapur (India), and holds a Master’s in Business Administration from University of Georgia, Terry College of Business.",
          img: `${CEO}`,
          linkedin: "https://www.linkedin.com/in/prasanna-amitabh-31a4751/"
        },
        {
          name: "Dr. Danny Harris",
          title: "Advisor",
          description:
            "Dr. Danny Harris is a retired Federal Executive (SES) with 34 years of experience in information technology and financial management. Dr Harris is now the owner of a Single Member LLC named DA Harris Consulting, LLC., specializing in Executive Advisory Services in areas such as IT Investment Management, Financial Management Systems, Information Systems Implementations, and Project Management. Dr. Harris served as the Chief Information Officer (CIO) at the Department of Education from 2008 until 2016. As the CIO, he managed the Department’s enterprise-wide IT services, including its IT infrastructure, desktops, network, disaster recovery, and printing services, representing a billion dollars in annual IT spend. Additionally, he maintained the Department’s most mission critical Financial Management Systems, including the Accounting System, Contracts and Purchasing System, Travel Management System, the Department’s award winning Grants Management System, and its Web presence. Prior to becoming the CIO, Dr. Harris served as the Deputy CFO from 2004 –2008. He oversaw financial management, internal control and audit resolution, financial systems, contracts and procurement, and grants policy issues. He managed staff responsible for ensuring Department funds were spent appropriately, and staff responsible for the Department daily financial operations. Dr. Harris has served on the Board of Advisors for the Information Technology (IT) Department at the College of Southern Maryland from 1994 to present. He is also currently an adjunct professor at Howard University, teaching courses in Computer Technology. Prior to his tenure at Howard University, he taught at George Mason University, in disciplines such as Organizational Communications Management, Research Methodology and Design. Dr. Harris was recognized as one of the Top 100 Information Technology Leaders for 2012 by ComputerWorld. A native of North Carolina, Dr. Harris holds a B.A. in Communications from North Carolina A&T State University, and an M.A. and PhD. in Organizational Management from Howard University.",
          img: `${AD1}`,
          linkedin: "https://www.linkedin.com/in/danny-harris-74573b9/"
        },
        {
          name: "Vernon Fernandez",
          title: "Advisor",
          description:
            "Vernon is an experienced Business Development and Program Delivery executive. He is passionate about leveraging technology to achieve business and mission results. He has spent the last 25 years of his career pursuing this goal – at NASA, leveraging Flight Dynamics technologies to fly satellites, at the IRS, directing a portfolio of transformation programs to lead the IRS into the digital age (electronic services for tax payers, and tax payer relationship management), at the EPA, building out an environmental electronic exchange between the EPA and the ecosystem of states, tribes and other partners, at DHS helping an agency leverage cloud technology to transform its mission operations and at USDA, advising clients on Business Intelligence and Mission Analytics to enhance their services. Vernon has worked at Deloitte and CSC serving clients across a number of federal agencies and at Link Simulation Systems helping clients in the utility industry. He is a founder and principal of HVF Consulting, which helps firms develop and execute on their growth strategies and is an adjunct professor at American University’s Kogod School of Business.",
          img: `${AD2}`,
          linkedin: "https://www.linkedin.com/in/vernon-fernandes-6290565/"
        }
      ]
    },
    {}
  ],
  contracts: [
    {
      description:
        "We are actively looking to broaden our role as government contractor. We currently have access to many contract vehicles as a subcontractor. With access to these contract vehicles, we continue to increase our ability to respond to business requests and expand our presence in the Federal space."
    },
    {
      list: [
        {
          name: "GSA Alliant - Large Business"
        },
        {
          name: "CIO-SP3 – Large Business"
        },
        {
          name: "OASIS – Large Business"
        },
        {
          name: "OASIS - Small Business"
        },
        {
          name: "DLA JETS"
        },
        {
          name: "CMS SPARC"
        },
        {
          name: "DSS ConFLASC"
        },
        {
          name: "DISA SETI"
        },
        {
          name: "Seaport-NxG"
        }
      ]
    }
  ]
};
