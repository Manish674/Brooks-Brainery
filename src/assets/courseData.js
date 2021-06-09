import BuLogo from "../imgs/BuLogo";
import Computer from "../imgs/Computer";
import LawLogo from "../imgs/LawLogo";
import { coursePlus } from "../imgs/SummerProgramSvgs";

const courseData = {
  sci: {
    svg: coursePlus,
    0: {
      title: "Medical Startups",
      author: "Smiti Mittal",
      qualification: "Bioengineering, Stanford University",
      curriculum:
        "This course will introduce students to design thinking as it applies to entrepreneurship in the space of healthcare. At the end of the course, students will be able to: 1. Identify unmet needs and develop need statements based on the populations and outcomes associated with the need. 2. Evaluate the competitors, stakeholders, and market associated with a need. 3. Design quantitative criteria with which they can evaluate potential solutions. The course will focus on need research, and introduce at the end how solution development is understood in the biodesign framework. Students will have the opportunity to showcase their need research through a presentation at the end of the course.",
    },
    1: {
      title: "Introduction to Biomedical Engineering",
      author: "Vedaang Prasad",
      qualification: "Biomedical Engineering, City University of Hong Kong",
      curriculum:
        "This course aims to present a broad but rigorous overview of the field of biomedical engineering to interested students. The course will focus on the common theme of engineering and its application to biological systems. Students will learn about the fundamentals of biotechnology, basic human physiology, and knowledge of healthcare and wellness, with an emphasis on engineering and problem-solving. The course allows students to choose which aspects of biomedical engineering they would like to learn about, to align with their future interests.",
    },
    2: {
      title: "Gene Interactions",
      author: "Christin Hardee",
      qualification: "Molecular and Cellular Biology, Johns Hopkins University",
      curriculum:
        "This course aims to provide a specific understanding of how parts of our genetic code become our physical characteristics. The course will include an introduction to Mendelian Genetics and basic gene expression but will focus mainly on deviations from the standard Mendelian inheritance patterns. Students will learn about the implications of genetic pathways and the mechanics of interactions such as epistasis, complementation, suppression, and duplication. This course allows students to better understand factors beyond our genetic code that control the expression of genes, highlighting the science behind how we become who we are.",
    },
    3: {
      title: "Introduction to Calculus",
      author: "Anna Siju",
      qualification:
        "Math, Education, and Religious Studies, Queen’s University",
      curriculum:
        "This course introduces the basics of calculus to students. Topics include limits and continuity, derivatives, integration, and practical applications. This course will take an interactive approach with several opportunities to complete group work. At the end of this course, students will have a basic understanding of the principles of calculus.",
    },
  },

  // COMPUTER SCIENCE
  cs: {
    svg: Computer,
    0: {
      title: "Introduction to Python",
      author: "Harikrishna Kommineni (AI 4 Change)",
      qualification: "Computer Science, Arizona State University",
      curriculum:
        "Python is a simple, versatile programming language that is growing rapidly in application around the world. AI 4 Change's Introduction to Python course uses a combination of explanation and hands-on learning to provide students with mastery of basic python including concepts such as arithmetic operators, loops, and conditionals. Upon completion of the course, students will be able to write their own programs using different types of variables and user inputs. They will have a solid foundation to continue their own learning as they journey into the field of artificial intelligence.",
    },
    1: {
      title: "Programming the Right Way with DrRacket",
      author: "Harsh Sethia",
      qualification:
        "Computer Science and Innovation & Entrepreneurship, Northeastern University",
      curriculum:
        "Programming is not just about creating functions for solving a problem, it requires efficient designing, testing, and documenting. This course uses design techniques taught by top schools such as MIT and Brown to teach you the right way of programming. As a fundamental class, we assume no prior experience and teach you everything from the start. By the end of the summer, you would be confident with logic building, data structures, and efficient program design.",
    },
    //2: {
    //title: "Cryptography: Then and Now",
    //author: "Tushar Chetal",
    //qualification: "Computer Engineering, Carnegie Mellon University",
    //curriculum:
    //"From the simple Caesar ciphers from 100 BCE to the modern, complex cryptographic schemes, people have wanted to send secret messages and decode other’s secret messages. We will learn about different ciphers and their historical usage, the Nazi WWII Enigma code, how Alan Turing broke the Enigma code leading to the founding of modern computing, and many modern computing concepts like online encryption, key exchanges, and ethical hacking concepts. Basic programming knowledge is useful but not required.",
    //},
    2: {
      title: "Introduction to Machine Learning with Python",
      author: "Unnat Goenka",
      qualification:
        "Data Science and Financial Technology, Northeastern University",
      curriculum:
        "Machine learning is about extracting knowledge from data. It is a research field at the intersection of statistics, artificial intelligence, and computer science; it is also known as predictive analytics or statistical learning. From recommendations of which movies to watch, to which products to buy and recognizing your friends on social media, the application of machine learning methods has become present in everyday life. In this course, we will learn how you can leverage Python and supported libraries to make models. There are no required prerequisites. You will be taught the basics of Python, how to set up a Jupyter Notebook environment, using different libraries for visualizations, and the basics of Machine Learning. At the end of the course, you will be able to make a model from scratch. This course will be very rigorous.",
    },
    3: {
      title: "Automate with Python - Work Smart, Not Hard",
      author: "Jainil Ajmera",
      qualification: "Computer Science, University of California Berkeley",
      curriculum:
        "If you're like most people new to computer science, you'll eagerly sift through online courses. You'll learn the syntax, install the requisite tools and fire up your editor - only to be greeted with the blank screen of death. For the typical novice programmer, building a program from scratch can be extremely unnerving. This course attempts to allay these fears by equipping students with the necessary skills to build their own exciting projects in Python. Following a hands-on approach to learning, the course teaches students how to code by guiding them through the process of creating full-fledged programs that solve practical problems. By the end of the course, students",
    },
    4: {
      title: "Introduction to Android Development",
      author: "Dhruv Verma",
      qualification: "Computer Science, Stony Brook University",
      curriculum:
        "Android is one of the most ubiquitous mobile operating systems. The best part of Android? Anyone can develop Android applications using the open-source software development kits available online! Be it making simple games to complex problem-solving applications; it is all possible with Android. This course is primarily going to be in Java; basic knowledge is required to take this course. It will introduce basic concepts such as application layouts, application lifecycle management, UI development, and implementing solutions using the Android SDK libraries. Upon completing the course, students would be able to write their own applications and understand how to explore the vast open-source world of mobile application development precisely. They will have a solid foundation to continue their learning and broaden their horizons as they progress into API consumption and even application hosting.",
    },
    5: {
      title: "Data Structures and Algorithms for Tech Interview Prep",
      author: "Samuel Padilla",
      qualification: "Computer Science, Morningside College",
      curriculum: "Computer Science, Morningside College",
    },
  },

  commerce: {
    svg: BuLogo,
    0: {
      title: "Introduction to Business",
      author: "Mabel Lyu",
      qualification: "Business Administration, Northeastern University",
      curriculum:
        "The overarching goal in this introductory business boot camp is to develop a business mindset and to develop fundamental business skills. Students will be introduced to business models and structures, SWOT analysis, value proposition, and business pitch. They will be able to identify a target market by the 4P’s of marketing and doing market research. We will learn to validate business concepts by numbers and examine supply chains. By the end of the boot camp, one shall be able to work with others in teams - students will collaborate in teams for the entire boot camp to develop a business pitch, improve presentation skills, foster entrepreneurial thinking, and learn critical skills used in the business world including forecasting financial statements and marketing methodologies.",
    },
    1: {
      title: "Financial Literacy I",
      author: "James Dennis",
      qualification: "Economics, Yale University",
      curriculum:
        "Do you hear buzz about DogeCoin, Forex, and NFTs and wonder what is going on? If you want to learn more about these topics in a classroom setting rather than a social media influencer take my course Financial Literacy I. The objective of this course is to equip each student with a fundamental framework of home accounting, understanding financial market buzz, and investing strategies. These components all have long-term effects on your financial wellbeing and future. Understanding these topics will prepare you with a solid foundation in personal finance and how to make your money work for you. The course will be a mix of lectures, breakout sessions, polls, and a small competition with a reward. Financial Literacy I is open to everyone regardless of prior knowledge",
    },
    2: {
      title: "Consumer Behavior",
      author: "Srishti Kundu",
      qualification: "Marketing Analytics, Northeastern University",
      curriculum:
        "A thorough and nuanced understanding of the consumer is the heart of marketing. This course will explore the variables that affect the different ways in which consumers perceive, select and buy products. Moreover, this course will also consider how this information can help shape a company’s marketing strategy to best reach its target audience in the most effective and efficient way. Topics would include but aren’t limited to, consumer decision-making process, research methodology for consumer research, and cognitive psychology, with a special focus on cognitive biases.",
    },
    3: {
      title: "Impact Investing",
      author: "Thomas Kato",
      qualification:
        "Business Administration and Psychology, Northeastern University",
      curriculum:
        "This course on Impact Investing is about directing money towards businesses and start-ups committed to bettering society one way or another. We'll talk about the process of finding companies, different fields of impact, how companies can be socially impactful, how to assess all aspects of a company, how to measure their impact, and many other factors involved in impact investing.",
    },
    4: {
      title: "Negotiation 101",
      author: "Yuvika Jain",
      qualification: "Marketing and Management, Northeastern University",
      curriculum:
        "Do you find yourself compromising on what you seek because you simply have no clue how to go about it? If yes, Negotiation 101 is just for you! Put plainly, negotiation translates to coming to a consensus. Today, we may find ourselves negotiating numerous times every week if not daily. Negotiation occurs every time two or more people are in a situation where their goals and interests differ. Ironically, most of us have the skills to negotiate as children. Kids are often highly skilled at satisfying their interests. However, as we get older our natural born negotiator gets crushed. We learn not to ask for things we want because we fear it will harm the relationship. The objective of this course is to learn to deal with the fears we have when going into a negotiation through an introduction to the basic elements (strategies and styles) of negotiation. Using lectures, role playing, and simulations Negotiation 101 will provide a number of situations for students to develop their skills and gain feedback.",
    },
    5: {
      title: "Decision Theory",
      author: "Ananya Dhannuka",
      qualification: "Economics, Shri Ram College of Commerce",
      curriculum:
        "Economics assumes human beings to be rational decision making agents who work to maximize their utility. These assumptions of rationality and utility maximization are meant to guide every action we take. But do they? This course will serve as a glimpse into the vast world of economic theories and models that define our decision making in strategic, uncertain, and risky situations. Students will be encouraged to read deeper into economic assumptions and complex theories which form the basis of the science and art of the discipline and extend to our day-to-day lives. It will progress from the classical to the modern understanding of humans ought to or do make decisions. This course will cover the central ideas of the most renowned economists - right from Neumann to John Nash to Richard Thaler.",
    },
    6: {
      title:
        "The Art of Recovery: Evaluating Economic Depressions and Recovery",
      author: "Nicholas Giguere",
      qualification: "Finance, Northeastern University",
      curriculum:
        "This course will talk about the causes and subsequent impacts of historic economic depressions in comparison to the most recent COVID depression. Students will learn about different forms of policy utilized by countries, monetary and fiscal, to combat economic depression and negative trends. We will evaluate the ways countries and central banks recovered their economies in past depressions and extract the lessons economists learned to compare to modern day techniques. Students will learn about policy use in the past 20 years in the financial crisis recovery and covid crash. Students will combine their knowledge learned in class with research skills to create a presentation on a country’s reaction to and recovery from the COVID economic depression.",
    },
  },

  law: {
    svg: LawLogo,
    0: {
      title: "Making of Capitalism",
      author: "Ravichandra Tadigadapa",
      qualification: "International Relations, Stanford University",
      curriculum:
        "This course addresses capitalism in a global perspective to identify the roots of our current economic system. We will consider the history of capitalism, the politics and policies of its implementation, and its human and environmental consequences. By embedding the ‘market’ in the context of social relations, cultural practices, and institutional arrangements, we will learn how capitalism developed in specific historical circumstances.",
    },
    1: {
      title:
        "Adolf Hitler's Rise To Power, The Final Solution & the Cold War Impact in Southeast Asia: The Vietnam War & The Secret War in Laos",
      author: "Ashish Priyadarshi",
      qualification:
        "Computer Science and History, University of Wisconsin-Madison",
      curriculum:
        "In the wake of the events of the First World War, Germany was left decimated by the terms of the Treaty of Versailles. Out of this feeling of devastation, Adolf Hitler would rise to power in a weak and vulnerable German state. This course takes a look at the steps Hitler took to become the Fuhrer of Germany as it follows the build-up of the Nazi Party up to the Second World War. Further, this course will take a look at the 'Final Solution’ as the biggest genocide in human history engulfed Europe. Were these killings the result of evil men carrying out bad intentions, or was it a result of the intense indoctrination and propaganda that the Nazi regime imposed? Following the end of the Second World War, the Cold War became the next big focus of the twentieth century, and South East Asia became a battleground for ideological warfare. This course will also take a look at the Vietnam War and the Secret War in Laos which constituted one of the biggest and most devastating bombing raids ever.",
    },
    2: {
      title: "The Politics Behind Crisis Management",
      author: "Shruti Srikumar",
      qualification:
        " Economics, Statistics, and Political Science, University of Toronto",
      curriculum:
        "As the COVID-19 crisis has taught us, disasters come in all shapes and sizes and at any given point in time. This course aims to use political science as a tool to understand the process of disaster mitigation by glancing through several instances of disaster management in history. The course will explore events such as the Cuban Missile Crisis and the more recent pandemic, and study the actions of political actors with opposing and similar ideologies in order to infer what course of action is most suited for managing social, economic, and political disasters.",
    },
    3: {
      title: "Introduction to Law",
      author: "Muhammad Kashif",
      qualification: "Law and Human Rights, Middlesex University",
      curriculum:
        "If you are interested in the field and looking to get started or if you are considering taking up LLB for university, this is a perfect class for you to understand the basics of British law and we discuss cases and how they have been resolved. In this course, we'll discuss Donoghue and Stevenson about Consumer rights, Osman V UK, a case about human rights, and Boots pharmaceuticals ltd Vs British Pharmaceuticals, a case about consumer products.",
    },
    4: {
      title: "Introduction to Psychology",
      author: "Zarafshaan Tahir",
      qualification: "Psychology, University of Kent",
      curriculum:
        "This course will explore some major psychological concepts allowing students to develop a basic understanding of this subject. The course will explore one of the most influential psychologists, Freud; we will discuss his theories and critically analyze them in class. Moreover, an extension of Freud’s psychosexual stage will allow the students to understand the emphasis on early experiences in the development of personality and as an influence on later. We will also cover some of the symptoms and treatments for common mental disorders such as depression, anxiety, and phobias. Along with that students will be asked to keep a dream journal and submit something from their dream log for the class to analyze after a brief lesson on dream analysis",
    },
  },
};

export default courseData;

//5: { title: "Famous Experiments in Psychology and What they Taught Us",
//author: "Yashodhara Kundra",
//qualification: "Psychology and Creative Writing, Beloit College",
//curriculum:
//"Have you ever come across cool experiments from the (not so long ago) past and wondered, why do psychologists even do this stuff? Scare babies, have people wear gorilla outfits, stare at dogs for long hours and make college kids pretend to be prisoners, among other things. Are we just bored? In this course, we will learn about groundbreaking experiments in psychology that were honestly, a little messed up- and talk about why. For example, the Stanford Prison Experiment, Milgram's Obedience Experiment, Little Albert Experiment, etc. We will watch some interesting clips, play some games, debate how right or wrong they were, and in the end, create a proposal for our very own experiment!",
//},
