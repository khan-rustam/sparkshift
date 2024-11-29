import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#121212',
  fontFamily: 'Arial, sans-serif',
  headerBgColor: '#8B5CF6',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#8B5CF6',
  botFontColor: '#fff',
  userBubbleColor: '#6D28D9',
  userFontColor: '#fff',
};

const steps = [
  {
    id: '1',
    message: 'Hello! Welcome to SPARKSHIFT. How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Tell me about your services', trigger: '3' },
      { value: 2, label: 'How can I contact you?', trigger: '4' },
      { value: 3, label: 'Pricing information', trigger: '5' },
      { value: 4, label: 'Portfolio examples', trigger: '6' },
    ],
  },
  {
    id: '3',
    message: 'We offer a wide range of services including Web Development, Digital Marketing, Video Editing, Product Photography, and more. Which service would you like to learn more about?',
    trigger: '7',
  },
  {
    id: '4',
    message: 'You can reach us at reachout@sparkshift.digital or call us at +1 (555) 123-4567. Would you like to discuss something specific?',
    trigger: '2',
  },
  {
    id: '5',
    message: 'Our pricing varies based on project requirements. Please contact us for a custom quote tailored to your needs.',
    trigger: '2',
  },
  {
    id: '6',
    message: 'You can view our portfolio on our website. We have successful projects in various categories including web development, digital marketing, and more.',
    trigger: '2',
  },
  {
    id: '7',
    options: [
      { value: 1, label: 'Web Development', trigger: '8' },
      { value: 2, label: 'Digital Marketing', trigger: '9' },
      { value: 3, label: 'Video Editing', trigger: '10' },
      { value: 4, label: 'Back to main menu', trigger: '2' },
    ],
  },
  {
    id: '8',
    message: 'Our web development services include custom websites, web applications, e-commerce solutions, and more. Would you like to discuss a specific project?',
    trigger: '2',
  },
  {
    id: '9',
    message: 'Our digital marketing services include SEO, social media management, content marketing, and PPC campaigns. How can we help grow your online presence?',
    trigger: '2',
  },
  {
    id: '10',
    message: 'We offer professional video editing services including content creation, motion graphics, color grading, and sound design. What type of video project do you have in mind?',
    trigger: '2',
  },
];

const Chatbot = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle="SPARKSHIFT Assistant"
          botAvatar="/logo.png"
          userAvatar="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
        />
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;