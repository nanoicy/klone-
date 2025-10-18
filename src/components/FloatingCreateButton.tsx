import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCreateButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl smooth hover:scale-110 group"
      style={{
        boxShadow: "0 0 30px rgba(70, 232, 255, 0.4), 0 10px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Plus className="w-6 h-6 group-hover:rotate-90 smooth" />
      <span className="sr-only">Create Market</span>
    </Button>
  );
};

export default FloatingCreateButton;
