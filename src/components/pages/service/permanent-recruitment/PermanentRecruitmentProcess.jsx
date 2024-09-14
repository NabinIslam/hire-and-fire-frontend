"use client";

import { FaFacebook } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const PermanentRecruitmentProcess = () => {
  return (
    <section className="py-[50px]">
      <div className="container min-h-[550px] space-y-8">
        <div className="mx-auto flex h-[56px] max-w-[440px] items-center justify-center rounded-full border-2 border-primary text-2xl font-medium text-primary">
          Permanent Recruitment Process
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[607px]">
          <h2 className="text-center text-5xl font-semibold">
            Our Step-by-Step Permanent Recruitment Process
          </h2>
        </div>
        {/* <div className="flex min-h-[600px] grid-cols-3 flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="flex basis-full flex-col justify-between gap-6 xl:basis-[30%]">
            <BenefitBoxLeft
              icon="/images/benefit/1.png"
              title="Long-term Stability"
              description="Discover dedicated professionals who align with your company's vision, ensuring long-term growth and mutual success."
            />
            <BenefitBoxLeft
              icon="/images/benefit/2.png"
              title="Reduced Turnover"
              description="Build strong, loyal teams committed to your company's goals, fostering long-term retention and lasting organizational success."
            />
            <BenefitBoxLeft
              icon="/images/benefit/1.png"
              title="Cultural Fit"
              description="Ensure candidates align with your company’s core values, fostering a harmonious work culture and driving long-term success."
            />
          </div>
          <div className="relative hidden min-h-[500px] basis-full xl:block xl:basis-[40%]">
            <Image
              className="object-contain"
              src="/images/key-benefits.png"
              fill
            />
          </div>
          <div className="flex basis-full flex-col justify-between gap-6 xl:basis-[30%]">
            <BenefitBoxRight
              icon="/images/benefit/4.png"
              title="Enhanced Productivity"
              description="Hiring the right individuals improves workplace performance, boosts efficiency, and drives higher productivity and success."
            />
            <BenefitBoxRight
              icon="/images/benefit/5.png"
              title="Improved Employee Morale"
              description="Building a team with aligned values creates a supportive, positive work environment that boosts collaboration."
            />
            <BenefitBoxRight
              icon="/images/benefit/6.png"
              title="Cost Efficiency"
              description="Reducing turnover and improving cultural fit lowers recruitment and training costs, saving your company resources in the long run."
            />
          </div>
        </div> */}

        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<FaFacebook />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<FaFacebook />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default PermanentRecruitmentProcess;
