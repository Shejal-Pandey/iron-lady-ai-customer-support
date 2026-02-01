/**
 * Iron Lady AI Assistant - Comprehensive Knowledge Base
 * Designed to help users understand programs, services, and enrollment process
 */

const IRON_LADY_CONFIG = {
    name: "Iron Lady",
    tagline: "Empowering Women, Transforming Lives",
    welcome_message: "Welcome to Iron Lady! 🌟 I am here to help you understand our programs, services, and how everything works. Please feel free to ask any questions.",
    fallback_response: "I appreciate your question! However, I'm here specifically to help with Iron Lady's programs, services, and enrollment process. Could you please ask something related to:\n\n• Our empowerment programs\n• Learning and development services\n• How to enroll\n• Our mentorship support\n\nI'd love to help you find the right path!"
};

// Comprehensive FAQ Database
const FAQ_DATABASE = {
    // About Iron Lady
    about: {
        keywords: ["what is iron lady", "about iron lady", "tell me about", "who are you", "organization", "company", "what do you do"],
        response: `<strong>🏛️ About Iron Lady</strong>

Iron Lady is an organization dedicated to <strong>empowering women and learners</strong> through education, skill development, and guidance.

<strong>Our Mission:</strong>
To support individuals in their personal and professional growth journey, making quality education and mentorship accessible to everyone.

<strong>What We Offer:</strong>
• 📚 Structured Learning Programs
• 💪 Skill Development Training  
• 🎯 Career Guidance & Mentorship
• 🌱 Personal Growth Support

<strong>Our Values:</strong>
• Inclusivity - Everyone deserves to learn
• Simplicity - We make complex things easy
• Support - We're with you every step

Would you like to know more about our specific programs?`
    },

    // Programs Overview
    programs_overview: {
        keywords: ["programs", "what programs", "courses", "program list", "available programs", "all programs"],
        response: `<strong>📋 Our Programs</strong>

Iron Lady offers two flagship programs designed for different needs:

<strong>1. 👩 Women Empowerment Program</strong>
Perfect for: Women seeking confidence, skills, and career growth
• Duration: Flexible learning paths
• Focus: Self-reliance, skills, opportunities
• Support: Dedicated mentorship

<strong>2. 📖 Learning & Development Program</strong>
Perfect for: Anyone wanting structured skill development
• Duration: Self-paced modules
• Focus: Step-by-step knowledge building
• Support: Guided learning path

<strong>🎯 Not sure which to choose?</strong>
Tell me about your goals, and I'll help you find the perfect fit!

Type: "Compare programs" to see a detailed comparison.`
    },

    // Women Empowerment Program - Detailed
    women_program: {
        keywords: ["women empowerment", "women program", "program for women", "empower women", "women's program", "female empowerment"],
        response: `<strong>👩 Women Empowerment Program</strong>

This transformative program is specially designed to help women unlock their full potential.

<strong>What You'll Gain:</strong>
✨ <strong>Confidence Building</strong> - Develop self-belief and assertiveness
💼 <strong>Professional Skills</strong> - Career-ready abilities
🎯 <strong>Goal Setting</strong> - Clear vision for your future
🤝 <strong>Networking</strong> - Connect with like-minded women
📈 <strong>Career Opportunities</strong> - Open new doors

<strong>Program Highlights:</strong>
• Beginner-friendly, no prior experience needed
• Learn at your own pace
• Personal mentorship included
• Supportive community of learners
• Practical, real-world applications

<strong>Who Is This For?</strong>
• Women looking to restart their career
• Those seeking new skills and confidence
• Anyone wanting financial independence
• Women ready for personal growth

Would you like to know how to enroll in this program?`
    },

    // Learning & Development Program - Detailed
    learning_program: {
        keywords: ["learning and development", "learning program", "development program", "skill program", "training program"],
        response: `<strong>📖 Learning & Development Program</strong>

A structured program designed to help you build knowledge and skills systematically.

<strong>What You'll Learn:</strong>
📚 <strong>Core Concepts</strong> - Strong foundation in essential topics
🛠️ <strong>Practical Skills</strong> - Hands-on learning experiences
🧠 <strong>Critical Thinking</strong> - Problem-solving abilities
💻 <strong>Modern Skills</strong> - Industry-relevant knowledge

<strong>Program Features:</strong>
• Step-by-step curriculum
• Clear learning milestones
• Progress tracking
• Expert guidance throughout
• Certificate upon completion

<strong>Learning Approach:</strong>
1️⃣ Start with basics - no rushing
2️⃣ Practice what you learn
3️⃣ Get feedback and improve
4️⃣ Advance when ready
5️⃣ Achieve your goals

Would you like to know more about enrollment?`
    },

    // Program Comparison
    compare: {
        keywords: ["compare programs", "which program", "difference between", "comparison", "which is better", "choose between"],
        response: `<strong>📊 Program Comparison</strong>

<strong>Women Empowerment Program</strong>
• 👥 Target: Women seeking growth
• 🎯 Focus: Confidence + Career + Skills
• ⏱️ Pace: Flexible, self-paced
• 🤝 Support: Personal mentorship
• ✨ Best for: Career restart, personal growth

<strong>Learning & Development Program</strong>
• 👥 Target: All learners
• 🎯 Focus: Structured skill building
• ⏱️ Pace: Module-based progression  
• 🤝 Support: Guided learning
• ✨ Best for: Skill acquisition, career prep

<strong>🤔 Quick Decision Guide:</strong>

Choose <strong>Women Empowerment</strong> if you:
• Want holistic personal + professional growth
• Need confidence building alongside skills
• Prefer a supportive women's community

Choose <strong>Learning & Development</strong> if you:
• Want focused skill development
• Prefer structured, modular learning
• Have specific learning goals

Need more help deciding? Tell me about yourself!`
    },

    // Services
    services: {
        keywords: ["services", "what services", "what do you offer", "offerings", "help available"],
        response: `<strong>🛎️ Our Services</strong>

Iron Lady provides comprehensive support through three core services:

<strong>1. 🛠️ Skill Development Support</strong>
We help you build practical, career-ready skills:
• Technical and soft skills training
• Industry-relevant curriculum
• Hands-on practice sessions
• Real-world project experience

<strong>2. 🧭 Learning Guidance</strong>
Personalized guidance to navigate your learning journey:
• Customized learning paths
• Clear milestones and goals
• Regular progress check-ins
• Career direction advice

<strong>3. 👥 Mentorship & Support</strong>
You're never alone in your journey:
• One-on-one mentorship sessions
• Q&A support when stuck
• Motivation and encouragement
• Community peer support

<strong>All services include:</strong>
✅ Beginner-friendly approach
✅ No prior experience required
✅ Continuous support system
✅ Practical learning focus

Which service would you like to know more about?`
    },

    // Skill Development
    skills: {
        keywords: ["skill development", "develop skills", "learn skills", "what skills", "skill training"],
        response: `<strong>🛠️ Skill Development Support</strong>

We make learning new skills simple and practical!

<strong>Skills We Help You Build:</strong>
💬 <strong>Communication</strong> - Express yourself confidently
💻 <strong>Digital Literacy</strong> - Navigate the modern world
📊 <strong>Professional Skills</strong> - Workplace readiness
🧠 <strong>Problem Solving</strong> - Think critically
🤝 <strong>Interpersonal Skills</strong> - Work well with others

<strong>Our Teaching Approach:</strong>
• Simple, jargon-free explanations
• Step-by-step instructions
• Practice exercises
• Real-world examples
• Patience and support

<strong>Why Our Approach Works:</strong>
✓ No rush - learn at your pace
✓ No judgment - ask anything
✓ No overwhelm - small steps
✓ No confusion - we clarify everything

Ready to start building your skills?`
    },

    // Mentorship
    mentorship: {
        keywords: ["mentorship", "mentor", "guidance support", "personal support", "one on one", "coach"],
        response: `<strong>👥 Mentorship & Support</strong>

Having a mentor makes all the difference. We ensure you never feel lost!

<strong>What You Get:</strong>
🎯 <strong>Personal Guidance</strong>
A dedicated mentor who understands your goals and helps you achieve them.

📞 <strong>Always Available Support</strong>
Stuck on something? Your mentor is just a message away.

💪 <strong>Motivation & Encouragement</strong>
We celebrate your wins and help you through challenges.

🗺️ <strong>Career Direction</strong>
Get advice on your career path and next steps.

<strong>How Mentorship Works:</strong>
1. You're paired with a caring mentor
2. Regular check-in sessions
3. Ask questions anytime
4. Get personalized feedback
5. Track your progress together

<strong>Our Promise:</strong>
"No learner left behind" - We're committed to your success!

Would you like to learn how to get started?`
    },

    // Enrollment Process
    enrollment: {
        keywords: ["enroll", "how to enroll", "join", "sign up", "register", "apply", "admission", "start learning"],
        response: `<strong>📝 How to Enroll</strong>

Getting started with Iron Lady is simple! Follow these steps:

<strong>Step 1: Explore 🔍</strong>
You're already doing this! Learn about our programs through this chat.

<strong>Step 2: Choose Your Path 🎯</strong>
Decide which program fits your goals:
• Women Empowerment Program
• Learning & Development Program

<strong>Step 3: Express Interest 💬</strong>
Let us know you're interested by saying "I want to enroll" or asking for enrollment details.

<strong>Step 4: Connect With Us 🤝</strong>
Our team will reach out to guide you through:
• Program details
• Schedule options
• Any questions you have

<strong>Step 5: Begin Your Journey 🚀</strong>
Start learning with full support from day one!

<strong>🎁 What You Get Upon Enrollment:</strong>
✓ Access to learning materials
✓ Personal mentor assignment
✓ Community access
✓ Progress tracking tools
✓ Certificate upon completion

Ready to take the first step? Type "I want to enroll" or ask me anything!`
    },

    // Express Interest
    interest: {
        keywords: ["i want to enroll", "i'm interested", "sign me up", "i want to join", "interested in joining", "ready to start"],
        response: `<strong>🎉 Wonderful! We're Excited to Have You!</strong>

Thank you for your interest in Iron Lady! You're taking a great step toward your growth.

<strong>Here's What Happens Next:</strong>

📋 <strong>Quick Information:</strong>
To help us serve you better, please have ready:
• Your name
• Contact preference (phone/email)
• Which program interests you
• Your goals (brief description)

📞 <strong>We'll Connect:</strong>
Our friendly team will reach out to:
• Answer all your questions
• Explain program details
• Discuss the best fit for you
• Guide you through enrollment

⏰ <strong>Timeline:</strong>
We typically respond within 24-48 hours.

<strong>💡 While You Wait:</strong>
Feel free to ask me more questions about:
• Program curriculum
• What to expect
• Success stories
• Any concerns you have

We're here to support you! 🌟`
    },

    // Getting Started / Process
    process: {
        keywords: ["process", "how does it work", "how to start", "steps", "getting started", "what's the process"],
        response: `<strong>🚀 Getting Started with Iron Lady</strong>

Our process is designed to be simple and stress-free!

<strong>Your Journey in 5 Easy Steps:</strong>

<strong>1️⃣ Discover</strong>
Explore our programs and services using this chat. Ask anything!

<strong>2️⃣ Understand</strong>
I'll explain everything in simple terms. No confusion, no jargon.

<strong>3️⃣ Decide</strong>
Choose the program that matches your goals and situation.

<strong>4️⃣ Connect</strong>
Express your interest, and our team guides you through enrollment.

<strong>5️⃣ Begin!</strong>
Start your learning journey with full mentorship and support.

<strong>What Makes Us Different:</strong>
✨ No pressure - take your time to decide
✨ No complicated forms - we keep it simple
✨ No hidden costs - complete transparency
✨ No solo journey - support at every step

Would you like to start exploring our programs?`
    },

    // Benefits
    benefits: {
        keywords: ["benefits", "why iron lady", "advantages", "why choose", "what do i get", "why should i"],
        response: `<strong>✨ Why Choose Iron Lady?</strong>

<strong>🎯 For Your Learning:</strong>
• Simple, beginner-friendly approach
• Step-by-step guidance
• No prior experience required
• Practical, real-world skills

<strong>🤝 For Your Support:</strong>
• Personal mentorship included
• Never feel lost or stuck
• Questions answered patiently
• Continuous encouragement

<strong>🌱 For Your Growth:</strong>
• Build lasting confidence
• Open new opportunities
• Join a supportive community
• Achieve real results

<strong>💫 What Sets Us Apart:</strong>
✓ We explain until you understand
✓ We never leave you behind
✓ We celebrate your progress
✓ We believe in your potential

<strong>🏆 Our Results:</strong>
• Learners gain confidence
• Skills that matter
• Career advancement
• Personal transformation

Ready to experience the Iron Lady difference?`
    },

    // Greetings
    greeting: {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "namaste", "hii", "hiii"],
        response: `Hello! 👋 Welcome to Iron Lady!

I'm your AI assistant, here to help you learn about our empowerment programs and services.

<strong>🌟 How can I help you today?</strong>

• Learn about our <strong>programs</strong>
• Understand our <strong>services</strong>
• Find out <strong>how to enroll</strong>
• Get answers to your <strong>questions</strong>

Just type your question, or try one of these:
• "What is Iron Lady?"
• "Tell me about your programs"
• "How can I enroll?"

I'm here to guide you! 😊`
    },

    // Thanks
    thanks: {
        keywords: ["thank you", "thanks", "appreciate", "thank u", "thx", "tysm"],
        response: `You're very welcome! 😊

It's my pleasure to help you! At Iron Lady, we believe everyone deserves patient, caring support.

<strong>Remember:</strong>
• I'm here whenever you have questions
• No question is too small or simple
• Take your time exploring our programs

Is there anything else you'd like to know about Iron Lady? I'm happy to help! 🌟`
    },

    // Goodbye
    goodbye: {
        keywords: ["bye", "goodbye", "see you", "take care", "later", "gotta go"],
        response: `Goodbye! 👋

It was wonderful chatting with you today!

<strong>Before you go:</strong>
• Our chat history is saved - come back anytime!
• You can continue right where you left off
• We're here whenever you're ready

Take care, and remember - <strong>your growth journey can start whenever you're ready</strong>! 

We hope to welcome you to the Iron Lady family soon! ✨🌟`
    },

    // Help
    help: {
        keywords: ["help", "help me", "what can you do", "how to use", "guide me", "i need help"],
        response: `<strong>🆘 How Can I Help You?</strong>

I'm your Iron Lady AI assistant! Here's what I can do:

<strong>📚 Information I Can Provide:</strong>
• About Iron Lady and our mission
• Detailed program descriptions
• Services we offer
• Enrollment process
• Benefits of joining

<strong>🎯 Questions I Can Answer:</strong>
• "What is Iron Lady?"
• "What programs do you offer?"
• "Compare your programs"
• "How do I enroll?"
• "What are the benefits?"
• "Tell me about mentorship"

<strong>💡 Tips for Best Results:</strong>
• Ask one question at a time
• Be specific about what you want to know
• Use simple, clear language
• Feel free to ask follow-up questions

<strong>🤔 Not Sure Where to Start?</strong>
Try: "Tell me about Iron Lady from the beginning"

How can I assist you today?`
    },

    // Cost/Fee Related
    cost: {
        keywords: ["cost", "fee", "price", "how much", "charges", "payment", "affordable", "free"],
        response: `<strong>💰 Program Investment</strong>

Thank you for asking about our program costs!

<strong>Our Approach to Pricing:</strong>
• Programs are designed to be accessible
• We believe quality education shouldn't break the bank
• Flexible options available

<strong>For Specific Pricing:</strong>
Our team will provide detailed pricing based on:
• Which program you choose
• Your specific requirements
• Available payment options

<strong>What's Included in Your Investment:</strong>
✓ Complete program access
✓ Personal mentorship
✓ Learning materials
✓ Community support
✓ Certificate of completion
✓ Ongoing guidance

<strong>💬 To Get Pricing Details:</strong>
Say "I want to enroll" and our team will share complete information including any current offers!

Would you like to express your interest?`
    },

    // Duration
    duration: {
        keywords: ["how long", "duration", "time", "weeks", "months", "schedule", "time commitment"],
        response: `<strong>⏱️ Program Duration & Schedule</strong>

<strong>Our Flexible Approach:</strong>
Iron Lady programs are designed around YOUR life:

<strong>📅 Time Commitment:</strong>
• Self-paced learning options
• Flexible scheduling
• Learn at your comfort level
• No strict deadlines that stress you

<strong>⏰ Typical Duration:</strong>
• Programs have recommended timelines
• But you can go faster or slower
• What matters is your understanding, not speed

<strong>👩‍💻 How It Works:</strong>
• Access materials anytime
• Complete modules at your pace
• Get support when you need it
• Move forward when you're ready

<strong>📞 For Specific Schedules:</strong>
Our enrollment team can discuss:
• Recommended study hours
• Program timeline options
• Flexible arrangements for you

Express interest and we'll create a schedule that works for you!`
    },

    // Success Stories
    success: {
        keywords: ["success stories", "testimonials", "results", "reviews", "feedback", "outcomes"],
        response: `<strong>🏆 Success Stories</strong>

Iron Lady has helped many women and learners transform their lives!

<strong>What Our Learners Achieve:</strong>

💪 <strong>Confidence Transformation</strong>
"I went from doubting myself to believing I can achieve anything!"

📈 <strong>Career Growth</strong>
"The skills I learned opened new job opportunities for me."

🌟 <strong>Personal Development</strong>
"I'm not the same person - I've grown so much!"

🤝 <strong>Community Connection</strong>
"I found a supportive community that feels like family."

<strong>Common Outcomes:</strong>
✓ Increased self-confidence
✓ New practical skills
✓ Better career prospects
✓ Personal empowerment
✓ Lifelong learning habits

<strong>Your Success Story Starts Here!</strong>
Would you like to begin your transformation journey?`
    },

    // FAQ
    faq: {
        keywords: ["faq", "frequently asked", "common questions", "questions"],
        response: `<strong>❓ Frequently Asked Questions</strong>

<strong>Q: Do I need prior experience?</strong>
A: No! Our programs are beginner-friendly. We start from basics.

<strong>Q: How much time do I need?</strong>
A: Programs are flexible. Learn at your own pace.

<strong>Q: Will I get support?</strong>
A: Yes! Personal mentorship is included. You're never alone.

<strong>Q: Is it only for women?</strong>
A: Women Empowerment is for women. Learning & Development is for everyone.

<strong>Q: What if I get stuck?</strong>
A: Your mentor is always available to help. No question is silly.

<strong>Q: Will I get a certificate?</strong>
A: Yes, upon successful completion.

<strong>Q: How do I enroll?</strong>
A: Just say "I want to enroll" and we'll guide you!

Have a question not listed here? Just ask me!`
    },

    // Talk to Advisor
    advisor: {
        keywords: ["talk to advisor", "speak to someone", "human", "real person", "call", "contact", "advisor", "counselor"],
        response: `<strong>👩‍💼 Connect with Our Team</strong>

We'd love to speak with you personally! Here's how you can reach our advisors:

<strong>📞 Schedule a Call</strong>
Our friendly advisors are available to discuss your goals and answer questions.

<strong>📧 Email Us</strong>
Send your queries and we'll respond within 24 hours.

<strong>💬 Live Chat</strong>
You can continue chatting with me, and I'll connect you with the right person!

<strong>What Our Advisors Can Help With:</strong>
• Personalized program recommendations
• Career guidance and goal setting
• Enrollment assistance
• Payment plan discussions
• Any specific concerns you have

Would you like me to help you prepare for your advisor call by noting down your goals?`
    },

    // More Questions
    more_questions: {
        keywords: ["more questions", "i have questions", "other questions", "ask more"],
        response: `<strong>❓ I'm Here to Help!</strong>

Of course! I'm happy to answer more questions. Here are some topics you might want to explore:

<strong>📚 Programs</strong>
• What programs are available?
• Which program is right for me?
• Compare the programs

<strong>📝 Enrollment</strong>
• How do I enroll?
• What are the steps?
• What documents do I need?

<strong>💰 Investment</strong>
• What is the cost?
• Are there payment plans?
• What's included in the fee?

<strong>🎯 Outcomes</strong>
• What will I learn?
• Success stories
• Career opportunities

Just type your question or click one of the quick options below!`
    }
};

/**
 * Find the best matching response based on user input
 * Returns an object with response text, quick replies, and follow-up question
 */
function findResponse(userMessage) {
    const lower = userMessage.toLowerCase().trim();

    // Handle confusion gracefully
    const confusionPatterns = ["confused", "don't understand", "dont understand", "not clear", "unclear", "what do you mean", "explain again", "say that again", "i'm lost", "im lost", "help me understand"];
    if (confusionPatterns.some(p => lower.includes(p))) {
        return {
            text: `<strong>😊 No Problem, Let Me Help!</strong>

I understand – sometimes things can feel overwhelming. Let me simplify things for you.

<strong>Iron Lady offers two main things:</strong>

1️⃣ <strong>Women Empowerment Program</strong>
→ Helps women build confidence and career skills

2️⃣ <strong>Learning & Development Program</strong>
→ Helps anyone learn new skills step-by-step

<strong>To get started, you just need to:</strong>
• Tell us you're interested
• We'll guide you through everything

That's it! No complicated process. 

What would you like to know more about?`,
            quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "Start Over"],
            followUp: "Would you like me to explain any specific part in more detail?"
        };
    }

    // Check for greetings
    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"];
    if (greetings.some(g => lower === g || lower.startsWith(g + " "))) {
        return {
            text: `<strong>👋 Hello! Welcome to Iron Lady!</strong>

I'm so glad you're here! I'm your AI assistant, ready to help you discover how Iron Lady can transform your journey.

<strong>Here's what I can help you with:</strong>
• 📚 Learn about our programs
• 💪 Understand benefits and outcomes
• 📝 Guide you through enrollment
• ❓ Answer any questions you have

What would you like to explore first?`,
            quickReplies: ["About Iron Lady", "View Programs", "How to Enroll", "Why Join Us?"],
            followUp: "Feel free to ask anything – I'm here to help! 😊"
        };
    }

    // Thank you responses
    if (lower.includes("thank") || lower.includes("thanks")) {
        return {
            text: `<strong>😊 You're Very Welcome!</strong>

I'm happy I could help! Remember, I'm always here whenever you have questions.

<strong>Quick Links:</strong>
• Ready to join? Just say "I want to enroll"
• Need more info? Ask about any program
• Want to talk to someone? Say "Talk to advisor"

Is there anything else I can help you with today?`,
            quickReplies: ["I Want to Enroll", "View Programs", "Talk to Advisor", "No, Thank You"],
            followUp: null
        };
    }

    // Goodbye responses
    if (lower.includes("bye") || lower.includes("goodbye") || lower === "no" || lower === "no, thank you" || lower === "no thank you") {
        return {
            text: `<strong>👋 Thank You for Visiting!</strong>

It was wonderful chatting with you! Remember, Iron Lady is here whenever you're ready to start your transformation journey.

<strong>🌟 We believe in you!</strong>

Come back anytime – just say "Hi" to start a new conversation.

Wishing you success and happiness! 💫`,
            quickReplies: ["Start New Chat", "View Programs", "How to Enroll"],
            followUp: null
        };
    }

    // Define response mappings with quick replies and follow-ups
    const responseMap = {
        about: {
            quickReplies: ["View Programs", "How to Enroll", "Why Join Us?", "Talk to Advisor"],
            followUp: "Would you like to explore our programs or learn how to enroll?"
        },
        programs_overview: {
            quickReplies: ["Women Empowerment", "Learning & Development", "Compare Programs", "How to Enroll"],
            followUp: "Would you like details about a specific program, or help choosing the right one?"
        },
        women_program: {
            quickReplies: ["How to Enroll", "Compare Programs", "View Benefits", "Talk to Advisor"],
            followUp: "Are you interested in joining the Women Empowerment Program?"
        },
        learning_program: {
            quickReplies: ["How to Enroll", "Compare Programs", "View Benefits", "Talk to Advisor"],
            followUp: "Would you like to enroll in the Learning & Development Program?"
        },
        compare: {
            quickReplies: ["Women Empowerment", "Learning & Development", "How to Enroll", "Talk to Advisor"],
            followUp: "Based on your goals, which program interests you more?"
        },
        enrollment: {
            quickReplies: ["I Want to Enroll", "View Programs", "Talk to Advisor", "More Questions"],
            followUp: "Ready to take the first step? Just say 'I want to enroll'!"
        },
        process: {
            quickReplies: ["I Want to Enroll", "View Programs", "Talk to Advisor", "Go Back"],
            followUp: "Would you like to start your enrollment now?"
        },
        services: {
            quickReplies: ["View Programs", "How to Enroll", "Mentorship Info", "Talk to Advisor"],
            followUp: "Which service would you like to learn more about?"
        },
        skills: {
            quickReplies: ["View Programs", "How to Enroll", "Compare Programs", "Talk to Advisor"],
            followUp: "Would you like to know how our programs can help you build these skills?"
        },
        mentorship: {
            quickReplies: ["How to Enroll", "View Programs", "Talk to Advisor", "More Questions"],
            followUp: "Would you like to be matched with a mentor?"
        },
        benefits: {
            quickReplies: ["View Programs", "How to Enroll", "Success Stories", "Talk to Advisor"],
            followUp: "Ready to experience these benefits yourself?"
        },
        cost: {
            quickReplies: ["How to Enroll", "View Programs", "Talk to Advisor", "More Questions"],
            followUp: "Would you like to discuss payment options with our team?"
        },
        duration: {
            quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "More Questions"],
            followUp: "Would you like to start at your own pace?"
        },
        success: {
            quickReplies: ["How to Enroll", "View Programs", "Talk to Advisor", "More Questions"],
            followUp: "Would you like to be our next success story?"
        },
        interest: {
            quickReplies: ["I Want to Enroll", "View Programs", "Talk to Advisor", "More Questions"],
            followUp: "Great! Shall we proceed with the enrollment?"
        },
        help: {
            quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "FAQ"],
            followUp: "What would you like help with?"
        },
        faq: {
            quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "More Questions"],
            followUp: "Do you have any other questions?"
        },
        advisor: {
            quickReplies: ["I Want to Enroll", "View Programs", "About Iron Lady", "More Questions"],
            followUp: "Is there anything specific you'd like to discuss with our team?"
        },
        more_questions: {
            quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "About Iron Lady"],
            followUp: "What topic interests you the most?"
        }
    };

    // Direct keyword matching
    for (const key in FAQ_DATABASE) {
        for (const kw of FAQ_DATABASE[key].keywords) {
            if (lower.includes(kw.toLowerCase())) {
                const mapping = responseMap[key] || {
                    quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "More Questions"],
                    followUp: "Is there anything else you'd like to know?"
                };
                return {
                    text: FAQ_DATABASE[key].response,
                    quickReplies: mapping.quickReplies,
                    followUp: mapping.followUp
                };
            }
        }
    }

    // Smart partial matching
    const partialMatches = [
        { patterns: ["about", "tell", "explain", "what is"], key: "about" },
        { patterns: ["service"], key: "services" },
        { patterns: ["program", "course", "training"], key: "programs_overview" },
        { patterns: ["women", "woman", "female", "girl"], key: "women_program" },
        { patterns: ["learn", "study", "education", "develop"], key: "learning_program" },
        { patterns: ["compare", "difference", "which", "vs"], key: "compare" },
        { patterns: ["enroll", "join", "register", "apply", "admission"], key: "enrollment" },
        { patterns: ["start", "begin", "first step", "how to"], key: "process" },
        { patterns: ["skill"], key: "skills" },
        { patterns: ["mentor", "support", "guide", "coach"], key: "mentorship" },
        { patterns: ["benefit", "advantage", "why", "reason"], key: "benefits" },
        { patterns: ["cost", "fee", "price", "pay", "money"], key: "cost" },
        { patterns: ["time", "duration", "long", "schedule"], key: "duration" },
        { patterns: ["success", "result", "outcome", "review"], key: "success" },
        { patterns: ["faq", "question"], key: "faq" },
        { patterns: ["help", "assist"], key: "help" },
        { patterns: ["interested", "want to", "ready"], key: "interest" }
    ];

    for (const match of partialMatches) {
        if (match.patterns.some(p => lower.includes(p))) {
            const mapping = responseMap[match.key] || {
                quickReplies: ["View Programs", "How to Enroll", "Talk to Advisor", "More Questions"],
                followUp: "Is there anything else you'd like to know?"
            };
            return {
                text: FAQ_DATABASE[match.key].response,
                quickReplies: mapping.quickReplies,
                followUp: mapping.followUp
            };
        }
    }

    // Fallback response
    return {
        text: IRON_LADY_CONFIG.fallback_response,
        quickReplies: ["About Iron Lady", "View Programs", "How to Enroll", "Talk to Advisor"],
        followUp: "How can I help you today?"
    };
}

/**
 * Map quick reply text to actual questions
 */
function getQuickReplyQuestion(buttonText) {
    const questionMap = {
        "About Iron Lady": "What is Iron Lady?",
        "View Programs": "What programs do you offer?",
        "How to Enroll": "How can I enroll?",
        "Why Join Us?": "What are the benefits of joining Iron Lady?",
        "Women Empowerment": "Tell me about the Women Empowerment Program",
        "Learning & Development": "Tell me about the Learning and Development program",
        "Compare Programs": "Compare the programs",
        "View Benefits": "What are the benefits of joining Iron Lady?",
        "Talk to Advisor": "I want to talk to an advisor",
        "I Want to Enroll": "I want to enroll",
        "More Questions": "I have more questions",
        "Mentorship Info": "Tell me about mentorship and support",
        "Success Stories": "Tell me about success stories",
        "FAQ": "What are the frequently asked questions?",
        "Go Back": "Tell me about Iron Lady",
        "Start Over": "Hello",
        "Start New Chat": "Hello",
        "No, Thank You": "Goodbye"
    };
    return questionMap[buttonText] || buttonText;
}

// Export for main app
window.IRON_LADY_CONFIG = IRON_LADY_CONFIG;
window.FAQ_DATABASE = FAQ_DATABASE;
window.findResponse = findResponse;
window.getQuickReplyQuestion = getQuickReplyQuestion;

