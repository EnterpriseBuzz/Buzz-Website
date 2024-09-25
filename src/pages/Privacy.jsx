import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <SEO
        title="Privacy Policies"
        description="Enterprise Buzzer is a pioneering media and technology company, dedicated to propelling businesses forward through innovative advertising, branding, CRM, and marketing tools."
        name="EnterpriceBuzzer"
        type="description"
      />
      <div className="">
        <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-[#4763d1]/50 mx-auto my-10 px-4 py-6 lg:px-10  w-auto">
          <div className="w-full md:w-5/5 mx-auto p-2">
            <h3 className="text-xl font-bold text-gray-800">Privacy Policy</h3>

            <p className="text-sm font-normal text-gray-600 my-3">
              At enterpricebuzzer, accessible from{" "}
              <Link to="/">www.enterpricebuzzer.com</Link>, one of our main priorities
              is the privacy of our visitors. This Privacy Policy document
              contains types of information that is collected and recorded by
              enterprice buzzer and how we use it. If you have additional questions or
              require more information about our Privacy Policy, do not hesitate
              to contact us. This Privacy Policy applies only to our online
              activities and is valid for visitors to our website with regards
              to the information that they shared and/or collect in enterpricebuzzer.
              This policy is not applicable to any information collected offline
              or via channels other than this website.
            </p>

            <div className="shadow-md">
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-one"
                >
                  Consent
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-5">
                    By using our website, you hereby consent to our Privacy
                    Policy and agree to its terms.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-two"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-two"
                >
                  Information we collect
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-3">
                    The personal information that you are asked to provide, and
                    the reasons why you are asked to provide it, will be made
                    clear to you at the point we ask you to provide your
                    personal information.
                  </p>
                  <p className="px-5 pb-3">
                    If you contact us directly, we may receive additional
                    information about you such as your name, email address,
                    phone number, the contents of the message and/or attachments
                    you may send us, and any other information you may choose to
                    provide.
                  </p>
                  <p className="px-5 pb-3">
                    When you register for an Account, we may ask for your
                    contact information, including items such as name, company
                    name, address, email address, and telephone number.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  How we use your information
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 pt-5">
                    We use the information we collect in various ways, including
                    to:
                    <ul className="list-outside list-disc px-5">
                      <li>Provide, operate, and maintain our website</li>
                      <li>Improve, personalize, and expand our website</li>
                      <li>Understand and analyze how you use our website</li>
                      <li>
                        Develop new products, services, features, and
                        functionality
                      </li>
                      <li>
                        Communicate with you, either directly or through one of
                        our partners, including for customer service, to provide
                        you with updates and other information relating to the
                        website, and for marketing and promotional purposes
                      </li>
                      <li>Send you emails</li>
                      <li>Find and prevent fraud</li>
                      <li>Log Files</li>
                    </ul>
                  </p>

                  <p className="px-5 py-3">
                    enterpricebuzzer follows a standard procedure of using log files.
                    These files log visitors when they visit websites. All
                    hosting companies do this and a part of hosting services'
                    analytics. The information collected by log files include
                    internet protocol (IP) addresses, browser type, Internet
                    Service Provider (ISP), date and time stamp, referring/exit
                    pages, and possibly the number of clicks. These are not
                    linked to any information that is personally identifiable.
                    The purpose of the information is for analyzing trends,
                    administering the site, tracking users' movement on the
                    website, and gathering demographic information.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Cookies and Web Beacons4. THE PERSONAL DATA WE COLLECT AS YOU
                  USE OUR SERVICE
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-3">
                    Like any other website, enterpricebuzzer uses "cookies". These
                    cookies are used to store information including visitors'
                    preferences, and the pages on the website that the visitor
                    accessed or visited. The information is used to optimize the
                    users' experience by customizing our web page content based
                    on visitors' browser type and/or other information.
                  </p>
                </div>
              </div>

              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Google DoubleClick DART Cookie
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-3">
                    Google is one of a third-party vendor on our site. It also
                    uses cookies, known as DART cookies, to serve ads to our
                    site visitors based upon their visit to{" "}
                    <Link href="/">www.enterpricebuzzer.com</Link>
                    and other sites on the internet. However, visitors may
                    choose to decline the use of DART cookies by visiting the
                    Google ad and content network Privacy Policy at the
                    following URL –{" "}
                    <Link href=" https://policies.google.com/technologies/ads">
                      https://policies.google.com/technologies/ads
                    </Link>
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Advertising Partners Privacy Policies
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-3">
                    You may consult this list to find the Privacy Policy for
                    each of the advertising partners of enterpricebuzzer
                  </p>
                  <p className="px-5 pb-3">
                    Third-party ad servers or ad networks uses technologies like
                    cookies, JavaScript, or Web Beacons that are used in their
                    respective advertisements and links that appear on FintabNg,
                    which are sent directly to users' browser. They
                    automatically receive your IP address when this occurs.
                    These technologies are used to measure the effectiveness of
                    their advertising campaigns and/or to personalize the
                    advertising content that you see on websites that you visit.
                  </p>
                  <p className="px-5 pb-3">
                    Note that enterpricebuzzer has no access to or control over these
                    cookies that are used by third-party advertisers.
                  </p>
                </div>
              </div>

              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Third Party Privacy Policies
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="p-5">
                    enterpricebuzzer's Privacy Policy does not apply to other
                    advertisers or websites. Thus, we are advising you to
                    consult the respective Privacy Policies of these third-party
                    ad servers for more detailed information. It may include
                    their practices and instructions about how to opt-out of
                    certain options.
                  </p>
                  <p className="px-5">
                    You can choose to disable cookies through your individual
                    browser options. To know more detailed information about
                    cookie management with specific web browsers, it can be
                    found at the browsers' respective websites.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 pb-3">
                    Under the CCPA, among other rights, California consumers
                    have the right to:
                    <ul className="list-outside list-disc px-5">
                      <li>
                        Request that a business that collects a consumer's
                        personal data disclose the categories and specific
                        pieces of personal data that a business has collected
                        about consumers.
                      </li>
                      <li>
                        Request that a business delete any personal data about
                        the consumer that a business has collected.
                      </li>
                      <li>
                        Request that a business that sells a consumer's personal
                        data, not sell the consumer's personal data.
                      </li>
                      <li>
                        If you make a request, we have one month to respond to
                        you. If you would like to exercise any of these rights,
                        please contact us.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  GDPR Data Protection Rights
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 pb-3">
                    We would like to make sure you are fully aware of all of
                    your data protection rights. Every user is entitled to the
                    following:
                    <ul className="list-outside list-disc px-5">
                      <li>
                        The right to access – You have the right to request
                        copies of your personal data. We may charge you a small
                        fee for this service.
                      </li>
                      <li>
                        The right to rectification – You have the right to
                        request that we correct any information you believe is
                        inaccurate. You also have the right to request that we
                        complete the information you believe is incomplete.
                      </li>
                      <li>
                        The right to erasure – You have the right to request
                        that we erase your personal data, under certain
                        conditions.
                      </li>
                      <li>
                        The right to restrict processing – You have the right to
                        request that we restrict the processing of your personal
                        data, under certain conditions.
                      </li>
                      <li>
                        The right to object to processing – You have the right
                        to object to our processing of your personal data, under
                        certain conditions.
                      </li>
                      <li>
                        The right to data portability – You have the right to
                        request that we transfer the data that we have collected
                        to another organization, or directly to you, under
                        certain conditions.
                      </li>
                      <li>
                        If you make a request, we have one month to respond to
                        you. If you would like to exercise any of these rights,
                        please contact us.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Children's Information
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-3">
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to observe, participate in, and/or monitor and
                    guide their online activity.
                  </p>
                  <p className="px-5 py-3">
                    enterpricebuzzer does not knowingly collect any Personal
                    Identifiable Information from children under the age of 13.
                    If you think that your child provided this kind of
                    information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Changes to This Privacy Policy
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="p-5">
                    We may update our Privacy Policy from time to time. Thus, we
                    advise you to review this page periodically for any changes.
                    We will notify you of any changes by posting the new Privacy
                    Policy on this page. These changes are effective
                    immediately, after they are posted on this page.
                  </p>
                  <p className="px-5 py-3">
                    Our Privacy Policy was created with the help of the Privacy
                    Policy Generator.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer uppercase"
                  htmlFor="tab-multi-three"
                >
                  Contact Us
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4763d1] leading-normal">
                  <p className="px-5 py-3">
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to contact us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
