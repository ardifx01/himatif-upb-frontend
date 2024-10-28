import Button from "@/components/button";

const ActionSection = () => (
  <div className="actionbutton flex-col gap-5 max-md:w-full flex w-1/3">
    <Button text="Profile & History" link="/profile" />
    <Button text="Our Location" link="/profile/location" />
  </div>
);

export default ActionSection;
