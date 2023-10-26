import './faq.css'
import FaqCard from './faqCard'

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
            </div>
        </>
    )
}

export default FaqPage