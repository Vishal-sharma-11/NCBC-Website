import React from 'react';
import { useNavigate } from "react-router-dom";

const AccessibilityStatement = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);  // Navigate back
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="accessibilitystatement-container">
            <div className="accessibilitystatement-header">
                <h2>Accessibility Statement</h2>
                <div className="accessibilitystatement-actions">
                    <button className="accessibilitystatement-button" onClick={handleBack}>🔙 Back</button>
                    <button className="accessibilitystatement-button" onClick={handlePrint}>🖨️ Print</button>
                </div>
            </div>

            <div className="accessibilitystatement-content">
                <table className="accessibilitystatement-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Statement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>We are committed to ensuring that the National Commission for Backward Classes website is accessible to all users irrespective of device in use, technology, or ability. It has been built with the aim of providing maximum accessibility and usability to its visitors.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>We have put in our best efforts to ensure that all information on this website is accessible to people with disabilities. For example, a user with visual disability can access this website using assistive technologies, such as color themes and text magnifiers. We also aim to be standards compliant and follow principles of usability and universal design, which should help all visitors of this website.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>This website is designed using HTML 4.01 Transitional to meet Guidelines for Indian Government Websites and also adheres to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.0 laid down by the World Wide Web Consortium (W3C). Part of the information in the website is also made available through links to external websites. External websites are maintained by the respective departments who are responsible for making these sites accessible.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>National Commission for Backward Classes is still working towards making its website accessible for persons with disabilities. However, at the current level of development, some of the pages of the website may not be accessible.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccessibilityStatement;
