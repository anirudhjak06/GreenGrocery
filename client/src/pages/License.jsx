import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
// import styled from "styled-components";
import "./license.css";


const License = () => {
    return (
        <div>
        <Announcement />
        <Navbar />
    
        <body>
        <div class="privacy-page-top">Green Grocery</div>
        <div class="privacy-page-body">
        <div class="privacy-content">
            <div class="privacy-page-title">License</div>
            <div class="privacy-paragraph-heading">Definitions</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">“Licensor” means any person or entity that distributes its Work.“Software” means the original work of authorship made available under this License.“Work” means the Software and any additions to Software that are made available under
                this License. "This Agreement" refers to this license agreement, and terms and conditions specified herein.“Web Template” refers to Green Grocery project, website template, theme, skin, or any copyrightable work licensed under this
                Agreement."Green Grocery" refers to the website www.bookspace.com, its owner, and its successors, or manufacturer of this Template.
            </div>
            <div class="privacy-paragraph-heading">Agreement</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">After reading this agreement carefully, if you (Licensee) do not agree to all of the terms of this agreement, you may not download or use this Web Template. Your download or use of this Web Template indicates your acceptance of This Agreement.
                All updates to the Web Template provided by Green Grocery shall be considered part of the Web Template and subject to the terms of this Agreement. </div>
            <div class="privacy-paragraph-body privacy-paragraph-text">Changes to this Agreement may accompany updates to the Web Template, in which case by installing such update Licensee accepts the terms of the Agreement as changed. If you do not wish to agree to the terms of this Agreement, do not download
                or use this Web Template.</div>
            <div class="privacy-paragraph-heading">Ownership of web template and copyrights</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed"> The Web Template is copyrighted and protected by the laws of the India and other countries, and international treaty provisions. Green Grocery may make changes to the Web Template at any time without notice, but is not obligated to support or
                update the Web Template.
            </div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">No copies of the website are to be made other than as expressly approved by Licensor.</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">No changes to the website or its content should be made by Licensee.
            </div>
            <div class="privacy-paragraph-body privacy-paragraph-text">Except as otherwise expressly provided, Green Grocery grants no express or implied right under its patents, copyrights, trademarks, or other intellectual property rights.</div>
            <div class="privacy-paragraph-heading">Limitations of Liability</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">The Licensee acknowledges and agrees that neither Licensor nor its board members, officers, employees or agents, will be liable for any loss or damage arising out of or resulting from Licensor’s provision of the website under this Agreement,
                or any use of the website by the Licensee or its employees; and Licensee hereby releases Licensor to the fullest extent from any such liability, loss, damage or claim.</div>
            <div class="privacy-paragraph-heading">Redistribution</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">You may not make Web Template, modified or unmodified, available for download from any website.</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">
                <div class="privacy-paragraph-body privacy-paragraph-text-followed">You may not redistribute or resell Web Template in any form.</div>
            </div>
            <div class="privacy-paragraph-body privacy-paragraph-text">You may not link from a website to the www.bookspace.com web page where you have downloaded Web Template. You may not link directly to Web Template download file.</div>
            <div class="privacy-paragraph-heading">Limited Warranty</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">THE WEBSITE IS PROVIDED "AS IS" AND GREEN GROCERY DISCLAIMS ALL WARRANTIES RELATING TO THIS WEB TEMPLATE, WHETHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </div>
            <div class="privacy-paragraph-heading">Termination</div>
            <div class="privacy-paragraph-body privacy-paragraph-text-followed">You agree that monetary damages alone is not an adequate and just relief resulting from any breach of this Agreement, that a court order prohibiting any further breach of this Agreement may be issued to prevent further damages, and that you
                will not oppose any reasonable request for a temporary restraining order, preliminary injunction, or other relief sought by Green Grocery in the event of a breach of this Agreement.</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">This Agreement terminates immediately if you violate any of the terms of this Agreement.</div>
            <div class="privacy-paragraph-heading">Entire Agreement</div>
            <div class="privacy-paragraph-body privacy-paragraph-text">This Agreement contains the entire agreement between you and Green Grocery and supersedes any previous understanding, commitments or agreements, oral or written. Further, this Agreement may not be modified, changed, or otherwise altered in any
                respect except by a written agreement signed by both Parties.</div>
        </div>
        <div class="privacy-policy-nav-menu">
            <ul class="privacy-nav-menu-wrapper">
                <li class='privacy-nav-menu1'><a href="/privacy" class="privacy-policy-link">Privacy Policy</a></li>
                <li class="privacy-nav-menu2"><a href="" class="site-map-link">License</a></li>
            </ul>
        </div>
    </div>
      
    </body>
        
        {/* <Newsletter/> */}
        <Footer/>
      </div>
    
      );
    };
export default License;