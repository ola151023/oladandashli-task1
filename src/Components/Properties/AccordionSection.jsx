import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';

function AccordionSection() {
  const [openAccordionOne, setOpenAccordionOne] = useState(true);
  const [openAccordionTwo, setOpenAccordionTwo] = useState(false);
  const [openAccordionThree, setOpenAccordionThree] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <Button
            className="accordion-button"
            onClick={() => setOpenAccordionOne(!openAccordionOne)}
            aria-expanded={openAccordionOne}
            aria-controls="collapseOne"
          >
            Best useful links ?
          </Button>
        </h2>
        <Collapse in={openAccordionOne}>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <Button
            className="accordion-button"
            onClick={() => setOpenAccordionTwo(!openAccordionTwo)}
            aria-expanded={openAccordionTwo}
            aria-controls="collapseTwo"
          >
            How does this work ?
          </Button>
        </h2>
        <Collapse in={openAccordionTwo}>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <Button
            className="accordion-button"
            onClick={() => setOpenAccordionThree(!openAccordionThree)}
            aria-expanded={openAccordionThree}
            aria-controls="collapseThree"
          >
            Why is Villa the best ?
          </Button>
        </h2>
        <Collapse in={openAccordionThree}>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default AccordionSection;
