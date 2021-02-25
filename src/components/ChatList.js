import React from 'react'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#7b2cbf',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#1d4e89',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    bubbleOptionStyle: '#fff'
};

const ChatList = (props) => {
    const config = {
        width: "400px",
        height: "500px",
        floating: true,





    };
    const mychoice = props.userChoice;
    const choiceMade = props.choiceMade;
    console.log("choice status is: ", mychoice)

    const steps0 = [
        {
            id: "Greet",
            message: "Hello, I am MoodBot!",
            trigger: "Ask name"
        },
        {
            id: "Ask name",
            message: "What is your name?",
            botDelay: true,
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            botDelay: true,
            trigger: "Asking welcome"
        },
        {
            id: "Asking welcome",
            message: "Hi {previousValue}! It's great to meet you !!",
            botDelay: true,
            trigger: "Direct to InfoBoard"
        },
        {
            id: "Direct to InfoBoard",
            message: "Have you gone through our InfoBoard? You might find some useful information there.",
            botDelay: true,
            trigger: "Right here"
        },
        {
            id: "Right here",
            message: "I am right here if you need me.",
            end: true
        },


    ]

    const stepsOther = [{
        id: "Greet",
        message: `How can I help you with ${mychoice}?`,
        trigger: "Done"
    },

    {
        id: "Done",
        message: "bye",
        end: true
    },
    ];

    //SLEEP 
    const setDelay = 3000;
    const sleepSteps = [
        {
            id: "sleepSympathy",
            message: "I'm sorry to hear that you're having trouble with sleep.",
            trigger: "sleepSympathy2"
        },
        {
            id: "sleepSympathy2",
            delay: setDelay,
            message: "Sleeping trouble can be very difficult. Could you give me some more detail?",
            trigger: "sleepDetailOptions"
        },
        {
            id: "sleepDetailOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `I can't sleep`, trigger: 'noSleep' },
                { value: 2, label: `I'm always tired`, trigger: 'tired' },
                { value: 3, label: `I'm sleeping too much`, trigger: 'overSleep' },
                { value: 4, label: `I wake up in the night`, trigger: 'waking' },
            ]
        },
        {
            id: "noSleep",
            delay: setDelay,
            message: `It must be frustrating that you can't sleep.`,
            trigger: "noSleepAdvice"
        },
        {
            id: "noSleepAdvice",
            delay: setDelay,
            message: `I can give you some advice that might help. What would you like to know about?`,
            trigger: "noSleepAdviceOptions"
        },
        {
            id: "noSleepAdviceOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Practical advice.`, trigger: 'noSleepPractical' },
                { value: 2, label: `What might be causing it?`, trigger: 'noSleepCause' },
                { value: 3, label: `Where can I learn more?`, trigger: 'noSleepMore' },
                { value: 4, label: `None of these.`, trigger: 'noSleepNone' },
            ]
        },
        {
            id: "noSleepPractical",
            delay: setDelay,
            message: `It might help to do a breathing exercise for ten minutes before bed. Slowly breathe in and out. This can lower stress levels and make sleep easier.`,
            trigger: "noSleepNone"
        },
        {
            id: "noSleepCause",
            delay: setDelay,
            message: `High stress levels can make it hard to sleep.`,
            trigger: "noSleepNone"
        },
        {
            id: "noSleepMore",
            delay: setDelay,
            message: `You can read more about sleep through our InfoBoard.`,
            trigger: "noSleepNone"
        },
        {
            id: "noSleepNone",
            delay: setDelay,
            message: `It might help to know that you're not alone. In the UK, around one-fifth of people have trouble sleeping.`,
            trigger: "noSleepNone2"
        },
        {
            id: "noSleepNone2",
            delay: setDelay,
            message: `Sometimes not sleeping makes people worry about being tired the next day, and the worry makes it harder to sleep.`,
            trigger: "noSleepNone3"
        },
        {
            id: "noSleepNone3",
            delay: setDelay,
            message: `In these cases, it may help to remember that even if you can't sleep, you can rest your mind and body.`,
            trigger: "noSleepNone4"
        },
        {
            id: "noSleepNone4",
            delay: setDelay,
            message: `Realising this may reduce worrying and aid sleep.`,
            trigger: "sleepTalkMoreQuestion"
        },

        {
            id: "tired",
            delay: setDelay,
            message: `It must be frustrating that you're always tired.`,
            trigger: "tiredAdvice"
        },
        {
            id: "tiredAdvice",
            delay: setDelay,
            message: `I can give you some advice that might help. What would you like to know about?`,
            trigger: "tiredAdviceOptions"
        },
        {
            id: "tiredAdviceOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Practical advice.`, trigger: 'tiredPractical' },
                { value: 2, label: `What might be causing it?`, trigger: 'tiredCause' },
                { value: 3, label: `Where can I learn more?`, trigger: 'noSleepMore' },
                { value: 4, label: `None of these.`, trigger: 'noSleepNone' },
            ]
        },
        {
            id: "tiredPractical",
            delay: setDelay,
            message: `Taking time to rest may help. If you're very busy, try to dedicate some time to let yourself rest and recharge each day.`,
            trigger: "noSleepNone"
        },
        {
            id: "tiredCause",
            delay: setDelay,
            message: `Having too much to do can cause you to feel tired all the time.`,
            trigger: "noSleepNone"
        },
        {
            id: "overSleep",
            delay: setDelay,
            message: `It must be difficult to sleep too much. Perhaps I can help.`,
            trigger: "overSleepAdvice"
        },
        {
            id: "overSleepAdvice",
            delay: setDelay,
            message: `I can give you some advice that might help. What would you like to know about?`,
            trigger: "tiredAdviceOptions"
        },
        {
            id: "overSleepAdviceOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Practical advice.`, trigger: 'overSleepPractical' },
                { value: 2, label: `What might be causing it?`, trigger: 'overSleepCause' },
                { value: 3, label: `Where can I learn more?`, trigger: 'noSleepMore' },
                { value: 4, label: `None of these.`, trigger: 'noSleepNone' },
            ]
        },

        {
            id: "overSleepPractical",
            delay: setDelay,
            message: `If you're sleeping too much because of an inconsistent sleep pattern, it may help to wake up and go to bed at the same time every day.`,
            trigger: "noSleepNone"
        },
        {
            id: "overSleepCause",
            delay: setDelay,
            message: `Needing lots of sleep might indicate an underlying health issue, such as anaemia. Just in case, it's a good idea to contact a health professional.`,
            trigger: "noSleepNone"
        },
        {
            id: "waking",
            delay: setDelay,
            message: `It must be difficult to keep waking up in the night. Perhaps I can help.`,
            trigger: "wakingAdvice"
        },
        {
            id: "wakingAdvice",
            delay: setDelay,
            message: `High stress levels can make it hard to sleep through the night.`,
            trigger: "noSleepPractical"
        },
        {
            id: "sleepTalkMoreQuestion",
            delay: setDelay,
            message: `Would you like to tell me more about your problem with sleep? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        {
            id: "talkMoreOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' },
                { value: 3, label: `I have more questions`, trigger: 'sleepSympathy2' },
            ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            delay: setDelay,
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
                { value: 3, label: `I have more questions about sleep`, trigger: 'sleepSympathy2' },
            ]
        },
        {
            id: "finish",
            delay: setDelay,
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    const relaxationSteps = [
        {
            id: "relaxSympathy",
            message: "Tell me what's troubling you.",
            trigger: "relaxDetailOptions"
        },
        {
            id: "relaxDetailOptions",
            options: [
                { value: 1, label: `I am finding it hard to relax`, trigger: 'relaxStruggles' },
                { value: 2, label: `I don't know how to relax!`, trigger: 'relaxIdeas' },

            ]
        },
        {
            id: "relaxStruggles",
            message: `We live in a world that makes it really hard to unwind and often times we are working too hard at relaxing. If your current attempt to relax is not working, maybe its time to learn a different way to relax.`,
            botDelay: true,
            trigger: "offerOptions"
        },
        {
            id: "offerOptions",
            message: `Would you like me to share some tips on how to relax?`,
            botDelay: true,
            trigger: "userConsent"
        },
        {
            id: "userConsent",
            options: [
                { value: 1, label: `Yes`, trigger: 'waysToRelax' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "waysToRelax",
            message: `The key to feeling relaxed is not stressing too much about it. Pick an activity that helps to lower your heartbeat and calm you down. Or learn something that has reputation for calming such as meditation, art etc. The key is to settle your mind and not to stimulate it too much. `,
            botDelay: true,
            trigger: "relaxTalkMoreQuestion"
        },
        {
            id: "relaxIdeas",
            message: `If you are looking for ways to relax, you may find some good ways in the analog world. You can try yoga, going for a run, practicing an instrument, art or any other activities that has reputation for calming you down.`,
            botDelay: true,
            trigger: "offerOptions"
        },

        {
            id: "relaxTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with ${mychoice}? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of relax section
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
            ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ]

    //ANXIETY
    const anxSteps = [
        {
            id: "anxietySympathy",
            message: "I'm sorry that you're having trouble with anxiety. Can you tell me what the problem is in more detail?",
            trigger: "anxietyDetailOptions"
        },
        {
            id: "anxietyDetailOptions",
            options: [
                { value: 1, label: `I get over-anxious about things that worry me`, trigger: 'veryAnxious' },
                { value: 2, label: `I'm always anxious`, trigger: 'alwaysAnxious' },
                { value: 3, label: `I have episodes of extreme anxiety`, trigger: 'panic' },
            ]
        },
        {
            id: "veryAnxious",
            message: `It must be difficult to have such strong anxious feelings. Perhaps I can help.`,
            trigger: "veryAnxiousAdvice"
        },
        {
            id: "veryAnxiousAdvice",
            message: `It's a good idea to seek medical advice for over-anxious feelings. In the meantime, it may help to do a breathing exercise for ten minutes when you find it difficult to cope.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "alwaysAnxious",
            message: `It must be frustrating that you're always feeling anxious. Perhaps I can help.`,
            trigger: "alwaysAnxiousAdvice"
        },
        {
            id: "alwaysAnxiousAdvice",
            message: `Always feeling anxious might indicate an anxiety disorder. It's a good idea to seek medical advice. In the meantime, it may help to exercise for half an hour a day.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "panic",
            message: `It must be very difficult to cope with bouts of intense anxiety. Perhaps I can help.`,
            trigger: "panicAdvice"
        },
        {
            id: "panicAdvice",
            message: `Episodes of intense anxiety may indicate a panic disorder. Although they are often scary, they do not indicate a physical problem. It's a good idea to seek medical advice. In the meantime, it may help to carry with you something you can use to distract yourself during an episode.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "anxiousTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with anxiety? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of anxiety section
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
            ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    //GRATITUDE
    const gratitudeSteps = [
        {
            id: "gratitudeIntro",
            message: "Gratitude is a part of all our lives. But it can also help us feel better.",
            delay: setDelay,
            trigger: "gratitude2"
        },
        {
            id: "gratitude2",
            message: "Expressing gratitude regularly can improve your mood and make you happier.",
            delay: setDelay,
            trigger: "gratitude3",
        },
        {
            id: "gratitude3",
            message: `It can also make you more optimistic and give you a more positive outlook on life.`,
            delay: setDelay,
            trigger: "gratitude4"
        },
        {
            id: "gratitude4",
            message: `Practicing gratitude can help you and those around you feel more connected and loved.`,
            delay: setDelay,
            trigger: "gratitude5"
        },
        {
            id: "gratitude5",
            message: `Gratitude can even improve your physical health, by making you more likely to be active and take care of yourself.`,
            delay: setDelay,
            trigger: "gratitude6"
        },
        {
            id: "gratitude6",
            message: `Sounds great, doesn't it? You might be wondering how you can do all this just by being grateful.`,
            delay: setDelay,
            trigger: "gratitude7"
        },
        {
            id: "gratitude7",
            message: `You can start small and work your way up.`,
            delay: setDelay,
            trigger: "gratitude8"
        },
        {
            id: "gratitude8",
            message: `Here are some ways to start practicing gratitude.`,
            delay: setDelay,
            trigger: "gratitude9"
        },
        {
            id: "gratitude9",
            message: `At the start of the day, think back to yesterday and write down one thing you feel grateful for.`,
            delay: setDelay,
            trigger: "gratitude10"
        },

        {
            id: "gratitude10",
            message: "When you feel frustrated, take a moment and think about something you're grateful for. It may re-energise you.",
            delay: setDelay,
            trigger: "gratitude11"
        },
        {
            id: "gratitude11",
            message: "When you are with family or friends, each of you can share something you're grateful for in general, and one thing about today.",
            delay: setDelay,
            trigger: "gratitude12"
        },
        {
            id: "gratitude12",
            message: "Show the people around you your gratitude by writing them a note.",
            delay: setDelay,
            trigger: "gratitude13"
        },
        {
            id: "gratitude13",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    //URGENT HELP
    const urgentSteps = [
        {
            id: "urgent1",
            message: "I'm sorry that you are in an urgent situation. I must ask you whether you are in immediate danger.",
            trigger: "immediate"
        },
        {
            id: "immediate",
            options: [
                { value: 1, label: `Yes, I am in immediate danger`, trigger: 'danger1' },
                { value: 2, label: `No, I'm not in immediate danger`, trigger: 'safe1' },
            ]
        },
        {
            id: "danger1",
            message: `If you are in immediate danger, please contact the emergency services. In the UK, the number to call is 999.`,
            trigger: "danger2"
        },
        {
            id: "danger2",
            message: `I cannot contact the emergency services on your behalf. While you do that, I can keep you company.`,
            trigger: "advice"
        },
        {
            id: "safe1",
            message: `I'm glad to hear that you aren't in immediate danger. I can provide some advice for you that may help.`,
            trigger: "advice"
        },
        {
            id: "advice",
            message: `Do any of these statements fit with how you're feeling right now?`,
            trigger: "adviceQuestion"
        },
        {
            id: "adviceQuestion",
            options: [
                { value: 1, label: `I feel like I'm a burden to others.`, trigger: 'burden' },
                { value: 2, label: `I'm under so much pressure that I can't cope`, trigger: 'pressure' },
                { value: 3, label: `I'm suffering too much to cope with`, trigger: 'suffering' },
            ]
        },
        {
            id: "burden",
            message: `I'm very sorry to hear that you feel like a burden. You should know that most feelings like this aren't an accurate reflection of reality.`,
            trigger: "burden2"
        },
        {
            id: "burden2",
            message: `So even though you feel like you're a burden, you most likely aren't. It may help to think of people you know who care about you.`,
            trigger: "burden3"
        },
        {
            id: "burden3",
            message: `I'm sure that they miss you when you're not around.`,
            trigger: "question2"
        },
        {
            id: "pressure",
            message: `I'm very sorry to hear that you're under so much pressure. It may help to know that you're not alone.`,
            trigger: "pressure2"
        },
        {
            id: "pressure2",
            message: `Huge numbers of people struggle with feelings of pressure every day.`,
            trigger: "pressure3"
        },
        {
            id: "pressure3",
            message: `You could try imagining whether you'll care about the situation that's difficult now in a year's time. Will anyone care in a hundred years?`,
            trigger: "pressure4"
        },
        {
            id: "pressure4",
            message: `This may provide a useful perspective and relieve the pressure somewhat.`,
            trigger: "question2"
        },
        {
            id: "suffering",
            message: `I'm very sorry to hear that you're suffering so badly.`,
            trigger: "suffering2"
        },
        {
            id: "suffering2",
            message: `Please know that suffering is temporary. Though it may seem impossible to overcome it now, you will feel better.`,
            trigger: "suffering3"
        },
        {
            id: "suffering3",
            message: `Humans have a remarkable tendency to recover from suffering. They also tend to over-estimate how much a problem will trouble them in the future.`,
            trigger: "suffering4"
        },
        {
            id: "suffering4",
            message: `There's no easy fix, but I'm sure that you will feel better sooner than you expect.`,
            trigger: "question2"
        },
        {
            id: "question2",
            message: `Would you like advice on other feelings?`,
            trigger: "question2Options"
        },
        {
            id: "question2Options",
            options: [
                { value: 1, label: `Yes`, trigger: 'adviceQuestion' },
                { value: 2, label: `No`, trigger: 'question3' }
            ],
        },
        {
            id: "question3",
            message: `Would you like to tell me anything else? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
            ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    //MINDFULNESS
    const mindfulnessSteps = [
        {
            id: "encouragement",
            message: "Bravo! You are taking the right steps by considering mindfulness. Is there anything I can help you with?",
            trigger: "mindfulOptions"
        },
        {
            id: "mindfulOptions",
            options: [
                { value: 1, label: `My mind is too wild to tame!`, trigger: 'mindfulStruggles' },
                { value: 2, label: `I don't know how to be mindful!`, trigger: 'mindfulIdeas' },

            ]
        },
        {
            id: "mindfulStruggles",
            message: `Mindful is simply being aware of your thoughts and surroundings. I know it can be hard sometimes as we are constantly bombarded with distractions. `,
            botDelay: true,
            trigger: "offerOptions"
        },
        {
            id: "offerOptions",
            message: `Would you like me to share some tips on how to be mindful?`,
            botDelay: true,
            trigger: "userConsent"
        },
        {
            id: "userConsent",
            options: [
                { value: 1, label: `Yes`, trigger: 'waysToMindfulness' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "waysToMindfulness",
            message: `The key to simply keep practising and be kind to yourself. If you find your mind wandering which is often the case with most beginners, don't be too hard on yourself. Gently bring your mind back to the current moment. There is no end to mindfulness- you can begin it again over and over.`,
            botDelay: true,
            trigger: "mindfulTalkMoreQuestion"
        },
        {
            id: "mindfulIdeas",
            message: `If you are beginner, it might be helpful to watch some videos or attend a course on mindfulness. You can practise mindfulness in any situation, whether you are taking a walk, washing dishes or even dealing with a difficult situation. Whatever you do -be all there!`,
            botDelay: true,
            trigger: "offerOptions"
        },

        {
            id: "mindfulTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with ${mychoice}? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of relax section
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
            ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ]

    // LONELINESS
    const lonelinessSteps = [
        {
            id: "sympathy",
            message: "I am sorry that you are feeling lonely today. Tell me more about it.",
            trigger: "lonelyOptions"
        },
        {
            id: "lonelyOptions",
            options: [
                { value: 1, label: `I wish I had someone to connect to. I have moved to a new place.`, trigger: 'isolated' },
                { value: 2, label: `I am very shy and introverted.`, trigger: 'shy' },

            ]
        },
        {
            id: "isolated",
            message: `I'm sorry that you're having that experience.You say you have moved to a new country.What better way to spend your time than exploring this strange new place you are at, understanding it's culture, understanding their way of life.And you never know you might meet some new interesting people along the way.`,
            botDelay: true,
            trigger: "offerOptions"
        },
        {
            id: "offerOptions",
            message: `Would you like me to share some more tips?`,
            botDelay: true,
            trigger: "userConsent"
        },
        {
            id: "userConsent",
            options: [
                { value: 1, label: `Yes`, trigger: 'moreTips' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "moreTips",
            message: `Give it some time. It's not easy making friends when you have moved to a new place. Begin by joining clubs in your area of interest such as book club, cooking club etc. It is difficult to have to be the one person looking for friends in a large new group, but it can be done. You just need to meet people from various aspects of life in order to create a pool of people. Gradually with time you will make acquaintances, friends, and eventually best friends. `,
            botDelay: true,
            trigger: "lonelyTalkMoreQuestion"
        },
        {
            id: "shy",
            message: `If you are not a very social person it may be hard at first or a little awkward, but after a few times, you will get used to it and start making friends, the most important thing is that you have to start doing something like putting yourself in an environment where you will find people with whom you share a common interest. Besides, as a shy person you more than likely tend to listen more and speak less. People enjoy being heard, so this could be an asset to making friends.
        `,
            botDelay: true,
            trigger: "lonelyTalkMoreQuestion"
        },

        {
            id: "lonelyTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with ${mychoice}? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of relax section
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
            ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ]


    return (
        <ThemeProvider theme={theme} >
            {(!choiceMade) ? (
                <div>
                    <ChatBot headerTitle='Conversation with MoodBot' steps={steps0}  {...config} />
                </div>
            ) : (mychoice === 'sleep') ? (
                <ChatBot headerTitle='MoodBot' steps={sleepSteps} {...config} bubbleOptionStyle={{
                    background: '#0899ba',
                    color: 'white'
                }} />
            ) : (mychoice === 'relaxation') ? (<ChatBot steps={relaxationSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (mychoice === 'anxiety') ? (<ChatBot steps={anxSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (mychoice === 'gratitude') ? (<ChatBot steps={gratitudeSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (mychoice === 'urgent') ? (<ChatBot steps={urgentSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (mychoice === 'mindfulness') ? (<ChatBot steps={mindfulnessSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (mychoice === 'loneliness') ? (<ChatBot steps={lonelinessSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (<ChatBot steps={stepsOther} {...config} />)
            }
        </ThemeProvider>
    )
}

export default ChatList;