import QA from "./faqDetails"
import './faq.css'
import { useState } from "react";

function QuestionAnswer() {
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = event => {
    //     setIsActive(current => !current);
    // };

    const [questionOpening, setQuestionOpening] = useState<Array<string>>([]);

    function updateOpen(val: string) {
        let newListOpen;
        if (questionOpening.includes(val)) {
            // remove item from array
            // const itemIndex = questionOpening.indexOf(val);
            newListOpen = questionOpening.filter(item => item !== val);
        } else {
            // add item into array
            newListOpen = [...questionOpening, val]
        }
        setQuestionOpening(newListOpen)
    }

    return (
        <div id='ask'>
            <h1 id='title__ask'>Frequently Asked Questions</h1>
            <ul>
                <li>
                    <QA question={'What is Netflix?'}
                        answer={'a1'}
                        isOpen={questionOpening.includes('What is Netflix?')}
                        changeOpenQuestion={updateOpen} />
                    <QA question={'How much does Netflix cost?'}
                        answer={'a2'}
                        isOpen={questionOpening.includes('How much does Netflix cost?')}
                        changeOpenQuestion={updateOpen} />
                    <QA question={'Where can I watch?'}
                        answer={'a3'}
                        isOpen={questionOpening.includes('Where can I watch?')}
                        changeOpenQuestion={updateOpen} />
                    <QA question={'How do I cancel?'}
                        answer={'a4'}
                        isOpen={questionOpening.includes('How do I cancel?')}
                        changeOpenQuestion={updateOpen} />
                    <QA question={'What can I watch on Netflix?'}
                        answer={'a5'}
                        isOpen={questionOpening.includes('What can I watch on Netflix?')}
                        changeOpenQuestion={updateOpen} />
                    <QA question={'Is Netflix good for kids?'}
                        answer={'a6'}
                        isOpen={questionOpening.includes('Is Netflix good for kids?')}
                        changeOpenQuestion={updateOpen} />
                </li>
                {/* <li>
                        <button onClick={handleClick}>
                            <span>What is Netflix?</span>
                        </button>
                        <div id='button__details' className={isActive ? 'active' : ''}>
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                            <br></br>
                            <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={handleClick}>
                            <span>How much does Netflix cost?</span>
                        </button>
                        <div id='button__details' className={isActive ? 'active' : ''}>
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={handleClick}>
                            <span>Where can I watch?</span>
                        </button>
                        <div id='button__details' className={isActive ? 'active' : ''}>
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                            <br></br>
                            <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={handleClick}>
                            <span>How do I cancel?</span>
                        </button>
                        <div id='button__details' className={isActive ? 'active' : ''}>
                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={handleClick}>
                            <span>What can I watch on Netflix?</span>
                        </button>
                        <div id='button__details' className={isActive ? 'active' : ''}>
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </li>
                    <li>
                        <button onClick={handleClick}>
                            <span>Is Netflix good for kids?</span>
                        </button>
                        <div id='button__details' className={isActive ? 'active' : ''}>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                            <br></br>
                            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </li> */}
            </ul>
            <div id='faq__text'>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <input type="text" placeholder="Email address" />
                <button type="submit" id='getStarted'>Get Started &gt;</button>
            </div>
        </div>
    )
}

export default QuestionAnswer