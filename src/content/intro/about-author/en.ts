const en = {
  caption: `Hello, I'm Hani Son, the creator of hisondev.`,

  subhead1:
`The goal of hisondev is very simple — to maximize developer convenience and productivity.`,
  t1000:
`Server-side support (hisonjv)`,
  t1010:
`The server-side foundation of hisondev is built around hisonjv.
While working with the Spring framework, I personally found it frustrating to keep generating large numbers of class files.
Even for small-scale projects, I had to keep creating controllers, services, DTOs, DAOs, and all their interfaces, over and over again.
Of course, that layered architecture exists for a reason — it's structured and methodical. But I started asking myself:
“Do we really understand the purpose of this structure, and are we actually using it in a meaningful way for smaller projects?”

That question led me to build api-link and data-model.
data-model serves as a lightweight replacement for DTOs, and api-link automatically generates controller logic.
With these two pieces, developers can focus on business logic (services) and database logic — and spend less time on repetitive boilerplate.

A developer friend once looked at my project and joked,
"So basically you're letting the delivery guy walk straight into your room and drop the package on your desk. Are you sure that's safe?" 😅
And my honest reaction was: "Isn't that… actually better? What if the delivery guy comes in blindfolded, and there's a dedicated tunnel straight to my desk so only the package gets through?"
That mindset is why I kept going instead of giving up.

Because of that, api-link was designed with plenty of customization points for security, interceptors, and exception handling.
All classes defined in data-model and api-link are also fully extendable.
You can inherit them and adapt them to match your own project's style and rules.

Finally, the utils library is a collection of shared utility methods meant to be genuinely useful in small projects.`,
  t1100:
`Client-side support (hisonjs, hisonvue)`,
  t1110:
`Client-side support in hisondev is built around hisonjs and hisonvue.

First, hisonjs is a client-side library designed to work seamlessly with the server-side hisonjv.
The DataWrapper and DataModel in hison.data are fully compatible with the data-model on the server.
hison.link provides smooth API communication with api-link.
It also includes features like CachingModule, hison.utils, and hison.shield for security.
Everything is written in TypeScript, so you get full IntelliSense support.

Second, hisonvue is a Vue UI component library.
It's built on top of hisonjs, and with a single \`npm install hisonvue\`, you can start using both.
It currently offers 25 core components — including components that are commonly needed in real projects but are usually painful to implement yourself.

I’ll admit this: I’m a lazy developer. Just to be clear, not lazy about work or responsibility — I’m not that kind of lazy 😂.
I just absolutely hate writing the same code twice.
Even for a small feature, I obsess over refactoring and modularizing it properly.
In small projects, I kept running into the same issue:
There are certain components you almost always end up needing, but they’re hard enough to build that you usually pull in a third-party library (like editors or grids).
And every time you pull in an external library, you have to bend its UI to match your project’s design. I really disliked that part.

So I started building those “you’ll probably need this anyway” components myself.
On top of that, I exposed a global \`hison\` object so you can centrally manage UI behaviors and styles.

Every hisonvue component can be controlled dynamically at runtime through the \`hison\` object.
It supports SSR, so it runs in both standard Vue and Nuxt environments.
In particular, components like HInput and HInputGroup ship with a lot of features focused on data handling and management.
Because hisonvue extends hisonjs, you also get data modeling, API communication through api-link, utilities, and security — and it all integrates naturally with the backend side (hisonjv).`,
  t1200:
`In the end, hisondev is about increasing developer productivity on both the server side and the client side — and making those two sides work together naturally.
It's especially helpful for small projects that still care about clean structure and maintainability.
It's released under the MIT license, so you're free to use it, extend it, and have fun with it. 😀`,

  subhead2:
`To explain my life as a developer, I actually have to go back to my childhood.`,
  t2000:
`As a kid, I completely fell in love with a game called “RPG Maker 95”`,
  t2005:
`Image source: Alchetron – RPG Maker 95`,
  h2005:
`https://alchetron.com/RPG-Maker-95`,
  t2010:
`The single CD my father bought me pulled me into this world where you could make something from nothing.
At first I was just making really simple little games. But then I started planning storylines and gameplay concepts on my own,
downloading tools made by older, more experienced creators from online communities, and evolving it into my own RPG.

One of the memories that really stuck with me is this:
I wasn’t even in the upper grades of elementary school yet. I had no idea what a “function” was.
But I was already plugging in x/y coordinates for characters and monsters, doing the math, wiring key inputs to events, and turning a traditional turn-based battle system into a real-time action combat system.
And even though I didn’t know what calculus was, I remember using curve-like formulas to give each character different stats based on their attributes.
Looking back now, that still amazes me.
That’s how deeply I was absorbed in development, even then.`,
  t2015:
`I’d have my friends play what I made, take their feedback, fix things, upload new builds to the community, and share it online.
That’s probably when I first realized how fun development can be.`,
  t2020:
`Of course, from my strict father’s point of view, what he saw was just his kid sitting in front of a computer all day playing games 😅.
Eventually I got the “no more computer” ban.
Then came middle school, high school, studying, and slowly “RPG Maker” faded into the background.

The second chapter of me-as-a-developer starts in college.
I majored in biomedical engineering — a field that leans more toward hardware than software.
In four years of university, I think I only took around four software-related courses: C, C++, Visual Basic, and a class on computer systems/environment.
Maybe this sounds a little arrogant, but because I’d already had that early experience of “making things” on a computer,
I often found myself in class thinking, “Why is this so hard for everyone else…?”
(For the record, I’m not the type to create conflict with classmates. I actually enjoy sharing what I know and working together on team assignments.)
The courses weren’t extremely advanced, but I can say with confidence that I’ve always had a natural strength in software development.

I don’t regret my major at all. Studying hardware and engineering gave me a much wider perspective.
My capstone project was a ‘Doppler-based blood flow velocity measurement device.’
Our team handled everything end to end: sourcing sensors, designing circuits, programming what was essentially embedded-level logic, driving the device, and measuring signals with an oscilloscope.
That experience gave me a real sense of what engineering is supposed to be: solving real-world problems in a way that’s both practical and meaningful.`,
  t2025:
`That mindset still shapes the way I work as a developer today.
I don’t just want to write clever code in isolation like solving a private puzzle.
I want to talk to real users and stakeholders, understand real problems, and then build code that the whole team can actually use and maintain together.`,
  t2030:
`The third chapter of my developer story is… a hanbok rental business for tourists.

After graduating, I served for about three years as an officer (commissioned from ROTC-style program), and after finishing my service,
I had the opportunity to run my own small business near Gyeongbokgung Palace, renting traditional Korean hanbok to visitors.

I took the business seriously. I analyzed how the local hanbok rental market worked and studied how competing stores positioned themselves.
Expertise in hanbok, service quality, staff training — all of that matters.
But I realized very quickly that the single biggest driver of revenue was actually online marketing.

So I decided to get serious about the web.
I enrolled in private courses to learn HTML, CSS, JavaScript, and Java.
I built the website myself using a site builder platform, configured SEO,
and used analytics to monitor the impact of SNS marketing, ad campaigns, and outsourced marketing efforts in real time so I could push for maximum efficiency.

Every day, I recorded basic info about visiting customers — rough age range, nationality, how they found us.
At closing time, I logged contextual data like weather and national holidays from key tourist countries.
Over time, that dataset let me forecast how many customers we’d get on certain days or in certain conditions,
which helped with things like staffing cost control.
In the end, the business achieved an annual revenue of around 300 million KRW.

Then COVID-19 hit.
And a business built almost entirely on tourism… was hit very, very hard.
That period was honestly tough for me, but —`,
  t2033:
`— that experience is what pushed me toward becoming a professional developer.
Running that business forced me to build and operate a website, understand SEO, watch traffic data, and improve based on real user behavior.
That became the bridge that led me fully into software development.`,
  t2037:
`After that, I moved fast. I entered a government-supported training program, completed a full-stack development course,
and found my way into the industry. Since then, I’ve been showing up every day, building things, and genuinely enjoying it.`,

  t2040:
`In summary`,
  t2050:
`First, I’m someone who genuinely enjoys development and takes code seriously.`,
  t2055:
`I think hard about writing code that is as simple as possible — code that future teammates (or whoever inherits it) can actually understand.
I find real satisfaction in building a project and watching it come to life.
Honestly, I enjoy making things so much that a lot of the time, development doesn’t even feel like “work” to me 😂.
And I fully understand the importance and the reward of solving real problems.`,
t2060:
`Second, wherever I work, I try to be the kind of teammate people genuinely want to work with.`,
t2065:
`I always start by understanding the entire system before diving into individual tasks.
Even with small issues, I try to identify the root cause rather than just fixing the symptoms, and I actively look for ways to improve the overall structure.
Through various professional experiences, I’ve often heard from my managers that I’m “genuinely dedicated and someone they enjoy working with.”
To share a few examples:
During college, while working part-time at a private academy, the director encouraged me to consider becoming an instructor.
When I graduated, my department chair told me that if I joined his graduate lab, he would personally pay off my student loans.
During my military service as an officer, my battalion commander recommended I consider long-term service.
And as a developer, after participating in an ERP modernization project, the project lead asked me to stay on with the operations team —
so I continued in that role on one-year contracts for nearly five years.`,
t2070:
`Third, I consider myself a developer with great growth efficiency — I learn fast and deliver value quickly.`,
t2075:
`I started out as a non-CS major, so my initial salary wasn’t high.
But I quickly proved my ability, earned trust, and within a year switched to freelance, doubling my income.
I’ve always been stronger in engineering and analytical thinking than in humanities-oriented fields.
I loved science and system logic even as a kid, and I’ve always been quick to grasp how things work.
These days, I make extensive use of AI to achieve faster and more efficient results. In this hisondev project, for example, I used ChatGPT and Gemini heavily.
To put it simply, I designed the architecture, initial structure, and concept — the AI generated and refined much of the implementation, while I reviewed, integrated, and even regenerated documentation and code comments through AI.
When pursuing a goal, I explore multiple approaches, think outside the box, and push forward until the result is achieved — often a step ahead of others.`,


  subhead3:
`Technical focus. I’m strongest in Java, Spring, TypeScript, working with and understanding the browser DOM, ERP domain knowledge in real-world corporate environments, and especially relational database design and SQL tuning.`,
  t3000:
`I’ve built and operated ERP-related systems across different industries, working very close to real business processes.
I’m good at quickly understanding what users actually need and translating that into stable, maintainable system behavior.
My approach is not just "make it work technically," but "make it match how the business truly runs."

Early in my career, I joined an ERP modernization project for a major financial institution.
I worked on integrating workforce management data with an internal Knox system,
handling complex data flow in an enterprise environment.
Through that, I got used to Spring Framework, JSP, Oracle-based back-end development,
and collaboration in an SVN-managed codebase.

After that, at Samoo Architects & Engineers, I took responsibility for maintaining and evolving company-wide systems:
finance/accounting, HR management, subcontractor/vendor management, and more.
I designed, improved, and maintained multiple modules end to end.
I contributed to shared/common modules, wrote and maintained batch jobs,
and automated repetitive operational work such as domestic address registration and system initialization,
which improved efficiency both for developers and operations staff.

I also operated and improved the company’s Jenkins-based automated build and deployment pipeline,
and helped maintain consistent standards for code and configuration using SVN.
Those foundations played a big role in improving overall system stability and maintainability.

In finance/accounting specifically, I worked on major features like journal entry management,
financial statements, and period-end reporting.
I wasn’t just moving data around — I focused on giving accountants what they actually needed:
profit-and-loss views, balance lookups at closing time, outstanding receivables dashboards, etc.
For high-load screens such as P&L status and balance sheet views,
I tuned SQL for large-scale summary data and significantly improved response times.

I also supported the company’s subcontractor ERP system and external vendor portal.
That included directly talking to partner companies, diagnosing their issues in real time over the phone,
and resolving production problems live.
For example, I implemented logic for progress payment calculation, payment condition changes,
performance evaluation of vendors, and safety evaluation flows related to industrial accident prevention regulations — all in close collaboration with actual business stakeholders.

In short, I focus on more than just “feature delivery.”
I listen to what the business is really asking for, interpret it technically, and turn it into something stable and usable.
From requirements analysis to development, testing, and production support,
I try to maintain consistent quality and take responsibility for the entire lifecycle — and I want to keep doing exactly that.`,

  subhead4:
`Detailed work history`,
  t4000:
`Period: Nov 2020 ~ Dec 2021`,
  t4010:
`Company: NextICT Co., Ltd.`,
  t4020:
`Team / Title: IT Development Team / Staff Developer`,
  t4025:
`Employment Type: Full-time`,
  t4030:
`Contributed to an ERP modernization project for a major financial institution.
Adapted Samsung SDI’s HR management logic into the client's ERP.
Performed data migration from legacy systems.
Operated and maintained logic for HR management, retiree management, payroll, and year-end tax settlement.`,
  t4100:
`Period: Jan 2022 ~ Dec 2022`,
  t4110:
`Company: Korea Softlab`,
  t4120:
`Team / Title: IT / Staff Developer`,
  t4125:
`Employment Type: Freelance`,
  t4130:
`Supported the finance, accounting, and HR systems at Samoo Architects & Engineers and participated in ERP modernization.
Developed internal financial reports: balance sheet, income statement, P&L per department, project cost/performance dashboards tailored to the company’s internal structure.
Built and improved bond/guarantee insurance management screens.
Implemented batch download logic for corporate card receipt attachments.
Contributed common/reusable modules, designed and improved accounting statement management, and supported integration testing across finance and HR.
Tech stack: Spring, JSP, Oracle, SVN, Jenkins.`,
  t4200:
`Period: Jan 2023 ~ Dec 2023`,
  t4210:
`Company: Korea Softlab`,
  t4220:
`Team / Title: IT / Staff Developer`,
  t4225:
`Employment Type: Freelance`,
  t4230:
`Operated finance/accounting and subcontractor management systems, plus the external vendor portal, for Samoo Architects & Engineers.
Supported ERP systems used by ~1,000 internal users, as well as external partner access.
Maintained and enhanced modules across expense management, budgeting, vouchers, financial statements, P&L, treasury/cash flow, and overseas finance.
Improved the expense processing workflow: business trip costs, corporate card usage, transportation costs, etc., including account-splitting logic.
Built schedulers to validate vendor business registration against the national tax authority and developed automated fund transfer logic for accounts payable.
Tech stack: Spring, JSP, Oracle, SVN, Jenkins.`,
  t4300:
`Period: Jan 2024 ~ Dec 2024`,
  t4310:
`Company: Korea Softlab`,
  t4320:
`Team / Title: IT / Assistant Manager`,
  t4325:
`Employment Type: Freelance`,
  t4330:
`Continued operations for finance/accounting and subcontractor management systems, including the external partner portal, at Samoo Architects & Engineers.
Maintained and improved shared/common source code. Enhanced batch processes, such as automated domestic address registration, and built reusable internal components.
Worked closely with business stakeholders to design and implement logic for progress payment terms, vendor performance evaluation, and safety compliance evaluation under industrial accident prevention laws.
Developed voucher creation, submission, and approval flows, plus account balance inquiries and settlement-related voucher management.
Provided phone support and real-time troubleshooting directly to partner companies using the external portal.
Tech stack: Spring, JSP, Oracle, SVN, Jenkins.`,
  t4400:
`Period: Jan 2025 ~ Dec 2025`,
  t4410:
`Company: Korea Softlab`,
  t4420:
`Team / Title: IT / Assistant Manager`,
  t4425:
`Employment Type: Freelance`,
  t4430:
`Ongoing operation of finance/accounting and subcontractor systems, plus the external vendor portal, for Samoo Architects & Engineers.
Tuned queries and improved performance for profit-and-loss views, performance/status dashboards, balance sheet / closing logic, and receivables management screens based on real user requirements.
Refactored voucher management logic: unified multiple separate voucher-creation flows across different screens into a single reusable process.
Tech stack: Spring, JSP, Oracle, SVN, Jenkins.`,

  subhead5:
`Certifications`,
  t5000:
`SQL Professional`,
  t5010:
`Issuer: Korea Data Agency`,
  t5020:
`Issued: Sep 2025`,
  t5100:
`Engineer Information Processing (national technical certificate)`,
  t5110:
`Issuer: HRD Korea (Human Resources Development Service of Korea)`,
  t5120:
`Issued: Jun 2021`,
  t5200:
`Linux Master Level 2`,
  t5210:
`Issuer: Korea Association for ICT Promotion`,
  t5220:
`Issued: Apr 2021`,
  t5300:
`Computer Utilization Skills Level 2 (MS Office proficiency certification)`,
  t5310:
`Issuer: Korea Chamber of Commerce and Industry`,
  t5320:
`Issued: Dec 2009`,

  subhead6:
`Contact`,
  t6000:
`hison0319@gmail.com`,
  t6010:
`Feel free to reach out — any kind of message is welcome! 😀`,
} as const;

export default en;