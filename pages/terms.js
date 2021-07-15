import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initGA, logPageView } from '../utils/analytics';

export default class chat extends React.Component {
    componentDidMount() {
        initGA();
        logPageView();
    }
    render() {
        return (
            <div>
                <Header title="TutorBro | Terms of Use" />
                <main>
                    <div className="carrers__container">
                        <section className="carrers">
                            <h1>Terms of Use</h1>
                            <div className="profile">
                                <p><b>THE AGREEMENT:</b> The services (&#8220;Services&#8221;) provided by “Tutorbro” (hereinafter referred to as &#8220;Company&#8221;) are subject to the following Terms &#038; Conditions (hereinafter the &#8220;Agreement&#8221;) through website “Tutorbro.com” (hereinafter referred to as &#8220;Website&#8221;), all parts and sub-parts of which are specifically incorporated by reference here. This Agreement shall govern the use the website “Tutorbro.com”.</p>
                                <p><b>1) DEFINITIONS</b><br />
                                    The parties referred to in this Agreement shall be defined as follows:<br />
                                    a) Company, Us, We: The Company, as the creator, operator, and publisher of the Website, makes the Website, and certain Services on it, available to users. “Tutorbro”, Company, Us, We, Our, Ours and other first-person pronouns will refer to the Company, as well as all employees and affiliates of the Company.<br />
                                    b) You, the User, the Client: You, as the user of the Website, will be referred to throughout this Agreement with second-person pronouns such as You, Your, Yours or as User or Client.<br />
                                    c) Parties: Collectively, the parties to this Agreement (the Company and You) will be referred to as Parties.</p>
                                <p><b>2) ASSENT &#038; ACCEPTANCE</b><br />
                                    By using the Services of the Company (including the Website), You warrant that You have read and reviewed this Agreement and that You agree to be bound by it. If You do not agree to be bound by this Agreement, please leave the Website immediately. The Company only agrees to provide use of this Website and Services to You if You assent to this Agreement.</p>
                                <p><b>3) LICENSE TO USE WEBSITE</b><br />
                                    The Company may provide You with certain information as a result of Your use of the Website or Services. Such information may include, but is not limited to, documentation, data, or information developed by the Company, and other materials which may assist in Your use of the Website or Services (&#8220;Company Materials&#8221;). Subject to this Agreement, the Company grants You a non-exclusive, limited, non-transferable and revocable license to use the Company Materials solely in connection with Your use of the Website and Services. The Company Materials may not be used for any other purpose, and this license terminates upon Your cessation of use of the Website or Services or at the termination of this Agreement.</p>
                                <p><b>4) INTELLECTUAL PROPERTY</b><br />
                                    You agree that the content of the Website and others such information provided by the Company are the property of the Company, including all copyrights, trademarks, trade secrets, patents, and other intellectual property (&#8220;Company IP&#8221;). You agree that the Company owns all right, title and interest in and to the Company IP and that You will not use the Company IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Company IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Company.<br />
                                    a) In order to make the Website and Services available to You, You hereby grant the Company a royalty-free, non-exclusive, worldwide license to copy, display, use, broadcast, transmit and make derivative works of any content You publish, upload, or otherwise make available to the Website (&#8220;Your Content&#8221;). The Company claims no further proprietary rights in Your Content.<br />
                                    b) If You feel that any of Your intellectual property rights have been infringed or otherwise violated by the posting of information or media by another of Our users, please contact Us and let Us know.</p>
                                <p><b>5) USER OBLIGATIONS</b><br />
                                    As a user of the Website or Services, You may be asked to register with Us. When You do so, You will choose a user identifier, which may be Your email address or another term, as well as a password. You may also provide personal information, including, but not limited to, Your name. You are responsible for ensuring the accuracy of this information. This identifying information will enable You to use the Website and Services. You must not share such identifying information with any third party, and if You discover that Your identifying information has been compromised, You agree to notify Us immediately in writing. Email notification will suffice. You are responsible for maintaining the safety and security of Your identifying information as well as keeping Us apprised of any changes to Your identifying information. Providing false or inaccurate information, or using the Website or Services to further fraud or unlawful activity is grounds for immediate termination of this Agreement.</p>
                                <p><b>6) ACCEPTABLE USE</b><br />
                                    You agree not to use the Website or Services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Website or Services in any way that could damage the Website, Services, or general business of the Company. Please read the “Honor Code” available at the Website carefully before using our services.<br />
                                    a)	You further agree not to use the Website or Services:<br />
                                    I.	To use our services to cheat, to present any help provided to you by the tutors as your own work or violation of your school’s, college’s or university’s rules .<br />
                                    II.	To harass, abuse, or threaten others or otherwise violate any person&#8217;s legal rights;<br />
                                    III.	To violate any intellectual property rights of the Company or any third party;<br />
                                    IV.	To upload or otherwise disseminate any computer viruses or other software that may damage the property of another;<br />
                                    V.	To perpetrate any fraud;<br />
                                    VI.	To publish or distribute any obscene or defamatory material;<br />
                                    VII.	To publish or distribute any material that incites violence, hate, or discrimination towards any group;<br />
                                    VIII.	To unlawfully gather information about others.</p>
                                <p><b>7) PRIVACY INFORMATION</b><br />
                                    By using the website and services you agree that you have read the detailed privacy policy available at the “Privacy Policy” page of the website and you agree to it.<br />
                                    Through Your Use of the Website and Services, You may provide Us with certain information. By using the Website or the Services, You authorize the Company to use Your information in the any country where We may operate.<br />
                                    a) Information We May Collect or Receive: When You register for an account, You provide Us with a valid email address and may provide Us with additional information, such as Your name or billing information. Depending on how You use Our Website or Services, We may also receive information from Platforms that You use to access Our Website, or We may receive information through various web technologies, such as cookies.<br />
                                    b) How We Use Information: We use the information gathered from You to ensure Your continued good experience on Our website, including through email communication. We may also track certain aspects of the passive information received to improve Our services and analytics.</p>
                                <p><b>8) DATA LOSS</b><br />
                                    The Company does not accept responsibility for the security of Your account or content. You agree that Your use of the Website or Services is at Your own risk.</p>
                                <p><b>9) INDEMNIFICATION</b><br />
                                    You agree to defend and indemnify the Company and any of its affiliates (if applicable) and hold Us harmless against any and all legal claims and demands, including reasonable attorney&#8217;s fees, which may arise from or relate to Your use or misuse of the Website or Services, Your breach of this Agreement, or Your conduct or actions. You agree that the Company shall be able to select its own legal counsel and may participate in its own defense, if the Company wishes.</p>
                                <p><b>10) THIRD-PARTY LINKS &#038; CONTENT</b><br />
                                    The Company may occasionally post links to third party websites or other services. You agree that you read the policies and terms of use of such third parties before availing their services or content. Company is not responsible or liable for any loss or damage caused as a result of Your use of any third party services linked to from Our Website.</p>
                                <p><b>11) REFUND/Return/Cancellation RELATED INFORMATION:</b><br />
                                    By using the website and services you agree that you have read the detailed Refund/Return/Cancellation policy available at the “Refund Policy”, &#8220;Return Policy&#8221;, &#8220;Cancellation Policy&#8221; page of the website and you agree to it. </p>
                                <p><b>12) MODIFICATION &#038; VARIATION</b><br />
                                    The Company may, from time to time and at any time without notice to You, modify this Agreement. You agree that the Company has the right to modify this Agreement or revise anything contained herein. You further agree that all modifications to this Agreement are in full force and effect immediately upon posting on the Website and that modifications or variations will replace any prior version of this Agreement, unless prior versions are specifically referred to or incorporated into the latest modification or variation of this Agreement.<br />
                                    a) To the extent any part or sub-part of this Agreement is held ineffective or invalid by any court of law, You agree that the prior, effective version of this Agreement shall be considered enforceable and valid to the fullest extent.<br />
                                    b) You agree to routinely monitor this Agreement and refer to the Effective Date posted at the top of this Agreement to note modifications or variations. You further agree to clear Your cache when doing so to avoid accessing a prior version of this Agreement. You agree that Your continued use of the Website after any modifications to this Agreement is a manifestation of Your continued assent to this Agreement.<br />
                                    c) In the event that You fail to monitor any modifications to or variations of this Agreement, You agree that such failure shall be considered an affirmative waiver of Your right to review the modified Agreement.</p>
                                <p><b>13) ENTIRE AGREEMENT</b><br />
                                    This Agreement constitutes the entire understanding between the Parties with respect to any and all use of this Website and Services. This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral, regarding the use of this Website and Services.</p>
                                <p><b>14) SERVICE INTERRUPTIONS</b><br />
                                    The Company may need to interrupt Your access to the Website to perform maintenance or emergency services on a scheduled or unscheduled basis. You agree that Your access to the Website may be affected by unanticipated or unscheduled downtime, for any reason, but that the Company shall have no liability for any damage or loss caused as a result of such downtime.</p>
                                <p><b>15) TERM, TERMINATION &#038; SUSPENSION</b><br />
                                    The Company may terminate this Agreement with You at any time for any reason, with or without cause. The Company specifically reserves the right to terminate this Agreement if You violate any of the terms outlined herein, including, but not limited to, violating honor code available at the Website, violating the intellectual property rights of the Company or a third party, failing to comply with applicable laws or other legal obligations, and/or publishing or distributing illegal material. If You have registered for an account with Us, You may also terminate this Agreement at any time by contacting Us and requesting termination. At the termination of this Agreement, any provisions that would be expected to survive termination by their nature shall remain in full force and effect.</p>
                                <p><b>16) LIMITATION ON LIABILITY</b><br />
                                    The Company is not liable for any damages that may occur to You as a result of Your use of the Website or Services, to the fullest extent permitted by law. This section applies to any and all claims by You, including, but not limited to, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.</p>
                                <p><b>17) GENERAL PROVISIONS:</b></p>
                                <p><b>a) LANGUAGE:</b> All communications made or notices given pursuant to this Agreement shall be in the English language.<br />
                                    <b>b) JURISDICTION, VENUE &#038; CHOICE OF LAW:</b> In case of a dispute between the Parties relating to or arising out of this Agreement, the Parties shall first attempt to resolve the dispute personally and in good faith. Through Your use of the Website or Services, You agree that the laws of the Union of India shall govern any matter or dispute relating to or arising out of this Agreement, as well as any dispute of any kind that may arise between You and the Company, with the exception of its conflict of law provisions. In case any litigation specifically permitted under this Agreement is initiated, the Parties agree to submit to the personal jurisdiction of the High Court of Delhi, Delhi, India. The Parties agree that this choice of law, venue, and jurisdiction provision is not permissive, but rather mandatory in nature. You hereby waive the right to any objection of venue.<br />
                                    <b>c) ASSIGNMENT:</b> This Agreement, or the rights granted hereunder, may not be assigned, sold, leased or otherwise transferred in whole or part by You. Should this Agreement, or the rights granted hereunder, by assigned, sold, leased or otherwise transferred by the Company, the rights and liabilities of the Company will bind and inure to any assignees, administrators, successors, and executors.<br />
                                    <b>d) SEVERABILITY:</b> If any part or sub-part of this Agreement is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible. In such condition, the remainder of this Agreement shall continue in full force.<br />
                                    <b>e) NO WAIVER:</b> In the event that We fail to enforce any provision of this Agreement, this shall not constitute a waiver of any future enforcement of that provision or of any other provision. Waiver of any part or sub-part of this Agreement will not constitute a waiver of any other part or sub-part.<br />
                                    <b>f) HEADINGS FOR CONVENIENCE ONLY:</b> Headings of parts and sub-parts under this Agreement are for convenience and organization, only. Headings shall not affect the meaning of any provisions of this Agreement.<br />
                                    <b>g) NO AGENCY, PARTNERSHIP OR JOINT VENTURE:</b> No agency, partnership, or joint venture has been created between the Parties as a result of this Agreement. No Party has any authority to bind the other to third parties.<br />
                                    <b>g) FORCE MAJEURE:</b> The Company is not liable for any failure to perform due to causes beyond its reasonable control including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature and natural disasters, and other acts which may be due to unforeseen circumstances.</p>


                            </div>


                        </section>
                    </div>
                    <Footer />
                </main>
                <style jsx>
                    {`
            main {
              padding-top: 10px;
            }
            .carrers__container {
              max-width: 900px;
              margin: 0 auto;
            }
            .carrers {
              padding: 20px;
              padding-bottom: 50px;
            }
            h1 {
              text-align: center;
              font-size: 3.1875rem;
              margin: 0;
            }
            ul {
              list-style-type: circle;
              padding: 10px;
              padding-left: 25px;
              margin: 0;
            }
            h4 {
              color: #4183c4;
              margin-bottom: 0;
              font-size: 1.3125rem;
            }
            h4 span {
              font-size: 1.125rem;
              color: #888;
              letter-spacing: 2px;
              line-height: 1.8;
            }
            p {
              margin: 0;
              margin-top: 10px;
            }
            .cta {
              display: flex;
              justify-content: center;
              padding: 20px;
            }
            .btn {
              -webkit-appearance: none;
              cursor: pointer;
              background: #2bc186;
              border: none;
              outline: none;
              padding: 6px 24px;
              border-radius: 17px;
              color: #fff;
              line-height: 24px;
              font-weight: 600;
              font-size: 14px;
              transition: all 0.2s ease;
              margin: 10px 0;
              text-align: center;
              text-decoration: none;
            }
            .btn:hover {
              background: teal;
            }
            @media (max-width: 480px) {
              h1 {
                font-size: 32px;
              }
            }
          `}
                </style>
            </div>
        );
    }
}
