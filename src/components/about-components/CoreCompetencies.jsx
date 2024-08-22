import Image from "next/image";
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
const CoreCompetencies = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 pb-[50px]">
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/communication.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Communication</h6>
          <p className="text-sm font-medium">
            Exceptional ability to convey information clearly and effectively.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/organizational-skills.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Organizational Skills</h6>
          <p className="text-sm font-medium">
            Highly organized in managing recruitment processes and employee
            records.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/attention-to-details.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Attention to Details</h6>
          <p className="text-sm font-medium">
            Meticulous in reviewing resumes and conducting background checks.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/decision-making.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Decision-Making</h6>
          <p className="text-sm font-medium">
            Strong decision-making skills for hiring and termination processes.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/networking.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Networking</h6>
          <p className="text-sm font-medium">
            Building and maintaining professional relationships to source
            potential candidates.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/adaptability.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Adaptability</h6>
          <p className="text-sm font-medium">
            Flexible and able to adapt to changing job market conditions.{" "}
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/leadership.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Leadership</h6>
          <p className="text-sm font-medium">
            Leading recruitment and HR teams to achieve organizational goals.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/time-management.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Time Management</h6>
          <p className="text-sm font-medium">
            Efficiently managing multiple tasks and deadlines.
          </p>
        </div>
      </div>
      <div className="shadow-lg max-w-[460px] border rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl p-5 flex items-center gap-5">
        <Image
          src="/images/core-competencies-icons/problem-solving.png"
          width={80}
          height={80}
        />

        <div>
          <h6 className="text-2xl font-medium">Problem-Solving</h6>
          <p className="text-sm font-medium">
            Quick to identify issues and implement effective solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
