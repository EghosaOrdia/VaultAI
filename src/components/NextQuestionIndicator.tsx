import { CornerDownLeft } from "lucide-react";

const NextQuestionIndicator = () => {
  return (
    <div className="flex gap-x-4 items-center justify-end mt-4">
      <span>Hit Enter</span>
      <CornerDownLeft size={18} />
    </div>
  );
};

export default NextQuestionIndicator;
