import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/Faq.css'; // Import custom CSS

const faqs = [
  { question: "Where is your location, and do you have any branches?", answer: "We are located in XYZ city, and we have branches in ABC and DEF cities." },
  { question: "How many years of experience does Webnox Technologies have?", answer: "Webnox Technologies has over 10 years of experience in the industry." },
  { question: "What are the services you offer?", answer: "We offer a variety of services including web development, SEO, and digital marketing." },
  { question: "What are the state-of-the-art products in your current lineup?", answer: "Our state-of-the-art products include advanced AI tools, cloud solutions, and cybersecurity systems." },
  { question: "What do domain and hosting mean, and is it obligatory to have my website hosted by your services?", answer: "Domain is the address of your website, and hosting is the service that makes your website accessible on the internet. Hosting with us is optional." },
  { question: "How does the website design process function?", answer: "Our design process includes consultation, planning, design, development, testing, and launch phases." },
  { question: "How long can I receive support and correction work after the website is launched?", answer: "We provide support and corrections for up to one year after the website launch." },
  { question: "What categories of websites have you been involved in designing?", answer: "We have designed websites for various categories, including e-commerce, educational, corporate, and healthcare sectors." },
  { question: "Do you do UI/UX design?", answer: "Yes, we offer comprehensive UI/UX design services to enhance user experience." },
  { question: "How long will it take to get a new website?", answer: "The timeline for a new website depends on the complexity of the project, typically ranging from 4 to 12 weeks." },
  { question: "Do you work for abroad clients? If yes, how?", answer: "Yes, we work with clients worldwide through virtual meetings, collaboration tools, and seamless communication." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely, all our websites are designed to be fully responsive and mobile-friendly." },
  { question: "Who writes the content for the site?", answer: "You can provide the content, or we can offer professional content writing services for your site." },
  { question: "What is Digital marketing, SEO and SMO?", answer: "Digital marketing encompasses SEO (Search Engine Optimization) and SMO (Social Media Optimization) to enhance your online presence and reach." },
  { question: "For what size companies do you create web designs?", answer: "We create web designs for businesses of all sizes, from startups to large enterprises." },
  { question: "Do I need to visit your office to discuss?", answer: "Visiting our office is optional. We can discuss all details virtually." },
  { question: "Can you help me with SEO-friendly website?", answer: "Yes, we specialize in creating SEO-friendly websites to improve your search engine rankings." },
  { question: "What makes Webnox Technologies different?", answer: "Our commitment to innovation, quality, and customer satisfaction sets us apart from the competition." },
];

const Faq = () => {
  return (
    <div>
      <div className="background-image">
        <Typography variant="h2" style={{ color: 'black', fontWeight: 'bold' }}>
          Frequently Asked Questions
        </Typography>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <Accordion className="faq-question">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="faq-icon" />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="faq-answer">
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
