import React, { useState } from "react";
import "./value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import items from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Value = () => {
  return (
    <div className="v-wrapper" id="value">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="img-container">
            <img src="./value.png" alt="value" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
          </span>
          <span className="secondaryText">
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {items.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  key={i}
                  uuid={i}
                  className={`accordion-item ${className}`}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accBtn">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapse")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexcenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;
