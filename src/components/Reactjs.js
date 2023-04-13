import React from "react";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
} from "@chakra-ui/react";
const content = [
  {
    question: "1. What is React Js ?",
    description:
      "<p>React is a <strong>open source javaScript library</strong> for building single  page user interfaces. It allows us to create <strong>reusable UI components</strong>. Under the hood, react use a Virtual Dom, which will efficiently update and render when every data changes</p><p style='margin-top='10px''}><strong>Current Version:  <strong>18.2.0 </strong></p>",
  },
  {
    question: "2. what is virtural Dom?",
    description: `<p> It's a <strong>lightweight</strong> representation of the actual DOM, which is a tree-like structure that represents the HTML content of a web page.</p>
    <p>When a change occurs, React calculates the difference between the old Virtual DOM and the new Virtual DOM, and updates only the parts that have changed. This is known as "reconciliation" and it can save a lot of time and resources compared to updating the actual DOM every time a change occurs. </p>
     <p>In summary, the Virtual DOM is a key feature of React that helps make it a fast and efficient library for building web applications.</p>
    `,
  },
  {
    question: "3. what is Life Cycle Method?",
    description: `<p>In React, the Life Cycle Methods are methods that are called at different stages during the life cycle of a component. These methods allow you to perform actions at specific points in time, such as when a component is mounted, updated, or unmounted.</p>

   The Life Cycle Methods are divided into three categories:
    <h5 style='font-size:16px; margin:30px 0px 10px 0px;'><strong>Mounting Methods:</strong> These methods are called when an instance of a component is created and inserted into the DOM. The following methods are included in this category: </h5>
    <ul>
    <li> <strong>constructor():</strong> This is called when the component is first initialized, and is used to set the initial state and bind methods to the component. </li>
    <li><strong>render():</strong> This is called to create the virtual DOM representation of the component. </li>
    <li><strong>componentDidMount():</strong> This is called after the component is mounted to the DOM, and is used to perform any necessary setup, such as fetching data from an API. </li>
    </ul>
    
    <h5 style='font-size:16px; margin:30px 0px 10px 0px; '><strong>Updating Methods:</strong> These methods are called when the state or props of a component are changed. The following methods are included in this category:</h5>
    <ul>
    <li><strong>ShouldComponentUpdate():</strong> This is called before the component is updated, and is used to determine whether the update should proceed or not. </li>
    <li><strong>render():</strong> This is called to create the updated virtual DOM representation of the component. </li>
    <li><strong>componentDidUpdate():</strong> This is called after the component has been updated, and is used to perform any necessary cleanup or additional setup. </li>
    </ul>

    <h5 style='font-size:16px; margin:30px 0px 10px 0px;'><strong>Unmounting Methods:</strong>  These methods are called when a component is removed from the DOM. The following method is included in this category:</h5>
    
    <ul>
    <li><strong>componentWillUnmount()</strong>: This is called just before the component is removed from the DOM, and is used to perform any necessary cleanup, such as cancelling any ongoing requests or removing event listeners. </li>
    
    </ul>
        
    
       
        
        
    
       
    
        
        
        
    
       
        
        
        `,
  },
  {
    question: "4. what is Higer Order Component and Uses?",
    description: `<p> A higher-order component (HOC) is an advanced technique in React for reusing component logic.</p> <p>It is a function that takes a component and returns a new component</p>
    <p>The main use of higher-order components is to share common functionality or behavior between different components.</p>     `,
    example: "https://codesandbox.io/s/throbbing-frog-fypnl1",
  },
];
const Reactjs = () => {
  return (
    <Accordion>
      {content.map((item, idx) => {
        return (
          <AccordionItem border="none" key={idx}>
            <AccordionButton
              _hover={{
                background: "gray.100",
                borderRadius: "full",
              }}
              _expanded={{ bg: "gray.300", color: "black", rounded: "full" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize={18}
                py={2}
                px={5}
              >
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={5}>
              <Box
                dangerouslySetInnerHTML={{ __html: item.description }}
                sx={{
                  "& strong": {
                    color: "green.500",
                  },
                  "& code": {
                    backgroundColor: "gray.100",
                    padding: "0.1rem",
                    borderRadius: "0.2rem",
                  },
                }}
              ></Box>
              {item.example ? (
                <Button as="a" target="_blank" mt={5} href={item.example}>
                  See the Example
                </Button>
              ) : (
                ""
              )}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Reactjs;
