import './faq.css'
import FaqCard from './faqCard'
import RecentCard from './recentQnCard'

function FaqPage(){
    return(
        <>
            <div id="faqHeader">
                <h1 id="faqTitle">Help Desk</h1>
                <input placeholder="Search..." id="faqSearch"></input>
                <img id="headerLogo" alt="Moringa logo" src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png" />
            </div>
            <div id="faqBody">
                <div id="faqs">
                    <h2 id="FAQs">FAQs</h2>
                    <FaqCard title={"How to convert string to number in Javascript?"} />
                    <FaqCard title={"How to reverse an array in Javascript?"} />
                    <FaqCard title={"How to get unique values in list Python?"} />
                    <FaqCard title={"How to display a list as a string in Python?"} />
                </div>
                <div id="recents">
                    <h2 id="Recents">Recent Questions</h2>
                    <RecentCard username={"Joanne"} title={"How to display two elements side by side in React?"} tags={["ReactJS", "CSS"]} replyCount={2} date={"26/10/23"} />
                    <RecentCard username={"Lewis"} title={"How do I loop through a string in Python?"} tags={["Python"]} replyCount={7} date={"25/10/23"} />
                    <RecentCard username={"Peter"} title={"How to split a string at a specified character in JavaScript"} tags={["JavaScript"]} replyCount={3} date={"23/10/23"} />
                    <RecentCard username={"Griffin"} title={"How can I pick the last letter of every word in an List"} tags={["Python"]} replyCount={1} date={"18/10/23"} />
                </div>
            </div>
        </>
    )
}

export default FaqPage